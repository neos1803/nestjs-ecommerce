import { Entity, PrimaryGeneratedColumn, Column, IsNull, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'
import { Category } from './category'
import { Variation } from './variation'

@Entity()
export class Product {
    @PrimaryGeneratedColumn() id: number

    @Column() name: string

    @Column() price: number

    @Column() weight: number

    @Column() description: string

    @Column() tags: string

    @Column() stock: number
    
    @Column() imageId: string

    @Column() imageName: string

    @OneToMany( type => Category, category => category.product, {
        cascade: true
    } ) category: Category[]

    @OneToMany( type => Variation, variation => variation.product, {
        cascade: true
    } ) variation: Variation[]

    @CreateDateColumn() createdAt: Date

    @UpdateDateColumn() updatedAt: Date
}