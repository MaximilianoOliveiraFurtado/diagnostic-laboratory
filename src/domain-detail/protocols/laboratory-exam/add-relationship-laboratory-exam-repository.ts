import { LaboratoryExamModel } from '@/domain-policy/models/laboratory-exam'

export interface AddLaboratoryExamRepository {
  add: (laboratoryExam: LaboratoryExamModel) => Promise<void>
}
