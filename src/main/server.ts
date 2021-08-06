import moduleAlias from 'module-alias'
import path from 'path'
import env from './config/env'
import app from './config/app'
moduleAlias.addAlias('@', path.join(__dirname, '../'))

try {
  app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
} catch (error) {
  console.log(error)
}
