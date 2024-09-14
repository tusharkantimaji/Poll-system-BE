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
