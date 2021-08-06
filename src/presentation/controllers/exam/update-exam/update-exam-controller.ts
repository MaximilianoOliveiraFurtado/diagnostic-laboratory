import { Controller, HttpRequest, HttpResponse, Validation, UpdateExam } from './update-exam-controller-protocol'
import { badRequest, serverError, noContent } from '@/presentation/helpers/http/http-helper'

export class UpdateExamController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly updateExam: UpdateExam
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { name, type, status } = httpRequest.body
      const id = httpRequest.params.id
      await this.updateExam.update({
        id,
        name,
        type,
        status
      })
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
