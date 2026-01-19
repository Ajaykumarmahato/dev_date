import { Body, Controller, Post } from '@nestjs/common';
import { Prisma } from 'src/generated/prisma/client';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService){}
    @Post()
    create(@Body() data: Prisma.UserCreateInput){
        return this.userService.create(data)
    }
}
