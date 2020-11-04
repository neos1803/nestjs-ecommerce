import { Body, Controller, Param, Post, Put } from "@nestjs/common";
import { User } from "../../../../domain/user";
import { UserRepository } from "../../../../infrastructure/persistence/repository/user.repository";
import { UpdateUserRequest } from '../update/user.update.request'

@Controller('/user')
export class UpdateUserController {
    constructor(private readonly userRepository: UserRepository) {}

    @Put(':id')
    update(@Body() updateUserRequest: UpdateUserRequest, @Param() id: number): Promise<any> {
        return this.userRepository.update(id, updateUserRequest)
    }
}