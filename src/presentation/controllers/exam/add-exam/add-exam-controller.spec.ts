import { HttpRequest, Validation, AddExam } from './add-exam-controller-protocol'
import { AddExamController } from './add-exam-controller'
import { badRequest, serverError, created } from '@/presentation/helpers/http/http-helper'
import { mockValidation, mockAddExam } from '@/presentation/test'
import { throwError } from '@/domain/test'

const mockRequest = (): HttpRequest => ({
  body: {
    name: 'any_name',
    type: 'any_type'
  }
})

type SutTypes = {
  sut: AddExamController
  validationStub: Validation
  addExamStub: AddExam
}

const makeSut = (): SutTypes => {
  const validationStub = mockValidation()
  const addExamStub = mockAddExam()
  const sut = new AddExamController(validationStub, addExamStub)
  return {
    sut,
    validationStub,
    addExamStub
  }
}

describe('AddExam Controller', () => {
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

  test('Should call AddExam with correct values', async () => {
    const { sut, addExamStub } = makeSut()
    const addSpy = jest.spyOn(addExamStub, 'add')
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(addSpy).toHaveBeenCalledWith(httpRequest.body)
  })

  test('Should return 500 if AddExam throws', async () => {
    const { sut, addExamStub } = makeSut()
    jest.spyOn(addExamStub, 'add').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should return 201 on success', async () => {
    const { sut, addExamStub } = makeSut()
    const addSpy = jest.spyOn(addExamStub, 'add')
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse.statusCode).toEqual(created(addSpy).statusCode)
  })
})
