import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/application/app.module';
import { ApiBlueprintDocs } from 'src/infrastructure/config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const apiBlueprint = new ApiBlueprintDocs(app);
  apiBlueprint.setupCommon();
  apiBlueprint.setupV1();

  await app.listen(process.env.PORT || 3000);
  console.log(`App listening on http://localhost:${process.env.PORT}`);
}
bootstrap();
