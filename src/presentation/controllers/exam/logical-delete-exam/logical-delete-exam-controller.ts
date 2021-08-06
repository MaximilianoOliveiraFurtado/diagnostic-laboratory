import { Controller, HttpRequest, HttpResponse, Validation, LogicalDeleteExam } from './logical-delete-exam-controller-protocol'
import { badRequest, serverError, noContent } from '@/presentation/helpers/http/http-helper'

export class LogicalDeleteExamController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly logicalDeleteExam: LogicalDeleteExam
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.params)
      if (error) {
        return badRequest(error)
      }
      const id = httpRequest.params.id
      await this.logicalDeleteExam.logicalDelete(id)
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
