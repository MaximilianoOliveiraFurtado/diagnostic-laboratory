import { AddExamRepository } from '@/data/protocols/exam/add-exam-repository'
import { AddExamParams } from '@/domain/usecases/exam/add-exam'
import { ExamModel } from '@/domain/models/exam'
import { mockExamModel, mockExamModels } from '@/domain/test'
import { LoadExamRepository } from '@/data/protocols/exam/load-exam-repository'
import { UpdateExamRepository } from '../protocols/exam/update-exam-repository'

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

export class UpdateExamRepositorySpy implements UpdateExamRepository {
  examModel = mockExamModel()

  async update (data: ExamModel): Promise<ExamModel> {
    this.examModel = data
    return Promise.resolve(this.examModel)
  }
}
