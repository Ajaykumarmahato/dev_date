import { Injectable } from '@nestjs/common';
import { Prisma } from '../generated/prisma/client';
import { PrismaService } from '../prismaSetup/prisma.service';
import { hashPassword } from 'src/utils/helper';

@Injectable()
export class UsersService {
    constructor(private readonly prismaService: PrismaService){

    }

    async create(data: Prisma.UserCreateInput){
        const hashed = await hashPassword(data.password)
        return this.prismaService.user.create({data:{...data, password: hashed}});
    }
}
