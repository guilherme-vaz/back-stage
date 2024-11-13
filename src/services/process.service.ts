import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Process } from 'src/entities/process.entity';
import { Area } from 'src/entities/area.entity';
import { CreateProcessDto } from '../dto/process/create-process.dto';
import { UpdateProcessDto } from '../dto/process/update-process.dto';

@Injectable()
export class ProcessesService {
    constructor(
        @InjectRepository(Process)
        private processesRepository: Repository<Process>,

        @InjectRepository(Area)
        private areasRepository: Repository<Area>,
    ) { }

    async create(createProcessDto: CreateProcessDto): Promise<any> {
        const area = await this.areasRepository.findOne({ where: { id: createProcessDto.areaId } });
        if (!area) {
            throw new NotFoundException(`Area with ID ${createProcessDto.areaId} not found`);
        }

        // const process = this.processesRepository.create({ ...createProcessDto, area });
        // return await this.processesRepository.save(process);
        return console.log(createProcessDto)
    }

    async findAll(): Promise<Process[]> {
        return await this.processesRepository.find({ relations: ['area'] });
    }

    async findOne(id: number): Promise<Process> {
        const process = await this.processesRepository.findOne({ where: { id }, relations: ['area'] });
        if (!process) {
            throw new NotFoundException(`Process with ID ${id} not found`);
        }
        return process;
    }

    async update(id: number, updateProcessDto: UpdateProcessDto): Promise<Process> {
        const process = await this.findOne(id);

        if (updateProcessDto.areaId) {
            const area = await this.areasRepository.findOne({ where: { id: updateProcessDto.areaId } });
            if (!area) {
                throw new NotFoundException(`Area with ID ${updateProcessDto.areaId} not found`);
            }
            process.area = area;
        }

        Object.assign(process, updateProcessDto);
        return await this.processesRepository.save(process);
    }

    async remove(id: number): Promise<void> {
        const process = await this.findOne(id);
        await this.processesRepository.remove(process);
    }
}
