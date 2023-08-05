import { Injectable, HttpException, HttpStatus  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profesor } from './entities/profesor.entity';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class ProfesorService {

    private profesores : Profesor[] = [];

    constructor(@InjectRepository(Profesor) private readonly profesorRepository: Repository<Profesor>){ }
    public async getAll() : Promise<Profesor[]> {
        this.profesores = await this.profesorRepository.find();        
        return this.profesores;
    }

    public async getById(id : number) : Promise<Profesor> {
        try {
            const criterio : FindOneOptions = { where: { idProfesor: id } }
            let profesor : Profesor = await this.profesorRepository.findOne( criterio );
            if (profesor) return profesor;
            throw new Error('El profesor no se encuentra.');
        } catch (error){
            throw new HttpException( { status : HttpStatus.NOT_FOUND,
                error : 'Error en la busqueda del profesor '+id+' : '+error},
                HttpStatus.NOT_FOUND);
        }
    }
}
