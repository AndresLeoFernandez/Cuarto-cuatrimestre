import { Module } from '@nestjs/common';
import { ProfesorController } from './profesor.controller';
import { ProfesorService } from './profesor.service';
import { Profesor } from './entities/profesor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Profesor])],
  controllers: [ProfesorController],
  providers: [ProfesorService]
})
export class ProfesorModule {}
