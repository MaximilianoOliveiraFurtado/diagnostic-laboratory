import { Controller, HttpRequest, HttpResponse, LoadExam } from './load-exam-controller-protocols'
import { ok, serverError, noContent } from '@/presentation/helpers/http/http-helper'

export class LoadExamController implements Controller {
  constructor (private readonly loadExam: LoadExam) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const exam = await this.loadExam.load()
      return exam.length ? ok(exam) : noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
