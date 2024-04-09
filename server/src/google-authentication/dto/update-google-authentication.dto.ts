import { PartialType } from '@nestjs/mapped-types';
import { CreateGoogleAuthenticationDto } from './create-google-authentication.dto';

export class UpdateGoogleAuthenticationDto extends PartialType(CreateGoogleAuthenticationDto) {}
