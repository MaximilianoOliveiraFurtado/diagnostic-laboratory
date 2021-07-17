import { ExamModel } from '@/domain-policy/models/exam'
import { AddExamParams } from '@/domain-policy/usecases/exam/add-exam'
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
