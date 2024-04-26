import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'admin@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Qwerty123@' })
  @IsNotEmpty()
  @IsString()
  password: string;
}
export class RegisterDto {
  @ApiProperty({ example: 'Admin champp' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'admin@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Qwerty123@' })
  @IsNotEmpty()
  @IsString()
  password: string;
}