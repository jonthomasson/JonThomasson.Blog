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
import { BlogDataService } from "../../../blog/shared/blog-data.service";
var FooterComponent = /** @class */ (function () {
    function FooterComponent(data) {
        this.data = data;
        this.emailSubscribe = '';
    }
    FooterComponent.prototype.onEmailSignup = function () {
        console.log(this.emailSubscribe);
        //this.data.postComment(this.comment)
        //    .subscribe(success => {
        //        if (success) {
        //            //if (this.data.order.items.length == 0) {
        //            //    this.router.navigate([""]);
        //            //} else {
        //            //    this.router.navigate(["checkout"]);
        //            //}
        //        }
        //    });
    };
    FooterComponent = __decorate([
        Component({
            selector: "layout-footer",
            templateUrl: "footer.component.html"
        }),
        __metadata("design:paramtypes", [BlogDataService])
    ], FooterComponent);
    return FooterComponent;
}());
export { FooterComponent };
//# sourceMappingURL=footer.component.js.map