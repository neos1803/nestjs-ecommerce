import { Entity, PrimaryGeneratedColumn, Column, IsNull, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm'
import { Product } from './product'

@Entity()
export class Variation {
    @PrimaryGeneratedColumn() id: number

    @Column() color: string

    @Column() size: string

    @Column() material: string

    @ManyToOne( type => Product, product => product.variation, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    } ) product: Product

    @CreateDateColumn() createdAt: Date

    @UpdateDateColumn() updatedAt: Date
}