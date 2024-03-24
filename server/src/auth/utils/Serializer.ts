import { PassportSerializer } from "@nestjs/passport";
import { AuthService } from "../auth.service";
import { Inject, Injectable } from "@nestjs/common";
import { User } from "src/user/entities/user.entity";


@Injectable()
export class SessionSerializer extends PassportSerializer {
    
    serializeUser(user: User, done: Function) {
        console.log('Serialize user')
        done(null, user);
    }

    async deserializeUser(payload: any, done: Function) {
        const user = await this.authservice.findUser(payload.id)
        console.log('Deserialize User')
        return user ? done(null, user) : done(null,null);
    }

    constructor(
        @Inject('AUTH_SERVICE') private readonly authservice: AuthService, 
    ){
        super();
    }
}

