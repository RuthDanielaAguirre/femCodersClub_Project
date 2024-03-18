import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from 'src/user/user.service';
import {JwtService } from '@nestjs/jwt'
import { SignupDto } from './dto/signup.dto';
import  * as bcrypt from 'bcrypt'
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  
  constructor(private readonly userService: UserService,
    private readonly jwtService: JwtService){}

async signup ({
  userName,
  userLastName,
  userEmail,
  userPassword,
  userTelephone,
  userGender,
}: SignupDto ) {
  const user = await this.userService.findOneByEmail(userEmail);

  if (user!==null){
    throw new BadRequestException("Este usuario ya existe")
  }

await this.userService.create({
  userName,
  userLastName,
  userEmail,
  userPassword: await bcrypt.hash(userPassword,20),
  userGender,
  userTelephone,
});
return {
  User
}





}








  }

