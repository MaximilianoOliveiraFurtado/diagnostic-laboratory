import { DbUpdateLaboratory } from './db-update-laboratory'
import { UpdateLaboratoryRepositorySpy } from '@/data/test'
import { mockLaboratoryModel, throwError } from '@/domain/test'

type SutTypes = {
  sut: DbUpdateLaboratory
  updateLaboratoryRepositorySpy: UpdateLaboratoryRepositorySpy
}

const makeSut = (): SutTypes => {
  const updateLaboratoryRepositorySpy = new UpdateLaboratoryRepositorySpy()
  const sut = new DbUpdateLaboratory(updateLaboratoryRepositorySpy)
  return {
    sut,
    updateLaboratoryRepositorySpy
  }
}

describe('DbUpdateLaboratory Usecase', () => {
  test('Should call UpdateLaboratoryRepository with correct values', async () => {
    const { sut, updateLaboratoryRepositorySpy } = makeSut()
    const updateLaboratoryParams = mockLaboratoryModel()
    await sut.update(updateLaboratoryParams)
    expect(updateLaboratoryRepositorySpy.laboratoryModel).toEqual({
      id: updateLaboratoryParams.id,
      name: updateLaboratoryParams.name,
      adress: updateLaboratoryParams.adress,
      status: updateLaboratoryParams.status
    })
  })

  test('Should throw if UpdateLaboratoryRepository throws', async () => {
    const { sut, updateLaboratoryRepositorySpy } = makeSut()
    jest.spyOn(updateLaboratoryRepositorySpy, 'update').mockImplementationOnce(throwError)
    const promise = sut.update(mockLaboratoryModel())
    await expect(promise).rejects.toThrow()
  })

  test('Should return an laboratory on success', async () => {
    const { sut, updateLaboratoryRepositorySpy } = makeSut()
    const laboratory = await sut.update(mockLaboratoryModel())
    expect(laboratory).toEqual(updateLaboratoryRepositorySpy.laboratoryModel)
  })
})
