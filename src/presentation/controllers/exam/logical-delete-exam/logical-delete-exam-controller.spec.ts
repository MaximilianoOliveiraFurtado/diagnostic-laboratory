import { HttpRequest, Validation, LogicalDeleteExam } from './logical-delete-exam-controller-protocol'
import { LogicalDeleteExamController } from './logical-delete-exam-controller'
import { badRequest, serverError, noContent } from '@/presentation/helpers/http/http-helper'
import { mockValidation, mockLogicalDeleteExam } from '@/presentation/test'
import { throwError } from '@/domain/test'

const mockRequest = (): HttpRequest => ({
  params: {
    id: 'any_id'
  }
})

type SutTypes = {
  sut: LogicalDeleteExamController
  validationStub: Validation
  logicalDeleteExamStub: LogicalDeleteExam
}

const makeSut = (): SutTypes => {
  const validationStub = mockValidation()
  const logicalDeleteExamStub = mockLogicalDeleteExam()
  const sut = new LogicalDeleteExamController(validationStub, logicalDeleteExamStub)
  return {
    sut,
    validationStub,
    logicalDeleteExamStub
  }
}

describe('LogicalDeleteExam Controller', () => {
  test('Should call Validation with correct values', async () => {
    const { sut, validationStub } = makeSut()
    const validateSpy = jest.spyOn(validationStub, 'validate')
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(validateSpy).toHaveBeenCalledWith(httpRequest.params)
  })

  test('Should return 400 if Validation fails', async () => {
    const { sut, validationStub } = makeSut()
    jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new Error())
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(badRequest(new Error()))
  })

  test('Should call LogicalDeleteExam with correct values', async () => {
    const { sut, logicalDeleteExamStub } = makeSut()
    const logicalDeleteSpy = jest.spyOn(logicalDeleteExamStub, 'logicalDelete')
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(logicalDeleteSpy).toHaveBeenCalledWith(httpRequest.params.id)
  })

  test('Should return 500 if LogicalDeleteExam throws', async () => {
    const { sut, logicalDeleteExamStub } = makeSut()
    jest.spyOn(logicalDeleteExamStub, 'logicalDelete').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should return 200 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse.statusCode).toEqual(noContent().statusCode)
  })
})
