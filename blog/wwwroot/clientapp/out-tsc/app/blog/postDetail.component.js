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
import { DataService } from "../shared/dataService";
var PostDetail = /** @class */ (function () {
    function PostDetail(data) {
        this.data = data;
        this.postId = 1;
        this.post = data.post;
    }
    PostDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getPost(this.postId)
            .subscribe(function (success) {
            if (success) {
                _this.post = _this.data.post;
            }
        });
    };
    PostDetail = __decorate([
        Component({
            selector: "post-detail",
            templateUrl: "postDetail.component.html"
        }),
        __metadata("design:paramtypes", [DataService])
    ], PostDetail);
    return PostDetail;
}());
export { PostDetail };
//# sourceMappingURL=postDetail.component.js.map