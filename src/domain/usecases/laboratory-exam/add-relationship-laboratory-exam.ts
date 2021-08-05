import { LaboratoryExamModel } from '@/domain/models/laboratory-exam'
export interface AddLaboratoryExam {
  add: (laboratoryExam: LaboratoryExamModel) => Promise<void>
}
