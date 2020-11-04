import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../../../../domain/user";
import { UserRepository } from "../../../../infrastructure/persistence/repository/user.repository";
import { DeleteUserController } from "./user.delete.controller";


@Module({
    // imports: [TypeOrmModule.forFeature([User])],
    controllers: [DeleteUserController],
    providers: [UserRepository],
    // exports: [UserRepository]
})

export class DeleteUserModule{}