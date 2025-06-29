import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const token = request.headers.authorization?.split(' ')[1];
    if (!token) return false;
    const user = await this.validateToken(token);
    if (!user) return false;
    request['user'] = user;
    return true;
  }

  private async validateToken(token: string): Promise<User | null> {
    try {
      const payload =
        await this.jwtService.verifyAsync<Record<string, string>>(token);
      const user = await this.userRepo.findOneBy({
        id: parseInt(payload.id),
      });
      if (!user) return null;
      return user;
    } catch {
      return null;
    }
  }
}
