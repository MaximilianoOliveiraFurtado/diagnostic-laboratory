import { ExamModel } from '@/domain/models/exam'
import { AddExamParams } from '@/domain/usecases/exam/add-exam'
import { LogicalDeleteExamParams } from '@/data/usecases/exam/logical-delete-exam/db-logical-delete-exam-protocol'
import faker from 'faker'

export const mockAddExamParams = (): AddExamParams => ({
  name: faker.random.words(),
  type: faker.random.word()
})

export const mockExamModel = (): ExamModel => ({
  id: faker.random.uuid(),
  name: faker.random.words(),
  type: faker.random.word(),
  status: faker.random.word()
})

export const mockExamModels = (): ExamModel[] => [
  mockExamModel(),
  mockExamModel()
]

export const mockLogicalDeleteExamParam = (): LogicalDeleteExamParams => faker.random.uuid()
