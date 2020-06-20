import { AdminRepository } from 'src/modules/admin/service/admin.repository';
import { Admin } from 'src/modules/admin/model/admin';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthServise {
  constructor(private adminRepository: AdminRepository) {}

  async validateAdmin(login: string, pass: string): Promise<Admin | null> {
    const admin: Admin = await this.adminRepository.findByLogin(login);

    if (admin && admin.password === pass) {
      const { password, ...secureAdmin } = admin;
      return secureAdmin;
    }
    return null;
  }
}
