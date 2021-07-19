import { ExamModel } from '@/domain-policy/models/exam'

export interface LoadExamRepository {
  load: () => Promise<ExamModel[]>
}
