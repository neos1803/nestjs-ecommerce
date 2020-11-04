import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepositoryInterface } from "src/application/infrastructure/repository/user.repository.interface";
import { User } from "src/domain/user";
import { getConnection, getManager, Repository } from "typeorm";


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

    async find(id: number): Promise<User> {
        return await getManager()
            .createQueryBuilder(User, 'user')
            .where("user.id = :id", { id: id })
            .getOne()
    }

    async update(id: number, user: any): Promise<any> {
        try {
            const find: any  = await getManager()
                .createQueryBuilder(User, 'user')
                .where("user.id = :id", { id: id })
                .getOne()
                .catch((err) => {
                    throw new Error(err)
                })
            
            // console.log(find)
            if (!find) {
                throw new Error("Data not found")
            }

            const update: any = await getManager()
                .createQueryBuilder(User, 'user')
                .update(User)
                .set(user)
                .where("user.id = :id", { id: id })
                .execute()
                .catch((error) => {
                    throw new Error(error)
                })
            
            return {
                status: 200,
                message: "OK"
            }
        } catch (error) {
            return error.message
        }
    }

    async delete(id: number): Promise<any> {
        return await getManager()
            .createQueryBuilder(User, 'user')
            .delete()
            .where("user.id = :id", { id: id })
            .execute()
    }

    async show(): Promise<any> {
        return await getManager()
            .createQueryBuilder(User, 'user')
            .getMany()
    }
}