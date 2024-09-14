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
exports.PollRepo = void 0;
const sequelize_1 = require("@nestjs/sequelize");
const poll_model_1 = require("../model/poll.model");
let PollRepo = class PollRepo {
    constructor(repo) {
        this.repo = repo;
    }
    async createPoll(poll) {
        return this.repo.create(poll, { returning: true });
    }
    async getActivePoll() {
        return this.repo.findOne({ where: { isActive: true } });
    }
    async getActivePolls() {
        return this.repo.findAll({ where: { isActive: true } });
    }
    async deletePoll() {
        await this.repo.destroy({ where: { isActive: true } });
    }
    async getPollById(pollId) {
        return this.repo.findOne({ where: { id: pollId } });
    }
};
exports.PollRepo = PollRepo;
exports.PollRepo = PollRepo = __decorate([
    __param(0, (0, sequelize_1.InjectModel)(poll_model_1.Poll)),
    __metadata("design:paramtypes", [Object])
], PollRepo);
//# sourceMappingURL=poll.repo.js.map