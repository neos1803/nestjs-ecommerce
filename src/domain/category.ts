import { Entity, PrimaryGeneratedColumn, Column, IsNull, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm'
import { Product } from './product'

@Entity()
export class Category {
    @PrimaryGeneratedColumn() id: number

    @Column() categoryName: string

    @ManyToOne( type => Product, product => product.category, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    } ) product: Product

    @CreateDateColumn() createdAt: Date

    @UpdateDateColumn() updatedAt: Date
}