import { ForbiddenException, Injectable } from '@nestjs/common';
import {
  CreatePollReqDto,
  CreatePollResDto,
  CreateStudentReqDto,
  CreateStudentResDto,
  CreateTeacherReqDto,
  CreateTeacherResDto,
  GetActivePollResDto,
  GetListOfStudentsResDto,
  PollResultResDto,
  StudentInfoDto,
  SubmitPollReqDto,
} from './app.dto';
import { TeacherRepo } from './table/repo/teacher.repo';
import { Student } from './table/model/student.model';
import { StudentRepo } from './table/repo/student.repo';
import { PollRepo } from './table/repo/poll.repo';
import { AnswerRepo } from './table/repo/answer.repo';

@Injectable()
export class AppService {
  constructor(
    private readonly teacherRepo: TeacherRepo,
    private readonly studentRepo: StudentRepo,
    private readonly pollRepo: PollRepo,
    private readonly answerRepo: AnswerRepo,
  ) {}

  // ----------------------------- Teacher Activity ---------------------------------

  public async createTeacher(
    body: CreateTeacherReqDto,
  ): Promise<CreateTeacherResDto> {
    const activeTeacher = await this.teacherRepo.getActiveTeacher();
    if (activeTeacher) {
      throw new ForbiddenException(
        'There is already an active teacher. Please deactivate the current teacher first.',
      );
    }

    const teacher = await this.teacherRepo.createTeacher({
      name: body.name,
      isActive: true,
    });

    return { id: teacher.id };
  }

  public async deleteTeacher(): Promise<void> {
    await this.teacherRepo.deleteTeacher();
  }

  public async getAllStudent(): Promise<GetListOfStudentsResDto> {
    const students = await this.studentRepo.getAllStudents();

    const studentInfo: StudentInfoDto[] = students.map((student) => {
      return {
        id: student.id,
        name: student.name,
        isKickedOut: student.isKickedOut,
      };
    });

    return { students: studentInfo };
  }

  public async kickOutStudents(studentId: number): Promise<void> {
    await this.studentRepo.kickOutStudent(studentId);
  }

  // ----------------------------- Student Activity ---------------------------------

  public async createStudent(
    body: CreateStudentReqDto,
  ): Promise<CreateStudentResDto> {
    const student: Partial<Student> = {
      name: body.name,
      isKickedOut: false,
    };

    const newStudent = await this.studentRepo.createStudent(student);

    return { id: newStudent.id };
  }

  // ----------------------------- Poll Activity ---------------------------------

  public async createPoll(body: CreatePollReqDto): Promise<CreatePollResDto> {
    const poll = await this.pollRepo.createPoll({
      question: body.question,
      options: body.options,
      timeLimit: body.timeLimit,
      isActive: true,
    });

    return { id: poll.id };
  }

  public async deactivatePoll(pollId: number): Promise<CreatePollResDto> {
    const activePoll = await this.pollRepo.getPollById(pollId);
    if (!activePoll || !activePoll.isActive) {
      throw new ForbiddenException('There is no active poll.');
    }

    activePoll.isActive = false;
    await activePoll.save();

    return { id: activePoll.id };
  }

  public async getActivePoll(): Promise<GetActivePollResDto> {
    const activePoll = await this.pollRepo.getActivePoll();
    if (!activePoll) {
      throw new ForbiddenException('There is no active poll.');
    }

    return {
      id: activePoll.id,
      question: activePoll.question,
      options: activePoll.options,
      timeLimit: activePoll.timeLimit,
    };
  }

  public async submitPoll(body: SubmitPollReqDto): Promise<void> {
    const poll = await this.pollRepo.getPollById(body.pollId);
    const student = await this.studentRepo.getStudentById(body.studentId);
    const answer = await this.answerRepo.getByStudentAndPollId(
      student.id,
      poll.id,
    );

    if (!poll || !student || student.isKickedOut || !poll.isActive || answer) {
      throw new ForbiddenException('Not a valid request');
    }

    await this.answerRepo.createAnswer({
      studentId: body.studentId,
      pollId: body.pollId,
      answer: body.answer,
    });
  }

  public async getPollResult(pollId: number): Promise<PollResultResDto> {
    const poll = await this.pollRepo.getPollById(pollId);
    if (!poll) {
      throw new ForbiddenException('Poll not found.');
    }

    const answers = await this.answerRepo.getByPollId(pollId);

    const result = answers.reduce((acc, answer) => {
      if (!acc[answer.answer]) {
        acc[answer.answer] = 1;
      } else {
        acc[answer.answer]++;
      }

      return acc;
    }, {});

    const pollStats = Object.keys(result).map((key) => {
      return {
        option: poll.options[key].option,
        count: result[key],
      };
    });

    return {
      stat: pollStats,
    };
  }
}
