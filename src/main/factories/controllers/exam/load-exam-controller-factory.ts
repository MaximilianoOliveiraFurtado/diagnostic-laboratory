import { makeDbLoadExam } from '@/main/factories/usecases/exam/load-exam/db-load-exam-factory'
import { Controller } from '@/presentation/protocols'
import { LoadExamController } from '@/presentation/controllers/exam/load-exam/load-exam-controller'

export const makeLoadExamController = (): Controller => {
  const controller = new LoadExamController(makeDbLoadExam())
  return controller
}
