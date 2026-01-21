import { Injectable } from '@nestjs/common';
import { Prisma } from '../generated/prisma/client';
import { PrismaService } from '../prismaSetup/prisma.service';
import { hashPassword } from 'src/utils/helper';
import { MailService } from '../mail/mail.service';

@Injectable()
export class UsersService {
    constructor(private readonly prismaService: PrismaService, private readonly mailService: MailService){}

    async create(data: Prisma.UserCreateInput){
        const hashedPassword = await hashPassword(data.password)
        const user = this.prismaService.user.create({data:{...data, password: hashedPassword}});
        const emailVerificationLink = "this is a link"
        await this.mailService.sendEmailVerification(data.email, data.firstName, emailVerificationLink);
        return user;
    }
}
