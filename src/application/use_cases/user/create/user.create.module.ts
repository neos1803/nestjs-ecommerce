import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../../../../domain/user";
import { UserRepository } from "../../../../infrastructure/persistence/repository/user.repository";
import { CreateUserController } from "./user.create.controller";

@Module({
    // imports: [TypeOrmModule.forFeature([User])],
    controllers: [CreateUserController],
    providers: [UserRepository],
    // exports: [UserRepository]
})

export class CreateUserModule{}