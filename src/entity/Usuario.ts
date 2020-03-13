import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IsEmail, IsPhoneNumber } from "class-validator";

@Entity({
    name: "usuarios"
})
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombres: string;

    @Column()
    apellidos: string;

    @Column()
    @IsEmail()
    email: string;

    @Column()
    @IsPhoneNumber("CO")
    telefono: string;

}

export default Usuario;