export type ExamModel = {
  id: string
  name: string
  type: ExamTypeEnum
  status: boolean
}

enum ExamTypeEnum {
  analise,
  clinica,
  imagem
}
