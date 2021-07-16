import { LaboratoryModel } from './laboratory'
import { ExamModel } from './exam'

export type LaboratoryExamModel = {
  laboratory: LaboratoryModel
  exam: ExamModel
}
