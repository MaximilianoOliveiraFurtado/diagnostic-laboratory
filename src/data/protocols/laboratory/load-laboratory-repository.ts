import { LaboratoryModel } from '@/domain/models/laboratory'

export interface LoadLaboratoryRepositori {
  load: () => Promise<LaboratoryModel>
}
