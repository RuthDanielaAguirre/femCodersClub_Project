import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { SignupDto } from './dto/signup.dto';
import * as bcrypt from 'bcrypt';
import { User } from '../user/entities/user.entity';
import { LoginDto } from './dto/login.dto';


@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

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
      userPassword: await bcrypt.hash(userPassword, 10),
      userGender,
      userTelephone,
    });
    return {
      User,
    };
  }
  async login({ userEmail, userPassword }: LoginDto) {
    const user = await this.userService.findOneByEmail(userEmail );

    if (!user) {
      throw new BadRequestException('El correo electrónico o la contraseña es incorrecta');
    }

    if (!(await bcrypt.compare(userPassword, user.userPassword))) {
      throw new BadRequestException('El correo electrónico o la contraseña es incorrecta');
    }

    const jwtToken = await this.jwtService.signAsync({ id: user.idUser });
    return { jwtToken };
  }
}
