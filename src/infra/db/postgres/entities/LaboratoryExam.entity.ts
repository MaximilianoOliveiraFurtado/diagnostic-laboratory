import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Exam } from './Exam.entity'
import { Laboratory } from './Laboratory.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Laboratory, laboratory => laboratory.id)
  laboratory: string

  @ManyToOne(type => Exam, exam => exam.id)
  exam: string
}
