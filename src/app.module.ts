import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tutor } from "./tutor/tutor.entity.js";
import { Pet } from "./pet/pet.entity.js";
import { Raça } from "./raça/raca.entity.js";
import { Espécie } from "./especie/especie.entity.js";
import { origemEspecie} from "./OrigemEspécie/origemEspecie.entity.js";

@Module ({
  imports:[
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'veterinaria_db',
      entities: [Tutor, Pet, Raça, Espécie, origemEspecie],
      synchronize: true,
      logging: true,
    }),
  ],
})

export class AppModule {}