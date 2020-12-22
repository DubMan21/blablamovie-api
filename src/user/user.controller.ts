import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateUser } from './dto/create-user.dto';
import { GetUser } from './dto/get-user.dto';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/:email')
  async getUser(@Param() getUserDto: GetUser): Promise<User> {
    const user = await this.userService.findOne(getUserDto);
    if (user) {
      return user;
    }
    throw new NotFoundException([`This user does not exist`]);
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUser): Promise<User> {
    return await this.userService.save(createUserDto);
  }
}
