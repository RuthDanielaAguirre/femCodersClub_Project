import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { ConfigService } from '@nestjs/config';
import { Auth } from 'googleapis';
import { User } from 'src/user/entities/user.entity';
import { AuthService } from 'src/auth/auth.service';
import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
);

@Injectable()
export class GoogleAuthenticationService {
  oauthClient: Auth.OAuth2Client;
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
  ) {

  }

  async auth(token: string) {
    console.log('aquí está el: ' + token);

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    console.log(ticket);
    const { email, given_name, family_name } = ticket.getPayload();
    const userGoogle = {
      userEmail: email,
      userName: given_name,
      userLastName: family_name,
    };

    try {
      const user = await this.userService.getByEmail(userGoogle.userEmail);
      console.log('userfound');

      const idUser = user.idUser;
      const name = user.userName;
      const lastName = user.userLastName;
      const gender = user.userGender;
      const email = user.userEmail;
      const telephone = user.userTelephone;
      const role = user.userRole;
  
      return { token, idUser, name, lastName, gender, email, telephone, role };
    } catch (error) {
      if (error.status !== 404) {
        throw new error();
      }
      return this.registerUser(userGoogle, token);
    }
  }

  async registerUser(
    userGoogle: { userEmail: string; userName: string; userLastName: string },
    token: string,
  ) {
    const user = await this.userService.createWithGoogle(userGoogle, token);

    return user;
  }

  async getCookiesForUser(user: User) {
    const accessTokenCookie = this.authService.getCookieWithJwtAccessToken(
      user.idUser,
    );
    const { cookie: refreshTokenCookie, token: refreshToken } =
      this.authService.getCookieWithJwtRefreshToken(user.idUser);

    await this.userService.setCurrentRefreshToken(refreshToken, user.idUser);

    return {
      accessTokenCookie,
      refreshTokenCookie,
    };
  }

  async handleRegisteredUser(user: User) {
    if (!user.isRegisteredWithGoogle) {
      throw new UnauthorizedException();
    }

    console.log(user);

    const { accessTokenCookie, refreshTokenCookie } =
      await this.getCookiesForUser(user);
    console.log(accessTokenCookie);

    return {
      accessTokenCookie,
      refreshTokenCookie,
      user,
    };
  }
}