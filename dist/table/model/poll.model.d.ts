import { Model } from 'sequelize-typescript';
export interface QuestionOption {
    option: string;
    isCorrect: boolean;
}
export declare class Poll extends Model<Poll> {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    question: string;
    options: QuestionOption[];
    timeLimit: number;
    isActive: boolean;
}
