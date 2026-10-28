import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Espécie } from './especie.entity.js';

@Module ({
    imports: [
        TypeOrmModule.forFeature([Espécie])
    ]
})
export class EspecieModule {}