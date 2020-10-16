import { Admin } from "./admin";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from './user'

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    addressName: string

    @Column()
    city: string

    @Column()
    zipcode: string

    @Column()
    address: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne( type => User, user => user.addresses, { nullable: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' } )
    user: User

    @ManyToOne( type => Admin, admin => admin.addressess, { nullable: true, onUpdate: 'CASCADE', onDelete: 'CASCADE' } )
    admin: Admin
}
