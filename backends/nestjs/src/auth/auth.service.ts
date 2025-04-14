import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(username: string, password: string) {
    const principal = await this.usersService.findOneByUsername(username);
    if (!principal) throw new BadRequestException(`User ${username} not found`);
    if (principal.password !== password)
      throw new UnauthorizedException(`Invalid password`);
    return {
      access_token: this.jwtService.sign({
        id: principal.id,
        name: principal.name,
      }),
    };
  }
}
