import {
  createConnection,
  Connection,
  getConnection,
  EntityTarget
} from 'typeorm'

export const adaptTypeOrm = {
  connection: null as Connection,

  async connect (): Promise<Connection> {
    return await createConnection({
      type: 'postgres',
      name: `Connection_${process.env.postgresDataBase || 'diag_lab'}`,
      host: process.env.postgresHost || 'localhost',
      port: 5432,
      username: process.env.postgresUserName || 'postgres',
      password: process.env.postgresPassword || 'root',
      database: process.env.postgresDataBase || 'diag_lab',
      entities: ['src/infra/db/postgres/entities/*.ts'],
      migrations: ['src/infra/db/postgres/migrations/*.ts'],
      cli: {
        migrationsDir: '../../infra/db/postgres/migrations'
      },
      logging: true,
      migrationsRun: true
    })
  },

  async insertOne (entity: EntityTarget<any>, values: any): Promise<any> {
    const insert = await getConnection()
      .createQueryBuilder()
      .insert()
      .into(entity)
      .values(values)
      .execute()
    return insert.raw
  },

  async load (entity: EntityTarget<any>, alias: string): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .select(alias)
      .from(entity, alias)
      .execute()
  }

}
