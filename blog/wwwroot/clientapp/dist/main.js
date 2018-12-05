(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app/app.component.html":
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Jon Thomasson Blog';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'the-blog',
            template: __webpack_require__(/*! ./app.component.html */ "./app/app.component.html"),
            styles: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _blog_posts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog/posts.component */ "./app/blog/posts.component.ts");
/* harmony import */ var _blog_postDetail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog/postDetail.component */ "./app/blog/postDetail.component.ts");
/* harmony import */ var _blog_postsList_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog/postsList.component */ "./app/blog/postsList.component.ts");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/dataService */ "./app/shared/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: "", component: _blog_posts_component__WEBPACK_IMPORTED_MODULE_4__["Posts"] },
    { path: "post/:id", component: _blog_postDetail_component__WEBPACK_IMPORTED_MODULE_5__["PostDetail"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _blog_posts_component__WEBPACK_IMPORTED_MODULE_4__["Posts"],
                _blog_postsList_component__WEBPACK_IMPORTED_MODULE_6__["PostsList"],
                _blog_postDetail_component__WEBPACK_IMPORTED_MODULE_5__["PostDetail"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes, {
                    useHash: true,
                    enableTracing: false // for Debugging of the Routes
                })
            ],
            providers: [
                _shared_dataService__WEBPACK_IMPORTED_MODULE_7__["DataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/blog/postDetail.component.html":
/*!********************************************!*\
  !*** ./app/blog/postDetail.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <div class=\"card animated fadeInLeftTiny animation-delay-5\">\r\n        <div class=\"card-body card-body-big\">\r\n            <h1 class=\"no-mt\">Repellat sequi id reiciendis ipsum placeat accusantium debitis</h1>\r\n            <div class=\"mb-4\">\r\n                <img src=\"assets/img/demo/avatar50.jpg\" alt=\"...\" class=\"img-circle mr-1\"> by <a href=\"javascript:void(0)\">Victoria</a> in <a href=\"javascript:void(0)\" class=\"ms-tag ms-tag-info\">Design</a>\r\n                <span class=\"ml-1 d-none d-sm-inline\"><i class=\"zmdi zmdi-time mr-05 color-info\"></i> <span class=\"color-medium-dark\">April 15, 2015</span></span>\r\n                <span class=\"ml-1\"><i class=\"zmdi zmdi-comments color-royal mr-05\"></i> 25</span>\r\n            </div>\r\n            <img src=\"assets/img/demo/post4.jpg\" alt=\"\" class=\"img-fluid mb-4\">\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio delectus <strong>eveniet quas exercitationem explicabo</strong> dolore quibusdam voluptatum saepe consequatur nostrum ducimus, repellendus molestiae natus ipsa, suscipit nihil nisi dolorem sit, sed earum enim quos deserunt. Ipsam, deleniti magni ullam incidunt dolores sit libero rerum reprehenderit velit? Id <a href=\"#\">veniam cum mollitia</a> minima porro quae dicta deserunt eligendi excepturi totam. Voluptatem illum rem, exercitationem. Neque illo magnam deserunt perspiciatis explicabo tempora culpa molestias, pariatur, nostrum a, reprehenderit.</p>\r\n            <blockquote class=\"blockquote blockquote-big\">\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante ultricies nisi vel augue quam semper libero.</p>\r\n                <footer>Someone famous in <cite title=\"Source Title\">Source Title</cite></footer>\r\n            </blockquote>\r\n            <p>Nihil autem, consectetur mollitia est neque aperiam expedita reprehenderit quia in atque. Perferendis nulla asperiores dolores veritatis blanditiis. Quia architecto distinctio natus ad asperiores explicabo cum aliquid officiis, similique, quidem voluptatem odio illum possimus mollitia. Tempore optio soluta iusto maxime, cupiditate aut, assumenda facilis atque enim dicta, esse mollitia itaque voluptatem doloremque doloribus similique ad consequuntur asperiores. Ducimus reiciendis voluptatum fugit praesentium, labore nobis unde quia ullam quidem dolore et cumque. Est ratione similique rem.</p>\r\n            <h3 class=\"color-primary\">Cupiditate necessitatibus inventore facilis</h3>\r\n            <p>Deleniti, ut. Reiciendis cumque, autem quas, est rem nam inventore numquam, voluptatum eius vero repellat aliquam. <strong>Ut incidunt ab veniam fugiat beatae sequi tempora fuga</strong>, impedit unde inventore dignissimos! Beatae omnis amet tempora similique dolores error officia aliquam et cupiditate necessitatibus inventore facilis natus optio adipisci doloribus nulla voluptate sint fuga eum, dolorum aperiam quasi. Earum nemo ab ratione quia placeat voluptatem eos magni officia illo fugit consequatur, nihil aliquam nostrum esse officiis! Provident, a.</p>\r\n            <img src=\"assets/img/demo/avatar2.jpg\" alt=\"\" class=\"imgborder ml-2 mb-2 pull-right\">\r\n            <p>Dolor animi enim tempora. Nostrum velit iure aut dicta non at, rem ea ipsum quia! Eum magni earum accusamus dolores, accusantium, necessitatibus debitis natus expedita iure. Modi repellendus excepturi hic veniam et autem asperiores optio non dolore corrupti distinctio earum perferendis porro velit aperiam exercitationem explicabo dolores quaerat inventore sapiente vitae harum, doloribus. Nulla, inventore. Non totam sed ducimus iusto, excepturi consectetur, facere maxime quisquam, vitae eius iste ullam veritatis dolor enim repudiandae reprehenderit asperiores!</p>\r\n            <p>Suscipit reprehenderit, delectus fugit, eum architecto dolore. Necessitatibus nisi, inventore magnam esse <span class=\"color-royal\">obcaecati qui facilis nulla consequatur</span> culpa eum reprehenderit, quia! Earum debitis voluptas tempore praesentium saepe, vitae qui mollitia voluptates, perferendis voluptatibus consectetur autem similique ea, sunt explicabo. In perspiciatis recusandae tenetur quaerat quos a. Et doloremque illo vel aliquid id laboriosam maiores voluptatem modi, fugiat explicabo perferendis, quo vitae consequatur totam cumque inventore earum aliquam nam eius impedit. Et quam quisquam, ex incidunt?</p>\r\n            <blockquote cite=\"\"> Non totam sed ducimus iusto, excepturi consectetur, facere maxime quisquam, vitae eius iste ullam veritatis dolor enim repudiandae </blockquote>\r\n            <p>Distinctio dolor nulla cum tenetur sapiente pariatur doloremque officia id provident. Repellat sequi id reiciendis ipsum placeat accusantium, debitis in labore a unde. Similique commodi tempore eligendi exercitationem veritatis quaerat voluptatem tenetur, quo autem deleniti recusandae, sit quas blanditiis, temporibus numquam. Nisi repellat perferendis blanditiis praesentium incidunt necessitatibus, eveniet aut libero, ipsa neque recusandae facere adipisci et itaque? Ducimus molestiae ex voluptates itaque adipisci, et tempore aspernatur magnam incidunt quam, eveniet nobis modi asperiores cum.</p>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./app/blog/postDetail.component.ts":
/*!******************************************!*\
  !*** ./app/blog/postDetail.component.ts ***!
  \******************************************/
/*! exports provided: PostDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetail", function() { return PostDetail; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PostDetail = /** @class */ (function () {
    function PostDetail() {
    }
    PostDetail = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "post-detail",
            template: __webpack_require__(/*! ./postDetail.component.html */ "./app/blog/postDetail.component.html")
        })
    ], PostDetail);
    return PostDetail;
}());



/***/ }),

/***/ "./app/blog/posts.component.html":
/*!***************************************!*\
  !*** ./app/blog/posts.component.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "        <posts-list></posts-list>\r\n        <nav aria-label=\"Page navigation\">\r\n            <ul class=\"pagination pagination-plain\">\r\n                <li class=\"page-item\">\r\n                    <a class=\"page-link\" href=\"javascript:void(0)\" aria-label=\"Previous\">\r\n                        <span aria-hidden=\"true\">&laquo;</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"page-item active\"><a class=\"page-link\" href=\"javascript:void(0)\">1</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0)\">2</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0)\">3</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0)\">4</a></li>\r\n                <li class=\"page-item\">\r\n                    <a class=\"page-link\" href=\"javascript:void(0)\" aria-label=\"Next\">\r\n                        <span aria-hidden=\"true\">&raquo;</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n   "

/***/ }),

/***/ "./app/blog/posts.component.ts":
/*!*************************************!*\
  !*** ./app/blog/posts.component.ts ***!
  \*************************************/
/*! exports provided: Posts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Posts", function() { return Posts; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Posts = /** @class */ (function () {
    function Posts() {
    }
    Posts = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "blog-posts",
            template: __webpack_require__(/*! ./posts.component.html */ "./app/blog/posts.component.html")
        })
    ], Posts);
    return Posts;
}());



/***/ }),

/***/ "./app/blog/postsList.component.html":
/*!*******************************************!*\
  !*** ./app/blog/postsList.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"card wow fadeInLeft animation-delay-5 mb-4\" *ngFor=\"let p of posts\">\r\n    <div class=\"card-body overflow-hidden overflow-hidden\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xl-6\">\r\n                <img src=\"assets/img/demo/{{ p.photoName }}\" alt=\"\" class=\"img-fluid mb-4\">\r\n            </div>\r\n            <div class=\"col-xl-6\">\r\n                <h3 class=\"no-mt\"><a href=\"javascript:void(0)\">{{ p.title }}</a></h3>\r\n                <p class=\"mb-4\">{{ p.description }}</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8\">\r\n                <a href=\"javascript:void(0)\" class=\"ms-tag ms-tag-info\" *ngFor=\"let t of p.postTags\">{{t.tag.tagName}}</a>\r\n                <span class=\"ml-1 d-none d-sm-inline\"><i class=\"zmdi zmdi-time mr-05 color-info\"></i> <span class=\"color-medium-dark\">{{ p.creationDate | date:'longDate' }}</span></span>\r\n            </div>\r\n            <div class=\"col-lg-4 text-right\">\r\n                <a  [routerLink]=\"['post',p.id]\" class=\"btn btn-primary btn-raised btn-block animate-icon\">Read More <i class=\"ml-1 no-mr zmdi zmdi-long-arrow-right\"></i></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</article>\r\n"

/***/ }),

/***/ "./app/blog/postsList.component.ts":
/*!*****************************************!*\
  !*** ./app/blog/postsList.component.ts ***!
  \*****************************************/
/*! exports provided: PostsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsList", function() { return PostsList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dataService */ "./app/shared/dataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostsList = /** @class */ (function () {
    function PostsList(data) {
        this.data = data;
        this.numPosts = 5;
        this.posts = data.posts;
    }
    PostsList.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getLatest(this.numPosts)
            .subscribe(function (success) {
            if (success) {
                _this.posts = _this.data.posts;
            }
        });
    };
    PostsList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "posts-list",
            template: __webpack_require__(/*! ./postsList.component.html */ "./app/blog/postsList.component.html"),
        }),
        __metadata("design:paramtypes", [_shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], PostsList);
    return PostsList;
}());



/***/ }),

/***/ "./app/shared/dataService.ts":
/*!***********************************!*\
  !*** ./app/shared/dataService.ts ***!
  \***********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.posts = [];
    }
    DataService.prototype.loadPosts = function () {
        var _this = this;
        return this.http.get("/api/posts")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            _this.posts = data;
            return true;
        }));
    };
    DataService.prototype.getLatest = function (numPosts) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        params = params.append('numPosts', numPosts);
        return this.http.get("/api/posts/getLatest", { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            _this.posts = data;
            return true;
        }));
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Stache\source\repos\JonThomasson.Blog\blog\ClientApp\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map