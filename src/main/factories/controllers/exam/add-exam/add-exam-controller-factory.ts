import { makeDbAddExam } from '@/main/factories/usecases/exam/db-add-exam-factory'
import { makeAddExamValidation } from './add-exam-validation-factory'
import { Controller } from '@/presentation/protocols'
import { AddExamController } from '@/presentation/controllers/exam/add-exam/add-exam-controller'

export const makeAddExamController = (): Controller => {
  const controller = new AddExamController(makeAddExamValidation(), makeDbAddExam())
  return controller
}
