import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOneById(user_id: number) {
    const user = await this.userRepository.find({ where: { idUser: user_id } });
    if(!user){
      throw new HttpException(`No User found`, 404);
    }
    return user;
  }
  
  async findOneByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { userEmail: email } });
  }

  async create(CreateUserDto: CreateUserDto) {
    return this.userRepository.save(CreateUserDto);
  }
}
