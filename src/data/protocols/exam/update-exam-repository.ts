import { ExamModel } from '@/domain/models/exam'
export interface UpdateExamRepository {
  update: (exam: ExamModel) => Promise<ExamModel>
}
