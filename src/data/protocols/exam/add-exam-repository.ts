import { AddExamParams } from '@/domain/usecases/exam/add-exam'

export interface AddExamRepository {
  add: (exam: AddExamParams) => Promise<void>
}
