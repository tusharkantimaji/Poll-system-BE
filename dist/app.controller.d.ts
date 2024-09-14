import { AppService } from './app.service';
import { CreatePollReqDto, CreatePollResDto, CreateStudentReqDto, CreateStudentResDto, CreateTeacherReqDto, CreateTeacherResDto, GetActivePollResDto, GetListOfStudentsResDto, PollResultResDto, SubmitPollReqDto } from './app.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    addTeacher(body: CreateTeacherReqDto): Promise<CreateTeacherResDto>;
    deleteTeacher(): Promise<void>;
    getAllStudents(): Promise<GetListOfStudentsResDto>;
    kickOutStudents(studentId: number): Promise<void>;
    addStudent(body: CreateStudentReqDto): Promise<CreateStudentResDto>;
    createPoll(body: CreatePollReqDto): Promise<CreatePollResDto>;
    deactivatePoll(): Promise<CreatePollResDto>;
    getActivePoll(): Promise<GetActivePollResDto>;
    submitPoll(body: SubmitPollReqDto): Promise<void>;
    getPollResult(pollId: number): Promise<PollResultResDto>;
}
