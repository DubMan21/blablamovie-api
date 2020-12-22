import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUser } from './dto/create-user.dto';
import { GetUser } from './dto/get-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User')
    private userModel: Model<UserDocument>,
  ) {}

  public async findOne(getUserDto: GetUser): Promise<User> {
    try {
      return await this.userModel.findOne(getUserDto);
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  public async save(createUserDto: CreateUser): Promise<User> {
    try {
      const user = new this.userModel(createUserDto);
      return await user.save();
    } catch (e) {
      if (e.code === 11000) {
        throw new BadRequestException(['This email is already in use']);
      }
      throw new InternalServerErrorException(e.message);
    }
  }
}
