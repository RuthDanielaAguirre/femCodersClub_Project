import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { BadRequestException } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { User } from 'src/user/entities/user.entity';

describe('AuthController', () => {
  let controller: AuthController;
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            login: jest.fn(),
            signup: jest.fn().mockImplementation((user) => {
              return Promise.resolve({
                idUser: 1,
                userRole: 'user',
                ...user,
              });
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('LogIn should return a token', async () => {
    const user = {
      userEmail: 'bj@gmail.com',
      userPassword: '123123',
    };
    const result = {
      jwtToken: 'testing_token',
    };

    jest.spyOn(service, 'login').mockResolvedValue(result);

    expect(await controller.login(user)).toBe(result);
  });

  it('should return an error when emails fails', async () => {
    const user = {
      userEmail: 'bj@gmail.com',
      userPassword: '123123',
    };

    const error = new Error('El correo electrónico es incorrecto');

    jest.spyOn(service, 'login').mockRejectedValue(error);

    try {
      await controller.login(user);
    } catch (error) {
      expect(error.message).toBe('El correo electrónico es incorrecto');
    }
  });

  it('should return an error when password fails', async () => {
    const user = {
      userEmail: 'bj@gmail.com',
      userPassword: '123123',
    };

    const error = new Error('Contraseña incorrecta');

    jest.spyOn(service, 'login').mockRejectedValue(error);

    try {
      await controller.login(user);
    } catch (error) {
      expect(error.message).toBe('Contraseña incorrecta');
    }
  });

  it('should create a new user', async () => {
    const user = {
      userName: 'Belén',
      userLastName: 'Develop',
      userEmail: 'bj@gmail.com',
      userPassword: '123123',
      userGender: 'female',
      userTelephone: 123567890,
    };
    const result: User = {
      idUser: 1,
      userRole: 'user',
      ...user,
    };

    expect(await controller.signup(user)).toMatchObject(result);
  });
});
