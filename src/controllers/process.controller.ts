import { Controller, Post, Get, Param, Body, Patch, Delete } from '@nestjs/common';
import { ProcessesService } from 'src/services/process.service';
import { CreateProcessDto } from '../dto/process/create-process.dto';
import { UpdateProcessDto } from '../dto/process/update-process.dto';

@Controller('processes')
export class ProcessesController {
    constructor(private processesService: ProcessesService) { }

    @Post()
    create(@Body() createProcessDto: CreateProcessDto) {
        return this.processesService.create(createProcessDto);
    }

    @Get()
    findAll() {
        return this.processesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.processesService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() updateProcessDto: UpdateProcessDto) {
        return this.processesService.update(id, updateProcessDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.processesService.remove(id);
    }
}
