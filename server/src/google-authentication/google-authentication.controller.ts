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
    const { accesTokenCookie, refreshTokenCookie, user } =
      await this.googleAuthenticationService.authenticate(tokenData.token);

    request.res.setHeader('Set-Cookie', [accesTokenCookie, refreshTokenCookie]);

    return user;
  }
  // Above, we expect the frontend to call the /google-authentication endpoint with the access token.
}
