import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { User } from "src/types";



export class UserDto implements Partial<User>{
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    password?: string;
}

export class CreateUserDto implements Partial<User>{ 
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

}