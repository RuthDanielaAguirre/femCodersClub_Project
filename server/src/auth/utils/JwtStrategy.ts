import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';


export type JwtPayload = {
    sub: number;
    email: string;
  };

  @Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt'){
constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
){
    const ExtractJwtFromCookie = (req) => {
        let token = null;
        if (req && req.cookies) {
            token = req.cookies['access_token']
        }
return token || ExtractJwt.fromAuthHeaderAsBearerToken()(req);

    };
    super ({
        ignoreExpiration: false,
        secretOrKey: "qwerty",
        jwtFromRequest: ExtractJwtFromCookie,
    });
}
async validate (payload: JwtPayload){
    const user = await this.userRepository.findOneBy({ idUser: payload.sub });

    if (!user) throw new UnauthorizedException ('Please log in to continue')

    return {
        idUser: payload.sub,
        userEmail: payload.email,
    };
}}
