import { LaboratoryModel } from '@/domain/models/laboratory'

export type UpdateLaboratoryParams = LaboratoryModel
export interface AddLaboratory {
  update: (laboratory: UpdateLaboratoryParams) => Promise<void>
}
