import { ExamModel } from '@/domain/models/exam'
export interface UpdateExam {
  update: (exam: ExamModel) => Promise<ExamModel>
}
