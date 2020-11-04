import { OnQueueActive, OnQueueCompleted, OnQueueFailed, Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { MailerService } from '@nestjs-modules/mailer';

@Processor('mailQueue')
export class Mailer {
  constructor(private readonly mailerService: MailerService ) {}

  @OnQueueActive()
  onActive(job: Job) {
    console.info(`Processing job ${job.id} of type ${job.name}. Data: ${JSON.stringify(job.data)}`)
  }

  @OnQueueCompleted()
  onComplete(job: Job, result: any) {
    console.info(`Completed job ${job.id} of type ${job.name}. Result: ${JSON.stringify(result)}`)
  }

  @OnQueueFailed()
  onError(job: Job<any>, error: any) {
    console.error(`Failed job ${job.id} of type ${job.name}: ${error.message}`, error.stack)
  }

  
  @Process('confirmationEmail')
  handleConfirmationEmail(job: Job) {

    const { email, urlConfirmation } = job.data

    this
      .mailerService
      .sendMail({
        to: email, 
        from: process.env.MAILER_USER, 
        subject: 'Email Verifikasi Aktivasi Akun SIA Universitas Terbuka',
        template: 'RegisterAccountConfirmation',
        context: {
          email : email,
          urlConfirmation: urlConfirmation
        }
      })
      .then(() => { const date_ob = new Date().toISOString(); console.info('send email : ', date_ob) })
      .catch((error) => { console.error(error.toString()); throw error; });

  }
}


