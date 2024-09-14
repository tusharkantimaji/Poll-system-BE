export class CreateTeacherReqDto {
  name: string;
}

export class CreateTeacherResDto {
  id: number;
}

export class CreateStudentReqDto {
  name: string;
}

export class CreateStudentResDto {
  id: number;
}

export class StudentInfoDto {
  id: number;
  name: string;
  isKickedOut: boolean;
}

export class GetListOfStudentsResDto {
  students: StudentInfoDto[];
}

export interface PollOption {
  option: string;
  isCorrect: boolean;
}

export class CreatePollReqDto {
  question: string;
  options: PollOption[];
  timeLimit: number;
}

export class CreatePollResDto {
  id: number;
}

export class GetActivePollResDto {
  id: number;
  question: string;
  options: PollOption[];
  timeLimit: number;
}

export class SubmitPollReqDto {
  studentId: number;
  pollId: number;
  selectedOption: number;
}

export class PollStatDto {
  option: string;
  count: number;
}

export class PollResultResDto {
  stat: PollStatDto[];
}
