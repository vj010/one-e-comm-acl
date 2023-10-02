import { Reflector } from '@nestjs/core';
import { UserRole } from 'src/authentication/enums/user-roles.enum';

export const Roles = Reflector.createDecorator<UserRole[]>();
