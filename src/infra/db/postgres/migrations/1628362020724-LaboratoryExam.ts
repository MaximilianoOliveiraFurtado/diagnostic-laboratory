import { MigrationInterface, QueryRunner } from 'typeorm'

export class LaboratoryExam1628362020724 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
        CREATE TABLE laboratoryExam (
            id uuid DEFAULT uuid_generate_v4 (),
            laboratory uuid NOT NULL,
            exam uuid NOT NULL,
            CONSTRAINT fk_laboratory
                FOREIGN KEY(laboratory) 
                    REFERENCES laboratory(id),
            CONSTRAINT fk_exam
                FOREIGN KEY(exam) 
                    REFERENCES exam(id)
        );
    `)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE laboratoryExam DROP CONSTRAINT fk_laboratory;
        ALTER TABLE laboratoryExam DROP CONSTRAINT fk_exam;
        DROP TABLE laboratoryExam;
    `)
  }
}
