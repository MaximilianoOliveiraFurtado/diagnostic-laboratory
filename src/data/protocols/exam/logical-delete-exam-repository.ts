import { LogicalDeleteExamParams } from '@/domain/usecases/exam/logical-delete-exam'

export interface LogialDeleteExamRepository {
  logicalDelete: (examId: LogicalDeleteExamParams) => Promise<void>
}
