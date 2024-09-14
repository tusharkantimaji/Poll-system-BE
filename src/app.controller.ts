import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
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
  SubmitPollReqDto,
} from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // ----------------------------- Teacher Activity ---------------------------------

  @Post('teacher')
  public async addTeacher(
    @Body() body: CreateTeacherReqDto,
  ): Promise<CreateTeacherResDto> {
    return await this.appService.createTeacher(body);
  }

  @Delete('teacher')
  public async deleteTeacher(): Promise<void> {
    return this.appService.deleteTeacher();
  }

  @Get('all-student')
  public async getAllStudents(): Promise<GetListOfStudentsResDto> {
    return this.appService.getAllStudent();
  }

  @Put('student/kick-out/:id')
  public async kickOutStudents(
    @Param('id', ParseIntPipe) studentId: number,
  ): Promise<void> {
    return this.appService.kickOutStudents(studentId);
  }

  // ----------------------------- Student Activity ---------------------------------

  @Post('student')
  public async addStudent(
    @Body() body: CreateStudentReqDto,
  ): Promise<CreateStudentResDto> {
    return this.appService.createStudent(body);
  }

  // ----------------------------- Poll Activity ---------------------------------

  @Post('poll')
  public async createPoll(
    @Body() body: CreatePollReqDto,
  ): Promise<CreatePollResDto> {
    return await this.appService.createPoll(body);
  }

  @Delete('poll/:id')
  public async deactivatePoll(
    @Param('id', ParseIntPipe) pollId: number,
  ): Promise<CreatePollResDto> {
    return await this.appService.deactivatePoll(pollId);
  }

  @Get('active-poll')
  public async getActivePoll(): Promise<GetActivePollResDto> {
    return await this.appService.getActivePoll();
  }

  @Post('submit-poll')
  public async submitPoll(@Body() body: SubmitPollReqDto): Promise<void> {
    return await this.appService.submitPoll(body);
  }

  @Get('poll-result/:id')
  public async getPollResult(
    @Param('id', ParseIntPipe) pollId: number,
  ): Promise<PollResultResDto> {
    return await this.appService.getPollResult(pollId);
  }
}
