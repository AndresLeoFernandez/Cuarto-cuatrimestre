import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { FindOneOptions, Repository } from 'typeorm';
import { Escuela } from './entities/escuela.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EscuelaService {

    private escuelas : Escuela[] = [];

    constructor(@InjectRepository(Escuela) private readonly escuelaRepository: Repository<Escuela>){ }
    public async getAll() : Promise<Escuela[]> {
        this.escuelas = await this.escuelaRepository.find();        
        return this.escuelas;
    }

    public async getById(id : number) : Promise<Escuela> {
        try {
            const criterio : FindOneOptions = { where: { idEscuela: id } }
            let escuela : Escuela = await this.escuelaRepository.findOne( criterio );
            if (escuela) return escuela;
            throw new Error('La escuela no se encuentra.');
        } catch (error){
            throw new HttpException( { status : HttpStatus.NOT_FOUND,
                error : 'Error en la busqueda de la escuela '+id+' : '+error},
                HttpStatus.NOT_FOUND);
        }
    }
}


