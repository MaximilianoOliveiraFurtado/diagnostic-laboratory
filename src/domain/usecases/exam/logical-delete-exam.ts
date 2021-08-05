import { ExamModel } from '@/domain/models/exam'

export type LogicalDeleteExamParams = Pick<ExamModel, 'id'>
export interface LogicalDeleteExam {
  logicalDelete: (examId: LogicalDeleteExamParams) => Promise<void>
}
