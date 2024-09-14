import { Model } from 'sequelize-typescript';
export declare class Answer extends Model<Answer> {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    pollId: number;
    studentId: number;
    answer: number;
}
