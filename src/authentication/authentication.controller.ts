import {
  Body,
  Controller,
  Post,
  Session,
  ValidationPipe,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { SignupDto } from './dtos/signup.dto';
import { LoginDto } from './dtos/signup.dto copy';
import { SessionData as ExpressSession } from 'express-session';
@Controller('authentication')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  @Post('/signup')
  async signup(@Body(ValidationPipe) singupDto: SignupDto) {
    return this.authenticationService.signup(singupDto);
  }

  @Post('/login')
  async login(
    @Body(ValidationPipe) loginDto: LoginDto,
    @Session() session: ExpressSession,
  ) {
    return this.authenticationService.login(loginDto, session);
  }
}
