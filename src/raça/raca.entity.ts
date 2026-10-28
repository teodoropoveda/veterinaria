import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('raca')

export class Raça {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({length: 100, nullable: false})
    nome!: string;

    @Column({length: 150})
    porte!: string;

    @Column({length: 500})
    descricao!: string;

    @Column ({type: 'int'})
    expectativaVida!: number;


       @Column ({default: true})
    ativo!: boolean;


}

