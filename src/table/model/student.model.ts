import {
  Column,
  CreatedAt,
  DataType,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({
  tableName: 'Students',
})
// eslint-disable-next-line no-use-before-define
export class Student extends Model<Student> {
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
  isKickedOut: boolean;
}
