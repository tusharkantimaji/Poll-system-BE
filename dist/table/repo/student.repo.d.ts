import { Student } from '../model/student.model';
export declare class StudentRepo {
    protected readonly repo: typeof Student;
    constructor(repo: typeof Student);
    createStudent(student: Partial<Student>): Promise<Student>;
    getAllStudents(): Promise<Student[]>;
    kickOutStudent(studentId: number): Promise<void>;
    getStudentById(studentId: number): Promise<Student>;
}
