import { makeDbAddExam } from '@/main/factories/usecases/exam/add-exam/db-add-exam-factory'
import { Controller } from '@/presentation/protocols'
import { AddExamController } from '@/presentation/controllers/exam/add-exam/add-exam-controller'

export const makeAddExamController = (): Controller => {
  const controller = new AddExamController(makeDbAddExam())
  return controller
}
