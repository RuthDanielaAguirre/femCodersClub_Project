import { BadRequestException, Injectable } from '@nestjs/common';
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
import { ConfigService } from '@nestjs/config';

export interface TokenPayload {
  userId: number;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  // async validateUser(details: UserDetails) {
  //   console.log('AuthService');
  //   console.log(details);
  //   const user = await this.userRepository.findOneBy({ userEmail: details.userEmail });
  //   if (user) return user;
  //   const newUser = this.userRepository.create(details);
  //   return this.userRepository.save(newUser);

  // }

  async findUser(idUser: number) {
    const user = await this.userRepository.findOneBy({ idUser });
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
      throw new BadRequestException(
        'El correo electrónico o la contraseña es incorrecta',
      );
    }

    if (!(await bcrypt.compare(userPassword, user.userPassword))) {
      throw new BadRequestException(
        'El correo electrónico o la contraseña es incorrecta',
      );
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

  // Todo el código que hay por debajo es para gestionar el token con cookies del login con google

  public getCookieWithJwtAccessToken(userId: number) {
    const payload: TokenPayload = { userId};
    const token = this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_ACCESS_TOKEN_SECRET'),
      expiresIn: `${this.configService.get('JWT_ACCESS_TOKEN_EXPIRATION_TIME')}s`
    });
    return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get('JWT_ACCESS_TOKEN_EXPIRATION_TIME')}`;
  }

  public getCookieWithJwtRefreshToken(userId: number) {
    const payload: TokenPayload = { userId };
    const token = this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_REFRESH_TOKEN_SECRET'),
      expiresIn: `${this.configService.get('JWT_REFRESH_TOKEN_EXPIRATION_TIME')}s`
    });
    const cookie = `Refresh=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get('JWT_REFRESH_TOKEN_EXPIRATION_TIME')}`;
    return {
      cookie,
      token
    }
  }

  // Para gestionar las cookies en el logOut: Cuando un usuario inicia sesión en una palicación web, el servidor envía una o más cookies al navegador del usuario para autentincarlo.Cuando el usuario desea cerrar sesión, el servidor debe invalidar esas cookies para evitar que el usuario acceda a recursos protegidos sin autenticarse nuevamente. Cuando el servidor recibe una solicitud de cierre de sesión, devuelve una respuesta http que incluye estas dos cookies. El navegador del usuario eliminará las cookies anteriores y el usuario quedará desautenticado. Todo este comentario es para eliminar. Solo es para que de entienda cuales son los pasos que se están haciendo.
  public getCookiesForLogOut() {
    return [
      'Authentication=; HttpOnly; Path=/; Max-Age=0',
      'Refresh=; HttpOnly; Path=/; Max-Age=0'
    ];
  }
}
