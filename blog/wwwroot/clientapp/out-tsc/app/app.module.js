var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { Posts } from "./blog/posts.component";
import { PostDetail } from "./blog/postDetail.component";
import { PostsList } from "./blog/postsList.component";
import { Header } from "./shared/layout/header.component";
import { Footer } from "./shared/layout/footer.component";
import { Blog } from "./blog/blog.component";
import { DataService } from "./shared/dataService";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
var routes = [
    { path: "", component: Blog },
    { path: "post/:id", component: PostDetail },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                Posts,
                PostsList,
                PostDetail,
                Header,
                Footer,
                Blog
            ],
            imports: [
                BrowserModule,
                HttpClientModule,
                FormsModule,
                RouterModule.forRoot(routes, {
                    useHash: true,
                    enableTracing: false // for Debugging of the Routes
                })
            ],
            providers: [
                DataService
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map