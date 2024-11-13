import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Area } from 'src/entities/area.entity';
import { CreateAreaDto } from '../dto/area/create-area.dto';
import { UpdateAreaDto } from '../dto/area/update-area.dto';

@Injectable()
export class AreasService {
    constructor(
        @InjectRepository(Area)
        private areasRepository: Repository<Area>,
    ) { }

    async create(createAreaDto: CreateAreaDto): Promise<Area> {
        const area = this.areasRepository.create(createAreaDto);
        return await this.areasRepository.save(area);
    }

    async findAll(): Promise<Area[]> {
        return await this.areasRepository.find();
    }

    async findOne(id: number): Promise<Area> {
        const area = await this.areasRepository.findOne({ where: { id } });
        if (!area) {
            throw new NotFoundException(`Area with ID ${id} not found`);
        }
        return area;
    }

    async update(id: number, updateAreaDto: UpdateAreaDto): Promise<Area> {
        const area = await this.findOne(id);
        Object.assign(area, updateAreaDto);
        return await this.areasRepository.save(area);
    }

    async remove(id: number): Promise<void> {
        const area = await this.findOne(id);
        await this.areasRepository.remove(area);
    }
}
