import { DbLogicalDeleteExam } from './db-logical-delete-exam'
import { LogicalDeleteExamRepositorySpy } from '@/data/test'
import { mockLogicalDeleteExamParam, throwError } from '@/domain/test'

type SutTypes = {
  sut: DbLogicalDeleteExam
  logicalDeleteExamRepositorySpy: LogicalDeleteExamRepositorySpy
}

const makeSut = (): SutTypes => {
  const logicalDeleteExamRepositorySpy = new LogicalDeleteExamRepositorySpy()
  const sut = new DbLogicalDeleteExam(logicalDeleteExamRepositorySpy)
  return {
    sut,
    logicalDeleteExamRepositorySpy
  }
}

describe('DbLogicalDeleteExam Usecase', () => {
  test('Should call LogicalDeleteExamRepository with correct values', async () => {
    const { sut, logicalDeleteExamRepositorySpy } = makeSut()
    const logicalDeleteExamParams = mockLogicalDeleteExamParam()
    await sut.logicalDelete(logicalDeleteExamParams)
    expect(logicalDeleteExamRepositorySpy.examId).toEqual(logicalDeleteExamParams)
  })

  test('Should throw if LogicalDeleteExamRepository throws', async () => {
    const { sut, logicalDeleteExamRepositorySpy } = makeSut()
    jest.spyOn(logicalDeleteExamRepositorySpy, 'logicalDelete').mockImplementationOnce(throwError)
    const promise = sut.logicalDelete(mockLogicalDeleteExamParam())
    await expect(promise).rejects.toThrow()
  })
})
