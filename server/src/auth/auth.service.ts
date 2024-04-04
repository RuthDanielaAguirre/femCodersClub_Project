import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { SignupDto } from './dto/signup.dto';
import { hash } from 'bcrypt';
import * as bcrypt from 'bcrypt';
import { User } from '../user/entities/user.entity';
import { LoginDto } from './dto/login.dto';
import { UserDetails } from 'src/utils/types';
import { InjectRepository } from '@nestjs/typeorm';
import { privateDecrypt } from 'crypto';
import { Repository } from 'typeorm';
import { generateFromEmail } from 'unique-username-generator';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) { }

  generateJwt(payload) {
    return this.jwtService.sign(payload);
  }

  async signIn(user) {
    if (!user) {
      throw new BadRequestException('Unauthenticated');
    }
    const userExist = await this.findUserByEmail(user.userEmail)

    if (!userExist) {
      return this.registerUser(user);
    }
    return this.generateJwt({
      sub: userExist.idUser,
      email: userExist.userEmail,
    });
  }

  async registerUser(user: LoginDto) {
    try {
      const newUser = this.userRepository.create(user);
      newUser.userName = generateFromEmail(user.userEmail, 5)

      await this.userRepository.save(newUser);

      return this.generateJwt({
        sub: newUser.idUser,
        email: newUser.userEmail,
      });


    } catch {
      throw new InternalServerErrorException();
    }
  }

  async findUserByEmail(userEmail) {
    const user = await this.userRepository.findOneBy({ userEmail })

    if (!user) {
      return null;
    }
    return user;

  }

  async findUser(idUser: number) {
    const user = await this.userRepository.findOneBy({ idUser })
    return user;

  }

  async signup({
    userName,
    userLastName,
    userEmail,
    userPassword,
    userTelephone,
    userGender,
  }: SignupDto) {
    const user = await this.userService.findOneByEmail(userEmail);
    if (user !== null) {
      throw new BadRequestException('Este usuario ya existe');
    }

    await this.userService.create({
      userName,
      userLastName,
      userEmail,
      userPassword: await hash(userPassword, 10),
      userGender,
      userTelephone,
    });
    return {
      User,
    };
  }
  async login({ userEmail, userPassword }: LoginDto) {
    const user = await this.userService.findOneByEmail(userEmail);

    if (!user) {
      throw new BadRequestException('El correo electrónico o la contraseña es incorrecta');
    }

    if (!(await bcrypt.compare(userPassword, user.userPassword))) {
      throw new BadRequestException('El correo electrónico o la contraseña es incorrecta');
    }

    const jwtToken = await this.jwtService.signAsync({ id: user.idUser });

    const token = jwtToken;
    const idUser = user.idUser;
    const name = user.userName;
    const lastName = user.userLastName;
    const gender = user.userGender;
    const email = user.userEmail;
    const telephone = user.userTelephone;
    const role = user.userRole;

    return { token, idUser, name, lastName, gender, email, telephone, role };
  }
}
