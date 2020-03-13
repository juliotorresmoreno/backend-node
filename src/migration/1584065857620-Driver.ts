import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

const table = "drivers";

export class Driver1584065857620 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: table,
            columns: [
                {
                    name: "id",
                    type: "INTEGER",
                    isPrimary: true,
                    isNullable: false,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: "placa",
                    type: "VARCHAR(10)",
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: "nombres",
                    type: "VARCHAR(25)",
                    isNullable: false
                },
                {
                    name: "apellidos",
                    type: "VARCHAR(25)",
                    isNullable: false
                },
                {
                    name: "email",
                    type: "VARCHAR(50)",
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: "telefono",
                    type: "VARCHAR(20)",
                    isNullable: false
                },
                {
                    name: "identificacion",
                    type: "VARCHAR(15)",
                    isNullable: false
                },
                {
                    name: "aprobado",
                    type: "INTEGER",
                    isNullable: false
                },
                {
                    name: "score",
                    type: "INTEGER",
                    isNullable: false
                },
                {
                    name: "ocupado",
                    type: "INTEGER",
                    isNullable: false
                },
            ]
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable(table);
    }

}
