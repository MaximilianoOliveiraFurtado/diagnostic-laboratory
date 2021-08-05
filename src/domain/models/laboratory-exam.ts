import { LaboratoryModel } from './laboratory'
import { ExamModel } from './exam'

export type LaboratoryExamModel = {
  id: string
  laboratory: LaboratoryModel
  exam: ExamModel
}
