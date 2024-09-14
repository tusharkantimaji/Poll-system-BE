import { Model } from 'sequelize-typescript';
export declare class Student extends Model<Student> {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    isKickedOut: boolean;
}
