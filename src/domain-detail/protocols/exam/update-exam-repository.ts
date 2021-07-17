import { ExamModel } from '@/domain-policy/models/exam'

export interface UpdateExamRepository {
  update: (exam: ExamModel) => Promise<void>
}
