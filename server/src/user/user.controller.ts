import { Body, Controller, Param, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Put(':user_id')
  updateUser(@Param('user_id') user_id:number, @Body() editUser: UpdateUserDto){
      return this.userService.updateUser(user_id, editUser);
  }

  
}
