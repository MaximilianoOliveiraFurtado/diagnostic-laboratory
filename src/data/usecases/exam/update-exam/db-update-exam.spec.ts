import { DbUpdateExam } from './db-update-exam'
import { UpdateExamRepositorySpy } from '@/data/test'
import { mockExamModel, throwError } from '@/domain/test'

type SutTypes = {
  sut: DbUpdateExam
  updateExamRepositorySpy: UpdateExamRepositorySpy
}

const makeSut = (): SutTypes => {
  const updateExamRepositorySpy = new UpdateExamRepositorySpy()
  const sut = new DbUpdateExam(updateExamRepositorySpy)
  return {
    sut,
    updateExamRepositorySpy
  }
}

describe('DbUpdateExam Usecase', () => {
  test('Should call UpdateExamRepository with correct values', async () => {
    const { sut, updateExamRepositorySpy } = makeSut()
    const updateExamParams = mockExamModel()
    await sut.update(updateExamParams)
    expect(updateExamRepositorySpy.examModel).toEqual({
      id: updateExamParams.id,
      name: updateExamParams.name,
      type: updateExamParams.type,
      status: updateExamParams.status
    })
  })

  test('Should throw if AddExamRepository throws', async () => {
    const { sut, updateExamRepositorySpy } = makeSut()
    jest.spyOn(updateExamRepositorySpy, 'update').mockImplementationOnce(throwError)
    const promise = sut.update(mockExamModel())
    await expect(promise).rejects.toThrow()
  })

  test('Should return an exam on success', async () => {
    const { sut, updateExamRepositorySpy } = makeSut()
    const exam = await sut.update(mockExamModel())
    expect(exam).toEqual(updateExamRepositorySpy.examModel)
  })
})
