import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) {}
    async sendEmailVerification(to: string, name: string, emailVerificationLink: string) {
        await this.mailerService.sendMail({
            to,
            subject: 'Email Verification',
            template: './verifyEmail',
            context: {
                name,
                emailVerificationLink,
            },
    });
  }
}
