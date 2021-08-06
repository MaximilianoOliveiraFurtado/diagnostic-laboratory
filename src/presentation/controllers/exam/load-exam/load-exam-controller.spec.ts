import { LoadExamController } from './load-exam-controller'
import { LoadExam } from './load-exam-controller-protocols'
import { ok, serverError, noContent } from '@/presentation/helpers/http/http-helper'
import { mockLoadExam } from '@/presentation/test'
import { throwError, mockExamModels } from '@/domain/test'

type SutTypes = {
  sut: LoadExamController
  loadExamStub: LoadExam
}

const makeSut = (): SutTypes => {
  const loadExamStub = mockLoadExam()
  const sut = new LoadExamController(loadExamStub)
  return {
    sut,
    loadExamStub
  }
}

describe('LoadExam Controller', () => {
  test('Should call LoadExam', async () => {
    const { sut, loadExamStub } = makeSut()
    const loadSpy = jest.spyOn(loadExamStub, 'load')
    await sut.handle({})
    expect(loadSpy).toHaveBeenCalled()
  })

  test('Should return 200 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle({})
    expect(httpResponse.statusCode).toEqual(ok(mockExamModels()).statusCode)
  })

  test('Should return 204 if LoadExam returns empty', async () => {
    const { sut, loadExamStub } = makeSut()
    jest.spyOn(loadExamStub, 'load').mockReturnValueOnce(Promise.resolve([]))
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(noContent())
  })

  test('Should return 500 if LoadExam throws', async () => {
    const { sut, loadExamStub } = makeSut()
    jest.spyOn(loadExamStub, 'load').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
