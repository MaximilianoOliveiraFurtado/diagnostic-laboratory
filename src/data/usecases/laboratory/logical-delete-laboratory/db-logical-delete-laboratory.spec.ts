import { DbLogicalDeleteLaboratory } from './db-logical-delete-laboratory'
import { LogicalDeleteLaboratoryRepositorySpy } from '@/data/test'
import { mockLogicalDeleteLaboratoryParam, throwError } from '@/domain/test'

type SutTypes = {
  sut: DbLogicalDeleteLaboratory
  logicalDeleteLaboratoryRepositorySpy: LogicalDeleteLaboratoryRepositorySpy
}

const makeSut = (): SutTypes => {
  const logicalDeleteLaboratoryRepositorySpy = new LogicalDeleteLaboratoryRepositorySpy()
  const sut = new DbLogicalDeleteLaboratory(logicalDeleteLaboratoryRepositorySpy)
  return {
    sut,
    logicalDeleteLaboratoryRepositorySpy
  }
}

describe('DbLogicalDeleteLaboratory Usecase', () => {
  test('Should call LogicalDeleteLaboratoryRepository with correct values', async () => {
    const { sut, logicalDeleteLaboratoryRepositorySpy } = makeSut()
    const logicalDeleteLaboratoryParams = mockLogicalDeleteLaboratoryParam()
    await sut.logicalDelete(logicalDeleteLaboratoryParams)
    expect(logicalDeleteLaboratoryRepositorySpy.laboratoryId).toEqual(logicalDeleteLaboratoryParams)
  })

  test('Should throw if LogicalDeleteLaboratoryRepository throws', async () => {
    const { sut, logicalDeleteLaboratoryRepositorySpy } = makeSut()
    jest.spyOn(logicalDeleteLaboratoryRepositorySpy, 'logicalDelete').mockImplementationOnce(throwError)
    const promise = sut.logicalDelete(mockLogicalDeleteLaboratoryParam())
    await expect(promise).rejects.toThrow()
  })
})
