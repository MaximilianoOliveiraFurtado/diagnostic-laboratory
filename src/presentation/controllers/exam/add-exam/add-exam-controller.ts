import { Controller, HttpRequest, HttpResponse, AddExam } from './add-exam-controller-protocol'
import { serverError, created } from '@/presentation/helpers/http/http-helper'

export class AddExamController implements Controller {
  constructor (
    // private readonly validation: Validation,
    private readonly addExam: AddExam
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      // const error = this.validation.validate(httpRequest.body)
      // if (error) {
      //   return badRequest(error)
      // }
      const { name, type } = httpRequest.body
      const exam = await this.addExam.add({
        name,
        type
      })
      return created(exam)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
