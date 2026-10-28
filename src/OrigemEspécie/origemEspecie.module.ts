import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { origemEspecie } from './origemEspecie.entity.js';

@Module ({
    imports: [
        TypeOrmModule.forFeature([origemEspecie])
    ]
})
export class origemEspecieModule {}