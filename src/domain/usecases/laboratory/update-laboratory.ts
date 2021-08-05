import { LaboratoryModel } from '@/domain/models/laboratory'
export interface UpdateLaboratory {
  update: (laboratory: LaboratoryModel) => Promise<void>
}
