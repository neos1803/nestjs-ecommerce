import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import * as path from 'path';
import {  } from '@nestjs/config';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: process.env.MAILER_HOST,
        port: process.env.MAILER_PORT,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.MAILER_USER, // generated ethereal user
          pass: process.env.MAILER_PASS // generated ethereal password
        },
      },
      template: {
        dir: path.join(process.env.PWD,  '/src/infrastructure/config/email-template'),
        adapter: new HandlebarsAdapter(), 
        options: {
          strict: true,
        },
      },
    }),
  ]
})
export class EmailModule { }