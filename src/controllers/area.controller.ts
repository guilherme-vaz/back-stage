import { Controller, Post, Get, Param, Body, Patch, Delete } from '@nestjs/common';
import { AreasService } from 'src/services/area.service';
import { CreateAreaDto } from '../dto/area/create-area.dto';
import { UpdateAreaDto } from '../dto/area/update-area.dto';

@Controller('areas')
export class AreasController {
    constructor(private areasService: AreasService) { }

    @Post()
    create(@Body() createAreaDto: CreateAreaDto) {
        return this.areasService.create(createAreaDto);
    }

    @Get()
    findAll() {
        return this.areasService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.areasService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() updateAreaDto: UpdateAreaDto) {
        return this.areasService.update(id, updateAreaDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.areasService.remove(id);
    }
}
