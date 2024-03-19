import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  






























  
  async login({ userEmail, userPassword }: LoginDto) {
    const user = await this.userService.findOne({ userEmail });

    if (!user) {
      throw new BadRequestException('El correo electrónico es incorrecto');
    }

    if (!(await bcrypt.compare(userPassword, user.Password))) {
      throw new BadRequestException('Contraseña incorrecta');
    }

    const jwtToken = await this.jwtService.signAsync({ id: user.id });
    return {
      jwtToken, User
    };
  }

}
