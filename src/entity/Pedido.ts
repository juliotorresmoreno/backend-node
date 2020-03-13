
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Matches } from "class-validator";

@Entity({
    name: "pedidos"
})
export class Pedido {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    usuario_id: number;

    @Column()
    direccion: string;

    @Column()
    fecha_entrega: Date

    @Column()
    @Matches(/^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/)
    franja_horaria_inicio: string

    @Column()
    @Matches(/^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/)
    franja_horaria_fin: string

    @Column()
    driver_id: number;
}

export default Pedido;