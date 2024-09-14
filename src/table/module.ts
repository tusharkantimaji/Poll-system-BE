import { Global, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Teacher } from './model/teacher.model';
import { Student } from './model/student.model';
import { TeacherRepo } from './repo/teacher.repo';
import { StudentRepo } from './repo/student.repo';
import { Poll } from './model/poll.model';
import { PollRepo } from './repo/poll.repo';
import { AnswerRepo } from './repo/answer.repo';
import { Answer } from './model/answer.model';

const models = [Teacher, Student, Poll, Answer];
const repositories = [TeacherRepo, StudentRepo, PollRepo, AnswerRepo];

@Global()
@Module({
  imports: [SequelizeModule.forFeature(models)],
  providers: repositories,
  exports: repositories,
})
export class TableModule {}
