import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';

import { Request } from 'express';

import TokenVerificationDto from '../google-authentication/dto/tokenVerificationDto.dto';
import { GoogleAuthenticationService } from './google-authentication.service';

@Controller('google-authentication')
export class GoogleAuthenticationController {
  constructor(
    private readonly googleAuthenticationService: GoogleAuthenticationService,
  ) {}

  @Post()
  async authenticate(
    @Body() tokenData: TokenVerificationDto,
    @Req() request: Request,
  ) {
    const { accessTokenCookie, refreshTokenCookie, user } =
      await this.googleAuthenticationService.authenticate(tokenData.token);

    request.res.setHeader('Set-Cookie', [accessTokenCookie, refreshTokenCookie]);

    return user;
  }
  // Arriba, esperamos que el frontend llame al endpoint /google-authentication con el token de acceso
}
