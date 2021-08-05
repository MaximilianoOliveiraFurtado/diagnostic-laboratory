import { AddExamParams, AddExam } from '@/domain/usecases/exam/add-exam'
import { ExamModel } from '@/domain/models/exam'
import { mockExamModel } from '@/domain/test'

export const mockAddExam = (): AddExam => {
  class AddExamStub implements AddExam {
    async add (data: AddExamParams): Promise<ExamModel> {
      return Promise.resolve(mockExamModel())
    }
  }
  return new AddExamStub()
}
