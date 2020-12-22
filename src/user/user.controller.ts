import { Body, Controller, Post } from '@nestjs/common';
import { CreateUser } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUser): Promise<User> {
    return await this.userService.save(createUserDto);
  }
}
