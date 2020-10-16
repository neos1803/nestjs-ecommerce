import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppController } from '../infrastructure/rest/controllers/app.controller';
// import { AppService } from '../infrastructure/rest/services/app.service';
// import { UserModule } from '../infrastructure/user.module';
// import { AddressModule } from '../infrastructure/address.module';
// import { AdminModule } from '../infrastructure/admin.module';
// import { DiscountModule } from '../infrastructure/discount.module';
// import { ProductModule } from '../infrastructure/product.module';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ConfigModule.forRoot(),
    // UserModule,
    // AddressModule,
    // AdminModule,
    // DiscountModule,
    // ProductModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
