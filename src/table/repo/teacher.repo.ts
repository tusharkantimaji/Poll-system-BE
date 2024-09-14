import { InjectModel } from '@nestjs/sequelize';
import { Teacher } from '../model/teacher.model';

export class TeacherRepo {
  constructor(@InjectModel(Teacher) protected readonly repo: typeof Teacher) {}

  public async createTeacher(teacher: Partial<Teacher>): Promise<Teacher> {
    return this.repo.create(teacher, { returning: true });
  }

  public async deleteTeacher(): Promise<void> {
    await this.repo.destroy({ where: { isActive: true } });
  }

  public async getActiveTeacher(): Promise<Teacher> {
    return this.repo.findOne({ where: { isActive: true } });
  }
}
