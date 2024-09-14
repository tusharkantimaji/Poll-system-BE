import {
  Column,
  CreatedAt,
  DataType,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({
  tableName: 'Teachers',
})
// eslint-disable-next-line no-use-before-define
export class Teacher extends Model<Teacher> {
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
  name: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  isActive: boolean;
}
