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
export interface PollOption {
    option: string;
    isCorrect: boolean;
}
export declare class CreatePollReqDto {
    question: string;
    options: PollOption[];
    timeLimit: number;
}
export declare class CreatePollResDto {
    id: number;
}
export declare class GetActivePollResDto {
    id: number;
    question: string;
    options: PollOption[];
    timeLimit: number;
}
export declare class SubmitPollReqDto {
    studentId: number;
    pollId: number;
    selectedOption: number;
}
export declare class PollStatDto {
    option: string;
    count: number;
}
export declare class PollResultResDto {
    stat: PollStatDto[];
}
