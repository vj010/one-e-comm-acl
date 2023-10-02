import { UserRole } from '../enums/user-roles.enum';
import { IsNotEmpty, IsEnum, IsAlphanumeric } from 'class-validator';

export class SignupDto {
  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  password: string;

  @IsEnum(UserRole)
  role: UserRole;
}
