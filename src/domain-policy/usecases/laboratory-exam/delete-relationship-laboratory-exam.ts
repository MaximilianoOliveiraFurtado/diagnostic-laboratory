import { LaboratoryExamModel } from '@/domain-policy/models/laboratory-exam'

export type DeleteLaboratoryExamParams = Pick<LaboratoryExamModel, 'id'>
export interface DeleteLaboratoryExam {
  delete: (laboratoryExamId: DeleteLaboratoryExamParams) => Promise<void>
}
