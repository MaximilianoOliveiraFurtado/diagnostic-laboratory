import { EntityTarget } from 'typeorm'
import { adaptTypeOrm } from '@/main/adapters/type-orm-adapter'
import { ExamModel } from '@/domain/models/exam'

export const PostgresHelper = {

  async connect (): Promise<void> {
    await adaptTypeOrm.connect()
  },

  async insertOne (entity: EntityTarget<any>, values: Object): Promise<any> {
    return await adaptTypeOrm.insertOne(entity, values)
  },

  async load (entity: EntityTarget<any>, alias: string): Promise<ExamModel[]> {
    return await adaptTypeOrm.load(entity, alias)
  }
}
