import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SignupDto } from './dtos/signup.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dtos/signup.dto copy';
import { SessionData as ExpressSession } from 'express-session';
@Injectable()
export class AuthenticationService {
  constructor(
    @InjectRepository(Users)
    private userRepo: Repository<Users>,
  ) {}

  async signup(signupDto: SignupDto) {
    const existingUser = await this.getUserByUserName(signupDto.password);
    if (existingUser) {
      throw new HttpException('username already exists', HttpStatus.CONFLICT);
    }
    await this.userRepo.save(signupDto);
  }

  async getUserByUserName(userName: string): Promise<Users> {
    const user = await this.userRepo.findOne({ where: { userName } });
    return user;
  }

  async login(loginDto: LoginDto, session: ExpressSession) {
    const user = await this.userRepo.findOne({
      where: {
        userName: loginDto.userName,
        password: loginDto.password,
      },
    });
    if (!user)
      throw new HttpException('wrong credentials', HttpStatus.UNAUTHORIZED);
    session.user = user;
  }
}
