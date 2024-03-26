import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { log } from "console";
import { Profile, Strategy } from "passport-google-oauth20";
import { AuthService } from "../auth.service";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor(

        @Inject('AUTH_SERVICE') private readonly authService: AuthService) {
        super({

            clientID: '208630831814-2om7gu45dvrqti9207do7j1kkfosr9bn.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: 'https://femcodersclub-project.onrender.com/auth/google/redirect',
            scope: ['email', 'profile'],
        });
    }
    async validate(
        accessToken: string,
        refreshToken: string,
        profile: Profile,
    ) {
        console.log('Validating user:', profile)
        console.log(accessToken)
        console.log(refreshToken)
        console.log(profile);
        const user = await this.authService.validateUser({
            userEmail: profile.emails[0].value,
            userName: profile.username,
        });
console.log('validate');
console.log(user);

       return user || null;
    }
}