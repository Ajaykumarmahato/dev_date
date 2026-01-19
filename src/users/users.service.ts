import { Injectable } from '@nestjs/common';
import { Prisma } from '../generated/prisma/client';
import { PrismaService } from '../prismaSetup/prisma.service';

@Injectable()
export class UsersService {
    constructor(private readonly prismaService: PrismaService){

    }

    async create(data: Prisma.UserCreateInput){
        return this.prismaService.user.create({data});
    }
}
