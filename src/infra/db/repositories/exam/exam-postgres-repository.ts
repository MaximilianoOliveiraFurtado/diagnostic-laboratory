import { PostgresHelper } from '@/infra/db/postgres/helpers/postgres-helper'
import { AddExamParams } from '@/domain/usecases/exam/add-exam'
import { ExamModel } from '@/domain/models/exam'
import { AddExamRepository } from '@/data/protocols/exam/add-exam-repository'
import { LoadExamRepository } from '@/data/protocols/exam/load-exam-repository'
import { Exam } from '@/infra/db/postgres/entities/Exam'

export class AccountMongoRepository implements AddExamRepository, LoadExamRepository {
  async add (examData: AddExamParams): Promise<ExamModel> {
    return await PostgresHelper.insertOne(Exam, examData)
  }

  async load (): Promise<ExamModel[]> {
    return await PostgresHelper.load(Exam, 'exam')
  }

//   async updateAccessToken (id: string, token: string): Promise<void> {
//     const accountCollection = await MongoHelper.getCollection('accounts')
//     await accountCollection.updateOne({
//       _id: id
//     }, {
//       $set: {
//         accessToken: token
//       }
//     })
//   }
}
