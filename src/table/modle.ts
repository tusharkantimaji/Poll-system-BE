import { Global, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Teacher } from './model/teacher.model';
import { Student } from './model/student.model';
import { TeacherRepo } from './repo/teacher.repo';
import { StudentRepo } from './repo/student.repo';
const models = [Teacher, Student];
const repositories = [TeacherRepo, StudentRepo];

@Global()
@Module({
  imports: [SequelizeModule.forFeature(models)],
  providers: repositories,
  exports: repositories,
})
export class TableModule {}
