import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Discount {
    @PrimaryGeneratedColumn() id: number

    @Column() discountName: string

    @Column() expired: Date

    @Column({ type: "decimal" }) total: number

    @CreateDateColumn() createdAt: Date

    @UpdateDateColumn() updatedAt: Date
}