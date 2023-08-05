import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class EstudianteService {
    private estudiantes : Estudiante[] = [];

    constructor(@InjectRepository(Estudiante) private readonly estudianteRepository: Repository<Estudiante>){ }
    public async getAll() : Promise<Estudiante[]> {
        this.estudiantes = await this.estudianteRepository.find();        
        return this.estudiantes;
    }

    public async getById(id : number) : Promise<Estudiante> {
        try {
            const criterio : FindOneOptions = { where: { idEstudiante: id } }
            let estudiante : Estudiante = await this.estudianteRepository.findOne( criterio );
            if (estudiante) return estudiante;
            throw new Error('El estudiante no se encuentra.');
        } catch (error){
            throw new HttpException( { status : HttpStatus.NOT_FOUND,
                error : 'Error en la busqueda del estudiante '+id+' : '+error},
                HttpStatus.NOT_FOUND);
        }
    }
}
