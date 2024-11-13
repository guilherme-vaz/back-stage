import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Process } from './process.entity';

@Entity()
export class Area {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Process, (process) => process.area)
    processes: Process[];
}
