import { User } from "src/domain/user";

export interface UserRepositoryInterface {
    create(user: User) : Promise<User>
    update(id: number, user: User) : Promise<any>
    find(id: number) : Promise<User>
    show() : Promise<any>
    delete(id: number) : Promise<any>
}