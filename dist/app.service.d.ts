import { CreateStudentReqDto, CreateStudentResDto, CreateTeacherReqDto, CreateTeacherResDto, GetListOfStudentsResDto } from './app.dto';
import { TeacherRepo } from './table/repo/teacher.repo';
import { StudentRepo } from './table/repo/student.repo';
export declare class AppService {
    private readonly teacherRepo;
    private readonly studentRepo;
    constructor(teacherRepo: TeacherRepo, studentRepo: StudentRepo);
    createTeacher(body: CreateTeacherReqDto): Promise<CreateTeacherResDto>;
    deleteTeacher(): Promise<void>;
    createStudent(body: CreateStudentReqDto): Promise<CreateStudentResDto>;
    getAllStudent(): Promise<GetListOfStudentsResDto>;
    kickOutStudents(studentId: number): Promise<void>;
}
