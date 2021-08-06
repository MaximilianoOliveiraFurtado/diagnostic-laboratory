import { createConnection, Connection } from 'typeorm'
import dataConnection from '@/main/config/type-orm'

export const adaptTypeOrm = {
  async connect (): Promise<Connection> {
    return await createConnection(dataConnection)
  }
}
