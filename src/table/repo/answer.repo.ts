import { InjectModel } from '@nestjs/sequelize';
import { Answer } from '../model/answer.model';

export class AnswerRepo {
  constructor(@InjectModel(Answer) protected readonly repo: typeof Answer) {}

  public async createAnswer(answer: Partial<Answer>): Promise<Answer> {
    return this.repo.create(answer, { returning: true });
  }

  public async getByPollId(pollId: number): Promise<Answer[]> {
    return this.repo.findAll({ where: { pollId } });
  }
}
