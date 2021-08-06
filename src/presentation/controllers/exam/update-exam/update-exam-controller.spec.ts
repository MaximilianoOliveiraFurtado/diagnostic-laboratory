import { HttpRequest, Validation, UpdateExam } from './update-exam-controller-protocol'
import { UpdateExamController } from './update-exam-controller'
import { badRequest, serverError, noContent } from '@/presentation/helpers/http/http-helper'
import { mockValidation, mockUpdateExam } from '@/presentation/test'
import { throwError } from '@/domain/test'

const mockRequest = (): HttpRequest => ({
  body: {
    name: 'any_name',
    type: 'any_type',
    status: 'any_status'
  },
  params: {
    id: 'any_id'
  }
})

type SutTypes = {
  sut: UpdateExamController
  validationStub: Validation
  updateExamStub: UpdateExam
}

const makeSut = (): SutTypes => {
  const validationStub = mockValidation()
  const updateExamStub = mockUpdateExam()
  const sut = new UpdateExamController(validationStub, updateExamStub)
  return {
    sut,
    validationStub,
    updateExamStub
  }
}

describe('UpdateExam Controller', () => {
  test('Should call Validation with correct values', async () => {
    const { sut, validationStub } = makeSut()
    const validateSpy = jest.spyOn(validationStub, 'validate')
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(validateSpy).toHaveBeenCalledWith(httpRequest.body)
  })

  test('Should return 400 if Validation fails', async () => {
    const { sut, validationStub } = makeSut()
    jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new Error())
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(badRequest(new Error()))
  })

  test('Should call UpdateExam with correct values', async () => {
    const { sut, updateExamStub } = makeSut()
    const updateSpy = jest.spyOn(updateExamStub, 'update')
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(updateSpy).toHaveBeenCalledWith({ ...httpRequest.body, ...httpRequest.params })
  })

  test('Should return 500 if UpdateExam throws', async () => {
    const { sut, updateExamStub } = makeSut()
    jest.spyOn(updateExamStub, 'update').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should return 200 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse.statusCode).toEqual(noContent().statusCode)
  })
})
