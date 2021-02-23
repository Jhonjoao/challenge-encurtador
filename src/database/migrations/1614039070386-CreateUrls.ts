import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUrls1614039070386 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'urls',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isGenerated: true,
                        isPrimary: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'url',
                        type: 'varchar',
                    },
                    {
                        name: 'param_url',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'expires_at',
                        type: 'timestamp'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('urls')
    }

}
