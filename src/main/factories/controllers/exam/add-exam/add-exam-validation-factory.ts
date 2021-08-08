import { Validation } from '@/presentation/protocols/validation'
import { ValidationComposite, RequiredFieldValidation, ValidOptionValidation } from '@/validation/validators'

export const makeAddExamValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'type']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new ValidOptionValidation('type', ['clinica', 'analise', 'imagem']))
  return new ValidationComposite(validations)
}
