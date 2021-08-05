import { AddExamParams } from '@/domain/usecases/exam/add-exam'
import { ExamModel } from '@/domain/models/exam'

export interface AddExamRepository {
  add: (exam: AddExamParams) => Promise<ExamModel>
}
