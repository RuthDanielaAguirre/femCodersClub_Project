import { IsEmail, IsString, MinLength } from "class-validator";
import { Transform } from 'class-transformer'

export class SignupDto {

    @IsString()
    userName: string;
    
    @IsString()
    userLastName: string;

    userTelephone: number;

    @IsEmail()
    userEmail: string;

    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(6)
    userPassword: string;

    @IsString()
    userGender: string; 
}