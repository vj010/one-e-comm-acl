import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { SignupDto } from './dtos/signup.dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  @Post('/signup')
  async signup(@Body(ValidationPipe) singupDto: SignupDto) {
    return this.authenticationService.signup(singupDto);
  }

  @Post('/login')
  async login() {}
}
