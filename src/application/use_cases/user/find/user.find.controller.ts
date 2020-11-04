import { Body, Controller, Get, Param } from "@nestjs/common";
import { User } from "../../../../domain/user";
import { UserRepository } from "../../../../infrastructure/persistence/repository/user.repository";

@Controller('/user')
export class FindUserController {
    constructor(private readonly userRepository: UserRepository) {}

    @Get(':id')
    find(@Param() id: number): Promise<User> {
        return this.userRepository.find(id)
    }
}