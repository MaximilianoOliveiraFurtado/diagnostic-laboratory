import { LaboratoryModel } from '@/domain/models/laboratory'

export interface LoadLaboratoryRepository {
  load: () => Promise<LaboratoryModel[]>
}
