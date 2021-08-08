import { AddExam, AddExamParams, AddExamRepository, ExamModel } from '@/data/usecases/exam/add-exam/db-add-exam-protocol'
export class DbAddExam implements AddExam {
  constructor (
    private readonly addExamRepository: AddExamRepository
  ) {}

  async add (exam: AddExamParams): Promise<ExamModel> {
    Reflect.set(exam, 'status', 'ativo')
    return await this.addExamRepository.add(exam)
  }
}
