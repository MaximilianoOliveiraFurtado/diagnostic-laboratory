import { AddLaboratoryParams } from '@/domain/usecases/laboratory/add-laboratory'

export interface AddLaboratoryRepository {
  add: (laboratory: AddLaboratoryParams) => Promise<void>
}
