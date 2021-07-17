import { ExamModel } from '@/domain-policy/models/exam'

export type AddExamParams = Omit<ExamModel, 'id' | 'status'>
export interface AddExam {
  add: (exam: AddExamParams) => Promise<ExamModel>
}
