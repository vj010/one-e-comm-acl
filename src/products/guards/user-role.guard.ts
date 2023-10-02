import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Users } from 'src/authentication/entities/users.entity';
import { UserRole } from 'src/authentication/enums/user-roles.enum';
import { Roles } from '../decorators/role-metadata.decorator';

@Injectable()
export class UserRoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request?.session?.user;
    const allowedRoles = this.reflector.get(Roles, context.getHandler());
    return this.validateRequest(user, allowedRoles);
  }

  validateRequest(user: Users, allowedRoles: UserRole[]): boolean {
    if (!user) return false;
    if (!allowedRoles?.length) return true;

    const userRole = user.role;
    if (!allowedRoles.includes(userRole)) return false;

    return true;
  }
}
