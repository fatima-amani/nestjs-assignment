import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService{

    async signup(username:string, email:string,phone:number, password:string): Promise<string>{
        try{
            // check username
            let res = await fetch(`http://localhost:3001/user?username=${username}`);
            let user = await res.json();
            if(user && user.length>0) {
                return "username exists"
            }
            // check email
            res = await fetch(`http://localhost:3001/user?email=${email}`);
            user = await res.json();
            if(user && user.length > 0) {
                return "email exists"
            }
            // add user
            user = {
                username: username,
                email: email,
                phone: phone,
                password:password
            }
            const response = await fetch("http://localhost:3001/user",{
                method: "POST",
                body: JSON.stringify(user),
            })
            return response.json();
        } catch(err){
            return `some error ${err}`
        }
    }

    async login(username: string, password: string): Promise<string> {
        try{
            let res = await fetch(`http://localhost:3001/user?username=${username}`);
            let user = await res.json();
        if(! user) {
            res = await fetch(`localhost:3001/user?email=${username}`);
            user = await res.json();
        }
        if(!user || user.length === 0) {
            return "Incorrect username or email"
        }
        if(user[0].password !== password) {
            return "Incorrect Password"
        }
        return "Login Successful"
        } catch(err) {
            return `some error ${err}`
        }
    }
}