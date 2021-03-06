var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.posts = [];
    }
    DataService.prototype.loadPosts = function () {
        var _this = this;
        return this.http.get("/api/posts")
            .pipe(map(function (data) {
            _this.posts = data;
            return true;
        }));
    };
    DataService.prototype.getLatest = function (numPosts) {
        var _this = this;
        var params = new HttpParams();
        params = params.append('numPosts', numPosts);
        return this.http.get("/api/posts/getLatest", { params: params })
            .pipe(map(function (data) {
            _this.posts = data;
            return true;
        }));
    };
    DataService.prototype.getPost = function (id) {
        var _this = this;
        return this.http.get("/api/posts/" + id)
            .pipe(map(function (data) {
            _this.post = data;
            return true;
        }));
    };
    DataService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data-service.js.map