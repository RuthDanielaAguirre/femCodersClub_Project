import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { log } from 'console';
import { Profile, Strategy, VerifyCallback } from 'passport-google-oauth20';
import { AuthService } from '../auth.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
    @InjectRepository(User) private userRepository: Repository<User>
  ) {
    super({
      clientID: '208630831814-2om7gu45dvrqti9207do7j1kkfosr9bn.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'https://femcodersclub-project.onrender.com/auth/google/redirect',
      scope: ['email', 'profile'],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: Profile,
    done: VerifyCallback,
  ): Promise<any> {

    const {
      name, emails
    } = profile;

    const user = {
      provider: "google",
      idUser: "id",
      userEmail: emails[0].value,
      userName: `${name.givenName} ${name.familyName}`,
      
    };
    done(null, user);
  }
}
