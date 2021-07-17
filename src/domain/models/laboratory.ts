export type LaboratoryModel = {
  id: string
  name: string
  adress: string
  status: StatusEnum
}

enum StatusEnum {
  ativo,
  inativo
}
