import { User } from "../../domain/user";

export interface UserRepositoryInterface {
    create(user: User) : Promise<User>
    // update(id: number, user: User) : object
    // find(id: number) : object
    // show() : object
    // delete(id: number) : object
}