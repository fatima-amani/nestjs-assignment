import { Controller,Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private readonly authService: AuthService){}

    @Post('signup')
    signup(
        @Body('username') username:string,
        @Body('email') email:string,
        @Body('phone') phone:number,
        @Body('password') password:string
    ): Promise<string>{
        return this.authService.signup(username,email,phone,password)
    }

    @Post('login')
    login(
        @Body('username') username:string,
        @Body('password') password:string
    ): Promise<string>{
        return this.authService.login(username,password)
    }
}