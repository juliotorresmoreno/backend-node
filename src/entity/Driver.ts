
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IsEmail, IsPhoneNumber, Min, Max, MinLength, MaxLength, Matches } from "class-validator";

@Entity({
    name: "drivers"
})
export class Drivers {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    placa: string;

    @Column()
    nombres: string;

    @Column()
    apellidos: string;

    @Column()
    @IsEmail()
    email: string

    @Column()
    @IsPhoneNumber("CO")
    telefono: string

    @Column()
    @MinLength(7)
    @MaxLength(15)
    @Matches(/^[0-9]+$/)
    identificacion: string

    @Column()
    aprobado: number;

    @Column()
    @Min(0)
    @Max(100)
    score: number;

    @Column()
    ocupado: number;
}

export default Drivers;