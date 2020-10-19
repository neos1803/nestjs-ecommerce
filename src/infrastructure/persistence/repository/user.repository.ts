import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { getConnection, getManager, Repository } from "typeorm";
import { UserRepositoryInterface } from "../../../application/repository/user.repository.interface";
import { User } from "../../../domain/user";

@Injectable()
export class UserRepository implements UserRepositoryInterface {
    // constructor(
    //     @InjectRepository(User) private userRepository: Repository<User>,
    // ) {}

    async create(user: User): Promise<User> {
        const create = await getManager()
            .createQueryBuilder(User, 'user')
            .insert()
            .values([{
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                username: user.username,
                password: user.password,
                phoneNumber: user.phoneNumber
            }])
            .execute()
        return await getManager()
            .createQueryBuilder(User, 'user')
            .where("user.id = :id", { id: create.identifiers[0].id })
            .getOne()
        // this.userRepository.save(user)
        //     .then((res) => {
        //         console.log('Ok');
        //     })
        //     .catch((error) => {
        //         console.log(error.message);
        //     })
    }
}