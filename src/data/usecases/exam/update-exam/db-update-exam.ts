import { UpdateExam, UpdateExamRepository, ExamModel } from '@/data/usecases/exam/update-exam/db-update-exam-protocol'
export class DbUpdateExam implements UpdateExam {
  constructor (
    private readonly updateExamRepository: UpdateExamRepository
  ) {}

  async update (exam: ExamModel): Promise<void> {
    return await this.updateExamRepository.update(exam)
  }
}
