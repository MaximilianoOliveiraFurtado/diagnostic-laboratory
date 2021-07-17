import { LaboratoryExamModel } from '@/domain/models/laboratory-exam'

export interface AddLaboratoryExamRepository {
  add: (laboratoryExam: LaboratoryExamModel) => Promise<void>
}
