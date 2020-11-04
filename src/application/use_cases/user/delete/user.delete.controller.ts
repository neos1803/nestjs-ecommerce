import { Body, Controller, Delete, Param, Post, Put } from "@nestjs/common";
import { User } from "../../../../domain/user";
import { UserRepository } from "../../../../infrastructure/persistence/repository/user.repository";


@Controller('/user')
export class DeleteUserController {
    constructor(private readonly userRepository: UserRepository) {}

    @Delete(':id')
    update(@Param() id: number): Promise<any> {
        return this.userRepository.delete(id)
    }
}