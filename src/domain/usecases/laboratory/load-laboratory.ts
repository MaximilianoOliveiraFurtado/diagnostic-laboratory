import { LaboratoryModel } from '@/domain/models/laboratory'

export interface LoadLaboratory {
  load: () => Promise<LaboratoryModel>
}
