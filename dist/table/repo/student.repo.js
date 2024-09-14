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
exports.StudentRepo = void 0;
const sequelize_1 = require("@nestjs/sequelize");
const student_model_1 = require("../model/student.model");
let StudentRepo = class StudentRepo {
    constructor(repo) {
        this.repo = repo;
    }
    async createStudent(student) {
        return this.repo.create(student, { returning: true });
    }
    async getAllStudents() {
        return this.repo.findAll();
    }
    async kickOutStudent(studentId) {
        await this.repo.update({ isKickedOut: true }, { where: { id: studentId } });
    }
};
exports.StudentRepo = StudentRepo;
exports.StudentRepo = StudentRepo = __decorate([
    __param(0, (0, sequelize_1.InjectModel)(student_model_1.Student)),
    __metadata("design:paramtypes", [Object])
], StudentRepo);
//# sourceMappingURL=student.repo.js.map