import * as bcrypt from "bcrypt"
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { SignUpDto } from './dto/sign-up.dts';
import { UserAlreadyExists } from "./auth.exception";
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from "./dto/sign-in.dto";

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(User)
        private userRepo: Repository<User>,
        private jwtService: JwtService
    ) {}

    async registerUser(data: SignUpDto): Promise<User> {
        const existingUser = await this.userRepo.findOneBy({
            email: data.email
        })

        if (existingUser) {
            throw new UserAlreadyExists()
        }

        const user = new User()
        user.email = data.email
        user.password = await bcrypt.hash(data.password, 10)

        return this.userRepo.save(user)
    }

    async signIn(data: SignInDto) {
        const user = await this.validateUser(data.username, data.password)
        if (!user) {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED)
        }
        return {
            token: await this.generateToken(user),
            user: user
        }
    }


    private async generateToken(user: User): Promise<string> {
        return this.jwtService.signAsync({
            id: user.id
        })
    }

    private async validateUser(email: string, password: string): Promise<User | null> {
        const user = await this.userRepo.findOneBy({
            email
        })
        if (!user) {
            return null
        }
        const isPasswordMatched = await bcrypt.compare(password, user.password)
        if (!isPasswordMatched) {
            return null
        }
        return user
    }

}
