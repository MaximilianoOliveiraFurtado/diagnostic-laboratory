import { LaboratoryModel } from '@/domain-policy/models/laboratory'

export interface UpdateLaboratoryRepository {
  update: (laboratory: LaboratoryModel) => Promise<void>
}
