import { ExamModel } from '@/domain/models/exam'

export interface LoadExam {
  load: () => Promise<ExamModel[]>
}
