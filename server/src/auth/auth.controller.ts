import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { GoogleAuthGuard } from './utils/Guards';

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
async handleLogin(){

  return {msg:"google authentication"}
}

@Get ('google/redirect')
@UseGuards(GoogleAuthGuard)
async handleRedirect() {

  return {msg: "just redirect"}

}}
