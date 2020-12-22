import { Type } from 'class-transformer';
import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsDate,
  MinLength,
  MaxLength,
  MaxDate,
} from 'class-validator';

export class CreateUser {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  @MaxDate(new Date())
  birthDate: Date;
}
