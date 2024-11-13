import { IsString, IsNotEmpty, IsOptional, IsNumber, ValidateNested } from 'class-validator';

export class CreateProcessDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsNotEmpty()
    @IsNumber()
    areaId: number;

    @IsOptional()
    @IsString({ each: true })
    toolsUsed?: string[]; // Lista de ferramentas usadas

    @IsOptional()
    @IsString({ each: true })
    responsiblePeople?: string[]; // Lista de pessoas responsáveis

    @IsOptional()
    @IsString()
    documentation?: string; // Documentação associada ao processo
}
