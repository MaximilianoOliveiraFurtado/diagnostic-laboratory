import { LogicalDeleteExam, LogicalDeleteExamParams, LogicalDeleteExamRepository } from '@/data/usecases/exam/logical-delete-exam/db-logical-delete-exam-protocol'
export class DbLogicalDeleteExam implements LogicalDeleteExam {
  constructor (
    private readonly logicalDeleteExamRepository: LogicalDeleteExamRepository
  ) {}

  async logicalDelete (exam: LogicalDeleteExamParams): Promise<void> {
    return await this.logicalDeleteExamRepository.logicalDelete(exam)
  }
}
