import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ResumeModule } from './resume/resume.module';

@Module({
  imports: [AuthModule, ResumeModule],
})
export class AppModule {}
