import { Validation } from '@/presentation/protocols'
import { InvalidParamError } from '@/presentation/errors'

export class ValidOptionValidation implements Validation {
  constructor (
    private readonly fieldName: string,
    private readonly validValues: string[]
  ) {}

  validate (input: any): Error {
    const isValid = this.validValues.includes(input[this.fieldName])
    if (!isValid) {
      return new InvalidParamError(this.fieldName)
    }
  }
}
