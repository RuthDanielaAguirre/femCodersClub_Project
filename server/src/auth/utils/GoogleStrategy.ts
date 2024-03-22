import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { log } from "console";
import { Profile, Strategy } from "passport-google-oauth20";
import { AuthService } from "../auth.service";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
constructor(private readonly authService: AuthService){
    super({
        clientID: '208630831814-2om7gu45dvrqti9207do7j1kkfosr9bn.apps.googleusercontent.com',
        clientSecret:'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',
        callbackURL:'http://localhost:3000/auth/google/redirect',
        scope:['email', 'profile'],
    });
    
}
 async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
 ){
    console.log('Validating user:', profile)

console.log(accessToken)
console.log(refreshToken)
console.log(profile)


 }}