import { LaboratoryModel } from '@/domain/models/laboratory'

export interface AddLaboratory {
  load: () => Promise<LaboratoryModel>
}
