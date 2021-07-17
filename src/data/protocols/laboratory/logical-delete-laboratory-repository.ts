import { LogicalDeleteLaboratoryParams } from '@/domain/usecases/laboratory/logical-delete-laboratory'

export interface LogicalDeleteLaboratoryRepository {
  logicalDelete: (laboratoryId: LogicalDeleteLaboratoryParams) => Promise<void>
}
