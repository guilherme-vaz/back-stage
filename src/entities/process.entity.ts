import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Area } from './area.entity';

@Entity()
export class Process {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    description: string;

    @Column('simple-array', { nullable: true })
    tools: string[];

    @Column('simple-array', { nullable: true })
    responsiblePeople: string[];

    @Column('simple-array', { nullable: true })
    documentation: string[];

    @ManyToOne(() => Area, (area) => area.processes)
    area: Area;

    @ManyToOne(() => Process, (process) => process.subprocesses, { nullable: true })
    parent: Process;

    @OneToMany(() => Process, (process) => process.parent)
    subprocesses: Process[];
}
