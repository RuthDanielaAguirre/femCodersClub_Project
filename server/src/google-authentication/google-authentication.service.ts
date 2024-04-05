import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateGoogleAuthenticationDto } from './dto/create-google-authentication.dto';
import { UpdateGoogleAuthenticationDto } from './dto/update-google-authentication.dto';
import { UserService } from 'src/user/user.service';
import { ConfigService } from '@nestjs/config';
import { google, Auth } from 'googleapis';
import { User } from 'src/user/entities/user.entity';
import { AuthService } from 'src/auth/auth.service';


@Injectable()
export class GoogleAuthenticationService {
  oauthClient: Auth.OAuth2Client;
  // la clase GoogleAuthenticationService define una propiedad oauth de tipo Auth.O-Auth2Client que se utiliza para interactuar con la API de Google OAuth 2.0
constructor(
  private readonly userService: UserService,
  private readonly configService: ConfigService,
  private readonly authService: AuthService,
  // Hay que crear un service para devolver la información del usuario.
){
  const clientID = this.configService.get('208630831814-2om7gu45dvrqti9207do7j1kkfosr9bn.apps.googleusercontent.com')
  const clientSecret = this.configService.get('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')
  // Dentro del constructor, obtenemos las credenciales del cliente de google oauth 2.0 desde el servicio de configuración de configService. Estas credenciales se utilizan para crear una instancia de Auth.OAuth2Client. Las credenciales tienen que estar en variables de entorno.
  this.oauthClient = new google.auth.OAuth2(
    clientID,
    clientSecret
  );
}

async authenticate(token: string) {
  const tokenInfo = await this.oauthClient.getTokenInfo(token);

  const email = tokenInfo.email;

  try{
    const user = await this.userService.findOneByEmail(email);
    return this.handleRegisteredUser(user);
  }catch (error) {
    if(error.status !== 404) {
      throw new error;
    }
    return this.registerUser(token, email)
  }
}

async registerUser(token: string, email: string) {
  const userData = await this.getUserData(token);
  const name = userData.name

  const user = await this.userService.createWithGoogle(email, name);

  return this.handleRegisteredUser(user)
}

async getUserData(token: string) {
  const userInfoClient = google.oauth2('v2').userinfo;
  this.oauthClient.setCredentials({
    access_token: token
  })

  const userInfoResponse = await userInfoClient.get({
    auth: this.oauthClient
  })

  return userInfoResponse.data;
}


async getCookiesForUser(user: User) {
  const accessTokenCookie = this.authService.getCookieWithJwtAccessToken(user.idUser);
  const {
    cookie: refreshTokenCookie,
    token: refreshToken
  } = this.authService.getCookieWithJwtRefreshToken(user.idUser);
 
  await this.userService.setCurrentRefreshToken(refreshToken, user.idUser);
 
  return {
    accessTokenCookie,
    refreshTokenCookie
  }
}
 
async handleRegisteredUser(user: User) {
  // if (!user.isRegisteredWithGoogle) {
  //   throw new UnauthorizedException();
  // } habría que añadir una columna en la tabla user de tipo boolean

  if (!user) {
    throw new UnauthorizedException();
  }
 
  const {
    accessTokenCookie,
    refreshTokenCookie
  } = await this.getCookiesForUser(user);
 
  return {
    accessTokenCookie,
    refreshTokenCookie,
    user
  }
}

}
