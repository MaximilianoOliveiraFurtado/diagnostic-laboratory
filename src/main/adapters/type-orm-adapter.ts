import { createConnection, Connection } from 'typeorm'

export const adaptTypeOrm = {
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
  }
}
