import { ExamModel } from '@/domain/models/exam'

export type UpdateExamParams = ExamModel
export interface AddExam {
  update: (exam: UpdateExamParams) => Promise<void>
}
