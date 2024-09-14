export declare class CreateTeacherReqDto {
    name: string;
}
export declare class CreateTeacherResDto {
    id: number;
}
export declare class CreateStudentReqDto {
    name: string;
}
export declare class CreateStudentResDto {
    id: number;
}
export declare class StudentInfoDto {
    id: number;
    name: string;
    isKickedOut: boolean;
}
export declare class GetListOfStudentsResDto {
    students: StudentInfoDto[];
}
