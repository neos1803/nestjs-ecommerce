import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from 'src/domain/user';
import { Address } from 'src/domain/address';
import { Admin } from 'src/domain/admin';

// import { Auth } from 'src/domain/auth.domain';

const dbConfig = (configEnv: ConfigService): TypeOrmModuleOptions => {
  return {
    type: 'mysql',
    host: configEnv.get<string>('TYPEORM_HOST'),
    port: configEnv.get<number>('TYPEORM_PORT'),
    database: configEnv.get<string>('TYPEORM_DATABASE'),
    password: configEnv.get<string>('TYPEORM_PASSWORD'),
    username: configEnv.get<string>('TYPEORM_USERNAME'),
    entities: [User, Address, Admin],
  };
};

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => {
        return dbConfig(config);
      },
    }),
  ],
})
export class DatabaseModule {}
