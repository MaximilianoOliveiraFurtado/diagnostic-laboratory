import { DeleteLaboratoryExamParams } from '@/domain/usecases/laboratory-exam/delete-relationship-laboratory-exam'

export interface DeleteLaboratoryExamRepository {
  delete: (laboratoryExamId: DeleteLaboratoryExamParams) => Promise<void>
}
