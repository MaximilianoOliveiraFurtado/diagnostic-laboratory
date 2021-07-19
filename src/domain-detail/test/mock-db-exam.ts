import { AddExamRepository } from '@/domain-detail/protocols/exam/add-exam-repository'
import { AddExamParams } from '@/domain-policy/usecases/exam/add-exam'
import { ExamModel } from '@/domain-policy/models/exam'
import { mockExamModel, mockExamModels } from '@/domain-policy/test'
import { LoadExamRepository } from '@/domain-detail/protocols/exam/load-exam-repository'

export class AddExamRepositorySpy implements AddExamRepository {
  examModel = mockExamModel()
  addExamParams: AddExamParams

  async add (data: AddExamParams): Promise<ExamModel> {
    this.addExamParams = data
    return Promise.resolve(this.examModel)
  }
}

export class LoadExamRepositorySpy implements LoadExamRepository {
  examModels = mockExamModels()

  async load (): Promise<ExamModel[]> {
    return Promise.resolve(this.examModels)
  }
}
