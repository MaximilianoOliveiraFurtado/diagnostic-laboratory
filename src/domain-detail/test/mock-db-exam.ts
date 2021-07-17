import { AddExamRepository } from '@/domain-detail/protocols/exam/add-exam-repository'
import { AddExamParams } from '@/domain-policy/usecases/exam/add-exam'
import { ExamModel } from '@/domain-policy/models/exam'
import { mockExamModel } from '@/domain-policy/test'

export class AddExamRepositorySpy implements AddExamRepository {
  examModel = mockExamModel()
  addExamParams: AddExamParams

  async add (data: AddExamParams): Promise<ExamModel> {
    this.addExamParams = data
    return Promise.resolve(this.examModel)
  }
}
