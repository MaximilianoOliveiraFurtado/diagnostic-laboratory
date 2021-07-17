import { ExamModel } from '@/domain-policy/models/exam'
export interface UpdateExam {
  update: (exam: ExamModel) => Promise<void>
}
