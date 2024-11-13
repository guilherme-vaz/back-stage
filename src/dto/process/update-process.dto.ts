import { IsString, IsOptional, IsNumber } from 'class-validator';

export class UpdateProcessDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsNumber()
    areaId?: number;

    @IsOptional()
    @IsString({ each: true })
    toolsUsed?: string[];

    @IsOptional()
    @IsString({ each: true })
    responsiblePeople?: string[];

    @IsOptional()
    @IsString()
    documentation?: string;
}
