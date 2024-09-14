"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const teacher_model_1 = require("./model/teacher.model");
const student_model_1 = require("./model/student.model");
const teacher_repo_1 = require("./repo/teacher.repo");
const student_repo_1 = require("./repo/student.repo");
const models = [teacher_model_1.Teacher, student_model_1.Student];
const repositories = [teacher_repo_1.TeacherRepo, student_repo_1.StudentRepo];
let TableModule = class TableModule {
};
exports.TableModule = TableModule;
exports.TableModule = TableModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature(models)],
        providers: repositories,
        exports: repositories,
    })
], TableModule);
//# sourceMappingURL=modle.js.map