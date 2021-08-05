import { DbLoadExam } from './db-load-exam'
import { LoadExamRepositorySpy } from '@/data/test/mock-db-exam'
import { throwError } from '@/domain/test'

type SutTypes = {
  sut: DbLoadExam
  loadExamRepositorySpy: LoadExamRepositorySpy
}

const makeSut = (): SutTypes => {
  const loadExamRepositorySpy = new LoadExamRepositorySpy()
  const sut = new DbLoadExam(loadExamRepositorySpy)
  return {
    sut,
    loadExamRepositorySpy
  }
}

describe('DbLoadExam Usecases', () => {
  test('Should call LoadExamRepository', async () => {
    const { sut, loadExamRepositorySpy } = makeSut()
    const loadExamCalled = jest.spyOn(loadExamRepositorySpy, 'load')
    await sut.load()
    expect(loadExamCalled).toHaveBeenCalled()
  })

  test('Should return a list of Exams on success', async () => {
    const { sut, loadExamRepositorySpy } = makeSut()
    const exams = await sut.load()
    expect(exams).toEqual(loadExamRepositorySpy.examModels)
  })

  test('Should throw if LoadExamRepository throws', async () => {
    const { sut, loadExamRepositorySpy } = makeSut()
    jest.spyOn(loadExamRepositorySpy, 'load').mockImplementationOnce(throwError)
    const promise = sut.load()
    await expect(promise).rejects.toThrow()
  })
})
