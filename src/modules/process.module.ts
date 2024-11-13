import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Process } from 'src/entities/process.entity';
import { ProcessesService } from 'src/services/process.service';
import { ProcessesController } from 'src/controllers/process.controller';
import { AreasModule } from './area.module';
@Module({
    imports: [
        TypeOrmModule.forFeature([Process]),
        AreasModule, 
    ],
    providers: [ProcessesService],
    controllers: [ProcessesController],
})
export class ProcessesModule { }
