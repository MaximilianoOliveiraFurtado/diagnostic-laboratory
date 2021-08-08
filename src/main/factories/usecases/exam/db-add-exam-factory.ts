import { AddExam } from '@/domain/usecases/exam/add-exam'
import { DbAddExam } from '@/data/usecases/exam/add-exam/db-add-exam'
import { ExamPostgresRepository } from '@/infra/db/repositories/exam/exam-postgres-repository'

export const makeDbAddExam = (): AddExam => {
  const examPostgresRepository = new ExamPostgresRepository()
  return new DbAddExam(examPostgresRepository)
}
