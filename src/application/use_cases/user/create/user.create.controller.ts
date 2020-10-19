import { Body, Controller, Post } from "@nestjs/common";
import { User } from "../../../../domain/user";
import { UserRepository } from "../../../../infrastructure/persistence/repository/user.repository";
import { CreateUserRequestMapper } from "./user.create.request";
import { CreateUserRequest } from './user.create.request'

@Controller('/user')
export class CreateUserController {
    constructor(private readonly userRepository: UserRepository) {}

    @Post()
    create(@Body() createUserRequest: CreateUserRequest): Promise<User> {
        return this.userRepository.create(CreateUserRequestMapper(createUserRequest))
    }
}