import { Model } from 'sequelize-typescript';
export declare class Teacher extends Model<Teacher> {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    isActive: boolean;
}
