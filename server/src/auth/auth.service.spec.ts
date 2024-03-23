import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { BadRequestException } from '@nestjs/common';
import { User } from '../user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { SignupDto } from './dto/signup.dto';
import { JwtService } from '@nestjs/jwt'

describe('AuthService', () => {
  let authService: AuthService;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        JwtService,
        {
          provide: UserService,
          useValue: {
            findOneByEmail: jest.fn(),
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    userService = module.get<UserService>(UserService);
  });

  it('should throw BadRequestException if user already exists', async () => {
    const existingUser: User = {
      userEmail: 'existing@example.com',
      userPassword: await bcrypt.hash('password', 10),
      idUser: 1,
      userName: 'Existing',
      userLastName: 'User',
      userRole: 'user',
      userGender: 'male',
      userTelephone: 1234567890,
    };

    jest.spyOn(userService, 'findOneByEmail').mockResolvedValueOnce(existingUser);

    const signupDto: SignupDto = {
      userName: 'John',
      userLastName: 'Doe',
      userEmail: 'existing@example.com',
      userPassword: 'password',
      userTelephone: 666666666,
      userGender: 'female',
    };

    await expect(authService.signup(signupDto)).rejects.toThrow(BadRequestException);
  });

  it('should create a new user', async () => {
    const newUser: User = {
      userEmail: 'new@example.com',
      userPassword: await bcrypt.hash('password', 10),
      idUser: 2,
      userName: 'Jane',
      userLastName: 'Smith',
      userRole: 'user',
      userGender: 'female',
      userTelephone: 9876543210,
    };

    jest.spyOn(userService, 'findOneByEmail').mockResolvedValueOnce(null);
    jest.spyOn(userService, 'create').mockResolvedValueOnce(newUser);

    const signupDto: SignupDto = {
      userName: 'Jane',
      userLastName: 'Smith',
      userEmail: 'new@example.com',
      userPassword: 'password',
      userTelephone: 9876543210,
      userGender: 'female',
    };

    const createdUser = await authService.signup(signupDto);

    expect(createdUser).toEqual({ result: newUser });
  });
});
