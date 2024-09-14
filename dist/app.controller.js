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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const app_dto_1 = require("./app.dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async addTeacher(body) {
        return await this.appService.createTeacher(body);
    }
    async deleteTeacher() {
        return this.appService.deleteTeacher();
    }
    async getAllStudents() {
        return this.appService.getAllStudent();
    }
    async kickOutStudents(studentId) {
        return this.appService.kickOutStudents(studentId);
    }
    async addStudent(body) {
        return this.appService.createStudent(body);
    }
    async createPoll(body) {
        return await this.appService.createPoll(body);
    }
    async deactivatePoll(pollId) {
        return await this.appService.deactivatePoll(pollId);
    }
    async getActivePoll(studentId) {
        return await this.appService.getActivePoll(studentId);
    }
    async submitPoll(body) {
        return await this.appService.submitPoll(body);
    }
    async getPollResult(pollId) {
        return await this.appService.getPollResult(pollId);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Post)('teacher'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [app_dto_1.CreateTeacherReqDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "addTeacher", null);
__decorate([
    (0, common_1.Delete)('teacher'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deleteTeacher", null);
__decorate([
    (0, common_1.Get)('all-student'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getAllStudents", null);
__decorate([
    (0, common_1.Put)('student/kick-out/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "kickOutStudents", null);
__decorate([
    (0, common_1.Post)('student'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [app_dto_1.CreateStudentReqDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "addStudent", null);
__decorate([
    (0, common_1.Post)('poll'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [app_dto_1.CreatePollReqDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createPoll", null);
__decorate([
    (0, common_1.Delete)('poll/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deactivatePoll", null);
__decorate([
    (0, common_1.Get)('active-poll/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getActivePoll", null);
__decorate([
    (0, common_1.Post)('submit-poll'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [app_dto_1.SubmitPollReqDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "submitPoll", null);
__decorate([
    (0, common_1.Get)('poll-result/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getPollResult", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map