import { AddLaboratoryRepository } from '@/data/protocols/laboratory/add-laboratory-repository'
import { AddLaboratoryParams } from '@/domain/usecases/laboratory/add-laboratory'
import { LaboratoryModel } from '@/domain/models/laboratory'
import { mockLaboratoryModel, mockLaboratoryModels } from '@/domain/test'
import { LoadLaboratoryRepository } from '@/data/protocols/laboratory/load-laboratory-repository'
import { UpdateLaboratoryRepository } from '../protocols/laboratory/update-laboratory-repository'

export class AddLaboratoryRepositorySpy implements AddLaboratoryRepository {
  laboratoryModel = mockLaboratoryModel()
  addLaboratoryParams: AddLaboratoryParams

  async add (data: AddLaboratoryParams): Promise<LaboratoryModel> {
    this.addLaboratoryParams = data
    return Promise.resolve(this.laboratoryModel)
  }
}

export class LoadLaboratoryRepositorySpy implements LoadLaboratoryRepository {
  laboratoryModels = mockLaboratoryModels()

  async load (): Promise<LaboratoryModel[]> {
    return Promise.resolve(this.laboratoryModels)
  }
}

export class UpdateLaboratoryRepositorySpy implements UpdateLaboratoryRepository {
  laboratoryModel = mockLaboratoryModel()

  async update (data: LaboratoryModel): Promise<LaboratoryModel> {
    this.laboratoryModel = data
    return Promise.resolve(this.laboratoryModel)
  }
}
