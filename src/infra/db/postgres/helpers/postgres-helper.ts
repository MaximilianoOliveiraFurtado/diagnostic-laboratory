import { EntityTarget } from 'typeorm'
import { adaptTypeOrm } from '@/main/adapters/type-orm-adapter'

export const PostgresHelper = {

  async connect (): Promise<void> {
    await adaptTypeOrm.connect()
  },

  async insertOne (entity: EntityTarget<any>, values: Object, returnColumns?: string[]): Promise<any> {
    return await adaptTypeOrm.insertOne(entity, values, returnColumns)
  },

  async load (entity: EntityTarget<any>, alias: string): Promise<any[]> {
    return await adaptTypeOrm.load(entity, alias)
  }
}
