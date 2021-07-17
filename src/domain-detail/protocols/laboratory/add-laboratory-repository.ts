import { AddLaboratoryParams } from '@/domain-policy/usecases/laboratory/add-laboratory'

export interface AddLaboratoryRepository {
  add: (laboratory: AddLaboratoryParams) => Promise<void>
}
