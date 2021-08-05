import { AddLaboratoryParams } from '@/domain/usecases/laboratory/add-laboratory'
import { LaboratoryModel } from '@/domain/models/laboratory'

export interface AddLaboratoryRepository {
  add: (laboratory: AddLaboratoryParams) => Promise<LaboratoryModel>
}
