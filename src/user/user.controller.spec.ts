import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateUser } from './dto/create-user.dto';
import { GetUser } from './dto/get-user.dto';
import { User } from './schemas/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  const userModel = jest.fn(() => ({
    save: jest.fn(),
    findOne: jest.fn(),
  }));

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        {
          provide: getModelToken('User'),
          useValue: userModel,
        },
      ],
    }).compile();

    userService = app.get<UserService>(UserService);
    userController = app.get<UserController>(UserController);
  });

  describe('createUser', () => {
    it('should return an user object', async () => {
      const createUserDto: CreateUser = {
        username: 'alema',
        email: 'alexmarechal00@gmail.com',
        birthDate: new Date('2000-03-12'),
      };
      const result: User = {
        createdAt: new Date(),
        choices: [],
        username: 'alema',
        email: 'alexmarechal00@gmail.com',
        birthDate: new Date('2000-03-12'),
      };
      jest
        .spyOn(userService, 'save')
        .mockImplementation(async () => await result);
      expect(await userController.createUser(createUserDto)).toBe(result);
    });
  });

  describe('getUser', () => {
    it('should return an user object', async () => {
      const getUserDto: GetUser = {
        email: 'alexmarechal00@gmail.com',
      };
      const result: User = {
        createdAt: new Date(),
        choices: [],
        username: 'alema',
        email: 'alexmarechal00@gmail.com',
        birthDate: new Date('2000-03-12'),
      };
      jest
        .spyOn(userService, 'findOne')
        .mockImplementation(async () => await result);
      expect(await userController.getUser(getUserDto)).toBe(result);
    });
  });
});
