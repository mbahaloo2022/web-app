import {
  Controller,
  Get,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { ResumeService } from './resume.service';

@Controller('resume')
export class ResumeController {
  constructor(
    private readonly authService: AuthService,
    private readonly resumeService: ResumeService,
  ) {}

  @Get()
  getResume(@Headers('authorization') authorization?: string) {
    const token = authorization?.replace('Bearer ', '');

    if (!this.authService.validateToken(token)) {
      throw new UnauthorizedException('Missing or invalid access token.');
    }

    return this.resumeService.getResume();
  }
}
