import {
  Column,
  CreatedAt,
  DataType,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

export interface QuestionOption {
  option: string;
  isCorrect: boolean;
}

@Table({
  tableName: 'Polls',
})
// eslint-disable-next-line no-use-before-define
export class Poll extends Model<Poll> {
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

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  question: string;

  @Column({
    type: DataType.JSON,
    allowNull: false,
  })
  options: QuestionOption[];

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  timeLimit: number; // in seconds

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  isActive: boolean;
}
