import { ExamModel } from '@/domain-policy/models/exam'

export type LogicalDeleteExamParams = Pick<ExamModel, 'id'>
export interface LogicalDeleteExam {
  logicalDelete: (examId: LogicalDeleteExamParams) => Promise<void>
}
