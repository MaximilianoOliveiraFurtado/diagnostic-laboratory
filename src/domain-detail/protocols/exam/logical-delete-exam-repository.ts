import { LogicalDeleteExamParams } from '@/domain-policy/usecases/exam/logical-delete-exam'

export interface LogialDeleteExamRepository {
  logicalDelete: (examId: LogicalDeleteExamParams) => Promise<void>
}
