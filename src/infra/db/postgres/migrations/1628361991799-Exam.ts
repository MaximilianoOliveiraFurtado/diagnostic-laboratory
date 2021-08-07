import { MigrationInterface, QueryRunner } from 'typeorm'

export class Exam1628361991799 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
        CREATE TYPE examType AS ENUM ('analise', 'clinica', 'imagem');
        CREATE TYPE examStatus AS ENUM ('ativo', 'inativo');
        CREATE TABLE exam (
            id uuid DEFAULT uuid_generate_v4() UNIQUE,
            name VARCHAR (255) NOT NULL,
            type examType NOT NULL,
            status examStatus NOT NULL
        );
    `)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE exam;
        DROP TYPE examType;
        DROP TYPE examStatus;
    `)
  }
}
