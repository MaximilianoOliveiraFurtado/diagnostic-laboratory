import { AddExam, AddExamParams, AddExamRepository, ExamModel } from '@/domain-detail/usecases/exam/add-exam/db-add-exam-protocol'
export class DbAddExam implements AddExam {
  constructor (
    private readonly addExamRepository: AddExamRepository
  ) {}

  async add (exam: AddExamParams): Promise<ExamModel> {
    return await this.addExamRepository.add(exam)
  }
}
