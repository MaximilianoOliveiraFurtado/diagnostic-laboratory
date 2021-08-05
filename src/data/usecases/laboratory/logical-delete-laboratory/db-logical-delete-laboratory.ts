import { LogicalDeleteLaboratory, LogicalDeleteLaboratoryParams, LogicalDeleteLaboratoryRepository } from '@/data/usecases/laboratory/logical-delete-laboratory/db-logical-delete-laboratory-protocol'
export class DbLogicalDeleteLaboratory implements LogicalDeleteLaboratory {
  constructor (
    private readonly logicalDeleteLaboratoryRepository: LogicalDeleteLaboratoryRepository
  ) {}

  async logicalDelete (laboratory: LogicalDeleteLaboratoryParams): Promise<void> {
    return await this.logicalDeleteLaboratoryRepository.logicalDelete(laboratory)
  }
}
