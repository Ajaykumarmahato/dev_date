import { Injectable } from '@nestjs/common';
import { Prisma } from '../generated/prisma/client';
import { PrismaService } from '../prismaSetup/prisma.service';
import { hashPassword } from 'src/utils/helper';
import { MailService } from '../mail/mail.service';

@Injectable()
export class UsersService {
    constructor(private readonly prismaService: PrismaService, private readonly mailService: MailService){}

    async create(data: Prisma.UserCreateInput){
        const hashed = await hashPassword(data.password)
        await this.mailService.sendWelcomeEmail("eed@gmail.com", "name", "code");
        return this.prismaService.user.create({data:{...data, password: hashed}});
    }
}
