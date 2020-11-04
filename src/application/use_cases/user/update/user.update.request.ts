import { User } from "../../../../domain/user";
import { hashSync, genSaltSync } from 'bcrypt'

export interface UpdateUserRequest {
    firstName: string
    lastName: string
    username: string
    password: string
    email: string
    phoneNumber: string
}

// export function UpdateUserRequestMapper(updateUserRequest: UpdateUserRequest): User {
//     const user: User = {
//         firstName: updateUserRequest.firstName,
//         lastName: updateUserRequest.lastName,
//         username: updateUserRequest.username,
//         email: updateUserRequest.email,
//         password: hashSync(updateUserRequest.password, genSaltSync(10)),
//         phoneNumber: updateUserRequest.phoneNumber,
//     }

//     return user
// }