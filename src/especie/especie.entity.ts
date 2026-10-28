import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('especie')

export class Espécie {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({length: 100})
    nomePopular!: string;

     @Column({length: 100})
    nomeCientifico!: string;

     @Column({length: 500})
    descricao!: string;

    @Column({default: true})
    domestico!: boolean;

       @Column ({default: true})
    ativo!: boolean;


}

