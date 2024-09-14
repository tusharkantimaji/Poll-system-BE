import { Teacher } from '../model/teacher.model';
export declare class TeacherRepo {
    protected readonly repo: typeof Teacher;
    constructor(repo: typeof Teacher);
    createTeacher(teacher: Partial<Teacher>): Promise<Teacher>;
    deleteTeacher(): Promise<void>;
    getActiveTeacher(): Promise<Teacher>;
}
