import {
  createConnection,
  Connection,
  getConnection,
  EntityTarget
} from 'typeorm'
import path from 'path'

export const adaptTypeOrm = {
  connection: null as Connection,
  CONN_NAME: `Connection_${process.env.postgresDataBase || 'diag_lab'}`,

  async connect (): Promise<Connection> {
    return await createConnection({
      type: 'postgres',
      name: this.CONN_NAME,
      host: process.env.postgresHost || 'localhost',
      port: 5432,
      username: process.env.postgresUserName || 'postgres',
      password: process.env.postgresPassword || 'root',
      database: process.env.postgresDataBase || 'diag_lab',
      entities: [path.join(__dirname, '../../**', '*.entity.{js,ts}')],
      migrations: [path.join(__dirname, './infra/db/postgres/migrations/', '.{js,ts}')],
      cli: {
        migrationsDir: '../../infra/db/postgres/migrations'
      },
      logging: true,
      migrationsRun: true
    })
  },

  async insertOne (entity: EntityTarget<any>, values: any, returnColumns?: string[]): Promise<any> {
    const insert = await getConnection(this.CONN_NAME)
      .createQueryBuilder()
      .insert()
      .into(entity)
      .values(values)
      .returning(returnColumns)
      .execute()
    return insert.raw[0]
  },

  async load (entity: EntityTarget<any>, alias: string): Promise<any> {
    return await getConnection(this.CONN_NAME)
      .createQueryBuilder()
      .select()
      .from(entity, alias)
      .limit(100)
      .execute()
  }

}
