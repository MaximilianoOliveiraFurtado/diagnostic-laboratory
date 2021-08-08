import { PostgresHelper } from '@/infra/db/postgres/helpers/postgres-helper'
import { AddExamParams } from '@/domain/usecases/exam/add-exam'
import { ExamModel } from '@/domain/models/exam'
import { AddExamRepository } from '@/data/protocols/exam/add-exam-repository'
import { LoadExamRepository } from '@/data/protocols/exam/load-exam-repository'
import { Exam } from '@/infra/db/postgres/entities/Exam'

export class ExamPostgresRepository implements AddExamRepository, LoadExamRepository {
  async add (examData: AddExamParams): Promise<ExamModel> {
    return await PostgresHelper.insertOne(Exam, examData, ['id', 'name', 'type', 'status'])
  }

  async load (): Promise<ExamModel[]> {
    return await PostgresHelper.load(Exam, 'exam')
  }
}
