(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jashg\OneDrive - University of Cincinnati\A College\Semester VI\GableAllGood\gableallgood\gableallgood\src\main.ts */"zUnb");


/***/ }),

/***/ "5hVl":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class NavBarComponent {
    constructor() {
        this.isCollapsed = false;
    }
    ngOnInit() {
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 23, vars: 2, consts: [[1, "navbar", "navbar-expand-lg", "sticky-top"], ["routerLink", "/", 1, "navbar-brand", "logo"], ["src", "../../assets/logo/SecondarySlogan_Opt2.png", "height", "100", "width", "100"], ["type", "button", "aria-controls", "navbarToggler", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], ["role", "button", 1, ""], ["aria-hidden", "true", 1, "fa", "fa-bars", 2, "color", "#bb0f55"], ["id", "navbarToggler", 1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "navbar-nav", "ml-auto", "mt-2", "mt-lg-0"], [1, "nav-item", "ml-5"], ["routerLink", "/meet", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/platform", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/team", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/campus-support", "routerLinkActive", "active", 1, "nav-link"], [1, "nav-item", "ml-5", "mr-5"], ["routerLink", "/ideas", "routerLinkActive", "active", 1, "nav-link"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_button_click_3_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Meet April + Taylor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Platform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Our Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Campus Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Submit Your Ideas!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCollapse"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".navbar[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    font-family: 'Compact Light';\r\n    border-bottom:5px solid #bb0f55;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-size: 1.5em;\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 300;\r\n    \r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{\r\n    color:#bb0f55;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover   .nav-link[_ngcontent-%COMP%] {\r\n    color: #bb0f55;\r\n}\r\n\r\n.navbar-brand[_ngcontent-%COMP%]{\r\n    line-height: 5px;\r\n    \r\n    color: #591937;\r\n    font-weight: 800;\r\n}\r\n\r\n#subext[_ngcontent-%COMP%]{\r\n    font-size: large;\r\n    color: #591937;\r\n    \r\n}\r\n\r\n#subtext[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    \r\n    color: #591937;\r\n    -webkit-text-fill-color:white;\r\n    \r\n}\r\n\r\n#subtext[_ngcontent-%COMP%]:hover{\r\n    color: #591937;\r\n    -webkit-text-fill-color:#591937;\r\n}\r\n\r\n.maintext[_ngcontent-%COMP%]{\r\n    color: #591937;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n    src: url('Site_logo_fill.png');\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFHQTtJQUNJLGdCQUFnQjs7SUFFaEIsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjOztBQUVsQjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsNkJBQTZCOztBQUVqQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCwrQkFBK0I7QUFDbkM7O0FBR0E7SUFDSSxjQUFjO0FBQ2xCOztBQUdBO0lBQ0ksOEJBQWdEO0FBQ3BEIiwiZmlsZSI6Im5hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubmF2YmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ0NvbXBhY3QgTGlnaHQnO1xyXG4gICAgYm9yZGVyLWJvdHRvbTo1cHggc29saWQgI2JiMGY1NTtcclxufVxyXG5cclxuLm5hdmJhciBhe1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBcclxufVxyXG5cclxuLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluay5hY3RpdmV7XHJcbiAgICBjb2xvcjojYmIwZjU1O1xyXG59XHJcbi5uYXZiYXItbmF2IC5uYXYtaXRlbTpob3ZlciAubmF2LWxpbmsge1xyXG4gICAgY29sb3I6ICNiYjBmNTU7XHJcbn1cclxuXHJcblxyXG4ubmF2YmFyLWJyYW5ke1xyXG4gICAgbGluZS1oZWlnaHQ6IDVweDtcclxuICAgIFxyXG4gICAgY29sb3I6ICM1OTE5Mzc7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG5cclxuI3N1YmV4dHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBjb2xvcjogIzU5MTkzNztcclxuICAgIFxyXG59XHJcblxyXG4jc3VidGV4dCBzcGFue1xyXG4gICAgXHJcbiAgICBjb2xvcjogIzU5MTkzNztcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOndoaXRlO1xyXG4gICAgXHJcbn1cclxuXHJcbiNzdWJ0ZXh0OmhvdmVye1xyXG4gICAgY29sb3I6ICM1OTE5Mzc7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjojNTkxOTM3O1xyXG59XHJcblxyXG5cclxuLm1haW50ZXh0e1xyXG4gICAgY29sb3I6ICM1OTE5Mzc7XHJcbn1cclxuXHJcblxyXG4ubG9nbzpob3ZlciBpbWd7XHJcbiAgICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2xvZ28vU2l0ZV9sb2dvX2ZpbGwucG5nJyk7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "72M+":
/*!*********************************************************************!*\
  !*** ./src/app/platform/platform-icons/platform-icons.component.ts ***!
  \*********************************************************************/
/*! exports provided: PlatformIconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformIconsComponent", function() { return PlatformIconsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function PlatformIconsComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The college experience only happens once and we intend to make the most of it for all Bearcats!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlatformIconsComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Putting energy behind words through initiatives that will break down barriers between the student body and campus resources all while increasing transperancy and accessibility regarding Student Government endeavours.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlatformIconsComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "We believe that small, healthy habits make the biggest of differences. We aim to have each Bearcat know they are supported and able to make an impact for generations to come.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlatformIconsComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "As spirit and excitement return to our campus we envision our One Team united from school day to game day.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlatformIconsComponent_div_21_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Want to see something never done before on campus? Submit your ideas for Gable + Allgood to improve UC and your idea might just be chosen to be our final platform point!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlatformIconsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PlatformIconsComponent_div_21_p_4_Template, 2, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.description);
} }
class PlatformIconsComponent {
    constructor() { }
    ngOnInit() {
    }
}
PlatformIconsComponent.ɵfac = function PlatformIconsComponent_Factory(t) { return new (t || PlatformIconsComponent)(); };
PlatformIconsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlatformIconsComponent, selectors: [["platform-icons"]], inputs: { description: "description", lastPlat: "lastPlat" }, decls: 22, vars: 5, consts: [[1, "platform-icons", "mt-2"], [1, "box1"], ["src", "../../assets/Platform/CampusEx.png", "height", "200px", "width", "200px", "alt", ""], [4, "ngIf"], ["src", "../../assets/Platform/Action.png", "height", "200px", "width", "200px", "alt", ""], ["src", "../../assets/Platform/Sustainability.png", "height", "200px", "width", "200px", "alt", ""], ["src", "../../assets/Platform/OhVarsity.png", "height", "200px", "width", "200px", "alt", ""], ["class", "box1 ", 4, "ngIf"], ["src", "../../assets/Platform/Submit.png", "height", "200px", "width", "200px", "alt", ""]], template: function PlatformIconsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Campus Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PlatformIconsComponent_p_5_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PlatformIconsComponent_p_10_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sustainability");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PlatformIconsComponent_p_15_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Oh, Varsity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PlatformIconsComponent_p_20_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PlatformIconsComponent_div_21_Template, 5, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lastPlat);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".platform-icons[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    \r\n    flex-wrap: wrap;\r\n    min-height: 100%;\r\n}\r\n\r\n.box1[_ngcontent-%COMP%]{\r\n    flex-basis: 20%;\r\n    text-align: center;   \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXRmb3JtLWljb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCOztJQUU3QixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJwbGF0Zm9ybS1pY29ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYXRmb3JtLWljb25ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgXHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYm94MXtcclxuICAgIGZsZXgtYmFzaXM6IDIwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICBcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatformIconsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'platform-icons',
                templateUrl: './platform-icons.component.html',
                styleUrls: ['./platform-icons.component.css']
            }]
    }], function () { return []; }, { description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lastPlat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "7rov":
/*!********************************************************!*\
  !*** ./src/app/submit-ideas/submit-ideas.component.ts ***!
  \********************************************************/
/*! exports provided: SubmitIdeasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitIdeasComponent", function() { return SubmitIdeasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SubmitIdeasComponent {
    constructor() { }
    ngOnInit() {
    }
}
SubmitIdeasComponent.ɵfac = function SubmitIdeasComponent_Factory(t) { return new (t || SubmitIdeasComponent)(); };
SubmitIdeasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubmitIdeasComponent, selectors: [["app-submit-ideas"]], decls: 5, vars: 0, consts: [[1, "p-2", "text-center"], [1, "googleform"], ["src", "https://docs.google.com/forms/d/e/1FAIpQLSerarF_ugq0HG24x6fKagxDNzJ4sFumgX1OtjbXGi8py2PXMQ/viewform?embedded=true", "width", "100%", "height", "1416px", "frameborder", "0", "marginheight", "0", "marginwidth", "0"]], template: function SubmitIdeasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "H2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Make Your Voice Heard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "iframe", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading\u2026");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h2[_ngcontent-%COMP%]{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 600;\r\n    \r\n}\r\n\r\n.googleform[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pdC1pZGVhcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0lBQ2pDLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3VibWl0LWlkZWFzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcclxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBcclxufVxyXG5cclxuLmdvb2dsZWZvcm17XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubmitIdeasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-submit-ideas',
                templateUrl: './submit-ideas.component.html',
                styleUrls: ['./submit-ideas.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _platform_platform_icons_platform_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/platform-icons/platform-icons.component */ "72M+");



class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["ng-component"]], decls: 13, vars: 2, consts: [["src", "../../assets/Candidates/banner-min.png", 1, "img-fluid"], [1, "mt-3"], [1, "p-2", 2, "text-align", "center"], ["id", "line-strip"], [3, "description", "lastPlat"], ["src", "https://player.vimeo.com/video/512833122?badge=0&autopause=0&player_id=0&app_id=58479", "width", "100%", "height", "500", "frameborder", "0", "allow", "autoplay; fullscreen; picture-in-picture", "allowfullscreen", "", "title", "Intro Video", 1, "intro-vid"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "H3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hey Bearcats!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Gable + Allgood here! We're very excited to be running to be your next Student Body President + Vice President at the University of Cincinnati! We look forward to every COVID Careful interaction with you over these next couple weeks and can't wait to learn what's most important to you! We hope to share more about our vision and platform and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "#TogetherWeWill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " build the movement to help students succeed!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "H1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "What We Stand For");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "platform-icons", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "iframe", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("description", true)("lastPlat", false);
    } }, directives: [_platform_platform_icons_platform_icons_component__WEBPACK_IMPORTED_MODULE_1__["PlatformIconsComponent"]], styles: ["p[_ngcontent-%COMP%]{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 300;\r\n    font-size: 16pt;\r\n    line-height: 1.2;\r\n}\r\n\r\np[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    color: #bb0f55;\r\n}\r\n\r\nH3[_ngcontent-%COMP%]{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 600;\r\n    font-size: 28pt;\r\n}\r\n\r\nH1[_ngcontent-%COMP%]{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 600;\r\n}\r\n\r\n.intro-vid[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding-top: 20px;\r\n}\r\n\r\n#line-strip[_ngcontent-%COMP%]{\r\n    height: 0px;\r\n    width: 100%;\r\n    border-bottom: 2px solid #bb0f55;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7O0FBRUg7SUFDSSxpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGdDQUFnQztBQUNwQyIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQe1xyXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufSAqL1xyXG5cclxucHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDE2cHQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG59XHJcbnAgc3BhbntcclxuICAgIGNvbG9yOiAjYmIwZjU1O1xyXG59XHJcbkgze1xyXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMjhwdDtcclxufVxyXG5cclxuSDF7XHJcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uaW50cm8tdmlke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbiNsaW5lLXN0cmlwe1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYmIwZjU1O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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

/***/ "B15d":
/*!**********************************************!*\
  !*** ./src/app/platform/platform.service.ts ***!
  \**********************************************/
/*! exports provided: PlatformService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformService", function() { return PlatformService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class PlatformService {
    // getPlatforms():Observable<IPlatform[]>{
    //     let subject = new Subject<IPlatform[]>();
    //     setTimeout(()=> {subject.next(PLATFORMS); subject.complete(); },
    //     100)
    //     return subject;
    // }
    getCampusExperience() {
        let subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        setTimeout(() => { subject.next(CAMPUSEXP); subject.complete(); }, 100);
        return subject;
    }
    getAction() {
        let subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        setTimeout(() => { subject.next(ACTION); subject.complete(); }, 100);
        return subject;
    }
    getSustainability() {
        let subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        setTimeout(() => { subject.next(SUSTAINABILITY); subject.complete(); }, 100);
        return subject;
    }
    getVarsity() {
        let subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        setTimeout(() => { subject.next(VARSITY); subject.complete(); }, 100);
        return subject;
    }
    getYourCampus() {
        let subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        setTimeout(() => { subject.next(YOURCAMPUS); subject.complete(); }, 100);
        return subject;
    }
}
PlatformService.ɵfac = function PlatformService_Factory(t) { return new (t || PlatformService)(); };
PlatformService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PlatformService, factory: PlatformService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatformService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
const CAMPUSEXP = [
    {
        name: "Career Studio Interview Booths",
        info: `Due to the COVID-19 Pandemic, more interviews are becoming virtual and there is a growing need for a space on campus where students can find quiet, an appropriate background, and good lighting. Through the addition of reservable interview booths, students can feel confident, prepared, and present during their interviews!`,
        impact: "This opportunity will be available to all members of the Bearcat Community. Reservations will be able to be made through the Bearcat Promise Career Studio similar to the Professional Headshot Booth.",
        plan: "While directly working with the staff at the Bearcat Promise Studio, we will create a request template where students can register for a time to use the space. In addition, we plan to collect student feedback through a response form receipt after the reservation is completed to continuously work to make a comfortable space to foster success. ",
        color: "cherry"
    },
    {
        name: "Steger Student Center Office Markings",
        info: "Add office directories to the Steger Student Life Center for improved access and ability to locate varying resources, centers, and offices for student growth.",
        impact: "This initiative will impact all students on campus, but most notably students harboring marginalized identities and that are seeking support during their time at UC.",
        plan: "It is important that students of all identities feel supported on this campus, and our various identity based centers are pivotal in uplifting this part of the student experience. In order for students to connect with these identity based centers, they must be able to easily locate these centers when they are strolling through campus. By adding more signage and floor directories, we hope to remind students that these offices are readily available to support them however they need while also expanding the reach of the groups listed. ",
        color: "cherry"
    },
    {
        name: "Initiative Pipeline",
        info: `In order for the Undergraduate Student Government to truly represent all students, it is important to have a visible and accessible avenue for communication.
        Through the usage of campus screens, including those at branch campuses, SG in collaboration with TUC and MainStreet Operations will create biweekly and monthly reports that will be shared with students to keep them updated with upcoming projects, events, and meetings.`,
        impact: "As SG is to serve all members of the Bearcat Community, this initiative is aimed to impact both students and staff of the University of Cincinnati. Our goal is to be as transparent and include as many students in efforts to advance the university as possible, in turn offering a platform for all to share their thoughts and hopes.",
        plan: "Through combined efforts between G+A ,SG Media Directors and Press Secretary, biweekly updates through social media channels and monthly updates will be submitted to TUC and MainStreet Operations Directors to broadcast on screens in TUC, Dining Halls, Residence Halls, both Branch Campuses, and the University Recreation Center. These updates will include: meeting times and locations, upcoming events, applications, board events, and contact information for the SG Instagram and website. ",
        color: "cherry"
    }
];
const ACTION = [
    {
        name: "Less Talk More Action",
        info: "Our university offers a multitude of offices and identity based centers with the purpose of fostering diversity, equity, and inclusion amongst our student body. Just as student organizations are spotlighted through the Annual Student Organization Fair, we propose a week-long diversity, equity and inclusion conference aimed at bringing more attention to identity-based centers, education, and active, available resources.",
        impact: "All members of the Bearcat Community - students, staff, and faculty - are welcomed and encouraged to attend, volunteer, and learn throughout this event.",
        plan: `In order to create this conference, we plan to work alongside parties and offices such as the Office of Ethnic Programs and Services, Bearcat Support Network, and the Office of Equity and Inclusion, as well as identity based centers, such as the Women’s Center, the LGBTQ+ Center, Wellness Center, and the African American Cultural Resource Center to elevate the missions, voices, and resources to all of the student body.
        This week-long event will include sessions to learn about intersectionality and educate peers on critical information about identities and backgrounds as well as events to celebrate what makes us uniquely us. The event will be conducted in a hybrid format, a combination of hybrid and in-person sessions, held at varying times each day to ensure all students are able to participate around their individual schedules.`,
        color: "yellowish"
    },
    {
        name: "Civil Discourse Training",
        info: "Undergraduate Student Government will create a shareable civil discourse training to encourage constructive dialogue between Bearcats. This initiative will be completed in correspondence with the SG Governmental Relations Committee in order to develop an additional presentation for student organizations, students, and faculty to request to become Bearcat Civil Discourse Certified similar to Mental Health Champions. ",
        impact: "All members of the Bearcat community will be positively impacted through the addition of this training to develop their journeys of cultural competency and learn how to effectively engage and address differences. ",
        plan: "Utilize SG Directors and UC Faculty members like Assistant Dean Carol Tonge Mack, to share the training to all corners of UC to reach different organizations and services on campus. While working with these parties we will encourage organizations to include this training as a part of their new member process and / or as a part of their yearly organization RESET. ",
        color: "yellowish"
    },
    {
        name: "Mental Health Advocacy Week",
        info: "The student experience is at the priority of our agenda for this campaign, and mental health is undoubtedly one of the most important topics for students across our campus. Advocating and prioritizing the mental health of our students is of the utmost importance and together, Student Government will host a Mental Health Reset Week with campus and community partners to increase awareness of intersectionality and care. ",
        impact: "Mental health resources are available to all students likewise our Mental Health Reset Week will be open to all interested students to attend and reset.",
        plan: "In order to craft a Mental Health Advocacy week, we plan to work with campus resources, such as Bearcat Support Network, University of Cincinnati Counseling and Psychological Services, the UC Wellness Center and many community and campus partners to build a comprehensive schedule that educates all on vital topics for self and community growth. We hope that this week provides a chance for students to take a moment away from their class work, extracurriculars, and schedules to learn about the importance of mental health. Adjacent to this event, Student Government will encourage organizations to take a week off from weekly meetings, events, and commitments to pay the time forward to their members. This follows the same format as both UC’s and Ohio State University’s Recess Weeks from Fall 2020 Semester.",
        color: "yellowish"
    },
    {
        name: "Your School, Your Voice Information Request",
        info: "An addition of virtual form to the Student Government website for students to suggest initiatives, present feedback, and request contact information. ",
        impact: "This initiative will be open to all students on campus, especially those who are looking to make campus wide change and gather support from fellow students. ",
        plan: `Our plan is to establish a page on the Student Government Website dedicated to having the student voice heard.  Currently, there is no platform for students within Student Government and for those who are not to provide input on what they would like to see happen on this campus. 
        On this page, we will create a section for students to (1) suggest initiatives/changes they would like to see, (2) provide feedback on past or ongoing Student Government initiatives, and (3) request contact information of Student Government officials who they would like to reach out to for further collaboration. 
        Student Government works for you and in order to have the student voice heard, we must establish a platform for students to go to with their suggestions.`,
        color: "yellowish"
    }
];
const SUSTAINABILITY = [
    {
        name: "Reusable Dining Sets",
        info: `Let’s promote sustainable practice while eating on and around campus from day one by creating and dispersing a supply of reusable ware and straws to students.
        Creating a greener university is a lifelong commitment for this university and by targeting our dining halls on campus, we can work to create sustainable change in our plastic usage.`,
        impact: "We believe that this initiative would benefit all students, but our main focus would be to support students with on-campus meal plans. Although these items are not limited to only be used on-campus, but can be used anywhere Bearcats roam!",
        plan: `In order to begin this process, we will partner with UC Food Services and UC Sustainability to identify reusable tupperware and straw options that would be best suited for our students.
        In addition, SG will work alongside Residential Education and Development (RED) and Housing Services to distribute these items to on-campus residents at the beginning of the Fall 2021 Semester. Additional sets will be available for students to pick up during Welcome Week and early Fall Semester events.`,
        color: "darkmaroon"
    },
    {
        name: "Everyone Eats - Bearcat Fuel Fridge",
        info: `In between classes and need a snack? Or heading home for the night and haven’t gone grocery shopping yet? We get it!
        Inspired by Cincinnati Local Fridges, SG with support of the Bearcat Food Recovery Network, UC Wellness Center, and Dining Services to add a communal campus fridge for students to take what they need and give what they can.
        Not only will we work to bridge the gap between food insecurity on campus, but lower food waste.`,
        impact: `Everyone Eats.
        The Bearcat Fuel Fridge will be available to all students on UC’s Main Campus, but with greater focus on supporting students who face food insecurity in their daily lives. 
        On busy days, walking to local food pantries can be difficult. Place in a centrally-located space, the new Wellness Cafe located in the old Steger Starbucks lounge, with nutritional items and allergy friendly foods for students to take advantage of so that they do not have to worry where their next meal will be.
        `,
        plan: `In order to establish the Bearcat Fuel Fridge, we establish bonds and communication between Dining Services, Bearcat Food Recovery Network, local businesses, Bearcat Pantry, and UC Wellness Center to obtain items to stock the refrigerator with. 
        In addition, we plan to have our fellow food safety trained Bearcats and staff members manage and maintain the contents of the fridge during operational hours to ensure allergies, nutrition, best by dates are respected and clearly administered. 
        In order to serve all Bearcats and know their needs, a QR Code form will be located at the fridge for participants to scan and fill out based upon their experience. I.e. What items students would like to see added, dietary needs, number of items picked up that day, and feedback submission.  
        `,
        color: "darkmaroon"
    },
    {
        name: "Career Ready Clothing Drive",
        info: "Create a university-wide clothing drive to update and support students taking their next step to future success.",
        impact: "This initiative will affect all students as they will be invited to attend and donate to the Career Ready Clothing Drive. ",
        plan: `Our goal is to place emphasis on providing affordable business professional attire for students to obtain and wear proudly when venturing out to experiential learning and future career opportunities.
        While working with varying offices and career readiness centers, we will build a plethora of updated, styled clothing items for students to pick up and add to their closets. This initiative will be a fluid process with no official end date in order to continue the collaboration. 
        Social media spotlights and email communication will be heavily shared with students regarding the drive when nearing Career Fairs and organization recruitments. 
        `,
        color: "darkmaroon"
    }
];
const VARSITY = [
    {
        name: "The Women of One Team",
        info: `When women win, we all win. Together we will increase exposure and empowerment within UC Women’s Sports by advancements in advertisement, exposure, and game coverage.
        Our university is well known for our pride and cheer for our athletic teams as our sport’s success  is a monumental part of our campus experience. 
        As the first all-women slate, we would like to amplify the recognition, hype, and game day coverage of UC Women’s Athletics and individual athletes.
        `,
        impact: `This initiative will impact all UC sports fans and student athletes near and far.`,
        plan: `Our plan for this initiative is broken up into advocacy, exposure, and connection.
        We will continue the work of Hannah Markel’s and Dr. Sojka’s work and legacy of the Inspire Equip Connect Program (IEC) to further positively affect the next generations of Bearcats to come. This program will be expanded to have more members of the community trained and able to attend IEC sessions. 
        Expand recognition of women student athletes and team achievements from additions of, but not limited too: Women Athlete of the Month, game day highlights, promote scheduled meets and events, and recognition of the powerful women-identifying coaching staff. 
        `,
        color: "isthischerry"
    },
    {
        name: "Expand Bearcat Fridays",
        info: `Bring back the excitement of one of UC’s decades long traditions in all it’s glory that will have you boasting from coast to coast! By welcoming local and student run businesses to the game day excitement through the addition of tabling we will foster a community of support for holistic school spirit. `,
        impact: `Expanding Bearcat Fridays means all members of the UC community are invited and highly encouraged to partake in the newest addition of this experience! Through increasing visibility to student entrepreneurial efforts and community members, we hope to positively impact business success. This would also expand inward to the first-year and transfer experience by introducing new Bearcats to all that Cincinnati has to offer!`,
        plan: `Why should Bearcat Fridays stop at game day festivities? We envision spirit and excitement returning to campus with strength in unity as our backbone. 
        Student and locally run businesses will be invited to table during the Friday celebrations in a format similar to that of the annual SG Farmer’s Market. Here businesses are able to expand to new audiences and introduce students to all that is offered at UC. 
        Organizations, Clubs, Identity Based Centers, and Campus Resources will be proudly welcomed to table along MainStreet to introduce their groups to the student body, outreach for recruitment, and increase the excitement. 
        Events including Bearcat photo opportunities, team shoutouts, and spirit squads will also be found in the line up. 
        `,
        color: "isthischerry"
    },
    {
        name: "UC Re-Envisioned",
        info: `With a campus full of passion and color, we know many members of the student body who are always ready to show off their spirit! 
        As we reopen campus we see the need to come back with a new look - students will make their mark on campus with an official spirit rock, outdoor student lounge space, and additional mural spaces.
        `,
        impact: `This initiative will impact all Bearcats! By providing more places for Bearcats to express their pride, we will work to create a brighter and more spirited UC for all. `,
        plan: `To tackle these three ideas, we will work with numerous on campus and off campus groups to ensure all safety precautions, funding needs, and campus requests are fulfilled. 
        Unlike many large universities and institutions, UC does not hold a Spirit Rock for students to decorate and check out. With the addition of our own, organizations and students can advertise and bring awareness to events in a new, exciting format. 
        Both collaborative and decorative campus mural spaces will be created for student’s to reclaim their time at UC and manifest their future success in a creative and expressive manner as well as highlight red & black on campus! 
        Create an on campus location where students can gather to showcase their talents of arts, organizations could meet in fair weather, and re-envisioned to make campus more versatile and up to date with the progression of student experience. We aim to survey the student body and gauge what an ideal outdoor student lounge space would look like in order to craft a working floor plan that all can make their own alongside campus resources and offices. 
        `,
        color: "isthischerry"
    }
];
const YOURCAMPUS = [
    {
        name: "Submit Your Platform Point",
        info: `Want to see something never done before on campus? Submit your ideas for Gable + Allgood to improve UC and your idea might just be chosen to be our final platform point!
        Similar to one of our initiatives in our Action Pillar, from the start of campaigning to the final day before platform submission, we will be accepting any initiatives ideas you would like us to add to our campaign to be our final platform point!`,
        impact: ``,
        plan: ``,
        color: "yellowish"
    }
];


/***/ }),

/***/ "Ku9T":
/*!**********************************************************!*\
  !*** ./src/app/campus-support/campus-support.service.ts ***!
  \**********************************************************/
/*! exports provided: SupportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportService", function() { return SupportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class SupportService {
    getSupports() {
        let subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        setTimeout(() => { subject.next(SUPPORT); subject.complete(); }, 100);
        return subject;
    }
}
SupportService.ɵfac = function SupportService_Factory(t) { return new (t || SupportService)(); };
SupportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SupportService, factory: SupportService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupportService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
const SUPPORT = [
    {
        id: 1,
        address: "../../assets/testimonials/1.png"
    },
    {
        id: 2,
        address: "../../assets/testimonials/2.png"
    },
    {
        id: 3,
        address: "../../assets/testimonials/3.png"
    },
    {
        id: 4,
        address: "../../assets/testimonials/4.png"
    },
    {
        id: 5,
        address: "../../assets/testimonials/5.png"
    },
    {
        id: 6,
        address: "../../assets/testimonials/6.png"
    },
    {
        id: 7,
        address: "../../assets/testimonials/7.png"
    },
    {
        id: 8,
        address: "../../assets/testimonials/8.png"
    },
    {
        id: 9,
        address: "../../assets/testimonials/9.png"
    },
    {
        id: 10,
        address: "../../assets/testimonials/10.png"
    },
    {
        id: 11,
        address: "../../assets/testimonials/11.png"
    },
    {
        id: 12,
        address: "../../assets/testimonials/12.png"
    },
    {
        id: 13,
        address: "../../assets/testimonials/13.png"
    },
    {
        id: 14,
        address: "../../assets/testimonials/14.png"
    },
    {
        id: 15,
        address: "../../assets/testimonials/15.png"
    },
    {
        id: 16,
        address: "../../assets/testimonials/16.png"
    },
    {
        id: 17,
        address: "../../assets/testimonials/17.png"
    },
    {
        id: 18,
        address: "../../assets/testimonials/18.png"
    },
    {
        id: 19,
        address: "../../assets/testimonials/19.png"
    },
    {
        id: 20,
        address: "../../assets/testimonials/20.png"
    },
    {
        id: 21,
        address: "../../assets/testimonials/21.png"
    },
    {
        id: 22,
        address: "../../assets/testimonials/22.png"
    },
    {
        id: 23,
        address: "../../assets/testimonials/23.png"
    },
    {
        id: 24,
        address: "../../assets/testimonials/24.png"
    },
    {
        id: 25,
        address: "../../assets/testimonials/25.png"
    },
    {
        id: 26,
        address: "../../assets/testimonials/26.png"
    },
    {
        id: 27,
        address: "../../assets/testimonials/27.png"
    },
    {
        id: 28,
        address: "../../assets/testimonials/28.png"
    },
    {
        id: 29,
        address: "../../assets/testimonials/29.png"
    },
    {
        id: 30,
        address: "../../assets/testimonials/30.png"
    },
    {
        id: 31,
        address: "../../assets/testimonials/31.png"
    },
    {
        id: 32,
        address: "../../assets/testimonials/32.png"
    },
    {
        id: 33,
        address: "../../assets/testimonials/33.png"
    },
    {
        id: 34,
        address: "../../assets/testimonials/34.png"
    },
    {
        id: 35,
        address: "../../assets/testimonials/35.png"
    },
    {
        id: 36,
        address: "../../assets/testimonials/36.png"
    },
    {
        id: 37,
        address: "../../assets/testimonials/37.png"
    },
    {
        id: 39,
        address: "../../assets/testimonials/39.png"
    },
    {
        id: 40,
        address: "../../assets/testimonials/40.png"
    },
    {
        id: 41,
        address: "../../assets/testimonials/41.png"
    },
    {
        id: 42,
        address: "../../assets/testimonials/42.png"
    },
    {
        id: 43,
        address: "../../assets/testimonials/43.png"
    },
    {
        id: 44,
        address: "../../assets/testimonials/44.png"
    },
    {
        id: 45,
        address: "../../assets/testimonials/45.png"
    },
    {
        id: 46,
        address: "../../assets/testimonials/46.png"
    },
    {
        id: 47,
        address: "../../assets/testimonials/47.png"
    },
    {
        id: 48,
        address: "../../assets/testimonials/48.png"
    },
    {
        id: 49,
        address: "../../assets/testimonials/49.png"
    },
    {
        id: 50,
        address: "../../assets/testimonials/50.png"
    },
    {
        id: 51,
        address: "../../assets/testimonials/51.png"
    },
    {
        id: 52,
        address: "../../assets/testimonials/52.png"
    },
    {
        id: 53,
        address: "../../assets/testimonials/53.png"
    },
    {
        id: 54,
        address: "../../assets/testimonials/54.png"
    },
    {
        id: 55,
        address: "../../assets/testimonials/55.png"
    },
    {
        id: 56,
        address: "../../assets/testimonials/56.png"
    },
    {
        id: 57,
        address: "../../assets/testimonials/57.png"
    },
    {
        id: 58,
        address: "../../assets/testimonials/58.png"
    },
    {
        id: 59,
        address: "../../assets/testimonials/59.png"
    },
    {
        id: 60,
        address: "../../assets/testimonials/60.png"
    },
    {
        id: 61,
        address: "../../assets/testimonials/61.png"
    },
    {
        id: 62,
        address: "../../assets/testimonials/62.png"
    },
    {
        id: 63,
        address: "../../assets/testimonials/63.png"
    },
    {
        id: 64,
        address: "../../assets/testimonials/64.png"
    },
    {
        id: 65,
        address: "../../assets/testimonials/65.png"
    },
    {
        id: 66,
        address: "../../assets/testimonials/66.png"
    },
    {
        id: 67,
        address: "../../assets/testimonials/67.png"
    },
    {
        id: 68,
        address: "../../assets/testimonials/68.png"
    },
    {
        id: 69,
        address: "../../assets/testimonials/69.png"
    },
    {
        id: 70,
        address: "../../assets/testimonials/70.png"
    },
    {
        id: 72,
        address: "../../assets/testimonials/72.png"
    },
    {
        id: 73,
        address: "../../assets/testimonials/73.png"
    }
];


/***/ }),

/***/ "PhBf":
/*!************************************************************!*\
  !*** ./src/app/campus-support/campus-support.component.ts ***!
  \************************************************************/
/*! exports provided: CampusSupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampusSupportComponent", function() { return CampusSupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _campus_support_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./campus-support.service */ "Ku9T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function CampusSupportComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CampusSupportComponent_div_5_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const support_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.openImage(support_r2.address); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const support_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", support_r2.address, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CampusSupportComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CampusSupportComponent_div_7_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.closeImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.modalImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class CampusSupportComponent {
    constructor(supportService) {
        this.supportService = supportService;
        this.imgOpen = false;
    }
    ngOnInit() {
        this.supports = this.supportService.getSupports();
    }
    openImage(src) {
        this.modalImg = src;
        this.imgOpen = true;
    }
    closeImage() {
        this.imgOpen = false;
    }
}
CampusSupportComponent.ɵfac = function CampusSupportComponent_Factory(t) { return new (t || CampusSupportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_campus_support_service__WEBPACK_IMPORTED_MODULE_1__["SupportService"])); };
CampusSupportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CampusSupportComponent, selectors: [["app-campus-support"]], decls: 8, vars: 4, consts: [[1, "mt-2"], [1, "campus-support"], ["class", "box1 p-2", 4, "ngFor", "ngForOf"], ["id", "myModal", "class", "modal", 4, "ngIf"], [1, "box1", "p-2"], ["alt", "", 2, "cursor", "pointer", 3, "src", "click"], ["id", "myModal", 1, "modal"], [1, "close", 3, "click"], ["id", "img01", 1, "modal-content", 3, "src"], ["id", "caption"]], template: function CampusSupportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CAMPUS SUPPORT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Check out why these campus leaders are suppoting us!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CampusSupportComponent_div_5_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CampusSupportComponent_div_7_Template, 5, 1, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.supports));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imgOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".campus-support[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    flex-wrap:wrap;\r\n}\r\n\r\n.box1[_ngcontent-%COMP%]{\r\n    flex-basis: 30%;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    max-width: 100%;\r\n    min-width: 300px;\r\n    box-shadow: 5px 5px 3px grey;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]:hover{\r\n    box-shadow: 6px 6px 4px grey;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 300;\r\n    font-size: 11pt;\r\n    text-align: center;\r\n}\r\n\r\nH2[_ngcontent-%COMP%]{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 600;\r\n    font-size: 28pt;\r\n    text-align: center;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n    display: block; \r\n    position: fixed; \r\n    z-index: 1; \r\n    padding-top: 200px; \r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; \r\n    height: 100%; \r\n    overflow: auto; \r\n    background-color: rgb(0,0,0); \r\n    background-color: rgba(0,0,0,0.9); \r\n}\r\n\r\n\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    display: block;\r\n    width: 80%;\r\n    max-width: 650px;\r\n}\r\n\r\n\r\n\r\n#caption[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    display: block;\r\n    width: 80%;\r\n    max-width: 700px;\r\n    text-align: center;\r\n    color: #ccc;\r\n    padding: 10px 0;\r\n    height: 150px;\r\n}\r\n\r\n\r\n\r\n.modal-content[_ngcontent-%COMP%], #caption[_ngcontent-%COMP%] {\r\n    animation-name: zoom;\r\n    animation-duration: 0.6s;\r\n}\r\n\r\n\r\n\r\n.close[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 135px;\r\n    right: 35px;\r\n    color: #f1f1f1;\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n    transition: 0.3s;\r\n}\r\n\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n    color: #bbb;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbXB1cy1zdXBwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUdBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBQ0E7SUFDSSxpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSSxjQUFjLEVBQUUsc0JBQXNCO0lBQ3RDLGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsVUFBVSxFQUFFLGVBQWU7SUFDM0Isa0JBQWtCLEVBQUUsd0JBQXdCO0lBQzVDLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVyxFQUFFLGVBQWU7SUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixjQUFjLEVBQUUsNEJBQTRCO0lBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtJQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7QUFDNUQ7O0FBRUEsMEJBQTBCOztBQUMxQjtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQSxrRUFBa0U7O0FBQ2xFO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUEsc0NBQXNDOztBQUN0QztJQUNJLG9CQUFvQjtJQUNwQix3QkFBd0I7QUFDNUI7O0FBRUEscUJBQXFCOztBQUNyQjtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkIiLCJmaWxlIjoiY2FtcHVzLXN1cHBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW1wdXMtc3VwcG9ydHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGZsZXgtd3JhcDp3cmFwO1xyXG59XHJcblxyXG4uYm94MXtcclxuICAgIGZsZXgtYmFzaXM6IDMwJTtcclxufVxyXG5cclxuXHJcbmltZ3tcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDNweCBncmV5O1xyXG59XHJcblxyXG5pbWc6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiA2cHggNnB4IDRweCBncmV5O1xyXG59XHJcbnB7XHJcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxMXB0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5IMntcclxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDI4cHQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4ubW9kYWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICAgIHBhZGRpbmctdG9wOiAyMDBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOSk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxufVxyXG5cclxuLyogTW9kYWwgQ29udGVudCAoSW1hZ2UpICovXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1heC13aWR0aDogNjUwcHg7XHJcbn1cclxuXHJcbi8qIENhcHRpb24gb2YgTW9kYWwgSW1hZ2UgKEltYWdlIFRleHQpIC0gU2FtZSBXaWR0aCBhcyB0aGUgSW1hZ2UgKi9cclxuI2NhcHRpb24ge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLyogQWRkIEFuaW1hdGlvbiAtIFpvb20gaW4gdGhlIE1vZGFsICovXHJcbi5tb2RhbC1jb250ZW50LCAjY2FwdGlvbiB7XHJcbiAgICBhbmltYXRpb24tbmFtZTogem9vbTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcclxufVxyXG5cclxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xyXG4uY2xvc2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMzVweDtcclxuICAgIHJpZ2h0OiAzNXB4O1xyXG4gICAgY29sb3I6ICNmMWYxZjE7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5jbG9zZTpob3ZlcixcclxuLmNsb3NlOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjYmJiO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CampusSupportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-campus-support',
                templateUrl: './campus-support.component.html',
                styleUrls: ['./campus-support.component.css']
            }]
    }], function () { return [{ type: _campus_support_service__WEBPACK_IMPORTED_MODULE_1__["SupportService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");





class AppComponent {
    constructor() {
        this.title = 'gableallgood';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [["rel", "preconnect", "href", "https://fonts.gstatic.com"], ["href", "https://fonts.googleapis.com/css2?family=Oswald:wght@300;600&display=swap", "rel", "stylesheet"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["role", "main", 1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "main", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _meet_meet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./meet/meet.component */ "dEjQ");
/* harmony import */ var _platform_platform_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./platform/platform.component */ "lDaF");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./team/team.component */ "mGeP");
/* harmony import */ var _campus_support_campus_support_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./campus-support/campus-support.component */ "PhBf");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _platform_collapsible_well_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./platform/collapsible-well.component */ "oqwT");
/* harmony import */ var _platform_platform_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./platform/platform.service */ "B15d");
/* harmony import */ var _platform_platform_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./platform/platform-list.component */ "rPbr");
/* harmony import */ var _team_teams_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./team/teams.service */ "ngQW");
/* harmony import */ var _campus_support_campus_support_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./campus-support/campus-support.service */ "Ku9T");
/* harmony import */ var _platform_platform_icons_platform_icons_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./platform/platform-icons/platform-icons.component */ "72M+");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _submit_ideas_submit_ideas_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./submit-ideas/submit-ideas.component */ "7rov");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _platform_platform_service__WEBPACK_IMPORTED_MODULE_13__["PlatformService"],
        _team_teams_service__WEBPACK_IMPORTED_MODULE_15__["TeamsService"],
        _campus_support_campus_support_service__WEBPACK_IMPORTED_MODULE_16__["SupportService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
        _meet_meet_component__WEBPACK_IMPORTED_MODULE_7__["MeetComponent"],
        _platform_platform_component__WEBPACK_IMPORTED_MODULE_8__["PlatformComponent"],
        _team_team_component__WEBPACK_IMPORTED_MODULE_9__["TeamComponent"],
        _campus_support_campus_support_component__WEBPACK_IMPORTED_MODULE_10__["CampusSupportComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
        _platform_collapsible_well_component__WEBPACK_IMPORTED_MODULE_12__["CollapsibleWellComponent"],
        _platform_platform_list_component__WEBPACK_IMPORTED_MODULE_14__["PlatformListComponent"],
        _platform_platform_icons_platform_icons_component__WEBPACK_IMPORTED_MODULE_17__["PlatformIconsComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
        _submit_ideas_submit_ideas_component__WEBPACK_IMPORTED_MODULE_19__["SubmitIdeasComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
                    _meet_meet_component__WEBPACK_IMPORTED_MODULE_7__["MeetComponent"],
                    _platform_platform_component__WEBPACK_IMPORTED_MODULE_8__["PlatformComponent"],
                    _team_team_component__WEBPACK_IMPORTED_MODULE_9__["TeamComponent"],
                    _campus_support_campus_support_component__WEBPACK_IMPORTED_MODULE_10__["CampusSupportComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                    _platform_collapsible_well_component__WEBPACK_IMPORTED_MODULE_12__["CollapsibleWellComponent"],
                    _platform_platform_list_component__WEBPACK_IMPORTED_MODULE_14__["PlatformListComponent"],
                    _platform_platform_icons_platform_icons_component__WEBPACK_IMPORTED_MODULE_17__["PlatformIconsComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
                    _submit_ideas_submit_ideas_component__WEBPACK_IMPORTED_MODULE_19__["SubmitIdeasComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]
                ],
                providers: [
                    _platform_platform_service__WEBPACK_IMPORTED_MODULE_13__["PlatformService"],
                    _team_teams_service__WEBPACK_IMPORTED_MODULE_15__["TeamsService"],
                    _campus_support_campus_support_service__WEBPACK_IMPORTED_MODULE_16__["SupportService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dEjQ":
/*!****************************************!*\
  !*** ./src/app/meet/meet.component.ts ***!
  \****************************************/
/*! exports provided: MeetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetComponent", function() { return MeetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MeetComponent {
    constructor() { }
    ngOnInit() {
    }
}
MeetComponent.ɵfac = function MeetComponent_Factory(t) { return new (t || MeetComponent)(); };
MeetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MeetComponent, selectors: [["app-meet"]], decls: 40, vars: 0, consts: [[1, "p-2"], [1, "intro", "p-2"], [1, "intro-1", "p-2"], ["src", "../../assets/Candidates/april-min.png", "width", "100%", 1, "pic-shot"], ["src", "../../assets/Candidates/AGPC.png", "width", "100%", "alt", ""], [1, "intro-1"], [1, "intro-2", "intro-2-img", "p-2"], ["src", "../../assets/Candidates/taylor-min.png", "width", "100%", 1, "pic-shot"], ["src", "../../assets/Candidates/TAVPC.png", "width", "100%", "alt", ""], [1, "intro-2", "intro-2-write", "p-2"], [1, "vision", "text-center"], [1, "goals", "text-center"]], template: function MeetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Meet the Candidates!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "The words, \"Next Lives Here\" are more than just a phrase to me, they are a mantra. A mantra I hold in my heart as I walk throughout campus and during every rendition of the Alma Mater. Our university has accepted the need to embrace constant evolution as that is the sole way to continue to innovation. Although innovation can be seen on campus and throughout UC's history, tradition is still widely admired. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " While venturing out into the Bearcat Community as a first year student, I was amazed at the countless opportunities students had ready for them. Students were able to find their place at the table, make a difference in the surrounding area, and build a skillset that accompanied them to future success. I quickly became interested in the role the Undergraduate Student Government served within the student body and became involved as a member of the Student Government Mentoring Program, Executive Staff, and as a Senator At-Large. Here I learned how I want to make a positive, lasting impact through the guidance of others, dedication for the betterment of all, and the knowledge that a student's voice is the most powerful voice on a college campus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " I, still a growing leader, have dug deep to educate myself and learn more of the perspectives students with differing identities than mine hold and am determined to continue this self work. I ask that through this journey, you join us in keeping each other accountable and willing to listen to one another. As potentially the first women slate at UC to be elected, Taylor and I both know that we must lay a foundation that sets forth the notion that we may be the first, but we will not be the last. That anyone who looks to a position questioning if they should even dream about holding it, know that they have all the right to do so. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Together We Will complete worthwhile initiatives for a greener, sustainably enriched campus. Together We Will strive to make a difference in the lives of each student, community member, and faculty member through increased focus on resources and needs. Together We Will be better and amplify each other's voices so that they are heard, seen, and valued. Together We Will empower women to run and make history on UC's campus. I am running to be your next Student Body President because I know that Together We Will never settle, push past barriers, and truly exhibit that Next Lives Here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Venturing into my first year at the University of Cincinnati in the fall of 2019 was life-changing for me. I would constantly reflect on my hometown roots and the privilege I hold as one of the few from my high school class to attend a four-year university. Because of this reason, I promised myself that if awarded the opportunity to attend college, I would make the most out of my four years and create a lasting impact wherever I decided to go. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " I am honored to be Bearcat and call Cincinnati my home. I laugh when I tell the story about how I committed to UC before I had even toured the campus because I just knew it was for me -- I couldn\u2019t have been more right in my assumption. Both freshman orientation and being accepted into the Darwin T. Turner Scholarship Program set the stage for how transformative the next four years would be for me. During September of my first year, Student Government immediately caught my eye as an empowering organization which gave students the platform to create large-scale change. I began to learn more about the inner workings of SG through the Student Government Mentorship Program where I met inspiring student leaders who encouraged me to take on the role of Secretary of Senate. Throughout that first year, those mentors strengthened my courage during that semester, as I planned my Senator-At-Large campaign for the spring. That campaign taught me the tremendous advantages of building a team, collaborating with people around campus, and taking everyone\u2019s voice into account. Among my various campus involvements, Student Government has remained a constant for me; It aligns strongly with the work I hope to continue in my future career and allows me the platform and resources to advocate for a large body of students, especially marginalized students like myself. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " I recognize that I will always have growing to do as a student-leader, but I look forward to showing you all that April and I are passionate individuals with the same goal of uplifting the voices of the student body through countless initiatives and ideas. It is still surreal to think that April and I could potentially make history as the first all-women slate to win an election in UC\u2019s history, but I believe the real history will be made with how we execute our terms and advocate for the student body more than ever before. I am a firm believer that how you campaign is how you lead; April and I have been intentional with our decision to lead a campaign based on love, unity, and empowerment, and Together We Will make sure we lead the student body the same exact way.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "OUR VISION FOR THE STUDENT GOVERNMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "We envision a Student Government that is transparent and accessible to all students. By creating initiatives for open dialogue, efforts to advance sustainability, and re-envisioning the University of Cincinnati holistically, we will welcome every student to a spot at our table. We believe that there is no stronger voice on a college campus than that of a student - and Together We Will make sure all are heard. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "OUR VISION FOR THE STUDENT BODY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "This past year has presented circumstances like no other before, there is a need to give power back to students. By focusing on student involvement, academic opportunities, and the little things that make the college experience that much better, Gable+Allgood dedicates this campaign to the campus experience lost over the last year. The next steps of UC defines the legacy of its current students; Together We Will create a campus accepting and celebrative of all students.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media(min-width:768px){\r\n    .intro[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        flex-wrap: wrap; \r\n        padding-top: 60px;\r\n}\r\n}\r\n\r\n\r\n\r\n.intro-2-img[_ngcontent-%COMP%]{\r\n    order: 2;\r\n}\r\n\r\n\r\n\r\n.intro-2-write[_ngcontent-%COMP%]{\r\n    order: 1;\r\n}\r\n\r\n\r\n\r\n.intro-1[_ngcontent-%COMP%]{\r\n    flex-basis: 50%;\r\n}\r\n\r\n\r\n\r\n.intro-2[_ngcontent-%COMP%]{\r\n    flex-basis: 50%;\r\n}\r\n\r\n\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 300;\r\n    font-size: 11pt;\r\n}\r\n\r\n\r\n\r\nH3[_ngcontent-%COMP%]{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 600;\r\n    font-size: 28pt;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 600;\r\n    color: #591937;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLGVBQWU7UUFDZixpQkFBaUI7QUFDekI7QUFDQTs7OztBQUlBO0lBQ0ksUUFBUTtBQUNaOzs7O0FBRUE7SUFDSSxRQUFRO0FBQ1o7Ozs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7Ozs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7Ozs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7OztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOzs7O0FBSUE7SUFDSSxpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEIiLCJmaWxlIjoibWVldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhKG1pbi13aWR0aDo3NjhweCl7XHJcbiAgICAuaW50cm97XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7IFxyXG4gICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG59XHJcbn1cclxuXHJcblxyXG5cclxuLmludHJvLTItaW1ne1xyXG4gICAgb3JkZXI6IDI7XHJcbn1cclxuXHJcbi5pbnRyby0yLXdyaXRle1xyXG4gICAgb3JkZXI6IDE7XHJcbn1cclxuXHJcbi5pbnRyby0xe1xyXG4gICAgZmxleC1iYXNpczogNTAlO1xyXG59XHJcbi5pbnRyby0ye1xyXG4gICAgZmxleC1iYXNpczogNTAlO1xyXG59XHJcblxyXG5we1xyXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMTFwdDtcclxufVxyXG5cclxuSDN7XHJcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyOHB0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcbmgxe1xyXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjNTkxOTM3O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-meet',
                templateUrl: './meet.component.html',
                styleUrls: ['./meet.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 15, vars: 0, consts: [[1, "container"], [1, "row", "justify-content-md-center"], [1, "social-media", "ml-5"], ["href", "https://www.facebook.com/Gable-Allgood-2021-111333557660106", "target", "_blank", "rel", "noopener noreferrer"], ["height", "50px", "width", "50px", "src", "../../assets/Social Media/iconfinder_Rounded_Facebook_svg_5282541.png", "alt", ""], [1, "social-media"], ["href", "https://m.tiktok.com/h5/share/usr/6924444045612336133.html?_d=secCgYIASAHKAESMgowr7eYe8o%2Fa59WGh0WGqbNUCMZlCdhcUTB0nG3XrwUmPONMyZm5kGbrdugYV2iav2sGgA%3D&language=en&sec_uid=MS4wLjABAAAAcSptYcavFzQFd8GLtgLh1LPveOqpJkiUYLScXUrc2-ayABvaBtz61rS1m-DrmTyn&sec_user_id=MS4wLjABAAAAcSptYcavFzQFd8GLtgLh1LPveOqpJkiUYLScXUrc2-ayABvaBtz61rS1m-DrmTyn&share_author_id=6924444045612336133&share_link_id=15DC61E3-686E-4FD6-A167-311A1F525373&tt_from=copy&u_code=dgm91b9kb8i3ea&user_id=6924444045612336133&utm_campaign=client_share&utm_medium=ios&utm_source=copy", "target", "_blank", "rel", "noopener noreferrer"], ["height", "50px", "width", "50px", "src", "../../assets/Social Media/icons8-tiktok-512.png", "alt", ""], ["href", "https://instagram.com/gableallgood2021?igshid=3iad8ha2zfvg", "target", "_blank", "rel", "noopener noreferrer"], ["height", "50px", "width", "50px", "src", "../../assets/Social Media/iconfinder_Rounded_Instagram_svg_5282544.png", "alt", ""], ["href", "https://twitter.com/gableallgood?s=21", "target", "_blank", "rel", "noopener noreferrer"], ["height", "50px", "width", "50px", "src", "../../assets/Social Media/iconfinder_Rounded_Twitter5_svg_5282551.png", "alt", ""]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%]{\r\n    background-color: #bb0f55;\r\n    margin-top: 10px;\r\n    height: 100%;\r\n    width: 100%;\r\n    \r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    margin-top: 1.1rem;\r\n    margin-bottom: 1.1rem;\r\n    margin-right: 1.1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVzs7QUFFZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiMGY1NTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG59XHJcblxyXG5pbWd7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjFyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEuMXJlbTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lDaF":
/*!************************************************!*\
  !*** ./src/app/platform/platform.component.ts ***!
  \************************************************/
/*! exports provided: PlatformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformComponent", function() { return PlatformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _platform_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./platform.service */ "B15d");
/* harmony import */ var _platform_icons_platform_icons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./platform-icons/platform-icons.component */ "72M+");
/* harmony import */ var _platform_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./platform-list.component */ "rPbr");





class PlatformComponent {
    constructor(platformService) {
        this.platformService = platformService;
        this.Platform = "Platform";
        this.showContentToggle = false;
    }
    ngOnInit() {
        this.campusExp = this.platformService.getCampusExperience();
        this.action = this.platformService.getAction();
        this.sustainability = this.platformService.getSustainability();
        this.varsity = this.platformService.getVarsity();
        this.yourcampus = this.platformService.getYourCampus();
    }
    onHeaderClick() {
        this.showContentToggle = !this.showContentToggle;
    }
}
PlatformComponent.ɵfac = function PlatformComponent_Factory(t) { return new (t || PlatformComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_platform_service__WEBPACK_IMPORTED_MODULE_1__["PlatformService"])); };
PlatformComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlatformComponent, selectors: [["app-platform"]], decls: 16, vars: 12, consts: [[3, "description", "lastPlat"], [1, "text-center", "p-3"], [3, "platforms", "specialCase"]], template: function PlatformComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "platform-icons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "H2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Campus Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "platform-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "H2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "platform-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "H2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sustainability");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "platform-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "H2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Varsity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "platform-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "H2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Your Campus, Your Voice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "platform-list", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("description", false)("lastPlat", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("platforms", ctx.campusExp)("specialCase", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("platforms", ctx.action)("specialCase", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("platforms", ctx.sustainability)("specialCase", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("platforms", ctx.varsity)("specialCase", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("platforms", ctx.yourcampus)("specialCase", true);
    } }, directives: [_platform_icons_platform_icons_component__WEBPACK_IMPORTED_MODULE_2__["PlatformIconsComponent"], _platform_list_component__WEBPACK_IMPORTED_MODULE_3__["PlatformListComponent"]], styles: [".platform-icons[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.box1[_ngcontent-%COMP%]{\r\n    flex-basis: 20%;\r\n    \r\n    border-width: 2px;\r\n    text-align: center;\r\n}\r\n\r\nH2[_ngcontent-%COMP%]{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 600;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXRmb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmO2dDQUM0QjtJQUM1QixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUdBO0lBQ0ksaUNBQWlDO0lBQ2pDLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJwbGF0Zm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYXRmb3JtLWljb25ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmJveDF7XHJcbiAgICBmbGV4LWJhc2lzOiAyMCU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBjb3Juc2lsaztcclxuICAgIGJvcmRlcjogMnB4IGNyaW1zb24gc29saWQ7ICovXHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbkgye1xyXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatformComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-platform',
                templateUrl: './platform.component.html',
                styleUrls: ['./platform.component.css']
            }]
    }], function () { return [{ type: _platform_service__WEBPACK_IMPORTED_MODULE_1__["PlatformService"] }]; }, null); })();


/***/ }),

/***/ "mGeP":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _teams_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teams.service */ "ngQW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0, a1, a2, a3) { return { "lcherry": a0, "yellow": a1, "dcherry": a2, "cherry": a3 }; };
function TeamComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function TeamComponent_div_5_Template_img_mouseenter_2_listener() { const member_r1 = ctx.$implicit; return member_r1.address = member_r1.address.Hover; })("mouseleave", function TeamComponent_div_5_Template_img_mouseleave_2_listener() { const member_r1 = ctx.$implicit; return member_r1.address = member_r1.addressHoverOut; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", member_r1.address || member_r1.addressHover, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](3, _c0, i_r2 % 4 === 0, i_r2 % 4 === 1, i_r2 % 4 === 2, i_r2 % 4 === 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r1.name);
} }
class TeamComponent {
    constructor(teamsService) {
        this.teamsService = teamsService;
    }
    ngOnInit() {
        this.members = this.teamsService.getMembers();
    }
}
TeamComponent.ɵfac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_teams_service__WEBPACK_IMPORTED_MODULE_1__["TeamsService"])); };
TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamComponent, selectors: [["app-team"]], decls: 7, vars: 3, consts: [[1, "mt-2", "p-2"], [1, "row"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "main-cont"], ["alt", "", 1, "img-fluid", "main-img", 3, "src", "ngClass", "mouseenter", "mouseleave"], [1, "text-center"]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Meet the team behind ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "#TogetherWeWill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TeamComponent_div_5_Template, 5, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 1, ctx.members));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["p[_ngcontent-%COMP%]{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 300;\r\n    font-size: 11pt;\r\n}\r\n\r\nH2[_ngcontent-%COMP%]{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 600;\r\n    font-size: 28pt;\r\n    text-align: center;\r\n}\r\n\r\nH2[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]{\r\n    color: #bb0f55\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    box-shadow: 5px 5px 3px grey;\r\n}\r\n\r\n.yellow[_ngcontent-%COMP%]{\r\n    border-style: solid;\r\n    border-width: 15px;\r\n    border-image: url('border_bb0f55.png') 30 round;\r\n}\r\n\r\n.lcherry[_ngcontent-%COMP%]{\r\n    border-style: solid;\r\n    border-width: 15px;\r\n    border-image: url('border_ffd151.png') 30 round;\r\n}\r\n\r\n.dcherry[_ngcontent-%COMP%]{\r\n    border-style: solid;\r\n    border-width: 15px;\r\n    border-image: url('border_591937.png') 30 round;\r\n}\r\n\r\n.cherry[_ngcontent-%COMP%]{\r\n    border-style: solid;\r\n    border-width: 15px;\r\n    border-image: url('border_8e2857.png') 30 round;\r\n}\r\n\r\n\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBSWxCLCtDQUEwRTtBQUM5RTs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFJbEIsK0NBQTBFO0FBQzlFOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUlsQiwrQ0FBMEU7QUFDOUU7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBSWxCLCtDQUEwRTtBQUM5RTs7QUFFQTs7O0tBR0s7O0FBS0w7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InRlYW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxMXB0O1xyXG59XHJcblxyXG5IMntcclxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDI4cHQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbkgyID5zcGFue1xyXG4gICAgY29sb3I6ICNiYjBmNTVcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDNweCBncmV5O1xyXG59XHJcblxyXG4ueWVsbG93e1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMTVweDtcclxuICAgIC1tb3otYm9yZGVyLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvdGVhbS1waWN0dXJlcy9ib3JkZXJfYmIwZjU1LnBuZ1wiKSAzMCByb3VuZDtcclxuICAgIC13ZWJraXQtYm9yZGVyLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvdGVhbS1waWN0dXJlcy9ib3JkZXJfYmIwZjU1LnBuZ1wiKSAzMCByb3VuZDtcclxuICAgIC1vLWJvcmRlci1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3RlYW0tcGljdHVyZXMvYm9yZGVyX2JiMGY1NS5wbmdcIikgMzAgcm91bmQ7XHJcbiAgICBib3JkZXItaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy90ZWFtLXBpY3R1cmVzL2JvcmRlcl9iYjBmNTUucG5nXCIpIDMwIHJvdW5kO1xyXG59XHJcblxyXG4ubGNoZXJyeXtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDE1cHg7XHJcbiAgICAtbW96LWJvcmRlci1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3RlYW0tcGljdHVyZXMvYm9yZGVyX2ZmZDE1MS5wbmdcIikgMzAgcm91bmQ7XHJcbiAgICAtd2Via2l0LWJvcmRlci1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3RlYW0tcGljdHVyZXMvYm9yZGVyX2ZmZDE1MS5wbmdcIikgMzAgcm91bmQ7XHJcbiAgICAtby1ib3JkZXItaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy90ZWFtLXBpY3R1cmVzL2JvcmRlcl9mZmQxNTEucG5nXCIpIDMwIHJvdW5kO1xyXG4gICAgYm9yZGVyLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvdGVhbS1waWN0dXJlcy9ib3JkZXJfZmZkMTUxLnBuZ1wiKSAzMCByb3VuZDtcclxufVxyXG5cclxuLmRjaGVycnl7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxNXB4O1xyXG4gICAgLW1vei1ib3JkZXItaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy90ZWFtLXBpY3R1cmVzL2JvcmRlcl81OTE5MzcucG5nXCIpIDMwIHJvdW5kO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy90ZWFtLXBpY3R1cmVzL2JvcmRlcl81OTE5MzcucG5nXCIpIDMwIHJvdW5kO1xyXG4gICAgLW8tYm9yZGVyLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvdGVhbS1waWN0dXJlcy9ib3JkZXJfNTkxOTM3LnBuZ1wiKSAzMCByb3VuZDtcclxuICAgIGJvcmRlci1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3RlYW0tcGljdHVyZXMvYm9yZGVyXzU5MTkzNy5wbmdcIikgMzAgcm91bmQ7XHJcbn1cclxuXHJcbi5jaGVycnl7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxNXB4O1xyXG4gICAgLW1vei1ib3JkZXItaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy90ZWFtLXBpY3R1cmVzL2JvcmRlcl84ZTI4NTcucG5nXCIpIDMwIHJvdW5kO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy90ZWFtLXBpY3R1cmVzL2JvcmRlcl84ZTI4NTcucG5nXCIpIDMwIHJvdW5kO1xyXG4gICAgLW8tYm9yZGVyLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvdGVhbS1waWN0dXJlcy9ib3JkZXJfOGUyODU3LnBuZ1wiKSAzMCByb3VuZDtcclxuICAgIGJvcmRlci1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3RlYW0tcGljdHVyZXMvYm9yZGVyXzhlMjg1Ny5wbmdcIikgMzAgcm91bmQ7XHJcbn1cclxuXHJcbi8qIGltZ3tcclxuICAgIGJvcmRlcjogMTZweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3RlYW0tcGljdHVyZXMvYm9yZGVyX2JiMGY1NS5wbmdcIikgMzAgcm91bmQ7XHJcbn0gICAqL1xyXG5cclxuXHJcblxyXG5cclxucHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team',
                templateUrl: './team.component.html',
                styleUrls: ['./team.component.css']
            }]
    }], function () { return [{ type: _teams_service__WEBPACK_IMPORTED_MODULE_1__["TeamsService"] }]; }, null); })();


/***/ }),

/***/ "ngQW":
/*!***************************************!*\
  !*** ./src/app/team/teams.service.ts ***!
  \***************************************/
/*! exports provided: TeamsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsService", function() { return TeamsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class TeamsService {
    constructor() { }
    getMembers() {
        let subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        setTimeout(() => { subject.next(TEAMS); subject.complete(); }, 100);
        return subject;
        console.log();
    }
}
TeamsService.ɵfac = function TeamsService_Factory(t) { return new (t || TeamsService)(); };
TeamsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TeamsService, factory: TeamsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
const TEAMS = [
    {
        name: "Josh Squirrell",
        address: "../../assets/team-pictures/Josh_Squirrell1.jpg",
        addressHover: "../../assets/team-pictures/Josh_Squirrell2.jpg",
        addressHoverOut: "../../assets/team-pictures/Josh_Squirrell1.jpg"
    },
    {
        name: "Faalik Zahra",
        address: "../../assets/team-pictures/Faalik_Zahra1.jpg",
        addressHover: "../../assets/team-pictures/Faalik_Zahra2.jpg",
        addressHoverOut: "../../assets/team-pictures/Faalik_Zahra1.jpg"
    },
    {
        name: "Alex van Haaren",
        address: "../../assets/team-pictures/Alex_Van1.jpg",
        addressHover: "../../assets/team-pictures/Alex_Van2.jpg",
        addressHoverOut: "../../assets/team-pictures/Alex_Van1.jpg"
    },
    {
        name: "Lance Entsuah",
        address: "../../assets/team-pictures/Lance_Entsuah1.jpg",
        addressHover: "../../assets/team-pictures/Lance_Entsuah2.jpg",
        addressHoverOut: "../../assets/team-pictures/Lance_Entsuah1.jpg"
    },
    {
        name: "Inna Risma",
        address: "../../assets/team-pictures/Inna_Risma1.jpg",
        addressHover: "../../assets/team-pictures/Inna_Risma2.jpg",
        addressHoverOut: "../../assets/team-pictures/Inna_Risma1.jpg"
    },
    {
        name: "Kiley Gawronski",
        address: "../../assets/team-pictures/Kiley_ Gawronski1.jpg",
        addressHover: "../../assets/team-pictures/Kiley_ Gawronski2.jpg",
        addressHoverOut: "../../assets/team-pictures/Kiley_ Gawronski1.jpg"
    },
    {
        name: "Vidushi Shrivastava",
        address: "../../assets/team-pictures/Vidushi1.jpg",
        addressHover: "../../assets/team-pictures/Vidushi2.jpg",
        addressHoverOut: "../../assets/team-pictures/Vidushi1.jpg"
    },
    {
        name: "Jash Gada",
        address: "../../assets/team-pictures/Jash_Gada1.jpg",
        addressHover: "../../assets/team-pictures/Jash_Gada2.jpg",
        addressHoverOut: "../../assets/team-pictures/Jash_Gada1.jpg"
    },
    {
        name: "Olivia Kentner",
        address: "../../assets/team-pictures/Via_Kentner.jpg",
        addressHover: "../../assets/team-pictures/Via_Kentner2.jpg",
        addressHoverOut: "../../assets/team-pictures/Via_Kentner.jpg"
    },
    {
        name: "Mahathi Venkatesh",
        address: "../../assets/team-pictures/Mahathi1.jpg",
        addressHover: "../../assets/team-pictures/Mahathi2.jpg",
        addressHoverOut: "../../assets/team-pictures/Mahathi1.jpg"
    },
    {
        name: "Brian Bartolovich",
        address: "../../assets/team-pictures/Brian_Bartolovich1.jpg",
        addressHover: "../../assets/team-pictures/Brian_Bartolovich2.jpg",
        addressHoverOut: "../../assets/team-pictures/Brian_Bartolovich1.jpg"
    },
    {
        name: "Romond Duval",
        address: "../../assets/team-pictures/Romond1.jpg",
        addressHover: "../../assets/team-pictures/Romond2.jpg",
        addressHoverOut: "../../assets/team-pictures/Romond1.jpg"
    },
    {
        name: "Olivia Eilerman",
        address: "../../assets/team-pictures/Olivia_Eilerman1-min.jpg",
        addressHover: "../../assets/team-pictures/Olivia_Eilerman2-min.jpg",
        addressHoverOut: "../../assets/team-pictures/Olivia_Eilerman1-min.jpg"
    },
    {
        name: "Brad Weidner",
        address: "../../assets/team-pictures/Brad_Weidner1.jpg",
        addressHover: "../../assets/team-pictures/Brad_Weidner2.jpg",
        addressHoverOut: "../../assets/team-pictures/Brad_Weidner1.jpg"
    },
    {
        name: "Quincy Allfree",
        address: "../../assets/team-pictures/Quincy_Allfree1-min.jpg",
        addressHover: "../../assets/team-pictures/Quincy_Allfree2-min.jpg",
        addressHoverOut: "../../assets/team-pictures/Quincy_Allfree1-min.jpg"
    },
    {
        name: "Shannon Williams",
        address: "../../assets/team-pictures/Shannon_Williams1.jpg",
        addressHover: "../../assets/team-pictures/Shannon_Williams2.jpg",
        addressHoverOut: "../../assets/team-pictures/Shannon_Williams1.jpg"
    },
    {
        name: "Brady Allen",
        address: "../../assets/team-pictures/Brady_Allen1.jpg",
        addressHover: "../../assets/team-pictures/Brady_Allen2.jpg",
        addressHoverOut: "../../assets/team-pictures/Brady_Allen1.jpg"
    },
    {
        name: "Shivani Selvam",
        address: "../../assets/team-pictures/Shivani1.jpg",
        addressHover: "../../assets/team-pictures/Shivani2.jpg",
        addressHoverOut: "../../assets/team-pictures/Shivani1.jpg"
    },
    {
        name: "Yash Srivastava",
        address: "../../assets/team-pictures/Yash1.jpg",
        addressHover: "../../assets/team-pictures/Yash2.jpg",
        addressHoverOut: "../../assets/team-pictures/Yash1.jpg"
    },
    {
        name: "Fatima Khan",
        address: "../../assets/team-pictures/Fatima1.jpg",
        addressHover: "../../assets/team-pictures/Fatima2.jpg",
        addressHoverOut: "../../assets/team-pictures/Fatima1.jpg"
    },
    {
        name: "Claire Leupp",
        address: "../../assets/team-pictures/Claire_leupp1.jpg",
        addressHover: "../../assets/team-pictures/Claire_Leupp2.jpg",
        addressHoverOut: "../../assets/team-pictures/Claire_leupp1.jpg"
    },
    {
        name: "Cassidy Lakes",
        address: "../../assets/team-pictures/Cassidy_Lakes1-min.jpg",
        addressHover: "../../assets/team-pictures/Cassidy_Lakes2-min.jpg",
        addressHoverOut: "../../assets/team-pictures/Cassidy_Lakes1-min.jpg"
    },
    {
        name: "Chris Stepak",
        address: "../../assets/team-pictures/Chris_Stepak1.jpg",
        addressHover: "../../assets/team-pictures/Chris_Stepak2.jpg",
        addressHoverOut: "../../assets/team-pictures/Chris_Stepak1.jpg"
    },
    {
        name: "Tessa Ervin",
        address: "../../assets/team-pictures/Tessa_Ervin1.jpg",
        addressHover: "../../assets/team-pictures/Tessa_Ervin2.jpg",
        addressHoverOut: "../../assets/team-pictures/Tessa_Ervin1.jpg"
    },
    {
        name: "Max Hogan",
        address: "../../assets/team-pictures/Max_Hogan1.jpg",
        addressHover: "../../assets/team-pictures/Max_Hogan2.jpg",
        addressHoverOut: "../../assets/team-pictures/Max_Hogan1.jpg"
    },
    {
        name: "Sarah Sloan",
        address: "../../assets/team-pictures/Sarah_Sloan1.jpg",
        addressHover: "../../assets/team-pictures/Sarah_Sloan2.jpg",
        addressHoverOut: "../../assets/team-pictures/Sarah_Sloan1.jpg"
    },
    {
        name: "Simhya Karthikeyan",
        address: "../../assets/team-pictures/Simhya1.jpg",
        addressHover: "../../assets/team-pictures/Simhya2.jpg",
        addressHoverOut: "../../assets/team-pictures/Simhya1.jpg"
    },
    {
        name: "Taylor Richardson",
        address: "../../assets/team-pictures/Taylor_Richardson1.jpg",
        addressHover: "../../assets/team-pictures/Taylor_Richardson2.jpg",
        addressHoverOut: "../../assets/team-pictures/Taylor_Richardson1.jpg"
    },
];


/***/ }),

/***/ "oqwT":
/*!********************************************************!*\
  !*** ./src/app/platform/collapsible-well.component.ts ***!
  \********************************************************/
/*! exports provided: CollapsibleWellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapsibleWellComponent", function() { return CollapsibleWellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CollapsibleWellComponent_ng_content_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "visible"]);
} }
const _c0 = ["*"];
class CollapsibleWellComponent {
    constructor() {
        this.visible = false;
    }
    ngOnInit() {
    }
    toggleContent() {
        this.visible = !this.visible;
    }
    getBackgroundColor() {
        return this.backgroundColor;
    }
}
CollapsibleWellComponent.ɵfac = function CollapsibleWellComponent_Factory(t) { return new (t || CollapsibleWellComponent)(); };
CollapsibleWellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CollapsibleWellComponent, selectors: [["collapsible-well"]], inputs: { title: "title", backgroundColor: "backgroundColor" }, ngContentSelectors: _c0, decls: 4, vars: 4, consts: [[1, "well", "pointable", 3, "click"], [1, "well-title", "p-2", 3, "ngClass"], [4, "ngIf"]], template: function CollapsibleWellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CollapsibleWellComponent_Template_div_click_0_listener() { return ctx.toggleContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CollapsibleWellComponent_ng_content_3_Template, 1, 0, "ng-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.backgroundColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.visible ? "-" : "+", " ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["p[_ngcontent-%COMP%]{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 300;\r\n    font-size: 11pt;\r\n}\r\n\r\nH3[_ngcontent-%COMP%]{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-weight: 600;\r\n    color: white;\r\n    cursor: pointer;\r\n    \r\n}\r\n\r\n.cherry[_ngcontent-%COMP%]{\r\n    background-color: #bb0f55;\r\n}\r\n\r\n.yellowish[_ngcontent-%COMP%]{\r\n    background-color: #ffd151;\r\n}\r\n\r\n.darkmaroon[_ngcontent-%COMP%]{\r\n    background-color: #591937;\r\n}\r\n\r\n.isthischerry[_ngcontent-%COMP%]{\r\n    background-color: #8e2857;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxhcHNpYmxlLXdlbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7O0FBRW5COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6ImNvbGxhcHNpYmxlLXdlbGwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxMXB0O1xyXG59XHJcblxyXG5IM3tcclxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuLmNoZXJyeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYjBmNTU7XHJcbn1cclxuXHJcbi55ZWxsb3dpc2h7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkMTUxO1xyXG59XHJcblxyXG4uZGFya21hcm9vbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1OTE5Mzc7XHJcbn1cclxuXHJcbi5pc3RoaXNjaGVycnl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGUyODU3O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollapsibleWellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'collapsible-well',
                templateUrl: './collapsible-well.component.html',
                styleUrls: ['./collapsible-well.component.css']
            }]
    }], null, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "rPbr":
/*!*****************************************************!*\
  !*** ./src/app/platform/platform-list.component.ts ***!
  \*****************************************************/
/*! exports provided: PlatformListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformListComponent", function() { return PlatformListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _collapsible_well_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collapsible-well.component */ "oqwT");




function PlatformListComponent_div_0_h4_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "What is this?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlatformListComponent_div_0_h4_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Who does this impact?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlatformListComponent_div_0_h4_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "What is our plan?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlatformListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "collapsible-well", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlatformListComponent_div_0_h4_3_Template, 2, 0, "h4", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PlatformListComponent_div_0_h4_6_Template, 2, 0, "h4", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PlatformListComponent_div_0_h4_9_Template, 2, 0, "h4", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const platform_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", platform_r1.name)("backgroundColor", platform_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.specialCase);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](platform_r1.info);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.specialCase);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](platform_r1.impact);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.specialCase);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](platform_r1.plan);
} }
class PlatformListComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
PlatformListComponent.ɵfac = function PlatformListComponent_Factory(t) { return new (t || PlatformListComponent)(); };
PlatformListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlatformListComponent, selectors: [["platform-list"]], inputs: { platforms: "platforms", specialCase: "specialCase" }, decls: 2, vars: 3, consts: [[4, "ngFor", "ngForOf"], [3, "title", "backgroundColor"], ["class", "mt-1", 4, "ngIf"], [2, "white-space", "pre-line"], [1, "mt-1"]], template: function PlatformListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PlatformListComponent_div_0_Template, 12, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.platforms));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _collapsible_well_component__WEBPACK_IMPORTED_MODULE_2__["CollapsibleWellComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatformListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'platform-list',
                templateUrl: './platform-list.component.html'
            }]
    }], function () { return []; }, { platforms: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], specialCase: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _campus_support_campus_support_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./campus-support/campus-support.component */ "PhBf");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _meet_meet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meet/meet.component */ "dEjQ");
/* harmony import */ var _platform_platform_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./platform/platform.component */ "lDaF");
/* harmony import */ var _submit_ideas_submit_ideas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./submit-ideas/submit-ideas.component */ "7rov");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./team/team.component */ "mGeP");










const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'meet', component: _meet_meet_component__WEBPACK_IMPORTED_MODULE_4__["MeetComponent"] },
    { path: 'campus-support', component: _campus_support_campus_support_component__WEBPACK_IMPORTED_MODULE_2__["CampusSupportComponent"] },
    { path: 'platform', component: _platform_platform_component__WEBPACK_IMPORTED_MODULE_5__["PlatformComponent"] },
    { path: 'team', component: _team_team_component__WEBPACK_IMPORTED_MODULE_7__["TeamComponent"] },
    { path: 'ideas', component: _submit_ideas_submit_ideas_component__WEBPACK_IMPORTED_MODULE_6__["SubmitIdeasComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map