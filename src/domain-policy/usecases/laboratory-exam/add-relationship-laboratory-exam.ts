import { LaboratoryExamModel } from '@/domain-policy/models/laboratory-exam'
export interface AddLaboratoryExam {
  add: (laboratoryExam: LaboratoryExamModel) => Promise<void>
}
