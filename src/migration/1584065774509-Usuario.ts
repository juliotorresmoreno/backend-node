import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

const table = "usuarios";

export class Usuario1584065774509 implements MigrationInterface {

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
                    name: "nombres",
                    type: "VARCHAR(25)",
                    isNullable: false
                },
                {
                    name: 'apellidos',
                    type: "VARCHAR(25)",
                    isNullable: false
                },
                {
                    name: 'email',
                    type: "VARCHAR(50)",
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: 'telefono',
                    type: "VARCHAR(20)",
                    isNullable: false
                }
            ]
        }), true);

        await queryRunner.createIndex(table, new TableIndex({
            name: `idx_${table}_email`,
            columnNames: ["email"]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable(table);
    }

}
