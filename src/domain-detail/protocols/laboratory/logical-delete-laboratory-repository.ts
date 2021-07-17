import { LogicalDeleteLaboratoryParams } from '@/domain-policy/usecases/laboratory/logical-delete-laboratory'

export interface LogicalDeleteLaboratoryRepository {
  logicalDelete: (laboratoryId: LogicalDeleteLaboratoryParams) => Promise<void>
}
