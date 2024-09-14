"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const teacher_repo_1 = require("./table/repo/teacher.repo");
const student_repo_1 = require("./table/repo/student.repo");
const poll_repo_1 = require("./table/repo/poll.repo");
const answer_repo_1 = require("./table/repo/answer.repo");
let AppService = class AppService {
    constructor(teacherRepo, studentRepo, pollRepo, answerRepo) {
        this.teacherRepo = teacherRepo;
        this.studentRepo = studentRepo;
        this.pollRepo = pollRepo;
        this.answerRepo = answerRepo;
    }
    async createTeacher(body) {
        const activeTeacher = await this.teacherRepo.getActiveTeacher();
        if (activeTeacher) {
            throw new common_1.ForbiddenException('There is already an active teacher. Please deactivate the current teacher first.');
        }
        const teacher = await this.teacherRepo.createTeacher({
            name: body.name,
            isActive: true,
        });
        return { id: teacher.id };
    }
    async deleteTeacher() {
        await this.teacherRepo.deleteTeacher();
    }
    async getAllStudent() {
        const students = await this.studentRepo.getAllStudents();
        const studentInfo = students.map((student) => {
            return {
                id: student.id,
                name: student.name,
                isKickedOut: student.isKickedOut,
            };
        });
        return { students: studentInfo };
    }
    async kickOutStudents(studentId) {
        await this.studentRepo.kickOutStudent(studentId);
    }
    async createStudent(body) {
        const student = {
            name: body.name,
            isKickedOut: false,
        };
        const newStudent = await this.studentRepo.createStudent(student);
        return { id: newStudent.id };
    }
    async createPoll(body) {
        const activePoll = await this.pollRepo.getActivePoll();
        if (activePoll) {
            throw new common_1.ForbiddenException('There is already an active poll. Please deactivate the current poll first.');
        }
        const poll = await this.pollRepo.createPoll({
            question: body.question,
            timeLimit: body.timeLimit,
        });
        return { id: poll.id };
    }
    async deactivatePoll() {
        const activePoll = await this.pollRepo.getActivePoll();
        if (!activePoll) {
            throw new common_1.ForbiddenException('There is no active poll.');
        }
        activePoll.isActive = false;
        await activePoll.save();
        return { id: activePoll.id };
    }
    async getActivePoll() {
        const activePoll = await this.pollRepo.getActivePoll();
        if (!activePoll) {
            throw new common_1.ForbiddenException('There is no active poll.');
        }
        return {
            id: activePoll.id,
            question: activePoll.question,
            options: activePoll.options,
            timeLimit: activePoll.timeLimit,
        };
    }
    async submitPoll(body) {
        const poll = await this.pollRepo.getPollById(body.pollId);
        const student = await this.studentRepo.getStudentById(body.studentId);
        if (!poll || !student) {
            throw new common_1.ForbiddenException('Poll or student not found.');
        }
        await this.answerRepo.createAnswer({
            studentId: body.studentId,
            pollId: body.pollId,
            answer: body.selectedOption,
        });
    }
    async getPollResult(pollId) {
        const poll = await this.pollRepo.getPollById(pollId);
        if (!poll) {
            throw new common_1.ForbiddenException('Poll not found.');
        }
        const answers = await this.answerRepo.getByPollId(pollId);
        const result = answers.reduce((acc, answer) => {
            if (!acc[answer.answer]) {
                acc[answer.answer] = 1;
            }
            else {
                acc[answer.answer]++;
            }
            return acc;
        }, {});
        const pollStats = Object.keys(result).map((key) => {
            return {
                option: poll.options[key].option,
                count: result[key],
            };
        });
        return {
            stat: pollStats,
        };
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [teacher_repo_1.TeacherRepo,
        student_repo_1.StudentRepo,
        poll_repo_1.PollRepo,
        answer_repo_1.AnswerRepo])
], AppService);
//# sourceMappingURL=app.service.js.map