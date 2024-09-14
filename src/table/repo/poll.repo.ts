import { InjectModel } from '@nestjs/sequelize';
import { Poll } from '../model/poll.model';

export class PollRepo {
  constructor(@InjectModel(Poll) protected readonly repo: typeof Poll) {}

  public async createPoll(poll: Partial<Poll>): Promise<Poll> {
    return this.repo.create(poll, { returning: true });
  }

  public async getActivePoll(): Promise<Poll> {
    return this.repo.findOne({ where: { isActive: true } });
  }

  public async deletePoll(): Promise<void> {
    await this.repo.destroy({ where: { isActive: true } });
  }

  public async getPollById(pollId: number): Promise<Poll> {
    return this.repo.findOne({ where: { id: pollId } });
  }
}
