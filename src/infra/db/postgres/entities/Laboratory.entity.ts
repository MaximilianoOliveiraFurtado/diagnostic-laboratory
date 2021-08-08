import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

enum StatusEnum {
  ativo,
  inativo
}

@Entity()
export class Laboratory {
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
    type: 'varchar',
    length: 255,
    nullable: false
  })
  adress: string
}
