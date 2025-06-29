import { HttpException, HttpStatus } from '@nestjs/common';

export class UserAlreadyExists extends HttpException {
  constructor() {
    super(
      {
        code: 'USER_ALREADY_EXISTS',
        error: 'User Already Exists',
      },
      HttpStatus.CONFLICT,
    );
  }
}

export class InvalidCredentials extends HttpException {
  constructor() {
    super(
      {
        code: 'INVALID_CREDENTIALS',
        error: 'Invalid Credentials',
      },
      HttpStatus.UNAUTHORIZED,
    );
  }
}
