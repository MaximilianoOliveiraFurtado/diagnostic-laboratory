/* eslint-disable import/first */
import moduleAlias from 'module-alias'
import path from 'path'
moduleAlias.addAlias('@', path.join(__dirname, '../'))
import env from './config/env'
import { PostgresHelper } from '../infra/db/postgres/helpers/postgres-helper'

PostgresHelper.connect()
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
  })
  .catch(console.error)
