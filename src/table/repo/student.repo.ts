import { InjectModel } from '@nestjs/sequelize';
import { Student } from '../model/student.model';

export class StudentRepo {
  constructor(@InjectModel(Student) protected readonly repo: typeof Student) {}

  public async createStudent(student: Partial<Student>): Promise<Student> {
    return this.repo.create(student, { returning: true });
  }

  public async getAllStudents(): Promise<Student[]> {
    return this.repo.findAll();
  }

  public async kickOutStudent(studentId: number): Promise<void> {
    await this.repo.update({ isKickedOut: true }, { where: { id: studentId } });
  }

  public async getStudentById(studentId: number): Promise<Student[]> {
    return this.repo.findAll({ where: { id: studentId } });
  }
}
