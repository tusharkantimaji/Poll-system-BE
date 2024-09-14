import { CreatePollReqDto, CreatePollResDto, CreateStudentReqDto, CreateStudentResDto, CreateTeacherReqDto, CreateTeacherResDto, GetActivePollResDto, GetListOfStudentsResDto, PollResultResDto, SubmitPollReqDto } from './app.dto';
import { TeacherRepo } from './table/repo/teacher.repo';
import { StudentRepo } from './table/repo/student.repo';
import { PollRepo } from './table/repo/poll.repo';
import { AnswerRepo } from './table/repo/answer.repo';
export declare class AppService {
    private readonly teacherRepo;
    private readonly studentRepo;
    private readonly pollRepo;
    private readonly answerRepo;
    constructor(teacherRepo: TeacherRepo, studentRepo: StudentRepo, pollRepo: PollRepo, answerRepo: AnswerRepo);
    createTeacher(body: CreateTeacherReqDto): Promise<CreateTeacherResDto>;
    deleteTeacher(): Promise<void>;
    getAllStudent(): Promise<GetListOfStudentsResDto>;
    kickOutStudents(studentId: number): Promise<void>;
    createStudent(body: CreateStudentReqDto): Promise<CreateStudentResDto>;
    createPoll(body: CreatePollReqDto): Promise<CreatePollResDto>;
    deactivatePoll(): Promise<CreatePollResDto>;
    getActivePoll(): Promise<GetActivePollResDto>;
    submitPoll(body: SubmitPollReqDto): Promise<void>;
    getPollResult(pollId: number): Promise<PollResultResDto>;
}
