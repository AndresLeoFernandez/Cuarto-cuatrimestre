import { Controller, Get, Param } from '@nestjs/common';
import { Escuela } from './entities/escuela.entity';
import { EscuelaService } from './escuela.service';

@Controller('escuela')
export class EscuelaController {
    constructor(private readonly escuelaService: EscuelaService){}
    
    @Get()
    private listarTodas() : Escuela[] | any {
        return this.escuelaService.getAll();
    }
    
    @Get(':id')
    private listarUna(@Param('id') id : number) : Escuela[] | any {
        return this.escuelaService.getById(id);
    } 

        
}
