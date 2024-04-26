// auth/auth.service.ts

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { RegisterDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(registerDto: RegisterDto): Promise<any> {
    const { email } = registerDto;
    
    const existingUser = await this.userRepository.findOne({ where: { email } });
  
    if (existingUser) {
      throw new Error('User with this email already exists');
    }
  
    const newUser = this.userRepository.create(registerDto);
    await this.userRepository.save(newUser);
    
    // Optionally, you can return the newly created user or any other data.
    return newUser;
  }
}
