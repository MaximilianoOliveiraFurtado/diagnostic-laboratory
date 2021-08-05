import { LaboratoryModel } from '@/domain/models/laboratory'

export type LogicalDeleteLaboratoryParams = LaboratoryModel['id']
export interface LogicalDeleteLaboratory {
  logicalDelete: (laboratoryId: LogicalDeleteLaboratoryParams) => Promise<void>
}
