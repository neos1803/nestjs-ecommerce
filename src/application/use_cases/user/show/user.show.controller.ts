import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { User } from "../../../../domain/user";
import { UserRepository } from "../../../../infrastructure/persistence/repository/user.repository";


@Controller('/user')
export class ShowUserController {
    constructor(private readonly userRepository: UserRepository) {}

    @Get()
    show(): Promise<any> {
        return this.userRepository.show()
    }
}