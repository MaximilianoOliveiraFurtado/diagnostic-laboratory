import { LaboratoryModel } from '@/domain/models/laboratory'

export type AddLaboratoryParams = Omit<LaboratoryModel, 'id' | 'status'>
export interface AddLaboratory {
  add: (laboratory: AddLaboratoryParams) => Promise<LaboratoryModel>
}
