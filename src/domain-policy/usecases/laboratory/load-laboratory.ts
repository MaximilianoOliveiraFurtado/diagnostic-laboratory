import { LaboratoryModel } from '@/domain-policy/models/laboratory'

export interface LoadLaboratory {
  load: () => Promise<LaboratoryModel>
}
