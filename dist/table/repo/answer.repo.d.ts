import { Answer } from '../model/answer.model';
export declare class AnswerRepo {
    protected readonly repo: typeof Answer;
    constructor(repo: typeof Answer);
    createAnswer(answer: Partial<Answer>): Promise<Answer>;
    getByPollId(pollId: number): Promise<Answer[]>;
    getByStudentAndPollId(studentId: number, pollId: number): Promise<Answer>;
}
