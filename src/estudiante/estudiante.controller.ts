import { Controller, Get, Param } from '@nestjs/common';
import { Estudiante } from './entities/estudiante.entity';
import { EstudianteService } from './estudiante.service';

@Controller('estudiante')
export class EstudianteController {

    constructor(private readonly estudianteService: EstudianteService){}
    
    @Get()
    private listarTodas() : Estudiante[] | any {
        return this.estudianteService.getAll();
    }
    
    @Get(':id')
    private listarUna(@Param('id') id : number) : Estudiante[] | any {
        return this.estudianteService.getById(id);
    } 

}


