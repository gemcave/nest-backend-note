import { Module } from '@nestjs/common';
import { AdminModule } from '../admin/admin.module';
import { AuthServise } from './service/auth.service';
import { LocalStrategy } from './service/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './controller/auth.controller';

@Module({
  imports: [AdminModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthServise, LocalStrategy],
})
export class AuthModule {}
