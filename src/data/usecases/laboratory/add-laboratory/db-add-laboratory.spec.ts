import { DbAddLaboratory } from './db-add-laboratory'
import { AddLaboratoryRepositorySpy } from '@/data/test'
import { mockAddLaboratoryParams, throwError } from '@/domain/test'

type SutTypes = {
  sut: DbAddLaboratory
  addLaboratoryRepositorySpy: AddLaboratoryRepositorySpy
}

const makeSut = (): SutTypes => {
  const addLaboratoryRepositorySpy = new AddLaboratoryRepositorySpy()
  const sut = new DbAddLaboratory(addLaboratoryRepositorySpy)
  return {
    sut,
    addLaboratoryRepositorySpy
  }
}

describe('DbAddLaboratory Usecase', () => {
  test('Should call AddLaboratoryRepository with correct values', async () => {
    const { sut, addLaboratoryRepositorySpy } = makeSut()
    const addLaboratoryParams = mockAddLaboratoryParams()
    await sut.add(addLaboratoryParams)
    expect(addLaboratoryRepositorySpy.addLaboratoryParams).toEqual({
      name: addLaboratoryParams.name,
      adress: addLaboratoryParams.adress
    })
  })

  test('Should throw if AddLaboratoryRepository throws', async () => {
    const { sut, addLaboratoryRepositorySpy } = makeSut()
    jest.spyOn(addLaboratoryRepositorySpy, 'add').mockImplementationOnce(throwError)
    const promise = sut.add(mockAddLaboratoryParams())
    await expect(promise).rejects.toThrow()
  })

  test('Should return an laboratory on success', async () => {
    const { sut, addLaboratoryRepositorySpy } = makeSut()
    const laboratory = await sut.add(mockAddLaboratoryParams())
    expect(laboratory).toEqual(addLaboratoryRepositorySpy.laboratoryModel)
  })
})
