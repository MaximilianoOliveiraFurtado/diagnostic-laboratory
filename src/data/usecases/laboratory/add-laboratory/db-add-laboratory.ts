import { AddLaboratory, AddLaboratoryParams, AddLaboratoryRepository, LaboratoryModel } from '@/data/usecases/laboratory/add-laboratory/db-add-laboratory-protocol'
export class DbAddLaboratory implements AddLaboratory {
  constructor (
    private readonly addLaboratoryRepository: AddLaboratoryRepository
  ) {}

  async add (laboratory: AddLaboratoryParams): Promise<LaboratoryModel> {
    return await this.addLaboratoryRepository.add(laboratory)
  }
}
