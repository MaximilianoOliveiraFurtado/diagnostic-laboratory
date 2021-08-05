import { ExamModel } from '@/domain/models/exam'

export type AddExamParams = Omit<ExamModel, 'id' | 'status'>
export interface AddExam {
  add: (exam: AddExamParams) => Promise<ExamModel>
}
