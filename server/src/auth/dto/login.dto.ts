import { IsEmail, IsString, MinLength } from "class-validator";
import { Transform } from 'class-transformer'

export class SignupDto {

    @IsEmail()
    userEmail: string;

    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(6)
    userPassword: string;

}