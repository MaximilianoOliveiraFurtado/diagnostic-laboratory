import { Connection } from 'typeorm'
import { adaptTypeOrm } from '@/main/adapters/type-orm-adapter'

export const PostgresHelper = {
  client: null as Connection,
  uri: null as string,

  async connect (): Promise<void> {
    this.client = await adaptTypeOrm.connect()
  }
}
