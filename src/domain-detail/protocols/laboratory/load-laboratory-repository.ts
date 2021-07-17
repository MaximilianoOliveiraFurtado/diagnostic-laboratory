import { LaboratoryModel } from '@/domain-policy/models/laboratory'

export interface LoadLaboratoryRepositori {
  load: () => Promise<LaboratoryModel>
}
