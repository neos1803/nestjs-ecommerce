import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../../../../domain/user";
import { UserRepository } from "../../../../infrastructure/persistence/repository/user.repository";
import { ShowUserController } from "./user.show.controller";

@Module({
    // imports: [TypeOrmModule.forFeature([User])],
    controllers: [ShowUserController],
    providers: [UserRepository],
    // exports: [UserRepository]
})

export class ShowUserModule{}