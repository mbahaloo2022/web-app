import { Injectable, UnauthorizedException } from '@nestjs/common';
import { DEMO_TOKEN, TEST_USER } from './auth.constants';
import { LoginDto } from './dto';

@Injectable()
export class AuthService {
  login(credentials: LoginDto) {
    if (
      credentials.username !== TEST_USER.username ||
      credentials.password !== TEST_USER.password
    ) {
      throw new UnauthorizedException('Invalid username or password.');
    }

    return {
      accessToken: DEMO_TOKEN,
      profile: {
        name: TEST_USER.fullName,
        role: 'Psychologist',
      },
    };
  }

  validateToken(token?: string) {
    return token === DEMO_TOKEN;
  }
}
