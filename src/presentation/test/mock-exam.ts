import { AddExamParams, AddExam } from '@/domain/usecases/exam/add-exam'
import { LoadExam } from '@/domain/usecases/exam/load-exam'
import { UpdateExam } from '@/domain/usecases/exam/update-exam'
import { ExamModel } from '@/domain/models/exam'
import { mockExamModel, mockExamModels } from '@/domain/test'

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

export const mockLoadExam = (): LoadExam => {
  class LoadExamStub implements LoadExam {
    async load (): Promise<ExamModel[]> {
      return Promise.resolve(mockExamModels())
    }
  }
  return new LoadExamStub()
}

export const mockUpdateExam = (): UpdateExam => {
  class UpdateExamStub implements UpdateExam {
    async update (data: AddExamParams): Promise<void> {
      return Promise.resolve()
    }
  }
  return new UpdateExamStub()
}
