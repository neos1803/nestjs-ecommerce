import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { CreateUserModule } from 'src/application/use_cases/user/create/user.create.module';
import { FindUserModule } from 'src/application/use_cases/user/find/user.find.module';
import { UpdateUserModule } from 'src/application/use_cases/user/update/user.update.module';
import { DeleteUserModule } from 'src/application/use_cases/user/delete/user.delete.module';
import { ShowUserModule } from 'src/application/use_cases/user/show/user.show.module';
// import { CommonModule } from 'src/application/use_cases/common/common.module';
// import { RegistrationModule } from 'src/application/use_cases/v1/student_lead/registration/registration.module';
// import { StudentDetailModule } from 'src/application/use_cases/v1/student/detail/detail.module';
// import { RegistrationStudentModule } from 'src/application/use_cases/v1/student/registration/registration.module';
// import { UpdateStudentModule } from 'src/application/use_cases/v1/student/update/update.module';

export class ApiBlueprintDocs {
  private app: INestApplication;

  constructor(app: INestApplication) {
    this.app = app;
  }

  public setupCommon() {
    const options = new DocumentBuilder()
      .setTitle('Mahasiswa Microservice API Blueprint')
      .setDescription(
        'Complete list of all available API request of Mahasiswa Microservice, available api list:\n' +
          '* [API V1](v1)',
      )
      .setVersion('1.0.0')
      .build();
    const document = SwaggerModule.createDocument(this.app, options, {
      // include: [CommonModule],
    });
    SwaggerModule.setup('api-blueprint', this.app, document);
  }

  public setupV1() {
    const options = new DocumentBuilder()
      .setTitle('Ecommerce API Blueprint')
      .setDescription(
        'Complete list of all available API request of Ecommerce Service',
      )
      .setVersion('1.0.0')
      .build();
    const document = SwaggerModule.createDocument(this.app, options, {
      include: [
        CreateUserModule,
        FindUserModule,
        UpdateUserModule,
        DeleteUserModule,
        ShowUserModule
        // RegistrationModule,
        // StudentDetailModule,
        // RegistrationStudentModule,
        // UpdateStudentModule,
      ],
    });
    SwaggerModule.setup('api-blueprint/v1', this.app, document);
  }
}
