import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../../../../domain/user";
import { UserRepository } from "../../../../infrastructure/persistence/repository/user.repository";
import { FindUserController } from "./user.find.controller";

@Module({
    // imports: [TypeOrmModule.forFeature([User])],
    controllers: [FindUserController],
    providers: [UserRepository],
    // exports: [UserRepository]
})

export class FindUserModule{}