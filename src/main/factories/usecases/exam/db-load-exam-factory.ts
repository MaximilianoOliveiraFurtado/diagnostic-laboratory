import { LoadExam } from '@/domain/usecases/exam/load-exam'
import { DbLoadExam } from '@/data/usecases/exam/load-exam/db-load-exam'
import { ExamPostgresRepository } from '@/infra/db/repositories/exam/exam-postgres-repository'

export const makeDbLoadExam = (): LoadExam => {
  const examPostgresRepository = new ExamPostgresRepository()
  return new DbLoadExam(examPostgresRepository)
}
