import { LaboratoryModel } from '@/domain/models/laboratory'

export interface UpdateLaboratoryRepository {
  update: (laboratory: LaboratoryModel) => Promise<void>
}
