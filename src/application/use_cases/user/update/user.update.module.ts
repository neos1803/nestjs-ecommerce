import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../../../../domain/user";
import { UserRepository } from "../../../../infrastructure/persistence/repository/user.repository";
import { UpdateUserController } from "./user.update.controller";

@Module({
    // imports: [TypeOrmModule.forFeature([User])],
    controllers: [UpdateUserController],
    providers: [UserRepository],
    // exports: [UserRepository]
})

export class UpdateUserModule{}