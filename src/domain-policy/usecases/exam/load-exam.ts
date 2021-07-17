import { ExamModel } from '@/domain-policy/models/exam'

export interface LoadExam {
  load: () => Promise<ExamModel>
}
