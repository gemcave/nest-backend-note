import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthServise } from './auth.service';
import { Admin } from 'src/modules/admin/model/admin';
import { AdminRepository } from 'src/modules/admin/service/admin.repository';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private adminRepository: AdminRepository) {
    super({
      usernameField: 'login',
    });
  }
  async validate(login: string, password: string): Promise<any> {
    const admin: Admin = await this.adminRepository.findByLogin(login);

    if (!admin) {
      throw new UnauthorizedException();
    }
    return admin;
  }
}
