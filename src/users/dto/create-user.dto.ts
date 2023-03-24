import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'example@example.com', description: "User's email" })
  @IsString({ message: 'Email has to be a string value' })
  @IsEmail({}, { message: 'Incorrect email format' })
  readonly email: string;

  @ApiProperty({ example: 'UiXvtE86_0HuJ', description: "User's password" })
  @IsString({ message: 'Password has to be a string value' })
  @Length(4, 12, { message: 'Password must be 4-12 characters long' })
  readonly password: string;
}

