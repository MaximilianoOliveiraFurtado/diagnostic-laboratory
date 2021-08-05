import { UpdateLaboratory, UpdateLaboratoryRepository, LaboratoryModel } from '@/data/usecases/laboratory/update-laboratory/db-update-laboratory-protocol'
export class DbUpdateLaboratory implements UpdateLaboratory {
  constructor (
    private readonly updateLaboratoryRepository: UpdateLaboratoryRepository
  ) {}

  async update (laboratory: LaboratoryModel): Promise<LaboratoryModel> {
    return await this.updateLaboratoryRepository.update(laboratory)
  }
}
