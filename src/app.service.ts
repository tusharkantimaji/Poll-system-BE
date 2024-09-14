import { ForbiddenException, Injectable } from '@nestjs/common';
import {
  CreateStudentReqDto,
  CreateStudentResDto,
  CreateTeacherReqDto,
  CreateTeacherResDto,
  GetListOfStudentsResDto,
  StudentInfoDto,
} from './app.dto';
import { TeacherRepo } from './table/repo/teacher.repo';
import { Student } from './table/model/student.model';
import { StudentRepo } from './table/repo/student.repo';

@Injectable()
export class AppService {
  constructor(
    private readonly teacherRepo: TeacherRepo,
    private readonly studentRepo: StudentRepo,
  ) {}

  // ----------------------------- Teacher Activity ---------------------------------

  public async createTeacher(
    body: CreateTeacherReqDto,
  ): Promise<CreateTeacherResDto> {
    const activeTeacher = await this.teacherRepo.getActiveTeacher();
    if (activeTeacher) {
      throw new ForbiddenException(
        'There is already an active teacher. Please deactivate the current teacher first.',
      );
    }

    const teacher = await this.teacherRepo.createTeacher({
      name: body.name,
      isActive: true,
    });

    return { id: teacher.id };
  }

  public async deleteTeacher(): Promise<void> {
    await this.teacherRepo.deleteTeacher();
  }

  public async getAllStudent(): Promise<GetListOfStudentsResDto> {
    const students = await this.studentRepo.getAllStudents();

    const studentInfo: StudentInfoDto[] = students.map((student) => {
      return {
        id: student.id,
        name: student.name,
        isKickedOut: student.isKickedOut,
      };
    });

    return { students: studentInfo };
  }

  public async kickOutStudents(studentId: number): Promise<void> {
    await this.studentRepo.kickOutStudent(studentId);
  }

  // ----------------------------- Student Activity ---------------------------------

  public async createStudent(
    body: CreateStudentReqDto,
  ): Promise<CreateStudentResDto> {
    const student: Partial<Student> = {
      name: body.name,
      isKickedOut: false,
    };

    const newStudent = await this.studentRepo.createStudent(student);

    return { id: newStudent.id };
  }
}
