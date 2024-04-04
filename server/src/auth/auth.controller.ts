import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Res, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { GoogleAuthGuard } from './utils/Guards';
import { Response, Request } from 'express';
import { User } from 'src/user/entities/user.entity';




@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(
    @Body()
    signupDto: SignupDto,
  ) {
    return this.authService.signup(signupDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
  
@Get ('google/login')
@UseGuards(GoogleAuthGuard)
async auth(){
}

@Get ('google/redirect')
@UseGuards(GoogleAuthGuard)
async googleAuthRedirect(@Req() req, @Res() res: Response) {

  const token = await this.authService.signIn(req.user);
  
  res.cookie('access_token',token,{
    maxAge: 60000,
    sameSite: true,
    secure: false,
  });

  return res.status(HttpStatus.OK);
}

@Get('status')
user(@Req() request: Request) {
  console.log(request.user);
  if (request.user) {
    return { msg: 'Authenticated' };
  } else {
    return { msg: 'Not Authenticated' };
  }
}

}
