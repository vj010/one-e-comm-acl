import { IsAlphanumeric, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  password: string;
}
