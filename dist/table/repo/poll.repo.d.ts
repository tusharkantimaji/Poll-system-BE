import { Poll } from '../model/poll.model';
export declare class PollRepo {
    protected readonly repo: typeof Poll;
    constructor(repo: typeof Poll);
    createPoll(poll: Partial<Poll>): Promise<Poll>;
    getActivePoll(): Promise<Poll>;
    getActivePolls(): Promise<Poll[]>;
    deletePoll(): Promise<void>;
    getPollById(pollId: number): Promise<Poll>;
}
