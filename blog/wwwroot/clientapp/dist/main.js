(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./blog/blog.module": [
		"./app/blog/blog.module.ts",
		"blog-blog-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./app/app-routing.module.ts":
/*!***********************************!*\
  !*** ./app/app-routing.module.ts ***!
  \***********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/about/about.component */ "./app/home/about/about.component.ts");
/* harmony import */ var _home_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/contact/contact.component */ "./app/home/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    {
        path: 'blog',
        loadChildren: './blog/blog.module#BlogModule'
    },
    { path: 'contact', component: _home_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"] },
    { path: 'about', component: _home_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
                    useHash: true,
                    enableTracing: false // for Debugging of the Routes
                })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app/app.component.html":
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<layout-header></layout-header>\r\n<router-outlet></router-outlet>\r\n<layout-footer></layout-footer>"

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
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'main-site',
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
/* harmony import */ var _shared_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/layout/footer/footer.component */ "./app/shared/layout/footer/footer.component.ts");
/* harmony import */ var _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/layout/header/header.component */ "./app/shared/layout/header/header.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/about/about.component */ "./app/home/about/about.component.ts");
/* harmony import */ var _home_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/contact/contact.component */ "./app/home/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _shared_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _home_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _home_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            //providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/home/about/about.component.css":
/*!********************************************!*\
  !*** ./app/home/about/about.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/home/about/about.component.html":
/*!*********************************************!*\
  !*** ./app/home/about/about.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ms-hero-page-override ms-hero-img-city ms-hero-bg-primary\">\r\n    <div class=\"container\">\r\n        <div class=\"text-center\">\r\n            <span class=\"ms-logo ms-logo-lg ms-logo-white center-block mb-2 mt-2 animated zoomInDown animation-delay-5\">M</span>\r\n            <h1 class=\"no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5\">Material<span>Style</span></h1>\r\n            <p class=\"lead lead-lg color-white text-center center-block mt-2 mw-800 text-uppercase fw-300 animated fadeInUp animation-delay-7\">Discover our projects and the <span class=\"color-warning\">rigorous process</span> of creation. Our principles are creativity, design, experience and knowledge.</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n    <div class=\"card card-hero animated slideInUp animation-delay-8 mb-6\">\r\n        <div class=\"card-body\">\r\n            <h2 class=\"color-primary\">About Us</h2>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 text-justify\">\r\n                    <p class=\"dropcaps\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ipsa id saepe, quos ullam fugiat velit pariatur alias cumque. Architecto et vitae perferendis cumque ratione officiis? Quas quod, rerum dolores qui. Iste magnam ipsam laborum. Natus quis maiores est qui maxime, consectetur ipsam esse quaerat facilis quos repudiandae eaque magni laboriosam amet.</p>\r\n                    <p>Perferendis, blanditiis unde fugiat voluptas molestias velit asperiores rerum ipsam animi eum temporibus at numquam, nobis voluptates minus maxime cum obcaecati! Tenetur sit corporis laudantium inventore officia officiis odio repellat dolore quos repudiandae voluptas ad facere, amet placeat animi voluptatem distinctio beatae.</p>\r\n                </div>\r\n                <div class=\"col-lg-6 text-justify\">\r\n                    <p>Non sequi adipisci nostrum natus rem accusamus itaque repellendus illum neque! Voluptate, error commodi a quaerat eveniet tenetur reiciendis nulla doloremque iusto repellat quis asperiores, quibusdam architecto culpa facere aliquam placeat eaque amet, optio nobis alias maiores. Nulla perferendis impedit hic placeat veniam distinctio error.</p>\r\n                    <p>Tenetur numquam a, nesciunt neque odit amet, qui quibusdam natus assumenda quas omnis, aspernatur quisquam nobis illum ea distinctio tempora quaerat. Aperiam cumque, eveniet similique praesentium, temporibus, id quis labore aspernatur quod placeat ducimus fuga consequuntur numquam autem. Voluptates repellat.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./app/home/about/about.component.ts":
/*!*******************************************!*\
  !*** ./app/home/about/about.component.ts ***!
  \*******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./app/home/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./app/home/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./app/home/contact/contact.component.css":
/*!************************************************!*\
  !*** ./app/home/contact/contact.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/home/contact/contact.component.html":
/*!*************************************************!*\
  !*** ./app/home/contact/contact.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ms-hero-page-override ms-hero-img-team ms-hero-bg-primary\">\r\n    <div class=\"container\">\r\n        <div class=\"text-center\">\r\n            <h1 class=\"no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5\">Contact Us</h1>\r\n            <p class=\"lead lead-lg color-light text-center center-block mt-2 mw-800 text-uppercase fw-300 animated fadeInUp animation-delay-7\">Do you need a boost in your project? <br>Contact us we will help you to finish your dream.</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n    <div class=\"card card-hero animated fadeInUp animation-delay-7\">\r\n        <div class=\"card-body\">\r\n            <form class=\"form-horizontal\">\r\n                <fieldset class=\"container\">\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputEmail\" autocomplete=\"false\" class=\"col-lg-2 control-label\">Name</label>\r\n                        <div class=\"col-lg-9\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"inputName\" placeholder=\"Name\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputEmail\" autocomplete=\"false\" class=\"col-lg-2 control-label\">Email</label>\r\n                        <div class=\"col-lg-9\">\r\n                            <input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputEmail\" autocomplete=\"false\" class=\"col-lg-2 control-label\">Subject</label>\r\n                        <div class=\"col-lg-9\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"inputSubject\" placeholder=\"Subject\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"textArea\" class=\"col-lg-2 control-label\">Message</label>\r\n                        <div class=\"col-lg-9\">\r\n                            <textarea class=\"form-control\" rows=\"3\" id=\"textArea\" placeholder=\"Yout message...\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row justify-content-end\">\r\n                        <div class=\"col-lg-10\">\r\n                            <button type=\"submit\" class=\"btn btn-raised btn-primary\">Submit</button>\r\n                            <button type=\"button\" class=\"btn btn-danger\">Cancel</button>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./app/home/contact/contact.component.ts":
/*!***********************************************!*\
  !*** ./app/home/contact/contact.component.ts ***!
  \***********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./app/home/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./app/home/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./app/shared/layout/footer/footer.component.html":
/*!********************************************************!*\
  !*** ./app/shared/layout/footer/footer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"ms-footbar\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-12 ms-footer-col\">\r\n                <div class=\"ms-footbar-block\">\r\n                    <h3 class=\"ms-footbar-title\">Subscribe</h3>\r\n                    <p class=\"\">Sign up for blog updates.</p>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-12 ms-footer-col\">\r\n                <div class=\"ms-footbar-block\">\r\n                    <form>\r\n                        <div class=\"form-group label-floating mt-2 mb-1\">\r\n                            <div class=\"input-group ms-input-subscribe\">\r\n                                <label class=\"control-label\" for=\"ms-subscribe\"><i class=\"zmdi zmdi-email\"></i> Email Adress</label>\r\n                                <input type=\"email\" id=\"ms-subscribe\" class=\"form-control\">\r\n                            </div>\r\n                        </div>\r\n                        <button class=\"ms-subscribre-btn\" type=\"button\">Subscribe</button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-12 ms-footer-col ms-footer-text-right\">\r\n                <div class=\"ms-footbar-block\">\r\n                    <h3 class=\"ms-footbar-title\">Social Media</h3>\r\n                    <div class=\"ms-footbar-social\">\r\n                        <a href=\"javascript:void(0)\" class=\"btn-circle btn-twitter\"><i class=\"zmdi zmdi-twitter\"></i></a>\r\n                        <a href=\"javascript:void(0)\" class=\"btn-circle btn-youtube\"><i class=\"zmdi zmdi-youtube-play\"></i></a>\r\n                        <a href=\"javascript:void(0)\" class=\"btn-circle btn-github\"><i class=\"zmdi zmdi-github\"></i></a>\r\n                        <a href=\"javascript:void(0)\" class=\"btn-circle btn-github\"><i class=\"zmdi zmdi-linkedin\"></i></a>\r\n                        <a href=\"javascript:void(0)\" class=\"btn-circle btn-github\"><i class=\"zmdi zmdi-rss\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</aside>\r\n<footer class=\"ms-footer\">\r\n    <div class=\"container\">\r\n        <p>Copyright &copy; Jon Thomasson 2019</p>\r\n    </div>\r\n</footer>\r\n<div class=\"btn-back-top\">\r\n    <a href=\"#\" data-scroll id=\"back-top\" class=\"btn-circle btn-circle-primary btn-circle-sm btn-circle-raised \"><i class=\"zmdi zmdi-long-arrow-up\"></i></a>\r\n</div>\r\n"

/***/ }),

/***/ "./app/shared/layout/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./app/shared/layout/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "layout-footer",
            template: __webpack_require__(/*! ./footer.component.html */ "./app/shared/layout/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./app/shared/layout/header/header.component.html":
/*!********************************************************!*\
  !*** ./app/shared/layout/header/header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <header class=\"ms-header ms-header-primary\">\r\n        <!--ms-header-primary-->\r\n        <div class=\"container container-full\">\r\n            <div class=\"ms-title\">\r\n                <a href=\"index.html\">\r\n                    <img src=\"/assets/img/demo/headshot50x50.jpg\" alt=\"...\" class=\"rounded-circle mr-1\">\r\n                    <h1 class=\"animated fadeInRight animation-delay-6\">Jon <span>Thomasson</span></h1>\r\n                </a>\r\n            </div>\r\n            <div class=\"header-right\">\r\n                <div class=\"share-menu\">\r\n                    <ul class=\"share-menu-list\">\r\n                        <li class=\"animated fadeInRight animation-delay-3\"><a href=\"javascript:void(0)\" class=\"btn-circle btn-google\"><i class=\"zmdi zmdi-google\"></i></a></li>\r\n                        <li class=\"animated fadeInRight animation-delay-2\"><a href=\"javascript:void(0)\" class=\"btn-circle btn-facebook\"><i class=\"zmdi zmdi-facebook\"></i></a></li>\r\n                        <li class=\"animated fadeInRight animation-delay-1\"><a href=\"javascript:void(0)\" class=\"btn-circle btn-twitter\"><i class=\"zmdi zmdi-twitter\"></i></a></li>\r\n                    </ul>\r\n                    <a href=\"javascript:void(0)\" class=\"btn-circle btn-circle-primary animated zoomInDown animation-delay-7\"><i class=\"zmdi zmdi-share\"></i></a>\r\n                </div>\r\n                <form class=\"search-form animated zoomInDown animation-delay-9\">\r\n                    <input id=\"search-box\" type=\"text\" class=\"search-input\" placeholder=\"Search...\" name=\"q\" />\r\n                    <label for=\"search-box\"><i class=\"zmdi zmdi-search\"></i></label>\r\n                </form>\r\n                <a href=\"javascript:void(0)\" class=\"btn-circle btn-rss animated zoomInDown animation-delay-9\"><i class=\"zmdi zmdi-rss\"></i></a>\r\n\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <nav class=\"navbar navbar-expand-md  navbar-static ms-navbar ms-navbar-primary\">\r\n        <div class=\"container container-full\">\r\n            <div class=\"navbar-header\">\r\n                <a class=\"navbar-brand\" href=\"index.html\">\r\n                    <img src=\"/assets/img/demo/headshot35x35.jpg\" alt=\"...\" class=\"rounded-circle mr-1\">\r\n                 \r\n                    <span class=\"ms-title\">Jon <strong>Thomasson</strong></span>\r\n                </a>\r\n            </div>\r\n            <div class=\"collapse navbar-collapse\" id=\"ms-navbar\">\r\n                <ul class=\"navbar-nav\">\r\n                    <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                        <a class=\"nav-link\" routerLink=\"blog\">Blog</a>\r\n                    </li>\r\n                    <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                        <a class=\"nav-link\" routerLink=\"about\" >About</a>\r\n                    </li>\r\n                    <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                        <a class=\"nav-link\" routerLink=\"contact\" >Contact Me</a>\r\n                    </li>\r\n                </ul>\r\n\r\n            </div>\r\n        </div> <!-- container -->\r\n    </nav>\r\n"

/***/ }),

/***/ "./app/shared/layout/header/header.component.ts":
/*!******************************************************!*\
  !*** ./app/shared/layout/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "layout-header",
            template: __webpack_require__(/*! ./header.component.html */ "./app/shared/layout/header/header.component.html")
        })
    ], HeaderComponent);
    return HeaderComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Stache\source\repos\jonthomasson\JonThomasson.Blog\blog\ClientApp\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map