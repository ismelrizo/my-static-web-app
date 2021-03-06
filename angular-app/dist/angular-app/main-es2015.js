(self["webpackChunkangular_app"] = self["webpackChunkangular_app"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

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
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _components_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home-one/home-one.component */ 2489);
/* harmony import */ var _components_home_two_home_two_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home-two/home-two.component */ 6519);
/* harmony import */ var _components_home_three_home_three_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home-three/home-three.component */ 3562);
/* harmony import */ var _components_home_four_home_four_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home-four/home-four.component */ 7496);
/* harmony import */ var _components_home_five_home_five_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home-five/home-five.component */ 3806);
/* harmony import */ var _components_home_six_home_six_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home-six/home-six.component */ 6174);
/* harmony import */ var _components_home_seven_home_seven_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home-seven/home-seven.component */ 4616);
/* harmony import */ var _components_home_eight_home_eight_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home-eight/home-eight.component */ 3860);
/* harmony import */ var _components_home_nine_home_nine_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home-nine/home-nine.component */ 7747);
/* harmony import */ var _components_home_ten_home_ten_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home-ten/home-ten.component */ 390);
/* harmony import */ var _components_home_eleven_home_eleven_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home-eleven/home-eleven.component */ 2505);
/* harmony import */ var _components_home_twelve_home_twelve_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home-twelve/home-twelve.component */ 7505);
/* harmony import */ var _components_home_thirteen_home_thirteen_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home-thirteen/home-thirteen.component */ 1011);
/* harmony import */ var _components_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/blog-details/blog-details.component */ 8794);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 7716);

















const routes = [
    { path: '', component: _components_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_0__.HomeOneComponent },
    { path: 'home-2', component: _components_home_two_home_two_component__WEBPACK_IMPORTED_MODULE_1__.HomeTwoComponent },
    { path: 'home-3', component: _components_home_three_home_three_component__WEBPACK_IMPORTED_MODULE_2__.HomeThreeComponent },
    { path: 'home-4', component: _components_home_four_home_four_component__WEBPACK_IMPORTED_MODULE_3__.HomeFourComponent },
    { path: 'home-5', component: _components_home_five_home_five_component__WEBPACK_IMPORTED_MODULE_4__.HomeFiveComponent },
    { path: 'home-6', component: _components_home_six_home_six_component__WEBPACK_IMPORTED_MODULE_5__.HomeSixComponent },
    { path: 'home-7', component: _components_home_seven_home_seven_component__WEBPACK_IMPORTED_MODULE_6__.HomeSevenComponent },
    { path: 'home-8', component: _components_home_eight_home_eight_component__WEBPACK_IMPORTED_MODULE_7__.HomeEightComponent },
    { path: 'home-9', component: _components_home_nine_home_nine_component__WEBPACK_IMPORTED_MODULE_8__.HomeNineComponent },
    { path: 'home-10', component: _components_home_ten_home_ten_component__WEBPACK_IMPORTED_MODULE_9__.HomeTenComponent },
    { path: 'home-11', component: _components_home_eleven_home_eleven_component__WEBPACK_IMPORTED_MODULE_10__.HomeElevenComponent },
    { path: 'home-12', component: _components_home_twelve_home_twelve_component__WEBPACK_IMPORTED_MODULE_11__.HomeTwelveComponent },
    { path: 'home-13', component: _components_home_thirteen_home_thirteen_component__WEBPACK_IMPORTED_MODULE_12__.HomeThirteenComponent },
    { path: 'blog-details', component: _components_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_13__.BlogDetailsComponent },
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _components_common_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/common/preloader/preloader.component */ 4425);
/* harmony import */ var _components_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/common/navbar/navbar.component */ 4173);
/* harmony import */ var _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/common/footer/footer.component */ 1823);








class AppComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.recallJsFuntions();
    }
    recallJsFuntions() {
        this.router.events
            .subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationStart) {
                $('.preloader').fadeIn('slow');
            }
        });
        this.routerSubscription = this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationCancel))
            .subscribe(event => {
            $.getScript('../assets/js/main.js');
            $('.preloader').fadeOut('slow');
            this.location = this.router.url;
            if (!(event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AppComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["????ProvidersFeature"]([
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location, {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__.LocationStrategy,
                useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__.PathLocationStrategy
            }
        ])], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "app-preloader");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "app-footer");
    } }, directives: [_components_common_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_0__.PreloaderComponent, _components_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_common_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/common/preloader/preloader.component */ 4425);
/* harmony import */ var _components_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home-one/home-one.component */ 2489);
/* harmony import */ var _components_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/common/navbar/navbar.component */ 4173);
/* harmony import */ var _components_common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/common/welcome/welcome.component */ 3416);
/* harmony import */ var _components_common_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/common/about/about.component */ 7042);
/* harmony import */ var _components_common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/common/strategy/strategy.component */ 8181);
/* harmony import */ var _components_common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/common/who-we-are/who-we-are.component */ 2096);
/* harmony import */ var _components_common_cta_cta_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/common/cta/cta.component */ 9769);
/* harmony import */ var _components_common_skill_skill_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/common/skill/skill.component */ 3649);
/* harmony import */ var _components_common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/common/funfacts/funfacts.component */ 5357);
/* harmony import */ var _components_common_team_team_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/common/team/team.component */ 6278);
/* harmony import */ var _components_common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/common/how-we-work/how-we-work.component */ 4679);
/* harmony import */ var _components_common_services_services_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/common/services/services.component */ 8211);
/* harmony import */ var _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/common/footer/footer.component */ 1823);
/* harmony import */ var _components_common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/common/subscribe/subscribe.component */ 9495);
/* harmony import */ var _components_common_partner_partner_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/common/partner/partner.component */ 6455);
/* harmony import */ var _components_common_blog_blog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/common/blog/blog.component */ 3635);
/* harmony import */ var _components_common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/common/feedback/feedback.component */ 6900);
/* harmony import */ var _components_common_faq_faq_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/common/faq/faq.component */ 2631);
/* harmony import */ var _components_common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/common/pricing/pricing.component */ 2019);
/* harmony import */ var _components_common_work_work_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/common/work/work.component */ 3815);
/* harmony import */ var _components_common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/common/why-we-different/why-we-different.component */ 2337);
/* harmony import */ var _components_common_contact_contact_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/common/contact/contact.component */ 7524);
/* harmony import */ var _components_home_two_home_two_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/home-two/home-two.component */ 6519);
/* harmony import */ var _components_home_three_home_three_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/home-three/home-three.component */ 3562);
/* harmony import */ var _components_home_four_home_four_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/home-four/home-four.component */ 7496);
/* harmony import */ var _components_home_five_home_five_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/home-five/home-five.component */ 3806);
/* harmony import */ var _components_common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/common/services-two/services-two.component */ 2784);
/* harmony import */ var _components_home_six_home_six_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/home-six/home-six.component */ 6174);
/* harmony import */ var _components_home_seven_home_seven_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/home-seven/home-seven.component */ 4616);
/* harmony import */ var _components_home_eight_home_eight_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/home-eight/home-eight.component */ 3860);
/* harmony import */ var _components_home_nine_home_nine_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/home-nine/home-nine.component */ 7747);
/* harmony import */ var _components_home_ten_home_ten_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/home-ten/home-ten.component */ 390);
/* harmony import */ var _components_home_eleven_home_eleven_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/home-eleven/home-eleven.component */ 2505);
/* harmony import */ var _components_home_twelve_home_twelve_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/home-twelve/home-twelve.component */ 7505);
/* harmony import */ var _components_home_thirteen_home_thirteen_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/home-thirteen/home-thirteen.component */ 1011);
/* harmony import */ var _components_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/blog-details/blog-details.component */ 8794);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/google-maps */ 9010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/core */ 7716);










































class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_39__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_39__["????defineInjector"]({ providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_40__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_41__.GoogleMapsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_39__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_common_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_2__.PreloaderComponent,
        _components_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_3__.HomeOneComponent,
        _components_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent,
        _components_common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__.WelcomeComponent,
        _components_common_about_about_component__WEBPACK_IMPORTED_MODULE_6__.AboutComponent,
        _components_common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_7__.StrategyComponent,
        _components_common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_8__.WhoWeAreComponent,
        _components_common_cta_cta_component__WEBPACK_IMPORTED_MODULE_9__.CtaComponent,
        _components_common_skill_skill_component__WEBPACK_IMPORTED_MODULE_10__.SkillComponent,
        _components_common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_11__.FunfactsComponent,
        _components_common_team_team_component__WEBPACK_IMPORTED_MODULE_12__.TeamComponent,
        _components_common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_13__.HowWeWorkComponent,
        _components_common_services_services_component__WEBPACK_IMPORTED_MODULE_14__.ServicesComponent,
        _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__.FooterComponent,
        _components_common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_16__.SubscribeComponent,
        _components_common_partner_partner_component__WEBPACK_IMPORTED_MODULE_17__.PartnerComponent,
        _components_common_blog_blog_component__WEBPACK_IMPORTED_MODULE_18__.BlogComponent,
        _components_common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_19__.FeedbackComponent,
        _components_common_faq_faq_component__WEBPACK_IMPORTED_MODULE_20__.FaqComponent,
        _components_common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_21__.PricingComponent,
        _components_common_work_work_component__WEBPACK_IMPORTED_MODULE_22__.WorkComponent,
        _components_common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_23__.WhyWeDifferentComponent,
        _components_common_contact_contact_component__WEBPACK_IMPORTED_MODULE_24__.ContactComponent,
        _components_home_two_home_two_component__WEBPACK_IMPORTED_MODULE_25__.HomeTwoComponent,
        _components_home_three_home_three_component__WEBPACK_IMPORTED_MODULE_26__.HomeThreeComponent,
        _components_home_four_home_four_component__WEBPACK_IMPORTED_MODULE_27__.HomeFourComponent,
        _components_home_five_home_five_component__WEBPACK_IMPORTED_MODULE_28__.HomeFiveComponent,
        _components_common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_29__.ServicesTwoComponent,
        _components_home_six_home_six_component__WEBPACK_IMPORTED_MODULE_30__.HomeSixComponent,
        _components_home_seven_home_seven_component__WEBPACK_IMPORTED_MODULE_31__.HomeSevenComponent,
        _components_home_eight_home_eight_component__WEBPACK_IMPORTED_MODULE_32__.HomeEightComponent,
        _components_home_nine_home_nine_component__WEBPACK_IMPORTED_MODULE_33__.HomeNineComponent,
        _components_home_ten_home_ten_component__WEBPACK_IMPORTED_MODULE_34__.HomeTenComponent,
        _components_home_eleven_home_eleven_component__WEBPACK_IMPORTED_MODULE_35__.HomeElevenComponent,
        _components_home_twelve_home_twelve_component__WEBPACK_IMPORTED_MODULE_36__.HomeTwelveComponent,
        _components_home_thirteen_home_thirteen_component__WEBPACK_IMPORTED_MODULE_37__.HomeThirteenComponent,
        _components_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_38__.BlogDetailsComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_40__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_41__.GoogleMapsModule] }); })();


/***/ }),

/***/ 8794:
/*!*******************************************************************!*\
  !*** ./src/app/components/blog-details/blog-details.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogDetailsComponent": function() { return /* binding */ BlogDetailsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class BlogDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlogDetailsComponent.??fac = function BlogDetailsComponent_Factory(t) { return new (t || BlogDetailsComponent)(); };
BlogDetailsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: BlogDetailsComponent, selectors: [["app-blog-details"]], decls: 160, vars: 0, consts: [[1, "page-title-area", "item-bg-two", "ripple-effect", "jquery-ripples"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "page-title-content"], ["routerLink", "/"], [1, "fas", "fa-chevron-right"], [1, "active"], [1, "blog-details-area", "ptb-100"], [1, "row"], [1, "col-lg-8", "col-md-12", "offset-lg-2"], [1, "blog-details"], [1, "article-img"], ["src", "assets/img/blog-details.jpg", "alt", "blog-details"], [1, "date"], [1, "article-text"], [1, "category"], ["href", "#"], [1, "title"], [1, "mb-0"], [1, "blockquote"], [1, "author-share"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-6"], [1, "article-author"], [1, "author-img"], ["src", "assets/img/client-avatar1.jpg", "alt", "client"], [1, "author-title"], [1, "social-share"], ["href", "#", "data-toggle", "tooltip", "data-placement", "top", "title", "Share on Facebook"], [1, "fab", "fa-facebook-f"], ["href", "#", "data-toggle", "tooltip", "data-placement", "top", "title", "Share on Twitter"], [1, "fab", "fa-twitter"], ["href", "#", "data-toggle", "tooltip", "data-placement", "top", "title", "Share on Linkedin"], [1, "fab", "fa-linkedin-in"], ["href", "#", "data-toggle", "tooltip", "data-placement", "top", "title", "Share on Instagram"], [1, "fab", "fa-instagram"], ["href", "#", "data-toggle", "tooltip", "data-placement", "top", "title", "Share on Vimeo"], [1, "fab", "fa-vimeo-v"], [1, "post-controls-buttons"], [1, "controls-left"], [1, "fas", "fa-chevron-left"], [1, "controls-right"], [1, "post-comments"], [1, "title", "mt-0"], [1, "single-comment"], [1, "comment-img"], ["src", "assets/img/client-avatar2.jpg", "alt", "client"], [1, "comment-content"], [1, "single-comment", "left-m"], ["src", "assets/img/client-avatar3.jpg", "alt", "client"], [1, "single-comment", "mb-0"], [1, "leave-a-reply"], [1, "form-group"], ["type", "text", "name", "name", "placeholder", "Full Name", 1, "form-control"], ["type", "email", "name", "email", "placeholder", "E-Mail", 1, "form-control"], [1, "col-lg-12", "col-md-12"], ["name", "comment", "cols", "30", "rows", "5", "placeholder", "Your Comment", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"]], template: function BlogDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Single Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "20 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Dec");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "IT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "How to Be a Work From Home Professional");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In necessitatibus provident facere, reiciendis voluptate dolorem iste consectetur veniam aperiam suscipit ad ipsum et labore a repellendus debitis explicabo quisquam obcaecati....");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eum alias debitis suscipit, sint dignissimos minus quisquam recusandae nostrum quas eligendi odit, fugiat eius rem. Cumque, labore placeat! Velit, vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus a labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus a labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "blockquote", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus a labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eum alias debitis suscipit, sint dignissimos minus quisquam recusandae nostrum quas eligendi odit, fugiat eius rem. Cumque, labore placeat! Velit, vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus a labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Back-End Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "ul", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](80, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](83, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, " Prev Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Next Post ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](92, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "h3", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](98, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "David Warner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Dec 19, 2018 - 9:10AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](110, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Eva Amith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Dec 19, 2018 - 9:10AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](122, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "James Andy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "Dec 19, 2018 - 9:10AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](134, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "Audy Kanna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "Dec 19, 2018 - 9:10AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "h3", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "Leave a Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](153, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](156, "textarea", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7042:
/*!************************************************************!*\
  !*** ./src/app/components/common/about/about.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": function() { return /* binding */ AboutComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.??fac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 46, vars: 0, consts: [["id", "about", 1, "about-area", "ptb-100"], [1, "container"], [1, "section-title"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-12"], [1, "about-content"], [1, "features-list"], [1, "fas", "fa-check"], [1, "about-video"], ["src", "assets/img/about.jpg", "alt", "about"], [1, "video-btn"], ["href", "https://www.youtube.com/watch?v=bk7McNUjWgw", 1, "popup-youtube"], [1, "fas", "fa-play"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Xavro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "We Are Digital ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Marketing & Branding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Creative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Retina Ready");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Responsive Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Modern Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Awesome Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Digital Marketing & Branding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3635:
/*!**********************************************************!*\
  !*** ./src/app/components/common/blog/blog.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogComponent": function() { return /* binding */ BlogComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class BlogComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlogComponent.??fac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(); };
BlogComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 62, vars: 0, consts: [["id", "blog", 1, "blog-area", "ptb-100"], [1, "container"], [1, "section-title"], [1, "blog-slides", "owl-carousel", "owl-theme"], [1, "single-blog-item", "bg1"], ["routerLink", "/blog-details"], ["routerLink", "/blog-details", "title", "Read More", 1, "link-btn"], [1, "fas", "fa-arrow-right"], [1, "single-blog-item", "bg2"], [1, "single-blog-item", "bg3"], [1, "single-blog-item", "bg4"], [1, "single-blog-item", "bg5"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Our News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Latest Blog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "The best gear for starting a small business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Tech");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Get your first business suit right with these tips");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "How to Make a Font - Font Design Full Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Marketing & Trend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "10 Hot Marketing Trends You Need to Implement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, " Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "How to Be a Work From Home Professional");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, " Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7524:
/*!****************************************************************!*\
  !*** ./src/app/components/common/contact/contact.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": function() { return /* binding */ ContactComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.??fac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 60, vars: 0, consts: [["id", "contact", 1, "contact-area", "ptb-100", "bg-F7F5F4"], [1, "container"], [1, "section-title"], [1, "row"], [1, "col-lg-6", "col-md-12"], [1, "contact-info"], [1, "fas", "fa-map-marker-alt"], [1, "far", "fa-envelope"], ["href", "mailto:hello@xavro.com"], [1, "fas", "fa-phone-alt"], ["href", "tel:1244122445515"], [1, "fas", "fa-fax"], ["href", "tel:61724160055"], [1, "contact-form"], [1, "col-lg-12", "col-md-6"], [1, "form-group"], ["type", "text", 1, "form-control"], ["type", "email", 1, "form-control"], [1, "col-lg-12", "col-md-12"], ["cols", "30", "rows", "4", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Get in Touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Let's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Exercisplan 4, 111 49 Stockholm, Sweden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "hello@xavro.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "(+124)412-2445515");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "+617-241-60055");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Stay Connected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Send Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9769:
/*!********************************************************!*\
  !*** ./src/app/components/common/cta/cta.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CtaComponent": function() { return /* binding */ CtaComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class CtaComponent {
    constructor() { }
    ngOnInit() {
    }
}
CtaComponent.??fac = function CtaComponent_Factory(t) { return new (t || CtaComponent)(); };
CtaComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CtaComponent, selectors: [["app-cta"]], decls: 14, vars: 0, consts: [["data-jarallax", "{\"speed\": 0.3}", 1, "cta-area", "ptb-100", "jarallax"], [1, "container"], [1, "cta-content"], [1, "section-title", "mb-0"], ["href", "#contact", 1, "btn", "btn-primary"], ["href", "#work", 1, "btn", "btn-primary", "view-work"]], template: function CtaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Looking for exclusive services?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Get The Best For Your Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "View Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdGEuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2631:
/*!********************************************************!*\
  !*** ./src/app/components/common/faq/faq.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqComponent": function() { return /* binding */ FaqComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class FaqComponent {
    constructor() { }
    ngOnInit() {
    }
}
FaqComponent.??fac = function FaqComponent_Factory(t) { return new (t || FaqComponent)(); };
FaqComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FaqComponent, selectors: [["app-faq"]], decls: 60, vars: 0, consts: [[1, "faq-area", "ptb-100"], [1, "container"], [1, "section-title"], [1, "row"], [1, "col-lg-7", "col-md-12"], ["id", "accordionEx", "role", "tablist", "aria-multiselectable", "true", 1, "faq-accordion"], [1, "card"], ["role", "tab", "id", "headingOne", 1, "card-header"], ["data-toggle", "collapse", "data-parent", "#accordionEx", "href", "#collapseOne", "aria-expanded", "false", "aria-controls", "collapseOne", 1, "collapsed"], [1, "mb-0"], [1, "fas", "fa-chevron-down"], ["id", "collapseOne", "role", "tabpanel", "aria-labelledby", "headingOne", "data-parent", "#accordionEx", 1, "collapse"], [1, "card-body"], ["role", "tab", "id", "headingTwo", 1, "card-header"], ["data-toggle", "collapse", "data-parent", "#accordionEx", "href", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "collapsed"], ["id", "collapseTwo", "role", "tabpanel", "aria-labelledby", "headingTwo", "data-parent", "#accordionEx", 1, "collapse"], ["role", "tab", "id", "headingThree", 1, "card-header"], ["data-toggle", "collapse", "data-parent", "#accordionEx", "href", "#collapseThree", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "collapsed"], ["id", "collapseThree", "role", "tabpanel", "aria-labelledby", "headingThree", "data-parent", "#accordionEx", 1, "collapse"], ["role", "tab", "id", "headingFour", 1, "card-header"], ["data-toggle", "collapse", "data-parent", "#accordionEx", "href", "#collapseFour", "aria-expanded", "false", "aria-controls", "collapseFour", 1, "collapsed"], ["id", "collapseFour", "role", "tabpanel", "aria-labelledby", "headingFour", "data-parent", "#accordionEx", 1, "collapse"], [1, "card", "mb-0"], ["role", "tab", "id", "headingFive", 1, "card-header"], ["data-toggle", "collapse", "data-parent", "#accordionEx", "href", "#collapseFive", "aria-expanded", "false", "aria-controls", "collapseFive", 1, "collapsed"], ["id", "collapseFive", "role", "tabpanel", "aria-labelledby", "headingFive", "data-parent", "#accordionEx", 1, "collapse"], [1, "col-lg-5", "col-md-12"], [1, "faq-image"], ["src", "assets/img/faq-img.jpg", "alt", "image"]], template: function FaqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Frequently Asked ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " What\u2019s the difference between a college and a university? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Colleges offer only undergraduate degrees while universities offer graduate degrees as well, but the terms are often used interchangeably. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " What are the different types of undergraduate degrees? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " Associate: a two-year program that either leads to a specific vocation or transitions to a bachelor program. Bachelor: a four or five-year program where students earn credits in a wide variety of courses. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " What are the different types of graduate degrees? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " Masters: two-year degree providing additional specialization. Doctorate: five to eight-year program certifying the student as a trained research scholar and/or professor. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " Can you work while studying in the United States? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, " With permission of the International Student Office, international students may work on campus up to 20 hours/week their first year and can apply to work off-campus in subsequent years. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " What is distance education? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " Distance education occurs when a student and an instructor are in different places. Learning occurs by mail, telephone, internet, or by other means. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXEuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6900:
/*!******************************************************************!*\
  !*** ./src/app/components/common/feedback/feedback.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbackComponent": function() { return /* binding */ FeedbackComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class FeedbackComponent {
    constructor() { }
    ngOnInit() {
    }
}
FeedbackComponent.??fac = function FeedbackComponent_Factory(t) { return new (t || FeedbackComponent)(); };
FeedbackComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FeedbackComponent, selectors: [["app-feedback"]], decls: 30, vars: 0, consts: [[1, "feedback-area", "ptb-100"], [1, "container"], [1, "feedback-slides", "owl-carousel", "owl-theme"], [1, "single-feedback-item"], [1, "info"], ["src", "assets/img/user1.jpg", "alt", "image", 1, "shadow", "rounded-circle"], ["src", "assets/img/user2.jpg", "alt", "image", 1, "shadow", "rounded-circle"], ["src", "assets/img/user3.jpg", "alt", "image", 1, "shadow", "rounded-circle"]], template: function FeedbackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\u201CKeep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "James Andy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Switzerland");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "\u201CThe difference between school and life? In school, you're taught a lesson and then given a test. In life, you're given a test that teaches you a lesson.\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Lina D'Souza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Switzerland");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "\u201CIf a man empties his purse into his head, no man can take it away from him. An investment in knowledge always pays the best interest.\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "David Warner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Switzerland");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWVkYmFjay5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 1823:
/*!**************************************************************!*\
  !*** ./src/app/components/common/footer/footer.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": function() { return /* binding */ FooterComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.??fac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 24, vars: 0, consts: [[1, "footer-area"], [1, "container"], ["routerLink", "/"], ["href", "#", 1, "fab", "fa-facebook-f"], ["href", "#", 1, "fab", "fa-twitter"], ["href", "#", 1, "fab", "fa-linkedin-in"], ["href", "#", 1, "fab", "fa-instagram"], ["href", "#", 1, "fab", "fa-skype"], [1, "far", "fa-copyright"], [1, "go-top"], [1, "fas", "fa-chevron-up"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "avro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Copyright ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "2020 All Rights Reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5357:
/*!******************************************************************!*\
  !*** ./src/app/components/common/funfacts/funfacts.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunfactsComponent": function() { return /* binding */ FunfactsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class FunfactsComponent {
    constructor() { }
    ngOnInit() {
    }
}
FunfactsComponent.??fac = function FunfactsComponent_Factory(t) { return new (t || FunfactsComponent)(); };
FunfactsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FunfactsComponent, selectors: [["app-funfacts"]], decls: 35, vars: 0, consts: [["data-jarallax", "{\"speed\": 0.3}", 1, "funfacts-area", "pt-100", "pb-70", "jarallax"], [1, "container"], [1, "row"], [1, "col-lg-3", "col-md-3", "col-6", "col-sm-3"], [1, "funfact"], [1, "far", "fa-smile"], ["data-count", "540", 1, "odometer"], [1, "fas", "fa-shield-alt"], ["data-count", "980", 1, "odometer"], [1, "fas", "fa-award"], ["data-count", "46", 1, "odometer"], [1, "fas", "fa-users"], ["data-count", "50", 1, "odometer"]], template: function FunfactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Happy Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Completed Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Winning Awards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Team Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdW5mYWN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4679:
/*!************************************************************************!*\
  !*** ./src/app/components/common/how-we-work/how-we-work.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HowWeWorkComponent": function() { return /* binding */ HowWeWorkComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class HowWeWorkComponent {
    constructor() { }
    ngOnInit() {
    }
}
HowWeWorkComponent.??fac = function HowWeWorkComponent_Factory(t) { return new (t || HowWeWorkComponent)(); };
HowWeWorkComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HowWeWorkComponent, selectors: [["app-how-we-work"]], decls: 36, vars: 0, consts: [[1, "how-work-area", "pt-100", "pb-70"], [1, "container"], [1, "section-title"], [1, "row"], [1, "col-lg-4", "col-md-6", "col-sm-6"], [1, "single-how-work"], [1, "icon"], [1, "fas", "fa-info-circle"], [1, "fas", "fa-drafting-compass"], [1, "col-lg-4", "col-md-6", "col-sm-6", "offset-lg-0", "offset-md-3", "offset-sm-3"], [1, "far", "fa-paper-plane"], [1, "shape1"], ["src", "assets/img/shape1.png", "alt", "image"]], template: function HowWeWorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "How We ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Planing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Designing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Product Launch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3ctd2Utd29yay5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4173:
/*!**************************************************************!*\
  !*** ./src/app/components/common/navbar/navbar.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": function() { return /* binding */ NavbarComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.??fac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 34, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "header-sticky"], [1, "container"], ["routerLink", "/", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["href", "#home", 1, "nav-link", "active"], ["href", "#about", 1, "nav-link"], ["href", "#team", 1, "nav-link"], ["href", "#services", 1, "nav-link"], ["href", "#work", 1, "nav-link"], ["href", "#pricing", 1, "nav-link"], ["href", "#blog", 1, "nav-link"], ["href", "#contact", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "avro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6455:
/*!****************************************************************!*\
  !*** ./src/app/components/common/partner/partner.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartnerComponent": function() { return /* binding */ PartnerComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class PartnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
PartnerComponent.??fac = function PartnerComponent_Factory(t) { return new (t || PartnerComponent)(); };
PartnerComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PartnerComponent, selectors: [["app-partner"]], decls: 39, vars: 0, consts: [[1, "partner-area", "ptb-70", "bg-fffdfd"], [1, "container"], [1, "partner-slides", "owl-carousel", "owl-theme"], [1, "partner-item"], ["href", "#"], ["src", "assets/img/partner-1.png", "alt", "partner"], ["src", "assets/img/partner-2.png", "alt", "partner"], ["src", "assets/img/partner-3.png", "alt", "partner"], ["src", "assets/img/partner-4.png", "alt", "partner"], ["src", "assets/img/partner-5.png", "alt", "partner"], ["src", "assets/img/partner-6.png", "alt", "partner"]], template: function PartnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJ0bmVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 4425:
/*!********************************************************************!*\
  !*** ./src/app/components/common/preloader/preloader.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreloaderComponent": function() { return /* binding */ PreloaderComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class PreloaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
PreloaderComponent.??fac = function PreloaderComponent_Factory(t) { return new (t || PreloaderComponent)(); };
PreloaderComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PreloaderComponent, selectors: [["app-preloader"]], decls: 6, vars: 0, consts: [[1, "preloader"], [1, "folding-cube"], [1, "cube1", "cube"], [1, "cube2", "cube"], [1, "cube4", "cube"], [1, "cube3", "cube"]], template: function PreloaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVsb2FkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2019:
/*!****************************************************************!*\
  !*** ./src/app/components/common/pricing/pricing.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PricingComponent": function() { return /* binding */ PricingComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class PricingComponent {
    constructor() { }
    ngOnInit() {
    }
}
PricingComponent.??fac = function PricingComponent_Factory(t) { return new (t || PricingComponent)(); };
PricingComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PricingComponent, selectors: [["app-pricing"]], decls: 108, vars: 0, consts: [["id", "pricing", 1, "pricing-area", "pt-100", "pb-70", "bg-F7F5F4"], [1, "container"], [1, "section-title"], [1, "row"], [1, "col-lg-4", "col-md-6", "col-sm-6"], [1, "pricingTable"], [1, "title"], [1, "price-value"], [1, "currency"], [1, "amount"], [1, "month"], [1, "pricing-content"], [1, "fas", "fa-check"], ["href", "#", 1, "btn", "btn-primary"], [1, "col-lg-4", "col-md-6", "col-sm-6", "offset-lg-0", "offset-md-3", "offset-sm-3"], [1, "shape1"], ["src", "assets/img/shape1.png", "alt", "image"]], template: function PricingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Our Products ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "39.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "/Per month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " Any Ware Access");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " 10 GB Hosting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " 2 Unique Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " 12 GB Capacity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " Weekly Backups");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " Support 24 / hour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Buy Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "49.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "/Per month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " Any Ware Access");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, " 15 GB Hosting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, " 5 Unique Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, " 17 GB Capacity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, " Weekly Backups");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, " Support 24 / hour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Buy Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Premium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "59.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "/Per month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, " Any Ware Access");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, " 20 GB Hosting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](93, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, " 10 Unique Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](96, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, " 21 GB Capacity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](99, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, " Weekly Backups");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](102, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, " Support 24 / hour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Buy Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](107, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmljaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2784:
/*!**************************************************************************!*\
  !*** ./src/app/components/common/services-two/services-two.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesTwoComponent": function() { return /* binding */ ServicesTwoComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class ServicesTwoComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServicesTwoComponent.??fac = function ServicesTwoComponent_Factory(t) { return new (t || ServicesTwoComponent)(); };
ServicesTwoComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ServicesTwoComponent, selectors: [["app-services-two"]], decls: 82, vars: 0, consts: [["id", "services", 1, "services-area", "pt-100", "pb-70"], [1, "container"], [1, "section-title"], [1, "row"], [1, "col-lg-4", "col-md-6", "col-sm-6"], [1, "single-box"], [1, "icon"], [1, "fas", "fa-pencil-alt"], [1, "fab", "fa-linode"], [1, "fas", "fa-desktop"], [1, "fas", "fa-chart-line"], [1, "fas", "fa-anchor"], [1, "fas", "fa-headphones"], [1, "fas", "fa-mobile-alt"], [1, "fas", "fa-camera"], [1, "col-lg-4", "col-md-6", "col-sm-6", "offset-lg-0", "offset-md-3", "offset-sm-3"], [1, "fas", "fa-heartbeat"]], template: function ServicesTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Web Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Branding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Ui & Ux Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Responsive Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Photography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Custom Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlcy10d28uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8211:
/*!******************************************************************!*\
  !*** ./src/app/components/common/services/services.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesComponent": function() { return /* binding */ ServicesComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class ServicesComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServicesComponent.??fac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
ServicesComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 109, vars: 0, consts: [["id", "services", 1, "services-area", "pt-100", "pb-70"], [1, "container"], [1, "section-title"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "single-services"], [1, "services-img"], ["src", "assets/img/services-img1.jpg", "alt", "services-img"], [1, "icon"], [1, "fas", "fa-pencil-alt"], [1, "services-content"], ["src", "assets/img/services-img2.jpg", "alt", "services-img"], [1, "fab", "fa-linode"], ["src", "assets/img/services-img3.jpg", "alt", "services-img"], [1, "fas", "fa-desktop"], ["src", "assets/img/services-img4.jpg", "alt", "services-img"], [1, "fas", "fa-chart-line"], ["src", "assets/img/services-img5.jpg", "alt", "services-img"], [1, "fas", "fa-anchor"], ["src", "assets/img/services-img6.jpg", "alt", "services-img"], [1, "fas", "fa-headphones-alt"], ["src", "assets/img/services-img7.jpg", "alt", "services-img"], [1, "fas", "fa-mobile-alt"], ["src", "assets/img/services-img8.jpg", "alt", "services-img"], [1, "fas", "fa-camera-retro"], [1, "col-lg-4", "col-md-6", "offset-md-3", "offset-lg-0"], ["src", "assets/img/services-img9.jpg", "alt", "services-img"], [1, "far", "fa-life-ring"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Web Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Branding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Ui & Ux Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Responsive Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](92, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Photography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](101, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](103, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Custom Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3649:
/*!************************************************************!*\
  !*** ./src/app/components/common/skill/skill.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillComponent": function() { return /* binding */ SkillComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class SkillComponent {
    constructor() { }
    ngOnInit() {
    }
}
SkillComponent.??fac = function SkillComponent_Factory(t) { return new (t || SkillComponent)(); };
SkillComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SkillComponent, selectors: [["app-skill"]], decls: 67, vars: 0, consts: [[1, "skill-area", "ptb-100", "bg-fffdfd"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-12"], [1, "skill-content"], [1, "section-title"], [1, "skills-list"], [1, "skill-item"], [1, "skill-header"], [1, "skill-title"], [1, "skill-percentage"], [1, "count-box"], ["data-speed", "2000", "data-stop", "92", 1, "count-text"], [1, "skill-bar"], [1, "bar-inner"], ["data-width", "92", 1, "bar", "progress-line"], ["data-speed", "2000", "data-stop", "97", 1, "count-text"], ["data-width", "97", 1, "bar", "progress-line"], ["data-speed", "2000", "data-stop", "90", 1, "count-text"], ["data-width", "90", 1, "bar", "progress-line"], ["data-speed", "2000", "data-stop", "95", 1, "count-text"], ["data-width", "95", 1, "bar", "progress-line"], [1, "skill-video"], ["src", "assets/img/video-img.jpg", "alt", "video-img"], [1, "video-btn"], ["href", "https://www.youtube.com/watch?v=bk7McNUjWgw", 1, "popup-youtube"], [1, "fas", "fa-play"]], template: function SkillComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Some of Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Branding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJza2lsbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 8181:
/*!******************************************************************!*\
  !*** ./src/app/components/common/strategy/strategy.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrategyComponent": function() { return /* binding */ StrategyComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class StrategyComponent {
    constructor() { }
    ngOnInit() {
    }
}
StrategyComponent.??fac = function StrategyComponent_Factory(t) { return new (t || StrategyComponent)(); };
StrategyComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: StrategyComponent, selectors: [["app-strategy"]], decls: 40, vars: 0, consts: [[1, "strategy-area"], [1, "container-fluid"], [1, "row"], [1, "col-lg-6", "col-md-12"], [1, "strategy-image"], ["src", "assets/img/about-strategy.jpg", "alt", "image"], [1, "strategy-content", "ptb-70"], [1, "section-title"], [1, "features-list"], [1, "fa", "fa-check"], [1, "shape1"], ["src", "assets/img/shape1.png", "alt", "image"]], template: function StrategyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Highly Creative Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Creative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Retina Ready");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Responsive Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Modern Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Awesome Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Digital Marketing & Branding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHJhdGVneS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 9495:
/*!********************************************************************!*\
  !*** ./src/app/components/common/subscribe/subscribe.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscribeComponent": function() { return /* binding */ SubscribeComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class SubscribeComponent {
    constructor() { }
    ngOnInit() {
    }
}
SubscribeComponent.??fac = function SubscribeComponent_Factory(t) { return new (t || SubscribeComponent)(); };
SubscribeComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SubscribeComponent, selectors: [["app-subscribe"]], decls: 9, vars: 0, consts: [[1, "subscribe-area", "ptb-100"], [1, "container"], [1, "newsletter"], [1, "newsletter-form"], ["type", "email", "placeholder", "Your Email Address", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"]], template: function SubscribeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Join Our Newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJzY3JpYmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6278:
/*!**********************************************************!*\
  !*** ./src/app/components/common/team/team.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamComponent": function() { return /* binding */ TeamComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class TeamComponent {
    constructor() { }
    ngOnInit() {
    }
}
TeamComponent.??fac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(); };
TeamComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: TeamComponent, selectors: [["app-team"]], decls: 122, vars: 0, consts: [["id", "team", 1, "team-area", "ptb-100"], [1, "container"], [1, "section-title"], [1, "team-slides", "owl-carousel", "owl-theme"], [1, "single-team-box"], [1, "image"], ["src", "assets/img/team-1.jpg", "alt", "team-img"], [1, "content"], [1, "title"], [1, "post"], [1, "social"], ["href", "#", 1, "fab", "fa-facebook-f"], ["href", "#", 1, "fab", "fa-twitter"], ["href", "#", 1, "fab", "fa-instagram"], ["href", "#", 1, "fab", "fa-linkedin-in"], ["src", "assets/img/team-2.jpg", "alt", "team-img"], ["src", "assets/img/team-3.jpg", "alt", "team-img"], ["src", "assets/img/team-4.jpg", "alt", "team-img"], ["src", "assets/img/team-5.jpg", "alt", "team-img"], ["src", "assets/img/team-6.jpg", "alt", "team-img"], [1, "shape1"], ["src", "assets/img/shape1.png", "alt", "image"]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Meet Addax");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Our Creative ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "CEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "David Warner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Web Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "James Andy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Back-End Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "David Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Front-End Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](83, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Web Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](95, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](97, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](99, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](101, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](104, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Olivia Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Photographer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](113, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](115, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](117, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](119, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3416:
/*!****************************************************************!*\
  !*** ./src/app/components/common/welcome/welcome.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeComponent": function() { return /* binding */ WelcomeComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class WelcomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
WelcomeComponent.??fac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(); };
WelcomeComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 44, vars: 0, consts: [["id", "welcome", 1, "welcome-area", "pt-100", "pb-70"], [1, "container"], [1, "section-title"], [1, "row"], [1, "col-lg-4", "col-md-6", "col-sm-6"], [1, "single-box"], [1, "icon"], [1, "far", "fa-edit"], ["href", "#about", "title", "Read More", 1, "link-btn"], [1, "fa", "fa-arrow-right"], [1, "fas", "fa-laptop"], [1, "col-lg-4", "col-md-6", "col-sm-6", "offset-lg-0", "offset-md-3", "offset-sm-3"], [1, "far", "fa-life-ring"], [1, "shape2"], ["src", "assets/img/shape1.png", "alt", "image"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "We are creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Welcome to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Xavro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Creative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Lorem ipsum dolor sit amet sit ipsum, consectetur adipiscing elit, sed do eiusmod tempor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Friendly Codes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Lorem ipsum dolor sit amet sit ipsum, consectetur adipiscing elit, sed do eiusmod tempor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Fast Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Lorem ipsum dolor sit amet sit ipsum, consectetur adipiscing elit, sed do eiusmod tempor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWxjb21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2096:
/*!**********************************************************************!*\
  !*** ./src/app/components/common/who-we-are/who-we-are.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WhoWeAreComponent": function() { return /* binding */ WhoWeAreComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class WhoWeAreComponent {
    constructor() { }
    ngOnInit() {
    }
}
WhoWeAreComponent.??fac = function WhoWeAreComponent_Factory(t) { return new (t || WhoWeAreComponent)(); };
WhoWeAreComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: WhoWeAreComponent, selectors: [["app-who-we-are"]], decls: 65, vars: 0, consts: [[1, "who-we-are-area", "pt-100", "pb-70"], [1, "container"], [1, "section-title"], [1, "row"], [1, "col-lg-4", "col-md-6", "col-sm-6"], [1, "single-who-we-are"], [1, "fas", "fa-users"], [1, "card-border"], [1, "far", "fa-lightbulb"], [1, "fas", "fa-tag"], [1, "far", "fa-hand-scissors"], [1, "fab", "fa-linode"], [1, "far", "fa-life-ring"]], template: function WhoWeAreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Who We ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Are");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "We are professional");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Fringilla augue at maximus vest vestibulum. Nam pulvinar vitaessst neque et porttitor. Praesent sed nis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "We are passionate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Fringilla augue at maximus vest vestibulum. Nam pulvinar vitaessst neque et porttitor. Praesent sed nis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "We are creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Fringilla augue at maximus vest vestibulum. Nam pulvinar vitaessst neque et porttitor. Praesent sed nis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "We are designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Fringilla augue at maximus vest vestibulum. Nam pulvinar vitaessst neque et porttitor. Praesent sed nis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "We are unique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Fringilla augue at maximus vest vestibulum. Nam pulvinar vitaessst neque et porttitor. Praesent sed nis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "We are support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Fringilla augue at maximus vest vestibulum. Nam pulvinar vitaessst neque et porttitor. Praesent sed nis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aG8td2UtYXJlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2337:
/*!**********************************************************************************!*\
  !*** ./src/app/components/common/why-we-different/why-we-different.component.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WhyWeDifferentComponent": function() { return /* binding */ WhyWeDifferentComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class WhyWeDifferentComponent {
    constructor() { }
    ngOnInit() {
    }
}
WhyWeDifferentComponent.??fac = function WhyWeDifferentComponent_Factory(t) { return new (t || WhyWeDifferentComponent)(); };
WhyWeDifferentComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: WhyWeDifferentComponent, selectors: [["app-why-we-different"]], decls: 131, vars: 0, consts: [[1, "why-we-different", "ptb-100", "bg-F7F5F4"], [1, "container"], [1, "section-title"], [1, "tabset", "why-we-different-tabset"], ["type", "radio", "name", "tabset", "id", "tab1", "aria-controls", "speed-flexibility", "checked", ""], ["for", "tab1"], ["type", "radio", "name", "tabset", "id", "tab2", "aria-controls", "profeesional-work"], ["for", "tab2"], ["type", "radio", "name", "tabset", "id", "tab3", "aria-controls", "experienced-staff"], ["for", "tab3"], ["type", "radio", "name", "tabset", "id", "tab4", "aria-controls", "custom-support"], ["for", "tab4"], [1, "tab-panels"], ["id", "speed-flexibility", 1, "tab-panel"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-12"], [1, "why-we-different-img"], ["src", "assets/img/different-img2.jpg", "alt", "img"], [1, "why-we-different-content"], [1, "fas", "fa-check"], ["id", "profeesional-work", 1, "tab-panel"], ["src", "assets/img/different-img1.jpg", "alt", "img"], ["id", "experienced-staff", 1, "tab-panel"], ["src", "assets/img/different-img3.jpg", "alt", "img"], ["id", "custom-support", 1, "tab-panel"], ["src", "assets/img/different-img4.jpg", "alt", "img"]], template: function WhyWeDifferentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Why We ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Are Different");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Speed , flexibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Profeesional work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Experienced Staff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Custom Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Speed , flexibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, " Creative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, " Retina Ready");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " Responsive Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " Modern Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, " Awesome Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Profeesional work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, " Creative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, " Retina Ready");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, " Responsive Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, " Modern Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, " Awesome Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "section", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Experienced staff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, " Creative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](93, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, " Retina Ready");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](96, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, " Responsive Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](99, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, " Modern Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](102, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, " Awesome Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "section", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](108, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "24/7 support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](117, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, " Creative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](120, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, " Retina Ready");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](123, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, " Responsive Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](126, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, " Modern Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](129, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, " Awesome Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aHktd2UtZGlmZmVyZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3815:
/*!**********************************************************!*\
  !*** ./src/app/components/common/work/work.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkComponent": function() { return /* binding */ WorkComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class WorkComponent {
    constructor() { }
    ngOnInit() {
    }
}
WorkComponent.??fac = function WorkComponent_Factory(t) { return new (t || WorkComponent)(); };
WorkComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: WorkComponent, selectors: [["app-work"]], decls: 127, vars: 0, consts: [["id", "work", 1, "work-area", "pt-100", "pb-70"], [1, "container"], [1, "section-title"], [1, "shorting-menu"], ["data-filter", "all", 1, "filter"], ["data-filter", ".brand", 1, "filter"], ["data-filter", ".design", 1, "filter"], ["data-filter", ".graphic", 1, "filter"], ["data-filter", ".photoshop", 1, "filter"], ["data-filter", ".illustrator", 1, "filter"], [1, "container-fluid"], [1, "shorting"], [1, "row"], [1, "col-lg-4", "col-md-6", "mix", "brand", "design"], [1, "single-work"], ["src", "assets/img/work-img1.jpg", "alt", "work-img"], [1, "work-content"], ["href", "#"], ["href", "assets/img/work-img1.jpg", 1, "popup-btn"], [1, "fas", "fa-plus"], [1, "col-lg-4", "col-md-6", "mix", "design", "graphic"], ["src", "assets/img/work-img2.jpg", "alt", "work-img"], ["href", "assets/img/work-img2.jpg", 1, "popup-btn"], [1, "col-lg-4", "col-md-6", "mix", "graphic", "photoshop"], ["src", "assets/img/work-img3.jpg", "alt", "work-img"], ["href", "assets/img/work-img3.jpg", 1, "popup-btn"], [1, "col-lg-4", "col-md-6", "mix", "photoshop", "illustrator"], ["src", "assets/img/work-img4.jpg", "alt", "work-img"], ["href", "assets/img/work-img4.jpg", 1, "popup-btn"], [1, "col-lg-4", "col-md-6", "mix", "illustrator"], ["src", "assets/img/work-img5.jpg", "alt", "work-img"], ["href", "assets/img/work-img5.jpg", 1, "popup-btn"], [1, "col-lg-4", "col-md-6", "mix", "brand"], ["src", "assets/img/work-img6.jpg", "alt", "work-img"], ["href", "assets/img/work-img6.jpg", 1, "popup-btn"]], template: function WorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Graphic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Photoshop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Illustrator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Creative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Games Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "IT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, " . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Creative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Creative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](92, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](95, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Creative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](109, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](112, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Creative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](126, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3JrLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3860:
/*!***************************************************************!*\
  !*** ./src/app/components/home-eight/home-eight.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeEightComponent": function() { return /* binding */ HomeEightComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/welcome/welcome.component */ 3416);
/* harmony import */ var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/about/about.component */ 7042);
/* harmony import */ var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strategy/strategy.component */ 8181);
/* harmony import */ var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/who-we-are/who-we-are.component */ 2096);
/* harmony import */ var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/cta/cta.component */ 9769);
/* harmony import */ var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/skill/skill.component */ 3649);
/* harmony import */ var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/funfacts/funfacts.component */ 5357);
/* harmony import */ var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/team/team.component */ 6278);
/* harmony import */ var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/how-we-work/how-we-work.component */ 4679);
/* harmony import */ var _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/services-two/services-two.component */ 2784);
/* harmony import */ var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/why-we-different/why-we-different.component */ 2337);
/* harmony import */ var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/work/work.component */ 3815);
/* harmony import */ var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/pricing/pricing.component */ 2019);
/* harmony import */ var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/faq/faq.component */ 2631);
/* harmony import */ var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/feedback/feedback.component */ 6900);
/* harmony import */ var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/blog/blog.component */ 3635);
/* harmony import */ var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/partner/partner.component */ 6455);
/* harmony import */ var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/subscribe/subscribe.component */ 9495);
/* harmony import */ var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/contact/contact.component */ 7524);




















class HomeEightComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeEightComponent.??fac = function HomeEightComponent_Factory(t) { return new (t || HomeEightComponent)(); };
HomeEightComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["????defineComponent"]({ type: HomeEightComponent, selectors: [["app-home-eight"]], decls: 36, vars: 0, consts: [[1, "main-banner", "item-bg-two"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], ["href", "", "data-period", "2000", "data-type", "[ \"Professional\", \"Passionate\", \"Creative\", \"Designer\", \"Unique\", \"Best.\", \"Support\" ]", 1, "typewrite"], [1, "wrap"], ["href", "#welcome", 1, "btn", "btn-primary"], ["href", "#work", 1, "btn", "btn-primary", "view-work"]], template: function HomeEightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](6, "We Are Creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](8, "We Are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](12, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](14, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](16, "View Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](17, "app-welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](18, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](19, "app-strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](20, "app-who-we-are");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](21, "app-cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](22, "app-skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](23, "app-funfacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](24, "app-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](25, "app-how-we-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](26, "app-services-two");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](27, "app-why-we-different");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](28, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](29, "app-pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](30, "app-faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](31, "app-feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](32, "app-blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](33, "app-partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](34, "app-subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](35, "app-contact");
    } }, directives: [_common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_9__.ServicesTwoComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWVpZ2h0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2505:
/*!*****************************************************************!*\
  !*** ./src/app/components/home-eleven/home-eleven.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeElevenComponent": function() { return /* binding */ HomeElevenComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/welcome/welcome.component */ 3416);
/* harmony import */ var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/about/about.component */ 7042);
/* harmony import */ var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strategy/strategy.component */ 8181);
/* harmony import */ var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/who-we-are/who-we-are.component */ 2096);
/* harmony import */ var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/cta/cta.component */ 9769);
/* harmony import */ var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/skill/skill.component */ 3649);
/* harmony import */ var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/funfacts/funfacts.component */ 5357);
/* harmony import */ var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/team/team.component */ 6278);
/* harmony import */ var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/how-we-work/how-we-work.component */ 4679);
/* harmony import */ var _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/services/services.component */ 8211);
/* harmony import */ var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/why-we-different/why-we-different.component */ 2337);
/* harmony import */ var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/work/work.component */ 3815);
/* harmony import */ var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/pricing/pricing.component */ 2019);
/* harmony import */ var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/faq/faq.component */ 2631);
/* harmony import */ var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/feedback/feedback.component */ 6900);
/* harmony import */ var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/blog/blog.component */ 3635);
/* harmony import */ var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/partner/partner.component */ 6455);
/* harmony import */ var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/subscribe/subscribe.component */ 9495);
/* harmony import */ var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/contact/contact.component */ 7524);




















class HomeElevenComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeElevenComponent.??fac = function HomeElevenComponent_Factory(t) { return new (t || HomeElevenComponent)(); };
HomeElevenComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["????defineComponent"]({ type: HomeElevenComponent, selectors: [["app-home-eleven"]], decls: 38, vars: 0, consts: [[1, "main-banner", "item-bg-one"], [1, "creative-banner-three"], ["id", "particles-js"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], ["href", "", "data-period", "2000", "data-type", "[ \"Professional.\", \"Passionate.\", \"Creative.\", \"Designer.\", \"Unique.\", \"Best.\", \"Support.\" ]", 1, "typewrite"], [1, "wrap"], ["href", "#welcome", 1, "btn", "btn-primary"], ["href", "#work", 1, "btn", "btn-primary", "view-work"]], template: function HomeElevenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](8, "We Are Creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](10, "We Are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](14, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](16, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](18, "View Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](19, "app-welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](20, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](21, "app-strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](22, "app-who-we-are");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](23, "app-cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](24, "app-skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](25, "app-funfacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](26, "app-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](27, "app-how-we-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](28, "app-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](29, "app-why-we-different");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](30, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](31, "app-pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](32, "app-faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](33, "app-feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](34, "app-blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](35, "app-partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](36, "app-subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](37, "app-contact");
    } }, directives: [_common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__.ServicesComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWVsZXZlbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3806:
/*!*************************************************************!*\
  !*** ./src/app/components/home-five/home-five.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeFiveComponent": function() { return /* binding */ HomeFiveComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/welcome/welcome.component */ 3416);
/* harmony import */ var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/about/about.component */ 7042);
/* harmony import */ var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strategy/strategy.component */ 8181);
/* harmony import */ var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/who-we-are/who-we-are.component */ 2096);
/* harmony import */ var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/cta/cta.component */ 9769);
/* harmony import */ var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/skill/skill.component */ 3649);
/* harmony import */ var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/funfacts/funfacts.component */ 5357);
/* harmony import */ var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/team/team.component */ 6278);
/* harmony import */ var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/how-we-work/how-we-work.component */ 4679);
/* harmony import */ var _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/services/services.component */ 8211);
/* harmony import */ var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/why-we-different/why-we-different.component */ 2337);
/* harmony import */ var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/work/work.component */ 3815);
/* harmony import */ var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/pricing/pricing.component */ 2019);
/* harmony import */ var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/faq/faq.component */ 2631);
/* harmony import */ var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/feedback/feedback.component */ 6900);
/* harmony import */ var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/blog/blog.component */ 3635);
/* harmony import */ var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/partner/partner.component */ 6455);
/* harmony import */ var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/subscribe/subscribe.component */ 9495);
/* harmony import */ var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/contact/contact.component */ 7524);




















class HomeFiveComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeFiveComponent.??fac = function HomeFiveComponent_Factory(t) { return new (t || HomeFiveComponent)(); };
HomeFiveComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["????defineComponent"]({ type: HomeFiveComponent, selectors: [["app-home-five"]], decls: 40, vars: 0, consts: [[1, "main-banner", "item-bg-two"], [1, "creative-banner-one"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], ["href", "#welcome", 1, "btn", "btn-primary"], ["href", "#work", 1, "btn", "btn-primary", "view-work"], [1, "shape3"], ["src", "assets/img/shape2.png", "alt", "image"]], template: function HomeFiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](7, "We Are Creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](9, "The Best ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](11, "Digital");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](12, " Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](14, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](16, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](18, "View Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](20, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](21, "app-welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](22, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](23, "app-strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](24, "app-who-we-are");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](25, "app-cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](26, "app-skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](27, "app-funfacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](28, "app-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](29, "app-how-we-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](30, "app-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](31, "app-why-we-different");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](32, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](33, "app-pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](34, "app-faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](35, "app-feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](36, "app-blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](37, "app-partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](38, "app-subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](39, "app-contact");
    } }, directives: [_common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__.ServicesComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWZpdmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7496:
/*!*************************************************************!*\
  !*** ./src/app/components/home-four/home-four.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeFourComponent": function() { return /* binding */ HomeFourComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/welcome/welcome.component */ 3416);
/* harmony import */ var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/about/about.component */ 7042);
/* harmony import */ var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strategy/strategy.component */ 8181);
/* harmony import */ var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/who-we-are/who-we-are.component */ 2096);
/* harmony import */ var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/cta/cta.component */ 9769);
/* harmony import */ var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/skill/skill.component */ 3649);
/* harmony import */ var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/funfacts/funfacts.component */ 5357);
/* harmony import */ var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/team/team.component */ 6278);
/* harmony import */ var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/how-we-work/how-we-work.component */ 4679);
/* harmony import */ var _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/services-two/services-two.component */ 2784);
/* harmony import */ var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/why-we-different/why-we-different.component */ 2337);
/* harmony import */ var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/work/work.component */ 3815);
/* harmony import */ var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/pricing/pricing.component */ 2019);
/* harmony import */ var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/faq/faq.component */ 2631);
/* harmony import */ var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/feedback/feedback.component */ 6900);
/* harmony import */ var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/blog/blog.component */ 3635);
/* harmony import */ var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/partner/partner.component */ 6455);
/* harmony import */ var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/subscribe/subscribe.component */ 9495);
/* harmony import */ var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/contact/contact.component */ 7524);




















class HomeFourComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeFourComponent.??fac = function HomeFourComponent_Factory(t) { return new (t || HomeFourComponent)(); };
HomeFourComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["????defineComponent"]({ type: HomeFourComponent, selectors: [["app-home-four"]], decls: 37, vars: 0, consts: [[1, "main-banner", "item-bg-three", "ripple-effect", "jquery-ripples"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], ["href", "#welcome", 1, "btn", "btn-primary"], ["href", "#work", 1, "btn", "btn-primary", "view-work"]], template: function HomeFourComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](6, "We Are Creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](8, "The Best ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](10, "Digital");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](11, " Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](13, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](15, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](17, "View Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](18, "app-welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](19, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](20, "app-strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](21, "app-who-we-are");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](22, "app-cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](23, "app-skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](24, "app-funfacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](25, "app-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](26, "app-how-we-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](27, "app-services-two");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](28, "app-why-we-different");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](29, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](30, "app-pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](31, "app-faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](32, "app-feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](33, "app-blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](34, "app-partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](35, "app-subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](36, "app-contact");
    } }, directives: [_common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_9__.ServicesTwoComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWZvdXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7747:
/*!*************************************************************!*\
  !*** ./src/app/components/home-nine/home-nine.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeNineComponent": function() { return /* binding */ HomeNineComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/welcome/welcome.component */ 3416);
/* harmony import */ var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/about/about.component */ 7042);
/* harmony import */ var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strategy/strategy.component */ 8181);
/* harmony import */ var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/who-we-are/who-we-are.component */ 2096);
/* harmony import */ var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/cta/cta.component */ 9769);
/* harmony import */ var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/skill/skill.component */ 3649);
/* harmony import */ var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/funfacts/funfacts.component */ 5357);
/* harmony import */ var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/team/team.component */ 6278);
/* harmony import */ var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/how-we-work/how-we-work.component */ 4679);
/* harmony import */ var _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/services/services.component */ 8211);
/* harmony import */ var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/why-we-different/why-we-different.component */ 2337);
/* harmony import */ var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/work/work.component */ 3815);
/* harmony import */ var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/pricing/pricing.component */ 2019);
/* harmony import */ var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/faq/faq.component */ 2631);
/* harmony import */ var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/feedback/feedback.component */ 6900);
/* harmony import */ var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/blog/blog.component */ 3635);
/* harmony import */ var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/partner/partner.component */ 6455);
/* harmony import */ var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/subscribe/subscribe.component */ 9495);
/* harmony import */ var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/contact/contact.component */ 7524);




















class HomeNineComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeNineComponent.??fac = function HomeNineComponent_Factory(t) { return new (t || HomeNineComponent)(); };
HomeNineComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["????defineComponent"]({ type: HomeNineComponent, selectors: [["app-home-nine"]], decls: 38, vars: 0, consts: [["data-jarallax", "{\"speed\": 0.3}", 1, "main-banner", "item-bg-one", "jarallax"], ["id", "particles-js"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], ["href", "#welcome", 1, "btn", "btn-primary"], ["href", "#work", 1, "btn", "btn-primary", "view-work"]], template: function HomeNineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](7, "We Are Creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](9, "The Best ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](11, "Digital");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](12, " Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](14, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](16, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](18, "View Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](19, "app-welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](20, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](21, "app-strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](22, "app-who-we-are");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](23, "app-cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](24, "app-skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](25, "app-funfacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](26, "app-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](27, "app-how-we-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](28, "app-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](29, "app-why-we-different");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](30, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](31, "app-pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](32, "app-faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](33, "app-feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](34, "app-blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](35, "app-partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](36, "app-subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](37, "app-contact");
    } }, directives: [_common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__.ServicesComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLW5pbmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2489:
/*!***********************************************************!*\
  !*** ./src/app/components/home-one/home-one.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeOneComponent": function() { return /* binding */ HomeOneComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/welcome/welcome.component */ 3416);
/* harmony import */ var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/about/about.component */ 7042);
/* harmony import */ var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strategy/strategy.component */ 8181);
/* harmony import */ var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/who-we-are/who-we-are.component */ 2096);
/* harmony import */ var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/cta/cta.component */ 9769);
/* harmony import */ var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/skill/skill.component */ 3649);
/* harmony import */ var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/funfacts/funfacts.component */ 5357);
/* harmony import */ var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/team/team.component */ 6278);
/* harmony import */ var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/how-we-work/how-we-work.component */ 4679);
/* harmony import */ var _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/services/services.component */ 8211);
/* harmony import */ var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/why-we-different/why-we-different.component */ 2337);
/* harmony import */ var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/work/work.component */ 3815);
/* harmony import */ var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/pricing/pricing.component */ 2019);
/* harmony import */ var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/faq/faq.component */ 2631);
/* harmony import */ var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/feedback/feedback.component */ 6900);
/* harmony import */ var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/blog/blog.component */ 3635);
/* harmony import */ var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/partner/partner.component */ 6455);
/* harmony import */ var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/subscribe/subscribe.component */ 9495);



















class HomeOneComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeOneComponent.??fac = function HomeOneComponent_Factory(t) { return new (t || HomeOneComponent)(); };
HomeOneComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["????defineComponent"]({ type: HomeOneComponent, selectors: [["app-home-one"]], decls: 36, vars: 0, consts: [["data-jarallax", "{\"speed\": 0.3}", 1, "main-banner", "item-bg-one", "jarallax"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], ["href", "#welcome", 1, "btn", "btn-primary"], ["href", "#work", 1, "btn", "btn-primary", "view-work"]], template: function HomeOneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](6, "We Are Creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](8, "The Best ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](10, "Digital");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](11, " Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](13, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](15, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](17, "View Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](18, "app-welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](19, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](20, "app-strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](21, "app-who-we-are");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](22, "app-cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](23, "app-skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](24, "app-funfacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](25, "app-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](26, "app-how-we-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](27, "app-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](28, "app-why-we-different");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](29, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](30, "app-pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](31, "app-faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](32, "app-feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](33, "app-blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](34, "app-partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](35, "app-subscribe");
    } }, directives: [_common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__.ServicesComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLW9uZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4616:
/*!***************************************************************!*\
  !*** ./src/app/components/home-seven/home-seven.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeSevenComponent": function() { return /* binding */ HomeSevenComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/welcome/welcome.component */ 3416);
/* harmony import */ var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/about/about.component */ 7042);
/* harmony import */ var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strategy/strategy.component */ 8181);
/* harmony import */ var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/who-we-are/who-we-are.component */ 2096);
/* harmony import */ var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/cta/cta.component */ 9769);
/* harmony import */ var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/skill/skill.component */ 3649);
/* harmony import */ var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/funfacts/funfacts.component */ 5357);
/* harmony import */ var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/team/team.component */ 6278);
/* harmony import */ var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/how-we-work/how-we-work.component */ 4679);
/* harmony import */ var _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/services/services.component */ 8211);
/* harmony import */ var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/why-we-different/why-we-different.component */ 2337);
/* harmony import */ var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/work/work.component */ 3815);
/* harmony import */ var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/pricing/pricing.component */ 2019);
/* harmony import */ var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/faq/faq.component */ 2631);
/* harmony import */ var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/feedback/feedback.component */ 6900);
/* harmony import */ var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/blog/blog.component */ 3635);
/* harmony import */ var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/partner/partner.component */ 6455);
/* harmony import */ var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/subscribe/subscribe.component */ 9495);
/* harmony import */ var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/contact/contact.component */ 7524);




















class HomeSevenComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeSevenComponent.??fac = function HomeSevenComponent_Factory(t) { return new (t || HomeSevenComponent)(); };
HomeSevenComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["????defineComponent"]({ type: HomeSevenComponent, selectors: [["app-home-seven"]], decls: 38, vars: 0, consts: [[1, "main-banner", "item-bg-one"], [1, "creative-banner-three"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], ["href", "#welcome", 1, "btn", "btn-primary"], ["href", "#work", 1, "btn", "btn-primary", "view-work"]], template: function HomeSevenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](7, "We Are Creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](9, "The Best ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](11, "Digital");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](12, " Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](14, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](16, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](18, "View Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](19, "app-welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](20, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](21, "app-strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](22, "app-who-we-are");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](23, "app-cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](24, "app-skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](25, "app-funfacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](26, "app-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](27, "app-how-we-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](28, "app-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](29, "app-why-we-different");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](30, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](31, "app-pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](32, "app-faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](33, "app-feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](34, "app-blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](35, "app-partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](36, "app-subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](37, "app-contact");
    } }, directives: [_common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__.ServicesComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXNldmVuLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6174:
/*!***********************************************************!*\
  !*** ./src/app/components/home-six/home-six.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeSixComponent": function() { return /* binding */ HomeSixComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/welcome/welcome.component */ 3416);
/* harmony import */ var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/about/about.component */ 7042);
/* harmony import */ var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strategy/strategy.component */ 8181);
/* harmony import */ var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/who-we-are/who-we-are.component */ 2096);
/* harmony import */ var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/cta/cta.component */ 9769);
/* harmony import */ var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/skill/skill.component */ 3649);
/* harmony import */ var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/funfacts/funfacts.component */ 5357);
/* harmony import */ var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/team/team.component */ 6278);
/* harmony import */ var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/how-we-work/how-we-work.component */ 4679);
/* harmony import */ var _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/services-two/services-two.component */ 2784);
/* harmony import */ var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/why-we-different/why-we-different.component */ 2337);
/* harmony import */ var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/work/work.component */ 3815);
/* harmony import */ var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/pricing/pricing.component */ 2019);
/* harmony import */ var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/faq/faq.component */ 2631);
/* harmony import */ var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/feedback/feedback.component */ 6900);
/* harmony import */ var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/blog/blog.component */ 3635);
/* harmony import */ var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/partner/partner.component */ 6455);
/* harmony import */ var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/subscribe/subscribe.component */ 9495);
/* harmony import */ var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/contact/contact.component */ 7524);




















class HomeSixComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeSixComponent.??fac = function HomeSixComponent_Factory(t) { return new (t || HomeSixComponent)(); };
HomeSixComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["????defineComponent"]({ type: HomeSixComponent, selectors: [["app-home-six"]], decls: 38, vars: 0, consts: [[1, "main-banner", "item-bg-three"], [1, "creative-banner-two"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], ["href", "#welcome", 1, "btn", "btn-primary"], ["href", "#work", 1, "btn", "btn-primary", "view-work"]], template: function HomeSixComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](7, "We Are Creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](9, "The Best ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](11, "Digital");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](12, " Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](14, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](16, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](18, "View Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](19, "app-welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](20, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](21, "app-strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](22, "app-who-we-are");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](23, "app-cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](24, "app-skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](25, "app-funfacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](26, "app-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](27, "app-how-we-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](28, "app-services-two");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](29, "app-why-we-different");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](30, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](31, "app-pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](32, "app-faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](33, "app-feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](34, "app-blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](35, "app-partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](36, "app-subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](37, "app-contact");
    } }, directives: [_common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_9__.ServicesTwoComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXNpeC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 390:
/*!***********************************************************!*\
  !*** ./src/app/components/home-ten/home-ten.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeTenComponent": function() { return /* binding */ HomeTenComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/welcome/welcome.component */ 3416);
/* harmony import */ var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/about/about.component */ 7042);
/* harmony import */ var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strategy/strategy.component */ 8181);
/* harmony import */ var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/who-we-are/who-we-are.component */ 2096);
/* harmony import */ var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/cta/cta.component */ 9769);
/* harmony import */ var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/skill/skill.component */ 3649);
/* harmony import */ var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/funfacts/funfacts.component */ 5357);
/* harmony import */ var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/team/team.component */ 6278);
/* harmony import */ var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/how-we-work/how-we-work.component */ 4679);
/* harmony import */ var _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/services-two/services-two.component */ 2784);
/* harmony import */ var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/why-we-different/why-we-different.component */ 2337);
/* harmony import */ var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/work/work.component */ 3815);
/* harmony import */ var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/pricing/pricing.component */ 2019);
/* harmony import */ var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/faq/faq.component */ 2631);
/* harmony import */ var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/feedback/feedback.component */ 6900);
/* harmony import */ var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/blog/blog.component */ 3635);
/* harmony import */ var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/partner/partner.component */ 6455);
/* harmony import */ var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/subscribe/subscribe.component */ 9495);
/* harmony import */ var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/contact/contact.component */ 7524);




















class HomeTenComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeTenComponent.??fac = function HomeTenComponent_Factory(t) { return new (t || HomeTenComponent)(); };
HomeTenComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["????defineComponent"]({ type: HomeTenComponent, selectors: [["app-home-ten"]], decls: 37, vars: 0, consts: [[1, "main-banner", "item-bg-three", "ripple-effect", "jquery-ripples"], [1, "creative-banner-two"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], ["href", "", "data-period", "2000", "data-type", "[ \"Professional.\", \"Passionate.\", \"Creative.\", \"Designer.\", \"Unique.\", \"Best.\", \"Support.\" ]", 1, "typewrite"], [1, "wrap"], ["href", "#welcome", 1, "btn", "btn-primary"], ["href", "#work", 1, "btn", "btn-primary", "view-work"]], template: function HomeTenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](7, "We Are Creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](9, "We Are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](13, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](15, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](17, "View Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](18, "app-welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](19, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](20, "app-strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](21, "app-who-we-are");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](22, "app-cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](23, "app-skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](24, "app-funfacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](25, "app-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](26, "app-how-we-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](27, "app-services-two");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](28, "app-why-we-different");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](29, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](30, "app-pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](31, "app-faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](32, "app-feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](33, "app-blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](34, "app-partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](35, "app-subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](36, "app-contact");
    } }, directives: [_common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_9__.ServicesTwoComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXRlbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 1011:
/*!*********************************************************************!*\
  !*** ./src/app/components/home-thirteen/home-thirteen.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeThirteenComponent": function() { return /* binding */ HomeThirteenComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/welcome/welcome.component */ 3416);
/* harmony import */ var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/about/about.component */ 7042);
/* harmony import */ var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strategy/strategy.component */ 8181);
/* harmony import */ var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/who-we-are/who-we-are.component */ 2096);
/* harmony import */ var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/cta/cta.component */ 9769);
/* harmony import */ var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/skill/skill.component */ 3649);
/* harmony import */ var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/funfacts/funfacts.component */ 5357);
/* harmony import */ var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/team/team.component */ 6278);
/* harmony import */ var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/how-we-work/how-we-work.component */ 4679);
/* harmony import */ var _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/services/services.component */ 8211);
/* harmony import */ var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/why-we-different/why-we-different.component */ 2337);
/* harmony import */ var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/work/work.component */ 3815);
/* harmony import */ var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/pricing/pricing.component */ 2019);
/* harmony import */ var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/faq/faq.component */ 2631);
/* harmony import */ var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/feedback/feedback.component */ 6900);
/* harmony import */ var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/blog/blog.component */ 3635);
/* harmony import */ var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/partner/partner.component */ 6455);
/* harmony import */ var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/subscribe/subscribe.component */ 9495);
/* harmony import */ var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/contact/contact.component */ 7524);




















class HomeThirteenComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeThirteenComponent.??fac = function HomeThirteenComponent_Factory(t) { return new (t || HomeThirteenComponent)(); };
HomeThirteenComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["????defineComponent"]({ type: HomeThirteenComponent, selectors: [["app-home-thirteen"]], decls: 38, vars: 0, consts: [[1, "main-banner", "item-bg-one"], ["id", "particles-js-two"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], ["href", "#welcome", 1, "btn", "btn-primary"], ["href", "#work", 1, "btn", "btn-primary", "view-work"]], template: function HomeThirteenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](7, "We Are Creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](9, "The Best ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](11, "Digital");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](12, " Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](14, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](16, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](18, "View Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](19, "app-welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](20, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](21, "app-strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](22, "app-who-we-are");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](23, "app-cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](24, "app-skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](25, "app-funfacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](26, "app-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](27, "app-how-we-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](28, "app-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](29, "app-why-we-different");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](30, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](31, "app-pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](32, "app-faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](33, "app-feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](34, "app-blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](35, "app-partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](36, "app-subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](37, "app-contact");
    } }, directives: [_common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__.ServicesComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXRoaXJ0ZWVuLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3562:
/*!***************************************************************!*\
  !*** ./src/app/components/home-three/home-three.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeThreeComponent": function() { return /* binding */ HomeThreeComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/welcome/welcome.component */ 3416);
/* harmony import */ var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/about/about.component */ 7042);
/* harmony import */ var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strategy/strategy.component */ 8181);
/* harmony import */ var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/who-we-are/who-we-are.component */ 2096);
/* harmony import */ var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/cta/cta.component */ 9769);
/* harmony import */ var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/skill/skill.component */ 3649);
/* harmony import */ var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/funfacts/funfacts.component */ 5357);
/* harmony import */ var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/team/team.component */ 6278);
/* harmony import */ var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/how-we-work/how-we-work.component */ 4679);
/* harmony import */ var _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/services/services.component */ 8211);
/* harmony import */ var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/why-we-different/why-we-different.component */ 2337);
/* harmony import */ var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/work/work.component */ 3815);
/* harmony import */ var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/pricing/pricing.component */ 2019);
/* harmony import */ var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/faq/faq.component */ 2631);
/* harmony import */ var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/feedback/feedback.component */ 6900);
/* harmony import */ var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/blog/blog.component */ 3635);
/* harmony import */ var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/partner/partner.component */ 6455);
/* harmony import */ var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/subscribe/subscribe.component */ 9495);
/* harmony import */ var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/contact/contact.component */ 7524);




















class HomeThreeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeThreeComponent.??fac = function HomeThreeComponent_Factory(t) { return new (t || HomeThreeComponent)(); };
HomeThreeComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["????defineComponent"]({ type: HomeThreeComponent, selectors: [["app-home-three"]], decls: 39, vars: 0, consts: [[1, "main-banner"], ["loop", "", "muted", "", "autoplay", "", "poster", "#", 1, "video-background"], ["src", "assets/video/promo-video.mp4", "type", "video/mp4"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], ["href", "#welcome", 1, "btn", "btn-primary"], ["href", "#work", 1, "btn", "btn-primary", "view-work"]], template: function HomeThreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](1, "video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](2, "source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](8, "We Are Creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](10, "The Best ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](12, "Digital");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](13, " Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](15, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](17, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](19, "View Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](20, "app-welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](21, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](22, "app-strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](23, "app-who-we-are");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](24, "app-cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](25, "app-skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](26, "app-funfacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](27, "app-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](28, "app-how-we-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](29, "app-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](30, "app-why-we-different");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](31, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](32, "app-pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](33, "app-faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](34, "app-feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](35, "app-blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](36, "app-partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](37, "app-subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](38, "app-contact");
    } }, directives: [_common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__.ServicesComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXRocmVlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7505:
/*!*****************************************************************!*\
  !*** ./src/app/components/home-twelve/home-twelve.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeTwelveComponent": function() { return /* binding */ HomeTwelveComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/welcome/welcome.component */ 3416);
/* harmony import */ var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/about/about.component */ 7042);
/* harmony import */ var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strategy/strategy.component */ 8181);
/* harmony import */ var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/who-we-are/who-we-are.component */ 2096);
/* harmony import */ var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/cta/cta.component */ 9769);
/* harmony import */ var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/skill/skill.component */ 3649);
/* harmony import */ var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/funfacts/funfacts.component */ 5357);
/* harmony import */ var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/team/team.component */ 6278);
/* harmony import */ var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/how-we-work/how-we-work.component */ 4679);
/* harmony import */ var _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/services-two/services-two.component */ 2784);
/* harmony import */ var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/why-we-different/why-we-different.component */ 2337);
/* harmony import */ var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/work/work.component */ 3815);
/* harmony import */ var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/pricing/pricing.component */ 2019);
/* harmony import */ var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/faq/faq.component */ 2631);
/* harmony import */ var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/feedback/feedback.component */ 6900);
/* harmony import */ var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/blog/blog.component */ 3635);
/* harmony import */ var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/partner/partner.component */ 6455);
/* harmony import */ var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/subscribe/subscribe.component */ 9495);
/* harmony import */ var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/contact/contact.component */ 7524);




















class HomeTwelveComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeTwelveComponent.??fac = function HomeTwelveComponent_Factory(t) { return new (t || HomeTwelveComponent)(); };
HomeTwelveComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["????defineComponent"]({ type: HomeTwelveComponent, selectors: [["app-home-twelve"]], decls: 37, vars: 0, consts: [[1, "main-banner", "item-bg-three", "gradient-bg", "ripple-effect", "jquery-ripples"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], ["href", "#welcome", 1, "btn", "btn-primary"], ["href", "#work", 1, "btn", "btn-primary", "view-work"]], template: function HomeTwelveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](6, "We Are Creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](8, "The Best ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](10, "Digital");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](11, " Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](13, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](15, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](17, "View Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](18, "app-welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](19, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](20, "app-strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](21, "app-who-we-are");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](22, "app-cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](23, "app-skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](24, "app-funfacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](25, "app-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](26, "app-how-we-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](27, "app-services-two");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](28, "app-why-we-different");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](29, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](30, "app-pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](31, "app-faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](32, "app-feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](33, "app-blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](34, "app-partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](35, "app-subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](36, "app-contact");
    } }, directives: [_common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_9__.ServicesTwoComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXR3ZWx2ZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6519:
/*!***********************************************************!*\
  !*** ./src/app/components/home-two/home-two.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeTwoComponent": function() { return /* binding */ HomeTwoComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _common_about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/about/about.component */ 7042);
/* harmony import */ var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/strategy/strategy.component */ 8181);
/* harmony import */ var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/who-we-are/who-we-are.component */ 2096);
/* harmony import */ var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/cta/cta.component */ 9769);
/* harmony import */ var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/skill/skill.component */ 3649);
/* harmony import */ var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/funfacts/funfacts.component */ 5357);
/* harmony import */ var _common_team_team_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/team/team.component */ 6278);
/* harmony import */ var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/how-we-work/how-we-work.component */ 4679);
/* harmony import */ var _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/services-two/services-two.component */ 2784);
/* harmony import */ var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/why-we-different/why-we-different.component */ 2337);
/* harmony import */ var _common_work_work_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/work/work.component */ 3815);
/* harmony import */ var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/pricing/pricing.component */ 2019);
/* harmony import */ var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/faq/faq.component */ 2631);
/* harmony import */ var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/feedback/feedback.component */ 6900);
/* harmony import */ var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/blog/blog.component */ 3635);
/* harmony import */ var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/partner/partner.component */ 6455);
/* harmony import */ var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/subscribe/subscribe.component */ 9495);
/* harmony import */ var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/contact/contact.component */ 7524);



















class HomeTwoComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeTwoComponent.??fac = function HomeTwoComponent_Factory(t) { return new (t || HomeTwoComponent)(); };
HomeTwoComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["????defineComponent"]({ type: HomeTwoComponent, selectors: [["app-home-two"]], decls: 72, vars: 0, consts: [[1, "home-slides", "owl-carousel", "owl-theme"], [1, "main-banner", "item-bg-two"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], ["href", "#about", 1, "btn", "btn-primary"], ["href", "#work", 1, "btn", "btn-primary", "view-work"], [1, "main-banner", "item-bg-one"], [1, "main-banner", "item-bg-three"]], template: function HomeTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](7, "We Are Creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](9, "Nice To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](11, "Meet");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](12, " You");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](14, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](16, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](18, "View Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](24, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](25, "We Are Professional");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](26, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](27, "Best ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](29, "Digital");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](30, " Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](32, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](33, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](34, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](35, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](36, "View Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](42, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](43, "We Are Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](44, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](45, "Creativity is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](47, "Intelligence");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](49, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](50, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](51, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](52, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](53, "View Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](54, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](55, "app-strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](56, "app-who-we-are");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](57, "app-cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](58, "app-skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](59, "app-funfacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](60, "app-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](61, "app-how-we-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](62, "app-services-two");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](63, "app-why-we-different");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](64, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](65, "app-pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](66, "app-faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](67, "app-feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](68, "app-blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](69, "app-partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](70, "app-subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](71, "app-contact");
    } }, directives: [_common_about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_1__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_2__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_3__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_4__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_5__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_6__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_7__.HowWeWorkComponent, _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_8__.ServicesTwoComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_9__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_10__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_11__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_12__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_13__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_14__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_15__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_16__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__.ContactComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXR3by5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    API: 'api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map