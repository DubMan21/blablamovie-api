import { IsEmail, IsNotEmpty } from 'class-validator';

export class GetUser {
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
