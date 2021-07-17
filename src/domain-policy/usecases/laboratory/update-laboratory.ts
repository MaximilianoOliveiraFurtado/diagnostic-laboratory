import { LaboratoryModel } from '@/domain-policy/models/laboratory'
export interface UpdateLaboratory {
  update: (laboratory: LaboratoryModel) => Promise<void>
}
