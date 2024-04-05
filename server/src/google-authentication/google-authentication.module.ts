import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { GoogleAuthenticationController } from './google-authentication.controller';
import { GoogleAuthenticationService } from './google-authentication.service';
import { UserModule } from 'src/user/user.module';


@Module({
  imports: [ConfigModule, UserModule],
  providers: [GoogleAuthenticationService],
  controllers: [GoogleAuthenticationController],
  exports: []
})
export class GoogleAuthenticationModule {}
