import { LogicalDeleteExamParams } from '@/domain/usecases/exam/logical-delete-exam'

export interface LogicalDeleteExamRepository {
  logicalDelete: (examId: LogicalDeleteExamParams) => Promise<void>
}
