import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('pet')

export class Pet {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({length: 100, unique: true})
    nome!: string;

    @Column({type: 'date'})
    dataNascimento!: Date;

    @Column({default: true})
    sexo!: boolean;

    @Column ({type: 'int'})
    peso!: number;

       @Column ({length: 100})
    cor!: string;

    @Column ({default: false})
    castrado!: boolean;

       @Column ({default: true})
    ativo!: boolean;


}

