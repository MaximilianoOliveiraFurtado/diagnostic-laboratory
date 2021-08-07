import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

enum ExamTypeEnum {
  analise,
  clinica,
  imagem
}

enum StatusEnum {
  ativo,
  inativo
}

@Entity()
export class Exam {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false
  })
  name: string

  @Column({
    type: 'enum',
    enum: StatusEnum,
    default: StatusEnum.ativo,
    nullable: false
  })
  status: StatusEnum

  @Column({
    type: 'enum',
    enum: ExamTypeEnum,
    nullable: false
  })
  type: ExamTypeEnum
}
