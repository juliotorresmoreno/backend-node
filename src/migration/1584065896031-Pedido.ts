import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

const table = "pedidos";

export class Pedido1584065896031 implements MigrationInterface {

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
                    name: "usuario_id",
                    type: "INTEGER",
                    isNullable: false
                },
                {
                    name: 'direccion',
                    type: "VARCHAR(100)",
                    isNullable: false
                },
                {
                    name: 'fecha_entrega',
                    type: "DATE",
                    isNullable: false
                },
                {
                    name: 'franja_horaria_inicio',
                    type: "VARCHAR(5)",
                    isNullable: false
                },
                {
                    name: 'franja_horaria_fin',
                    type: "VARCHAR(5)",
                    isNullable: false
                },
                {
                    name: "driver_id",
                    type: "INTEGER",
                    isNullable: false
                }
            ]
        }), true);

        await queryRunner.createForeignKey(table, new TableForeignKey({
            columnNames: ['usuario_id'],
            referencedTableName: 'usuarios',
            referencedColumnNames: ['id']
        }));

        await queryRunner.createForeignKey("pedidos", new TableForeignKey({
            columnNames: ['driver_id'],
            referencedTableName: 'drivers',
            referencedColumnNames: ['id']
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable(table);
    }

}
