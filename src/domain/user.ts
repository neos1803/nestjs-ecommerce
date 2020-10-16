import { Entity, PrimaryGeneratedColumn, Column, IsNull, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'
import { IsString } from 'class-validator'
import { Address } from './address'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @IsString()
    firstName: string

    @Column()
    @IsString()
    lastName: string

    @Column()
    @IsString()
    email: string

    @Column()
    @IsString()
    phoneNumber: string

    @Column()
    @IsString()
    username: string

    @Column()
    @IsString()
    password: string
    
    @Column({ default: 'user' })
    type: string
    
    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToMany( type => Address, address => address.user, {
        cascade: true
    } )
    addresses: Address[]
}