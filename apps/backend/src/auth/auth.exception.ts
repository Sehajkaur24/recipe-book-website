import { HttpException, HttpStatus } from "@nestjs/common";


export class UserAlreadyExists extends HttpException {
    constructor() {
        super({
            code: "USER_ALREADY_EXISTS",
            error: "User Already Exists"
        }, HttpStatus.CONFLICT)
    }
}