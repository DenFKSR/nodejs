import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";
@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;
    @Column()
    description:string;

    @Column({ default: false })
    isCompleted: boolean;








}
