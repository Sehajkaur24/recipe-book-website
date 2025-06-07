import * as bcrypt from "bcrypt"
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { SignUpDto } from './dto/sign-up.dts';
import { UserAlreadyExists } from "./auth.exception";

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(User)
        private userRepo: Repository<User>
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

}
