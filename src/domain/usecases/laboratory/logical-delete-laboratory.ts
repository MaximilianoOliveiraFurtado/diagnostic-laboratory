import { LaboratoryModel } from '@/domain/models/laboratory'

export type LogicalDeleteLaboratoryParams = Pick<LaboratoryModel, 'id'>
export interface AddLaboratory {
  logicalDelete: (laboratoryId: LogicalDeleteLaboratoryParams) => Promise<void>
}
