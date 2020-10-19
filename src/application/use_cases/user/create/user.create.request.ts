import { User } from "../../../../domain/user";
import { hashSync, genSaltSync } from 'bcrypt'

export interface CreateUserRequest {
    firstName: string
    lastName: string
    username: string
    password: string
    email: string
    phoneNumber: string
}

export function CreateUserRequestMapper(createUserRequest: CreateUserRequest): User {
    const user: User = {
        firstName: createUserRequest.username,
        lastName: createUserRequest.lastName,
        username: createUserRequest.username,
        email: createUserRequest.email,
        password: hashSync(createUserRequest.password, genSaltSync(10)),
        phoneNumber: createUserRequest.phoneNumber,
    }

    return user
}