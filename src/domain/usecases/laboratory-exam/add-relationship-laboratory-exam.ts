import { LaboratoryExamModel } from '@/domain/models/laboratory-exam'

export type AddLaboratoryExamParams = LaboratoryExamModel
export interface AddLaboratoryExam {
  add: (laboratoryExam: LaboratoryExamModel) => Promise<void>
}
