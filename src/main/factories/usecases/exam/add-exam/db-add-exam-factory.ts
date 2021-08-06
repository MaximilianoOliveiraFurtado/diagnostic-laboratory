import { AddExam } from '@/domain/usecases/exam/add-exam'
import { DbAddExam } from '@/data/usecases/exam/add-exam/db-add-exam'

export const makeDbAddExam = (): AddExam => {
  return new DbAddExam()
}
