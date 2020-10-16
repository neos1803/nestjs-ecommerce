import { Address } from "./address";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Admin {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    phoneNumber: string

    @Column()
    username: string

    @Column()
    password: string

    @Column({ default: 'admin' })
    type: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToMany( type => Address, address => address.admin, {
        cascade: true
    } )
    addressess: Address[]
}
