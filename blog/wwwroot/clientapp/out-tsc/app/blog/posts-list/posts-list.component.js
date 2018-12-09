var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { DataService } from "../shared/data-service";
var PostsListComponent = /** @class */ (function () {
    function PostsListComponent(data) {
        this.data = data;
        this.numPosts = 5;
        this.posts = data.posts;
    }
    PostsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getLatest(this.numPosts)
            .subscribe(function (success) {
            if (success) {
                _this.posts = _this.data.posts;
            }
        });
    };
    PostsListComponent = __decorate([
        Component({
            selector: "posts-list",
            templateUrl: "posts-list.component.html",
        }),
        __metadata("design:paramtypes", [DataService])
    ], PostsListComponent);
    return PostsListComponent;
}());
export { PostsListComponent };
//# sourceMappingURL=posts-list.component.js.map