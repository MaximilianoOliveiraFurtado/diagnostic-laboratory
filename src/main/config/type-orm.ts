import env from './env'
export default {
  type: 'postgres',
  name: `Connection_${env.postgresDataBase}`,
  host: env.postgresHost || 'localhost',
  port: env.postgresPort || 3306,
  username: env.postgresUserName || 'postgres',
  password: env.postgresPassword || 'root',
  database: env.postgresDataBase || 'diag_lab',
  entities: ['../infra/db/postgres/entities/*.ts'],
  migrations: ['../infra/db/postgres/migrations/*.ts'],
  cli: {
    migrationsDir: '../infra/db/postgres/migrations'
  },
  logging: true
}
