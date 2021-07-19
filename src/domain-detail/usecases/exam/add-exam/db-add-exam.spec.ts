import { DbAddExam } from './db-add-exam'
import { AddExamRepositorySpy } from '@/domain-detail/test'
import { mockAddExamParams, throwError } from '@/domain-policy/test'

type SutTypes = {
  sut: DbAddExam
  addExamRepositorySpy: AddExamRepositorySpy
}

const makeSut = (): SutTypes => {
  const addExamRepositorySpy = new AddExamRepositorySpy()
  const sut = new DbAddExam(addExamRepositorySpy)
  return {
    sut,
    addExamRepositorySpy
  }
}

describe('DbAddExam Usecase', () => {
  test('Should call AddExamRepository with correct values', async () => {
    const { sut, addExamRepositorySpy } = makeSut()
    const addExamParams = mockAddExamParams()
    await sut.add(addExamParams)
    expect(addExamRepositorySpy.addExamParams).toEqual({
      name: addExamParams.name,
      type: addExamParams.type
    })
  })

  test('Should throw if AddExamRepository throws', async () => {
    const { sut, addExamRepositorySpy } = makeSut()
    jest.spyOn(addExamRepositorySpy, 'add').mockImplementationOnce(throwError)
    const promise = sut.add(mockAddExamParams())
    await expect(promise).rejects.toThrow()
  })

  test('Should return an exam on success', async () => {
    const { sut, addExamRepositorySpy } = makeSut()
    const exam = await sut.add(mockAddExamParams())
    expect(exam).toEqual(addExamRepositorySpy.examModel)
  })
})
