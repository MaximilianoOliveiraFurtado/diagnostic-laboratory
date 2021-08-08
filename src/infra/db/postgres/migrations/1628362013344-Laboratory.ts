import { MigrationInterface, QueryRunner } from 'typeorm'

export class Laboratory1628362013344 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
        CREATE TYPE laboratoryStatus AS ENUM ('ativo', 'inativo');
        CREATE TABLE laboratory (
            id uuid DEFAULT uuid_generate_v4() UNIQUE PRIMARY KEY,
            name VARCHAR (255) NOT NULL,
            adress VARCHAR (255) NOT NULL,
            status laboratoryStatus NOT NULL
        );
    `)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE laboratory;
        DROP TYPE laboratoryStatus;
    `)
  }
}
