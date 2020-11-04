import { Module } from '@nestjs/common';
// import { EmailModule }  from 'src/infrastructure/config/email.config'
import { DatabaseModule } from 'src/infrastructure/config/database.config';
import { CreateUserModule } from './use_cases/user/create/user.create.module';
import { DeleteUserModule } from './use_cases/user/delete/user.delete.module';
import { FindUserModule } from './use_cases/user/find/user.find.module';
import { ShowUserModule } from './use_cases/user/show/user.show.module';
import { UpdateUserModule } from './use_cases/user/update/user.update.module'

@Module({
  imports: [
    DatabaseModule,
    CreateUserModule,
    FindUserModule,
    UpdateUserModule,
    DeleteUserModule,
    ShowUserModule
  ],
})
export class AppModule {}
