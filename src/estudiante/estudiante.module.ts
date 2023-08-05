import { Module } from '@nestjs/common';
import { EstudianteController } from './estudiante.controller';
import { EstudianteService } from './estudiante.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudiante } from './entities/estudiante.entity';

@Module({
  imports:[ TypeOrmModule.forFeature([Estudiante])],
  controllers: [EstudianteController],
  providers: [EstudianteService]
})
export class EstudianteModule {}
