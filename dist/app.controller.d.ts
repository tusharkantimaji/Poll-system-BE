import { AppService } from './app.service';
import { CreateStudentReqDto, CreateStudentResDto, CreateTeacherReqDto, CreateTeacherResDto, GetListOfStudentsResDto } from './app.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    addTeacher(body: CreateTeacherReqDto): Promise<CreateTeacherResDto>;
    deleteTeacher(): Promise<void>;
    getAllStudents(): Promise<GetListOfStudentsResDto>;
    kickOutStudents(studentId: number): Promise<void>;
    addStudent(body: CreateStudentReqDto): Promise<CreateStudentResDto>;
}
