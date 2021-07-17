import { LaboratoryModel } from '@/domain-policy/models/laboratory'

export type LogicalDeleteLaboratoryParams = Pick<LaboratoryModel, 'id'>
export interface LogicalDeleteLaboratory {
  logicalDelete: (laboratoryId: LogicalDeleteLaboratoryParams) => Promise<void>
}
