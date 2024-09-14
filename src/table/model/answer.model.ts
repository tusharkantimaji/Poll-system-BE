import {
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Poll } from '../model/poll.model';
import { Student } from '../model/student.model';

@Table({
  tableName: 'Answers',
})
// eslint-disable-next-line no-use-before-define
export class Answer extends Model<Answer> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  id: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @ForeignKey(() => Poll)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  pollId: number;

  @ForeignKey(() => Student)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  studentId: number;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  answer: number;
}
