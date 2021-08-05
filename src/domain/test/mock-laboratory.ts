import { LaboratoryModel } from '@/domain/models/laboratory'
import { AddLaboratoryParams } from '@/domain/usecases/laboratory/add-laboratory'
import { LogicalDeleteLaboratoryParams } from '@/data/usecases/laboratory/logical-delete-laboratory/db-logical-delete-laboratory-protocol'
import faker from 'faker'

export const mockAddLaboratoryParams = (): AddLaboratoryParams => ({
  name: faker.random.words(),
  adress: faker.random.word()
})

export const mockLaboratoryModel = (): LaboratoryModel => ({
  id: faker.random.uuid(),
  name: faker.random.words(),
  adress: faker.random.word(),
  status: faker.random.word()
})

export const mockLaboratoryModels = (): LaboratoryModel[] => [
  mockLaboratoryModel(),
  mockLaboratoryModel()
]

export const mockLogicalDeleteLaboratoryParam = (): LogicalDeleteLaboratoryParams => faker.random.uuid()
