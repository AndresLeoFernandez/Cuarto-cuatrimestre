import { Controller, Get, Param } from '@nestjs/common';
import { Profesor } from './entities/profesor.entity';
import { ProfesorService } from './profesor.service';

@Controller('profesor')
export class ProfesorController {
    
    constructor(private readonly profesorService: ProfesorService){}
    
    @Get()
    private listarTodas() : Profesor[] | any {
        return this.profesorService.getAll();
    }
    
    @Get(':id')
    private listarUna(@Param('id') id : number) : Profesor[] | any {
        return this.profesorService.getById(id);
    } 

}
