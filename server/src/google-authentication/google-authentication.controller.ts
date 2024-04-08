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
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';

import { Request } from 'express';

import TokenVerificationDto from '../google-authentication/dto/tokenVerificationDto.dto';
import { GoogleAuthenticationService } from './google-authentication.service';

// const client = new OAuth2Client(
//   process.env.GOOGLE_CLIENT_ID,
//   process.env.GOOGLE_CLIENT_SECRET,
//  );

@Controller('google-authentication')
@UseInterceptors(ClassSerializerInterceptor)
export class GoogleAuthenticationController {
  constructor(
    private readonly googleAuthenticationService: GoogleAuthenticationService,
  ) {}

  // @Post()
  // async login(@Body('token') token): Promise<any> {
  //   console.log('este es el token: ' + token);

  //   const ticket = await client.verifyIdToken({
  //     idToken: token,
  //     audience: process.env.GOOGLE_CLIENT_ID,
  //   });
  //    // log the ticket payload in the console to see what we have
  //   console.log(ticket.getPayload());
  //    }

  @Post()
  async authenticate(@Body('token') token: string) {
    return this.googleAuthenticationService.auth(token);
  }
  // Arriba, esperamos que el frontend llame al endpoint /google-authentication con el token de acceso
}
