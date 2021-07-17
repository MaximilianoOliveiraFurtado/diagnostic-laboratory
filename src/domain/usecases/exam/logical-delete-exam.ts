import { ExamModel } from '@/domain/models/exam'

export type LogicalDeleteExamParams = Pick<ExamModel, 'id'>
export interface AddExam {
  logicalDelete: (examId: LogicalDeleteExamParams) => Promise<void>
}
