import { AddExamRepository } from '@/data/protocols/exam/add-exam-repository'
import { AddExamParams } from '@/domain/usecases/exam/add-exam'
import { ExamModel } from '@/domain/models/exam'
import { mockExamModel, mockExamModels, mockLogicalDeleteExamParam } from '@/domain/test'
import { LoadExamRepository } from '@/data/protocols/exam/load-exam-repository'
import { UpdateExamRepository } from '@/data/protocols/exam/update-exam-repository'
import { LogicalDeleteExamRepository } from '@/data/protocols/exam/logical-delete-exam-repository'
import { LogicalDeleteExamParams } from '@/domain/usecases/exam/logical-delete-exam'

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

  async update (data: ExamModel): Promise<void> {
    this.examModel = data
    return Promise.resolve()
  }
}

export class LogicalDeleteExamRepositorySpy implements LogicalDeleteExamRepository {
  examId = mockLogicalDeleteExamParam()
  logicalDeleteExamParams: LogicalDeleteExamParams

  async logicalDelete (examId: LogicalDeleteExamParams): Promise<void> {
    this.examId = examId
  }
}
