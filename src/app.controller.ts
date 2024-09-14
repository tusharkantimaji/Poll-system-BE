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
  CreateStudentReqDto,
  CreateStudentResDto,
  CreateTeacherReqDto,
  CreateTeacherResDto,
  GetListOfStudentsResDto,
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

  @Get('student')
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
}
