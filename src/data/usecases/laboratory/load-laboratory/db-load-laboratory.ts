import { LoadLaboratoryRepository, LaboratoryModel, LoadLaboratory } from './db-load-laboratory-protocols'

export class DbLoadLaboratory implements LoadLaboratory {
  constructor (
    private readonly loadLaboratoryRepository: LoadLaboratoryRepository
  ) {}

  async load (): Promise<LaboratoryModel[]> {
    return await this.loadLaboratoryRepository.load()
  }
}
