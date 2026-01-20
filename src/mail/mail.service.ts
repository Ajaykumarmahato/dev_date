import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) {}
    async sendWelcomeEmail(to: string, name: string, code: string) {
        await this.mailerService.sendMail({
            to,
            subject: 'Welcome to our app',
            template: './verifyEmail',
            context: {
                name,
                code,
            },
    });
  }
}
