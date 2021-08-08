import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { makeAddExamController } from '@/main/factories/controllers/exam/add-exam-controller-factory'
import { makeLoadExamController } from '@/main/factories/controllers/exam/load-exam-controller-factory'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/exam', adaptRoute(makeAddExamController()))
  router.get('/exam', adaptRoute(makeLoadExamController()))
}
