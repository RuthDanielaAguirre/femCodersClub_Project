import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':user_id')
  findSponsorById(@Param('user_id') user_id:number){
      return this.userService.findOneById(user_id);
  }

}
