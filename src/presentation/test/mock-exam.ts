import { AddExamParams, AddExam } from '@/domain/usecases/exam/add-exam'
import { ExamModel } from '@/domain/models/exam'
import { mockExamModel } from '@/domain/test'

export const mockAddExam = (): AddExam => {
  class AddExamStub implements AddExam {
    examModel = mockExamModel()
    async add (data: AddExamParams): Promise<ExamModel> {
      this.examModel = { ...this.examModel, ...data }
      return Promise.resolve(this.examModel)
    }
  }
  return new AddExamStub()
}
