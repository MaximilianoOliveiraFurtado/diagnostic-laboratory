import { Controller, HttpRequest, HttpResponse, Validation, AddExam } from './add-exam-controller-protocol'
import { badRequest, serverError, created } from '@/presentation/helpers/http/http-helper'

export class AddExamController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addExam: AddExam
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { name, type } = httpRequest.body
      const exam = await this.addExam.add({
        name,
        type
      })
      return created(exam)
    } catch (error) {
      return serverError(error)
    }
  }
}
