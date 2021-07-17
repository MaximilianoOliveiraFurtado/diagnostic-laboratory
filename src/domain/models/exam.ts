export type ExamModel = {
  id: string
  name: string
  type: ExamTypeEnum
  status: StatusEnum
}

enum ExamTypeEnum {
  analise,
  clinica,
  imagem
}

enum StatusEnum {
  ativo,
  inativo
}
