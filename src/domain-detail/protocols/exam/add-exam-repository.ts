import { AddExamParams } from '@/domain-policy/usecases/exam/add-exam'
import { ExamModel } from '@/domain-policy/models/exam'

export interface AddExamRepository {
  add: (exam: AddExamParams) => Promise<ExamModel>
}
