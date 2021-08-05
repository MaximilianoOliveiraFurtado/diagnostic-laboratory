import { DbLoadLaboratory } from './db-load-laboratory'
import { LoadLaboratoryRepositorySpy } from '@/data/test/mock-db-laboratory'
import { throwError } from '@/domain/test'

type SutTypes = {
  sut: DbLoadLaboratory
  loadLaboratoryRepositorySpy: LoadLaboratoryRepositorySpy
}

const makeSut = (): SutTypes => {
  const loadLaboratoryRepositorySpy = new LoadLaboratoryRepositorySpy()
  const sut = new DbLoadLaboratory(loadLaboratoryRepositorySpy)
  return {
    sut,
    loadLaboratoryRepositorySpy
  }
}

describe('DbLoadLaboratory Usecases', () => {
  test('Should call LoadLaboratoryRepository', async () => {
    const { sut, loadLaboratoryRepositorySpy } = makeSut()
    const loadLaboratoryCalled = jest.spyOn(loadLaboratoryRepositorySpy, 'load')
    await sut.load()
    expect(loadLaboratoryCalled).toHaveBeenCalled()
  })

  test('Should return a list of Laboratorys on success', async () => {
    const { sut, loadLaboratoryRepositorySpy } = makeSut()
    const laboratorys = await sut.load()
    expect(laboratorys).toEqual(loadLaboratoryRepositorySpy.laboratoryModels)
  })

  test('Should throw if LoadLaboratoryRepository throws', async () => {
    const { sut, loadLaboratoryRepositorySpy } = makeSut()
    jest.spyOn(loadLaboratoryRepositorySpy, 'load').mockImplementationOnce(throwError)
    const promise = sut.load()
    await expect(promise).rejects.toThrow()
  })
})
