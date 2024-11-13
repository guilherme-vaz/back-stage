import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Area } from 'src/entities/area.entity';
import { AreasService } from 'src/services/area.service';
import { AreasController } from 'src/controllers/area.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Area])],
    providers: [AreasService],
    controllers: [AreasController],
    exports: [TypeOrmModule], 
})
export class AreasModule { }
