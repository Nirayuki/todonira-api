import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { CreateUserDto } from "src/dtos";
import { UserService } from "src/services";
import { User } from "src/types";

@Controller("user")
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    async getAll(): Promise<User[]> {
        // Fetch users from your database
        return await this.userService.getAll();
    }

    @Get(":id")
    async get(@Param('id') id: string): Promise<User> {
        return await this.userService.get(id);
    }

    @Post()
    async createUser(@Body() userCreateDto: CreateUserDto) {
        // Create a new user in your database
        await this.userService.createUser({...userCreateDto, createdAt: new Date()});
    }
}