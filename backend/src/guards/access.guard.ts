import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthService } from '../modules/Auth/auth.service';

@Injectable()
export class AccessGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const headers = request.headers;

    const valid = this.authService.checkTokenValidity(headers.auth);

    const tokenInDB = await this.authService.isTokenExistInDB(headers.token);
    if (headers.auth && valid && tokenInDB) {
      request.user = valid;
      return true;
    }

    return false;
  }
}
