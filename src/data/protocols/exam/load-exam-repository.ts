import { ExamModel } from '@/domain/models/exam'

export interface LoadExamRepository {
  load: () => Promise<ExamModel>
}
