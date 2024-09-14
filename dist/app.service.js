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
let AppService = class AppService {
    constructor(teacherRepo, studentRepo) {
        this.teacherRepo = teacherRepo;
        this.studentRepo = studentRepo;
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
    async createStudent(body) {
        const student = {
            name: body.name,
            isKickedOut: false,
        };
        const newStudent = await this.studentRepo.createStudent(student);
        return { id: newStudent.id };
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
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [teacher_repo_1.TeacherRepo,
        student_repo_1.StudentRepo])
], AppService);
//# sourceMappingURL=app.service.js.map