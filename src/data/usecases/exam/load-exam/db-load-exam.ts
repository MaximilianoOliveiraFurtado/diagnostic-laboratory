import { LoadExamRepository, ExamModel, LoadExam } from './db-load-exam-protocols'

export class DbLoadExam implements LoadExam {
  constructor (
    private readonly loadExamRepository: LoadExamRepository
  ) {}

  async load (): Promise<ExamModel[]> {
    return await this.loadExamRepository.load()
  }
}
