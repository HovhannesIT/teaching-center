import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthService } from '../modules/Auth/auth.service';

@Injectable()
export class AccessGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const headers = request.headers;
    const valid = this.authService.checkTokenValidity(headers.auth);

    if (headers.auth && valid) {
      request.user = valid;
      return true;
    }

    return false;
  }
}
