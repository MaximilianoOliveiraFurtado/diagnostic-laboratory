import { ExamModel } from '@/domain/models/exam'

export interface AddExam {
  load: () => Promise<ExamModel>
}
