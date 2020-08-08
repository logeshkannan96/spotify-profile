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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/default/default.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/default/default.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark fixed-top align-items-center\">\r\n    <a class=\"navbar-brand\">\r\n        <div class=\"d-flex align-items-center\">\r\n            <img src=\"../../../assets/images/favicons/ms-icon-70x70.png\" height=\"50\" alt=\"\">\r\n            <span class=\"brand-name\">Spotify Profile</span>\r\n        </div>\r\n    </a>\r\n    <div class=\"navbar-nav ml-auto\">\r\n        <div class=\"text-center mr-3 ml-3 my-auto\">\r\n            <a class=\"nav-item nav-link\" routerLink=\"/spotify/profile\" routerLinkActive=\"isClicked\">\r\n                <mat-icon>person</mat-icon>\r\n                <p>Profile</p>\r\n            </a>\r\n        </div>\r\n        <div class=\"text-center mr-3 ml-3 my-auto\">\r\n            <a class=\"nav-item nav-link\" routerLink=\"/spotify/artists\" routerLinkActive=\"isClicked\">\r\n                <mat-icon>recent_actors</mat-icon>\r\n                <p>Artists</p>\r\n            </a>\r\n        </div>\r\n        <div class=\"text-center mr-3 ml-3 my-auto\">\r\n            <a class=\"nav-item nav-link\" routerLink=\"/spotify/tracks\" routerLinkActive=\"isClicked\">\r\n                <mat-icon>album</mat-icon>\r\n                <p>Tracks</p>\r\n            </a>\r\n        </div>\r\n        <div class=\"text-center mr-3 ml-3 my-auto\">\r\n            <a class=\"nav-item nav-link\" routerLink=\"/spotify/recent\" routerLinkActive=\"isClicked\">\r\n                <mat-icon>queue_next_play</mat-icon>\r\n                <p>Recent</p>\r\n            </a>\r\n        </div>\r\n        <div class=\"text-center mr-3 ml-3 my-auto\">\r\n            <a class=\"nav-item nav-link\" routerLink=\"/spotify/playlists\" routerLinkActive=\"isClicked\">\r\n                <mat-icon>queue_music</mat-icon>\r\n                <p>Playlists</p>\r\n            </a>\r\n        </div>\r\n        <div class=\"text-center mr-3 ml-3 my-auto logout-btn\">\r\n            <a class=\"nav-item nav-link\" (click)=\"logout()\">\r\n                <mat-icon>power_settings_new</mat-icon>\r\n                <p>Logout</p>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<div class=\"loader-container\">\r\n    <router-outlet></router-outlet>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/artists/artist/artist.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/artists/artist/artist.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid m-0\">\n    <div class=\"row mt-3\">\n        <div class=\"col-md-4 text-center\">\n            <div class=\"artist-display\">\n                <img src=\"{{artistImage}}\" alt=\"\" width=\"380px\" class=\"artist-avatar\">\n                <p class=\"artist-name\">{{artistName}}</p>\n                <button class=\"follow-btn\">follow</button>\n            </div>\n        </div>\n        <div class=\"col-md-6 mt-2 tracks-container\">\n            <p class=\"tracks-title\">Top Tracks</p>\n            <div *ngFor=\"let track of topTracks\" class=\"tracks\">\n                <a [routerLink]=\"['/track/'+track.id]\" class=\"tracks-inner\">\n                    <img src=\"{{track.album.images[1].url}}\" alt=\"\" width=\"52px\" class=\"track-image\">\n                    <div class=\"track-details\">\n                        <p class=\"track-name\">{{track.name}}</p>\n                        <p class=\"additional-details\">\n                            <span class=\"duration\">{{calculateDuration(track.duration_ms)}}</span>\n                            &nbsp;&middot;&nbsp;&nbsp;\n                            <span *ngFor=\"let artist of track.album.artists; let isLast = last\">\n                                {{artist.name}}{{isLast ? '' : ', '}}\n                            </span>\n                            &nbsp;&middot;&nbsp;&nbsp;\n                            <span>{{track.album.name}}</span>\n                        </p>\n                    </div>\n                </a>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/artists/artists/artists.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/artists/artists/artists.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <p>Top Artists</p>\n            <div *ngFor=\"let artist of topArtists\" class=\"artist\">\n                <img src=\"{{artist.images[0].url}}\" alt=\"\" width=\"80px\" class=\"artist-avatar\">\n                <a [routerLink]=\"['/artist/'+artist.id]\" routerLinkActive=\"router-link-active\">{{artist.name}}</a>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <p>Favourites</p>\n            <div *ngFor=\"let artist of favArtists\" class=\"artist\">\n                <img src=\"{{artist.images[0].url}}\" alt=\"\" width=\"80px\" class=\"artist-avatar\">\n                <a [routerLink]=\"['/artist/'+artist.id]\" routerLinkActive=\"router-link-active\">{{artist.name}}</a>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container text-right\">\n    <div id=\"login\">\n        <h2>Get Your Spotify Profile 📻</h2>\n        <!-- <a href=\"{{LOGIN_URI}}\" class=\"btn\">Log in with Spotify</a> -->\n        <a href=\"{{LOGIN_URI}}\" class=\"btn\">Log in with Spotify</a>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/playlists/playlists/playlists.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/playlists/playlists/playlists.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container pt-2\">\n    <header class=\"header\">\n        <h2 class=\"playlists-title\">Playlists</h2>\n    </header>\n    <div class=\"custom-container\">\n        <div class=\"playlist-container\">\n            <div class=\"playlist\" *ngFor=\"let playlist of playlists\">\n                <a class=\"card\" [routerLink]=\"['/playlist/'+playlist.id]\">\n                    <img class=\"card-img-top\" src=\"{{playlist.images[0].url}}\">\n                    <div class=\"card-body\">\n                        <div class=\"card-text\">\n                            <p>{{playlist.name}}</p>\n                            <p class=\"tracks-count\">{{playlist.tracks.total}} Tracks</p>\n                        </div>\n                    </div>\n                </a>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/profile/profile/profile.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/profile/profile/profile.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"content-area\">\n            <img src=\"{{avatar_url}}\" class=\"avatar\" width=\"326px\" alt=\"\">\n            <div class=\"text-center\">\n                <p class=\"profile-name\">{{display_name}}</p>\n            </div>\n            <div class=\"d-flex profile-details justify-content-between\">\n                <div class=\"followers text-center\">\n                    <p>{{followersCount}}</p>\n                    <p>Followers</p>\n                </div>\n                <div class=\"following text-center\">\n                    <p>{{followingCount}}</p>\n                    <p>Following</p>\n                </div>\n                <div class=\"playlists text-center\">\n                    <p>{{playlistsCount}}</p>\n                    <p>Playlists</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/recent/recent/recent.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/recent/recent/recent.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <header class=\"header\">\n        <h2 class=\"recent-title\">Recently Played</h2>\n    </header>\n\n    <div *ngFor=\"let track of recentlyPlayed\" class=\"tracks\">\n        <a [routerLink]=\"['/track/'+track.id]\" class=\"tracks-inner\">\n            <img src=\"{{track.album.images[1].url}}\" alt=\"\" width=\"52px\" class=\"track-image\">\n            <div class=\"track-details\">\n                <p class=\"track-name\">{{track.name}}</p>\n                <p class=\"additional-details\">\n                    <span class=\"duration\">{{calculateDuration(track.duration_ms)}}</span>\n                    &nbsp;&middot;&nbsp;&nbsp;\n                    <span *ngFor=\"let artist of track.album.artists; let isLast = last\">\n                        {{artist.name}}{{isLast ? '' : ', '}}\n                    </span>\n                    &nbsp;&middot;&nbsp;&nbsp;\n                    <span>{{track.album.name}}</span>\n                </p>\n            </div>\n        </a>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tracks/tracks/tracks.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tracks/tracks/tracks.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <header class=\"header\">\n        <h2 class=\"tracks-title\">Tracks</h2>\n        <div class=\"tracks-ranges\">\n            <button>\n                <span (click)=\"topTracks()\" [class.isClicked]=\"isTopTracksActive\">Top Tracks</span>\n            </button>\n            <button>\n                <span (click)=\"favourites()\" [class.isClicked]=\"isFavouritesActive\">Favourites</span>\n            </button>\n        </div>\n    </header>\n\n    <div *ngFor=\"let track of tracks\" class=\"tracks\">\n        <a [routerLink]=\"['/track/'+track.id]\" class=\"tracks-inner\">\n            <img src=\"{{track.album.images[1].url}}\" alt=\"\" width=\"52px\" class=\"track-image\">\n            <div class=\"track-details\">\n                <p class=\"track-name\">{{track.name}}</p>\n                <p class=\"additional-details\">\n                    <span class=\"duration\">{{calculateDuration(track.duration_ms)}}</span>\n                    &nbsp;&middot;&nbsp;&nbsp;\n                    <span *ngFor=\"let artist of track.album.artists; let isLast = last\">\n                        {{artist.name}}{{isLast ? '' : ', '}}\n                    </span>\n                    &nbsp;&middot;&nbsp;&nbsp;\n                    <span>{{track.album.name}}</span>\n                </p>\n            </div>\n        </a>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/api/api.enum.ts":
/*!*********************************!*\
  !*** ./src/app/api/api.enum.ts ***!
  \*********************************/
/*! exports provided: Api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Api", function() { return Api; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Api;
(function (Api) {
    /**
     * API urls
     */
    // local server url
    Api["API_URL"] = "https://api.spotify.com";
})(Api || (Api = {}));


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/default/default.component */ "./src/app/layouts/default/default.component.ts");
/* harmony import */ var _modules_profile_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/profile/profile/profile.component */ "./src/app/modules/profile/profile/profile.component.ts");
/* harmony import */ var _modules_artists_artists_artists_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/artists/artists/artists.component */ "./src/app/modules/artists/artists/artists.component.ts");
/* harmony import */ var _modules_tracks_tracks_tracks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tracks/tracks/tracks.component */ "./src/app/modules/tracks/tracks/tracks.component.ts");
/* harmony import */ var _modules_playlists_playlists_playlists_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/playlists/playlists/playlists.component */ "./src/app/modules/playlists/playlists/playlists.component.ts");
/* harmony import */ var _modules_recent_recent_recent_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/recent/recent/recent.component */ "./src/app/modules/recent/recent/recent.component.ts");
/* harmony import */ var _modules_artists_artist_artist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/artists/artist/artist.component */ "./src/app/modules/artists/artist/artist.component.ts");
/* harmony import */ var _modules_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/login/login.component */ "./src/app/modules/login/login.component.ts");











const routes = [
    { path: "", component: _modules_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: "login", component: _modules_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    {
        path: "spotify", component: _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_3__["DefaultComponent"], children: [
            { path: "", component: _modules_profile_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
            { path: "profile", component: _modules_profile_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
            { path: "artists", component: _modules_artists_artists_artists_component__WEBPACK_IMPORTED_MODULE_5__["ArtistsComponent"] },
            { path: "tracks", component: _modules_tracks_tracks_tracks_component__WEBPACK_IMPORTED_MODULE_6__["TracksComponent"] },
            { path: "playlists", component: _modules_playlists_playlists_playlists_component__WEBPACK_IMPORTED_MODULE_7__["PlaylistsComponent"] },
            { path: "recent", component: _modules_recent_recent_recent_component__WEBPACK_IMPORTED_MODULE_8__["RecentComponent"] },
            { path: "artist/:id", component: _modules_artists_artist_artist_component__WEBPACK_IMPORTED_MODULE_9__["ArtistComponent"] }
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'spotify';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/default/default.module */ "./src/app/layouts/default/default.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _modules_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/login/login.component */ "./src/app/modules/login/login.component.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _modules_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
        ],
        imports: [
            //Predefined Modules
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            // User defined modules
            _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_8__["DefaultModule"],
        ],
        providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/layouts/default/default.component.css":
/*!*******************************************************!*\
  !*** ./src/app/layouts/default/default.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar {\r\n    height: 80px;\r\n}\r\n\r\na {\r\n    font-size: 14px;\r\n}\r\n\r\n.navbar-brand{\r\n    margin-left: 10px;\r\n}\r\n\r\n.mat-icon {\r\n    font-size: 20px;\r\n}\r\n\r\n.brand-name {\r\n    margin-left: 10px;\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    font-weight: 600;\r\n    font-size: 24px;\r\n}\r\n\r\n.bg-dark{\r\n    background-color: rgb(4, 3, 6) !important;\r\n}\r\n\r\n.loader-container{\r\n    padding-top: 72px;\r\n}\r\n\r\n.nav-link > p {\r\n    margin: 0px;\r\n}\r\n\r\n.nav-link:hover > p, \r\n.nav-link:hover > .mat-icon {\r\n    color: rgb(233, 233, 233) !important;\r\n}\r\n\r\n.logout-btn {\r\n    cursor: pointer;\r\n}\r\n\r\n.isClicked {\r\n    color: rgb(233, 233, 233) !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9kZWZhdWx0L2RlZmF1bHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix1Q0FBdUM7SUFDdkMsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZGVmYXVsdC9kZWZhdWx0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICAgIGhlaWdodDogODBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmR7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLm1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmJyYW5kLW5hbWUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uYmctZGFya3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0LCAzLCA2KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWNvbnRhaW5lcntcclxuICAgIHBhZGRpbmctdG9wOiA3MnB4O1xyXG59XHJcblxyXG4ubmF2LWxpbmsgPiBwIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4ubmF2LWxpbms6aG92ZXIgPiBwLCBcclxuLm5hdi1saW5rOmhvdmVyID4gLm1hdC1pY29uIHtcclxuICAgIGNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMykgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvZ291dC1idG4ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaXNDbGlja2VkIHtcclxuICAgIGNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMykgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/layouts/default/default.component.ts":
/*!******************************************************!*\
  !*** ./src/app/layouts/default/default.component.ts ***!
  \******************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let DefaultComponent = class DefaultComponent {
    constructor(route, location) {
        this.route = route;
        this.location = location;
        this.isProfileActive = false;
        this.isArtistsActive = false;
        this.isTracksActive = false;
        this.isRecentActive = false;
        this.isPlaylistsActive = false;
    }
    ngOnInit() {
    }
    logout() {
        window.localStorage.removeItem('my_spotify_access_token');
        window.localStorage.removeItem('my_spotify_refresh_token');
        this.route.navigate(['/login']);
    }
};
DefaultComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
DefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-default',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./default.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/default/default.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./default.component.css */ "./src/app/layouts/default/default.component.css")).default]
    })
], DefaultComponent);



/***/ }),

/***/ "./src/app/layouts/default/default.module.ts":
/*!***************************************************!*\
  !*** ./src/app/layouts/default/default.module.ts ***!
  \***************************************************/
/*! exports provided: DefaultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultModule", function() { return DefaultModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./default.component */ "./src/app/layouts/default/default.component.ts");
/* harmony import */ var src_app_modules_profile_profile_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/profile/profile.module */ "./src/app/modules/profile/profile.module.ts");
/* harmony import */ var src_app_modules_artists_artists_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/artists/artists.module */ "./src/app/modules/artists/artists.module.ts");
/* harmony import */ var src_app_modules_tracks_tracks_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/tracks/tracks.module */ "./src/app/modules/tracks/tracks.module.ts");
/* harmony import */ var src_app_modules_playlists_playlists_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/playlists/playlists.module */ "./src/app/modules/playlists/playlists.module.ts");
/* harmony import */ var src_app_modules_recent_recent_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modules/recent/recent.module */ "./src/app/modules/recent/recent.module.ts");











let DefaultModule = class DefaultModule {
};
DefaultModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_default_component__WEBPACK_IMPORTED_MODULE_5__["DefaultComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
            //User Defined
            src_app_modules_profile_profile_module__WEBPACK_IMPORTED_MODULE_6__["ProfileModule"],
            src_app_modules_artists_artists_module__WEBPACK_IMPORTED_MODULE_7__["ArtistsModule"],
            src_app_modules_tracks_tracks_module__WEBPACK_IMPORTED_MODULE_8__["TracksModule"],
            src_app_modules_playlists_playlists_module__WEBPACK_IMPORTED_MODULE_9__["PlaylistsModule"],
            src_app_modules_recent_recent_module__WEBPACK_IMPORTED_MODULE_10__["RecentModule"]
        ]
    })
], DefaultModule);



/***/ }),

/***/ "./src/app/modules/artists/artist/artist.component.css":
/*!*************************************************************!*\
  !*** ./src/app/modules/artists/artist/artist.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(//db.onlinewebfonts.com/c/01173b246d9d9ea808ea75a26b3b61bb?family=Circular+Spotify+Tx+T+Black);\r\n\r\n.content-area {\r\n    margin:auto;\r\n}\r\n\r\n.artist-display {\r\n    position: fixed;\r\n    left: 50px;\r\n}\r\n\r\n.artist-avatar {\r\n    -webkit-clip-path: circle(160px at center);\r\n            clip-path: circle(160px at center);\r\n}\r\n\r\n.artist-name {\r\n    font-family:\"Circular Spotify Tx T Black\";\r\n    color:white;\r\n    font-size: 24px;\r\n    text-align: center;\r\n}\r\n\r\n.follow-btn {\r\n    border-radius: 20px;\r\n    padding:10px 20px 10px 20px;\r\n    background-color: rgba(0, 0, 0, 0);\r\n    border: 1px solid #68d761;\r\n    text-transform: uppercase;\r\n    color: #68d761;\r\n    font-size: 14px;\r\n    font-family:\"Circular Spotify Tx T Black\";\r\n    font-weight: 600;\r\n    outline:0;\r\n}\r\n\r\n.tracks-title {\r\n    text-decoration: underline;\r\n    font-family: \"Circular Std\";\r\n    color: white;\r\n    font-size: 24px;\r\n    font-weight: 600;\r\n}\r\n\r\n.tracks-container > tracks {\r\n    text-decoration: none;\r\n    color: #68d761 !important;\r\n    cursor: pointer;\r\n    background-color: rgb(49, 49, 49);\r\n    font-weight: 400;\r\n}\r\n\r\n.tracks {\r\n    margin-top:4px;\r\n    margin-bottom: 4px;\r\n    padding: 8px;\r\n    color: white;\r\n    font-size: 20px;\r\n}\r\n\r\n.tracks:hover,\r\n.tracks a:hover,\r\n.tracks:hover .track-name{\r\n    text-decoration: none;\r\n    color: #68d761;\r\n    cursor: pointer;\r\n    background-color: rgb(49, 49, 49);\r\n    font-weight: 400;\r\n}\r\n\r\n.tracks-inner {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.track-details {\r\n    display: inline-block;\r\n}\r\n\r\n.track-details > p {\r\n    margin: 0px !important;\r\n}\r\n\r\n.track-image {\r\n    -webkit-clip-path: circle(24px at center);\r\n            clip-path: circle(24px at center);\r\n    margin-top: 5px;\r\n    margin-bottom: 6px;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.track-name {\r\n    color: white;\r\n    font-size: 16px;\r\n}\r\n\r\n.additional-details {\r\n    font-weight: 100;\r\n    font-size: 12px;\r\n    color: rgb(144, 144, 144);\r\n}\r\n\r\n.duration {\r\n    font-size: 14px;\r\n    color: rgb(144, 144, 144);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hcnRpc3RzL2FydGlzdC9hcnRpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwR0FBMEc7O0FBRTFHO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDBDQUFrQztZQUFsQyxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YseUNBQXlDO0lBQ3pDLGdCQUFnQjtJQUNoQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBOzs7SUFHSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGVBQWU7SUFDZixpQ0FBaUM7SUFDakMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlDQUFpQztZQUFqQyxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FydGlzdHMvYXJ0aXN0L2FydGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vYy8wMTE3M2IyNDZkOWQ5ZWE4MDhlYTc1YTI2YjNiNjFiYj9mYW1pbHk9Q2lyY3VsYXIrU3BvdGlmeStUeCtUK0JsYWNrKTtcclxuXHJcbi5jb250ZW50LWFyZWEge1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbn1cclxuXHJcbi5hcnRpc3QtZGlzcGxheSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4uYXJ0aXN0LWF2YXRhciB7XHJcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSgxNjBweCBhdCBjZW50ZXIpO1xyXG59XHJcblxyXG4uYXJ0aXN0LW5hbWUge1xyXG4gICAgZm9udC1mYW1pbHk6XCJDaXJjdWxhciBTcG90aWZ5IFR4IFQgQmxhY2tcIjtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9sbG93LWJ0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzoxMHB4IDIwcHggMTBweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2OGQ3NjE7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICM2OGQ3NjE7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTpcIkNpcmN1bGFyIFNwb3RpZnkgVHggVCBCbGFja1wiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG91dGxpbmU6MDtcclxufVxyXG5cclxuLnRyYWNrcy10aXRsZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNpcmN1bGFyIFN0ZFwiO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnRyYWNrcy1jb250YWluZXIgPiB0cmFja3Mge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICM2OGQ3NjEgIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OSwgNDksIDQ5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi50cmFja3Mge1xyXG4gICAgbWFyZ2luLXRvcDo0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi50cmFja3M6aG92ZXIsXHJcbi50cmFja3MgYTpob3ZlcixcclxuLnRyYWNrczpob3ZlciAudHJhY2stbmFtZXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjNjhkNzYxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ5LCA0OSwgNDkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLnRyYWNrcy1pbm5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRyYWNrLWRldGFpbHMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4udHJhY2stZGV0YWlscyA+IHAge1xyXG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRyYWNrLWltYWdlIHtcclxuICAgIGNsaXAtcGF0aDogY2lyY2xlKDI0cHggYXQgY2VudGVyKTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4udHJhY2stbmFtZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5hZGRpdGlvbmFsLWRldGFpbHMge1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiByZ2IoMTQ0LCAxNDQsIDE0NCk7XHJcbn1cclxuXHJcbi5kdXJhdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogcmdiKDE0NCwgMTQ0LCAxNDQpO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/modules/artists/artist/artist.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/artists/artist/artist.component.ts ***!
  \************************************************************/
/*! exports provided: ArtistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistComponent", function() { return ArtistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_userdata_userdata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/userdata/userdata.service */ "./src/app/services/userdata/userdata.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let ArtistComponent = class ArtistComponent {
    constructor(route, userDataService, title) {
        this.route = route;
        this.userDataService = userDataService;
        this.title = title;
        this.route.paramMap.subscribe(params => {
            this.id = params.get("id");
        });
        this.getData();
        this.title.setTitle('Artist Profile - Spotify Profile');
    }
    ngOnInit() {
    }
    getData() {
        this.userDataService.getAnArtist(this.id).subscribe(data => {
            console.log("artist data = ", data);
            this.artistName = data['name'];
            this.artistPopularity = data['popularity'];
            this.artistGenres = data['genres'];
            this.artistExternalUrls = data['external_urls'].spotify;
            this.artistFollowers = data['followers'].total;
            this.artistImage = data['images'][0].url;
        });
        this.userDataService.getTopTracksOfArtist(this.id).subscribe(data => {
            console.log("Top Tracks of artist = ", data['tracks']);
            this.topTracks = data['tracks'];
        });
    }
    calculateDuration(millis) {
        let minutes = Math.floor(millis / 60000);
        let seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
};
ArtistComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_userdata_userdata_service__WEBPACK_IMPORTED_MODULE_3__["UserdataService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
ArtistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-artist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./artist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/artists/artist/artist.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./artist.component.css */ "./src/app/modules/artists/artist/artist.component.css")).default]
    })
], ArtistComponent);



/***/ }),

/***/ "./src/app/modules/artists/artists.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/artists/artists.module.ts ***!
  \***************************************************/
/*! exports provided: ArtistsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistsModule", function() { return ArtistsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _artists_artists_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./artists/artists.component */ "./src/app/modules/artists/artists/artists.component.ts");
/* harmony import */ var _artist_artist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./artist/artist.component */ "./src/app/modules/artists/artist/artist.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");







let ArtistsModule = class ArtistsModule {
};
ArtistsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_artists_artists_component__WEBPACK_IMPORTED_MODULE_3__["ArtistsComponent"], _artist_artist_component__WEBPACK_IMPORTED_MODULE_4__["ArtistComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"]
        ]
    })
], ArtistsModule);



/***/ }),

/***/ "./src/app/modules/artists/artists/artists.component.css":
/*!***************************************************************!*\
  !*** ./src/app/modules/artists/artists/artists.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\r\n    color:white;\r\n}\r\n\r\n.col-md-6 > p {\r\n    text-align: center;\r\n    margin-top: 35px;\r\n    font-size: 24px;\r\n    font-weight: 600;\r\n    text-decoration: underline;\r\n}\r\n\r\n.artist-avatar {\r\n    margin-right: 10px;\r\n    -webkit-clip-path: circle(32px at center);\r\n            clip-path: circle(32px at center);\r\n}\r\n\r\n.artist {\r\n    font-size: 16px;\r\n    margin-left: 120px;\r\n}\r\n\r\n.artist> a:hover{\r\n    color:white !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hcnRpc3RzL2FydGlzdHMvYXJ0aXN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5Q0FBaUM7WUFBakMsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXJ0aXN0cy9hcnRpc3RzL2FydGlzdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLmNvbC1tZC02ID4gcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uYXJ0aXN0LWF2YXRhciB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSgzMnB4IGF0IGNlbnRlcik7XHJcbn1cclxuXHJcbi5hcnRpc3Qge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xyXG59XHJcblxyXG4uYXJ0aXN0PiBhOmhvdmVye1xyXG4gICAgY29sb3I6d2hpdGUgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/artists/artists/artists.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/artists/artists/artists.component.ts ***!
  \**************************************************************/
/*! exports provided: ArtistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistsComponent", function() { return ArtistsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_userdata_userdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/userdata/userdata.service */ "./src/app/services/userdata/userdata.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ArtistsComponent = class ArtistsComponent {
    constructor(userDataService, router) {
        this.userDataService = userDataService;
        this.router = router;
        this.getData();
    }
    ngOnInit() {
    }
    getData() {
        this.userDataService.getTopArtistsMedium().subscribe(data => {
            console.log("top artists = ", data);
            this.topArtists = data['items'];
        });
        this.userDataService.getFollowingData(10).subscribe(data => {
            console.log("artists followed = ", data);
            this.favArtists = data['artists'].items;
        });
    }
};
ArtistsComponent.ctorParameters = () => [
    { type: src_app_services_userdata_userdata_service__WEBPACK_IMPORTED_MODULE_2__["UserdataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ArtistsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-artists',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./artists.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/artists/artists/artists.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./artists.component.css */ "./src/app/modules/artists/artists/artists.component.css")).default]
    })
], ArtistsComponent);



/***/ }),

/***/ "./src/app/modules/login/login.component.css":
/*!***************************************************!*\
  !*** ./src/app/modules/login/login.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nh2 {\r\n  font-family: \"Circular Std\"; \r\n  font-size: 52px;\r\n  color: #68d761;\r\n}\r\n\r\n.btn {\r\n  color: white;\r\n  border: 1px solid #68d761;\r\n  border-radius: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtFQUNkLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LWZhbWlseTogXCJDaXJjdWxhciBTdGRcIjsgXHJcbiAgZm9udC1zaXplOiA1MnB4O1xyXG4gIGNvbG9yOiAjNjhkNzYxO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzY4ZDc2MTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



let LoginComponent = class LoginComponent {
    constructor() {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
            this.LOGIN_URI = "https://spotify-profile-angular.herokuapp.com/login";
        }
        else {
            this.LOGIN_URI = "http://localhost:8888/login";
        }
    }
    ngOnInit() {
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/modules/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/modules/playlists/playlists.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/playlists/playlists.module.ts ***!
  \*******************************************************/
/*! exports provided: PlaylistsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistsModule", function() { return PlaylistsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _playlists_playlists_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playlists/playlists.component */ "./src/app/modules/playlists/playlists/playlists.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let PlaylistsModule = class PlaylistsModule {
};
PlaylistsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_playlists_playlists_component__WEBPACK_IMPORTED_MODULE_3__["PlaylistsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ]
    })
], PlaylistsModule);



/***/ }),

/***/ "./src/app/modules/playlists/playlists/playlists.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/modules/playlists/playlists/playlists.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\nheader {\r\n    margin-top:20px\r\n}\r\n\r\n.header {\r\n    font-family: \"Circular Std\";\r\n    font-size: 14px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.playlists-title {\r\n    text-decoration: underline;\r\n    font-family: \"Circular Std\";\r\n    color: white;\r\n    font-size: 24px;\r\n    font-weight: 600;\r\n}\r\n\r\n.header > div {\r\n    display: flex;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n.playlist-container {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n    grid-gap: 30px;\r\n    width: 100%;\r\n    margin-top: 30px;\r\n}\r\n\r\n.playlist {\r\n    text-decoration: none;\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n}\r\n\r\n.card {\r\n    border: 0px;\r\n    color: white;\r\n    background-color: rgba(0, 0, 0, 0);\r\n    transition: 0.5s;\r\n}\r\n\r\n.card .tracks-count {\r\n    font-weight: 100;\r\n    font-size: 12px;\r\n    color: rgb(228, 228, 228, 0.8);\r\n}\r\n\r\n.card-img-top {\r\n    border-radius: 8px 8px 8px 8px;\r\n}\r\n\r\n.card-text {\r\n    font-size: 14px;\r\n}\r\n\r\np {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.card:hover {\r\n    color: white;\r\n    border-radius: 5px;\r\n    transform: scale(1.05,1.05); /* Standard syntax */\r\n    cursor: pointer;\r\n    transition: 0.5s;\r\n}\r\n\r\n.card:hover .tracks-count {\r\n    transition: 0.5s;\r\n    color: rgb(228, 228, 228, 0.8);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wbGF5bGlzdHMvcGxheWxpc3RzL3BsYXlsaXN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixhQUFhO0lBRWIsOEJBQThCO0lBRTlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJEQUEyRDtJQUMzRCxjQUFjO0lBQ2QsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMkJBQTJCLEVBQUUsb0JBQW9CO0lBQ2pELGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsOEJBQThCO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wbGF5bGlzdHMvcGxheWxpc3RzL3BsYXlsaXN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHhcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBmb250LWZhbWlseTogXCJDaXJjdWxhciBTdGRcIjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wbGF5bGlzdHMtdGl0bGUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBmb250LWZhbWlseTogXCJDaXJjdWxhciBTdGRcIjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5oZWFkZXIgPiBkaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5wbGF5bGlzdC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xyXG4gICAgZ3JpZC1nYXA6IDMwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5wbGF5bGlzdCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLmNhcmQgLnRyYWNrcy1jb3VudCB7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHJnYigyMjgsIDIyOCwgMjI4LCAwLjgpO1xyXG59XHJcblxyXG4uY2FyZC1pbWctdG9wIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggOHB4IDhweDtcclxufVxyXG5cclxuLmNhcmQtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUsMS4wNSk7IC8qIFN0YW5kYXJkIHN5bnRheCAqL1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIgLnRyYWNrcy1jb3VudCB7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgY29sb3I6IHJnYigyMjgsIDIyOCwgMjI4LCAwLjgpO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/modules/playlists/playlists/playlists.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/playlists/playlists/playlists.component.ts ***!
  \********************************************************************/
/*! exports provided: PlaylistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistsComponent", function() { return PlaylistsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_userdata_userdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/userdata/userdata.service */ "./src/app/services/userdata/userdata.service.ts");



let PlaylistsComponent = class PlaylistsComponent {
    constructor(userDataService) {
        this.userDataService = userDataService;
    }
    ngOnInit() {
        this.userDataService.getUsersPlaylists().subscribe(data => {
            this.playlists = data['items'];
            console.log(this.playlists);
        });
    }
};
PlaylistsComponent.ctorParameters = () => [
    { type: src_app_services_userdata_userdata_service__WEBPACK_IMPORTED_MODULE_2__["UserdataService"] }
];
PlaylistsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-playlists',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./playlists.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/playlists/playlists/playlists.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./playlists.component.css */ "./src/app/modules/playlists/playlists/playlists.component.css")).default]
    })
], PlaylistsComponent);



/***/ }),

/***/ "./src/app/modules/profile/profile.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/profile/profile.module.ts ***!
  \***************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/modules/profile/profile/profile.component.ts");




let ProfileModule = class ProfileModule {
};
ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], ProfileModule);



/***/ }),

/***/ "./src/app/modules/profile/profile/profile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/modules/profile/profile/profile.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content-area {\r\n    padding: 20px;\r\n    margin: auto;\r\n}   \r\n\r\n.avatar {\r\n  -webkit-clip-path: circle(160px at center);\r\n          clip-path: circle(160px at center);\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}   \r\n\r\n.profile-name {\r\n  font-size: 38px;\r\n  color: white !important;\r\n  font-weight: 600;\r\n}   \r\n\r\n.profile-details > div {\r\n  color:white;\r\n}   \r\n\r\n.profile-details > div > p {\r\n  font-size: 14px;\r\n  text-transform: uppercase;\r\n  margin: 0px;\r\n  color: gray;\r\n}   \r\n\r\n.profile-details > div > p:first-child {\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  color: #68d761;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSwwQ0FBa0M7VUFBbEMsa0NBQWtDO0VBQ2xDLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Byb2ZpbGUvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1hcmVhIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn0gICBcclxuXHJcbi5hdmF0YXIge1xyXG4gIGNsaXAtcGF0aDogY2lyY2xlKDE2MHB4IGF0IGNlbnRlcik7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ucHJvZmlsZS1uYW1lIHtcclxuICBmb250LXNpemU6IDM4cHg7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnByb2ZpbGUtZGV0YWlscyA+IGRpdiB7XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5wcm9maWxlLWRldGFpbHMgPiBkaXYgPiBwIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW46IDBweDtcclxuICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuLnByb2ZpbGUtZGV0YWlscyA+IGRpdiA+IHA6Zmlyc3QtY2hpbGQge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjNjhkNzYxO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/modules/profile/profile/profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/profile/profile/profile.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_userdata_userdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/userdata/userdata.service */ "./src/app/services/userdata/userdata.service.ts");



let ProfileComponent = class ProfileComponent {
    constructor(userDataService) {
        this.userDataService = userDataService;
        this.getData();
    }
    ngOnInit() {
    }
    getData() {
        this.userDataService.getUserInfo().subscribe((data) => {
            this.avatar_url = data['images'][0].url;
            this.display_name = data['display_name'];
            this.followersCount = data['followers'].total;
        });
        this.userDataService.getFollowingData(50).subscribe(data => {
            this.followingCount = data['artists'].total;
        });
        this.userDataService.getCurrentUserPlaylists().subscribe(data => {
            this.playlistsCount = data['total'];
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: src_app_services_userdata_userdata_service__WEBPACK_IMPORTED_MODULE_2__["UserdataService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/profile/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/modules/profile/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/modules/recent/recent.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/recent/recent.module.ts ***!
  \*************************************************/
/*! exports provided: RecentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentModule", function() { return RecentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _recent_recent_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recent/recent.component */ "./src/app/modules/recent/recent/recent.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let RecentModule = class RecentModule {
};
RecentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_recent_recent_component__WEBPACK_IMPORTED_MODULE_3__["RecentComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ]
    })
], RecentModule);



/***/ }),

/***/ "./src/app/modules/recent/recent/recent.component.css":
/*!************************************************************!*\
  !*** ./src/app/modules/recent/recent/recent.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    color: white;\r\n    margin-top: 20px;\r\n}\r\n\r\nheader {\r\n    margin-top:20px\r\n}\r\n\r\n.header {\r\n    font-family: \"Circular Std\";\r\n    font-size: 14px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.recent-title {\r\n    text-decoration: underline;\r\n    font-family: \"Circular Std\";\r\n    color: white;\r\n    font-size: 24px;\r\n    font-weight: 600;\r\n}\r\n\r\n.header > div {\r\n    display: flex;\r\n}\r\n\r\nbutton {\r\n    font-family: \"Circular Std\";\r\n    margin-right: 10px;\r\n    background-color: rgba(0, 0, 0, 0);\r\n    color: rgb(189, 189, 189);\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    outline: 0;\r\n    border: 0;\r\n}\r\n\r\nbutton:hover span\r\n,button > span:hover {\r\n    color: white;\r\n    border-bottom: 1px solid white;\r\n}\r\n\r\n.isClicked {\r\n    color: white;\r\n    border-bottom: 1px solid white;\r\n}\r\n\r\n.tracks {\r\n    margin-bottom: 10px;\r\n    padding: 8px;\r\n    color: white;\r\n    font-size: 20px;\r\n}\r\n\r\n.tracks:hover,\r\n.tracks a:hover,\r\n.tracks:hover .track-name{\r\n    text-decoration: none;\r\n    color: #68d761;\r\n    cursor: pointer;\r\n    background-color: rgb(49, 49, 49);\r\n    font-weight: 400;\r\n}\r\n\r\n.tracks-inner {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.track-details {\r\n    display: inline-block;\r\n}\r\n\r\n.track-details > p {\r\n    margin: 0px !important;\r\n}\r\n\r\n.track-image {\r\n    -webkit-clip-path: circle(24px at center);\r\n            clip-path: circle(24px at center);\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.track-name {\r\n    font-weight: 300;\r\n    color: white;\r\n    font-size: 18px;\r\n}\r\n\r\n.additional-details {\r\n    font-weight: initial;\r\n    font-size: 14px;\r\n    color: rgb(144, 144, 144);\r\n}\r\n\r\n.duration {\r\n    font-size: 14px;\r\n    color: rgb(144, 144, 144);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZWNlbnQvcmVjZW50L3JlY2VudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGFBQWE7SUFFYiw4QkFBOEI7SUFFOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBOztJQUVJLFlBQVk7SUFDWiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTs7O0lBR0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5Q0FBaUM7WUFBakMsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVjZW50L3JlY2VudC9yZWNlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICAgIG1hcmdpbi10b3A6MjBweFxyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNpcmN1bGFyIFN0ZFwiO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnJlY2VudC10aXRsZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNpcmN1bGFyIFN0ZFwiO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmhlYWRlciA+IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ2lyY3VsYXIgU3RkXCI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gICAgY29sb3I6IHJnYigxODksIDE4OSwgMTg5KTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIgc3BhblxyXG4sYnV0dG9uID4gc3Bhbjpob3ZlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi5pc0NsaWNrZWQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4udHJhY2tzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi50cmFja3M6aG92ZXIsXHJcbi50cmFja3MgYTpob3ZlcixcclxuLnRyYWNrczpob3ZlciAudHJhY2stbmFtZXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjNjhkNzYxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ5LCA0OSwgNDkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLnRyYWNrcy1pbm5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRyYWNrLWRldGFpbHMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4udHJhY2stZGV0YWlscyA+IHAge1xyXG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRyYWNrLWltYWdlIHtcclxuICAgIGNsaXAtcGF0aDogY2lyY2xlKDI0cHggYXQgY2VudGVyKTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4udHJhY2stbmFtZSB7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uYWRkaXRpb25hbC1kZXRhaWxzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBpbml0aWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IHJnYigxNDQsIDE0NCwgMTQ0KTtcclxufVxyXG5cclxuLmR1cmF0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiByZ2IoMTQ0LCAxNDQsIDE0NCk7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/recent/recent/recent.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/recent/recent/recent.component.ts ***!
  \***********************************************************/
/*! exports provided: RecentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentComponent", function() { return RecentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_userdata_userdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/userdata/userdata.service */ "./src/app/services/userdata/userdata.service.ts");



let RecentComponent = class RecentComponent {
    constructor(userDataService) {
        this.userDataService = userDataService;
    }
    ngOnInit() {
        this.getRecentlyPlayed();
    }
    getRecentlyPlayed() {
        this.userDataService.getRecentltPlayed().subscribe(data => {
            let recentsList = data['items'];
            this.recentlyPlayed = recentsList.map(trackData => trackData.track);
            console.log(this.recentlyPlayed);
        });
    }
    calculateDuration(millis) {
        let minutes = Math.floor(millis / 60000);
        let seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
};
RecentComponent.ctorParameters = () => [
    { type: src_app_services_userdata_userdata_service__WEBPACK_IMPORTED_MODULE_2__["UserdataService"] }
];
RecentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recent',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recent.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/recent/recent/recent.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recent.component.css */ "./src/app/modules/recent/recent/recent.component.css")).default]
    })
], RecentComponent);



/***/ }),

/***/ "./src/app/modules/tracks/tracks.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/tracks/tracks.module.ts ***!
  \*************************************************/
/*! exports provided: TracksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TracksModule", function() { return TracksModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tracks_tracks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tracks/tracks.component */ "./src/app/modules/tracks/tracks/tracks.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let TracksModule = class TracksModule {
};
TracksModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_tracks_tracks_component__WEBPACK_IMPORTED_MODULE_3__["TracksComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ]
    })
], TracksModule);



/***/ }),

/***/ "./src/app/modules/tracks/tracks/tracks.component.css":
/*!************************************************************!*\
  !*** ./src/app/modules/tracks/tracks/tracks.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    color: white;\r\n    margin-top: 20px;\r\n}\r\n\r\nheader {\r\n    margin-top:20px\r\n}\r\n\r\n.header {\r\n    font-family: \"Circular Std\";\r\n    font-size: 14px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.tracks-title {\r\n    text-decoration: underline;\r\n    font-family: \"Circular Std\";\r\n    color: white;\r\n    font-size: 24px;\r\n    font-weight: 600;\r\n}\r\n\r\n.header > div {\r\n    display: flex;\r\n}\r\n\r\nbutton {\r\n    font-family: \"Circular Std\";\r\n    margin-right: 10px;\r\n    background-color: rgba(0, 0, 0, 0);\r\n    color: rgb(189, 189, 189);\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    outline: 0;\r\n    border: 0;\r\n}\r\n\r\nbutton:hover span\r\n,button > span:hover {\r\n    color: white;\r\n    border-bottom: 1px solid white;\r\n}\r\n\r\n.isClicked {\r\n    color: white;\r\n    border-bottom: 1px solid white;\r\n}\r\n\r\n.tracks {\r\n    margin-bottom: 10px;\r\n    padding: 8px;\r\n    color: white;\r\n    font-size: 20px;\r\n}\r\n\r\n.tracks:hover,\r\n.tracks a:hover,\r\n.tracks:hover .track-name{\r\n    text-decoration: none;\r\n    color: #68d761;\r\n    cursor: pointer;\r\n    background-color: rgb(49, 49, 49);\r\n    font-weight: 400;\r\n}\r\n\r\n.tracks-inner {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.track-details {\r\n    display: inline-block;\r\n}\r\n\r\n.track-details > p {\r\n    margin: 0px !important;\r\n}\r\n\r\n.track-image {\r\n    -webkit-clip-path: circle(24px at center);\r\n            clip-path: circle(24px at center);\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.track-name {\r\n    font-weight: 300;\r\n    color: white;\r\n    font-size: 18px;\r\n}\r\n\r\n.additional-details {\r\n    font-weight: initial;\r\n    font-size: 14px;\r\n    color: rgb(144, 144, 144);\r\n}\r\n\r\n.duration {\r\n    font-size: 14px;\r\n    color: rgb(144, 144, 144);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy90cmFja3MvdHJhY2tzL3RyYWNrcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGFBQWE7SUFFYiw4QkFBOEI7SUFFOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBOztJQUVJLFlBQVk7SUFDWiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTs7O0lBR0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5Q0FBaUM7WUFBakMsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdHJhY2tzL3RyYWNrcy90cmFja3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICAgIG1hcmdpbi10b3A6MjBweFxyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNpcmN1bGFyIFN0ZFwiO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRyYWNrcy10aXRsZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNpcmN1bGFyIFN0ZFwiO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmhlYWRlciA+IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ2lyY3VsYXIgU3RkXCI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gICAgY29sb3I6IHJnYigxODksIDE4OSwgMTg5KTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIgc3BhblxyXG4sYnV0dG9uID4gc3Bhbjpob3ZlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi5pc0NsaWNrZWQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4udHJhY2tzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi50cmFja3M6aG92ZXIsXHJcbi50cmFja3MgYTpob3ZlcixcclxuLnRyYWNrczpob3ZlciAudHJhY2stbmFtZXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjNjhkNzYxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ5LCA0OSwgNDkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLnRyYWNrcy1pbm5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRyYWNrLWRldGFpbHMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4udHJhY2stZGV0YWlscyA+IHAge1xyXG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRyYWNrLWltYWdlIHtcclxuICAgIGNsaXAtcGF0aDogY2lyY2xlKDI0cHggYXQgY2VudGVyKTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4udHJhY2stbmFtZSB7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uYWRkaXRpb25hbC1kZXRhaWxzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBpbml0aWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IHJnYigxNDQsIDE0NCwgMTQ0KTtcclxufVxyXG5cclxuLmR1cmF0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiByZ2IoMTQ0LCAxNDQsIDE0NCk7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/tracks/tracks/tracks.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/tracks/tracks/tracks.component.ts ***!
  \***********************************************************/
/*! exports provided: TracksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TracksComponent", function() { return TracksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_userdata_userdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/userdata/userdata.service */ "./src/app/services/userdata/userdata.service.ts");



let TracksComponent = class TracksComponent {
    constructor(userDataService) {
        this.userDataService = userDataService;
        this.isTopTracksActive = true;
        this.isFavouritesActive = false;
    }
    ngOnInit() {
        this.topTracks();
        // this.favourites();
    }
    topTracks() {
        this.isTopTracksActive = true;
        this.isFavouritesActive = false;
        this.userDataService.getTopTracksLong().subscribe(data => {
            this.tracks = data['items'];
            console.log(this.tracks);
        });
    }
    favourites() {
        this.isTopTracksActive = false;
        this.isFavouritesActive = true;
        this.userDataService.getSavedTracks().subscribe(data => {
            let trackList = data['items'];
            this.tracks = trackList.map(trackData => trackData.track);
        });
    }
    calculateDuration(millis) {
        let minutes = Math.floor(millis / 60000);
        let seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
};
TracksComponent.ctorParameters = () => [
    { type: src_app_services_userdata_userdata_service__WEBPACK_IMPORTED_MODULE_2__["UserdataService"] }
];
TracksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tracks',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tracks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tracks/tracks/tracks.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tracks.component.css */ "./src/app/modules/tracks/tracks/tracks.component.css")).default]
    })
], TracksComponent);



/***/ }),

/***/ "./src/app/services/userdata/userdata.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/userdata/userdata.service.ts ***!
  \*******************************************************/
/*! exports provided: UserdataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdataService", function() { return UserdataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_api_api_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/api.enum */ "./src/app/api/api.enum.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let UserdataService = class UserdataService {
    constructor(http, route) {
        this.http = http;
        this.route = route;
        this.api = src_app_api_api_enum__WEBPACK_IMPORTED_MODULE_2__["Api"].API_URL;
        this.getAccessToken = () => {
            // Method calls
            const setLocalAccessToken = (token) => window.localStorage.setItem('my_spotify_access_token', token);
            const setLocalRefreshToken = (token) => window.localStorage.setItem('my_spotify_refresh_token', token);
            const getLocalAccessToken = () => window.localStorage.getItem('my_spotify_access_token');
            const getLocalRefreshToken = () => window.localStorage.getItem('my_spotify_refresh_token');
            const refreshAccessToken = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                try {
                    const data = yield this.http.get(`/refresh_token?refresh_token=${getLocalRefreshToken()}`);
                    const access_token = data;
                    setLocalAccessToken(access_token);
                    window.location.reload();
                    return;
                }
                catch (e) {
                    console.error(e);
                }
            });
            let access_token;
            let refresh_token;
            this.route.queryParams.subscribe(params => {
                access_token = params['access_token'];
                refresh_token = params['refresh_token'];
            });
            let isTrue = true;
            // If token has expired
            if (!isTrue) {
                console.warn('Access token has expired, refreshing...');
                refreshAccessToken();
            }
            const localAccessToken = getLocalAccessToken();
            const localRefreshToken = getLocalRefreshToken();
            // If there is no REFRESH token in local storage, set it as `refresh_token` from params
            if (!localRefreshToken || localRefreshToken === 'undefined') {
                setLocalRefreshToken(refresh_token);
            }
            // If there is no ACCESS token in local storage, set it and return `access_token` from params
            if (!localAccessToken || localAccessToken === 'undefined') {
                setLocalAccessToken(access_token);
                return access_token;
            }
            return localAccessToken;
        };
        this.access_token = this.getAccessToken();
        this.setHeaders();
    }
    setHeaders() {
        this.headers = {
            Authorization: `Bearer ${this.access_token}`,
            'Content-Type': 'application/json',
        };
    }
    /**
     * Get Current User's Profile
     * https://developer.spotify.com/documentation/web-api/reference/users-profile/get-current-users-profile/
     */
    getUserInfo() {
        const headers = this.headers;
        return this.http.get(`${this.api}/v1/me`, { headers });
    }
    /**
     * Get User's Followed Artists
     * https://developer.spotify.com/documentation/web-api/reference/follow/get-followed/
     */
    getFollowingData(limit) {
        const headers = this.headers;
        return this.http.get(`${this.api}/v1/me/following?type=artist&limit=${limit}`, { headers });
    }
    /**
     * Get a List of Current User's Playlists
     * https://developer.spotify.com/documentation/web-api/reference/playlists/get-a-list-of-current-users-playlists/
     */
    getCurrentUserPlaylists() {
        const headers = this.headers;
        return this.http.get(`${this.api}/v1/me/playlists`, { headers });
    }
    /**
     * Get a List of Tracks from Selected Playlist
     * https://developer.spotify.com/documentation/web-api/reference/playlists/get-playlists-tracks
     */
    getTracksFromPlayList(playlist_id) {
        const headers = this.headers;
        return this.http.get(`${this.api}/v1/playlists/${playlist_id}/tracks`, { headers });
    }
    /**
     * Get a Playlist
     * https://developer.spotify.com/documentation/web-api/reference/playlists/get-playlist
     */
    getAPlayList(playlist_id) {
        const headers = this.headers;
        return this.http.get(`${this.api}/v1/playlists/${playlist_id}`, { headers });
    }
    /**
     * Get a User's Top Tracks
     * https://developer.spotify.com/documentation/web-api/reference/personalization/get-users-top-artists-and-tracks/
     */
    getTopTracksShort() {
        const headers = this.headers;
        return this.http.get(`${this.api}/v1/me/top/tracks?limit=50&time_range=short_term`, { headers });
    }
    getTopTracksMedium() {
        const headers = this.headers;
        return this.http.get(`${this.api}/v1/me/top/tracks?limit=50&time_range=medium_term`, {
            headers,
        });
    }
    getTopTracksLong() {
        const headers = this.headers;
        return this.http.get(`${this.api}/v1/me/top/tracks?limit=50&time_range=long_term`, { headers });
    }
    /**
     * Get a User's Top Artists
     * https://developer.spotify.com/documentation/web-api/reference/personalization/get-users-top-artists-and-tracks/
     */
    getTopArtistsShort() {
        const headers = this.headers;
        return this.http.get(`${this.api}/v1/me/top/artists?limit=50&time_range=short_term`, {
            headers,
        });
    }
    getTopArtistsMedium() {
        const headers = this.headers;
        return this.http.get(`${this.api}/v1/me/top/artists?limit=10&time_range=medium_term`, {
            headers,
        });
    }
    getTopArtistsLong() {
        const headers = this.headers;
        return this.http.get(`${this.api}/v1/me/top/artists?limit=50&time_range=long_term`, { headers });
    }
    /**
     * Get an artist
     * https://developer.spotify.com/documentation/web-api/reference/artists/get-artist
     */
    getAnArtist(artist_id) {
        const headers = this.headers;
        return this.http.get(`${this.api}/v1/artists/${artist_id}`, { headers });
    }
    /**
     * Get Top Tracks of An Artist
     * https://developer.spotify.com/documentation/web-api/reference/artists/get-artists-top-tracks
     */
    getTopTracksOfArtist(id) {
        const headers = this.headers;
        return this.http.get(`${this.api}/v1/artists/${id}/top-tracks?country=ES`, { headers });
    }
    /**
     * Get Saved Tracks of User
     * https://developer.spotify.com/documentation/web-api/reference/library/get-users-saved-tracks
     */
    getSavedTracks() {
        const headers = this.headers;
        return this.http.get(`${this.api}/v1/me/tracks`, { headers });
    }
    /**
     * Get Recently Played Tracks of the User
     * https://developer.spotify.com/documentation/web-api/reference/player/get-recently-played
     */
    getRecentltPlayed() {
        const headers = this.headers;
        return this.http.get(`${this.api}/v1/me/player/recently-played`, { headers });
    }
    /**
     * Get User's Playlists
     * https://developer.spotify.com/documentation/web-api/reference/playlists/get-a-list-of-current-users-playlists
     */
    getUsersPlaylists() {
        const headers = this.headers;
        return this.http.get(`${this.api}/v1/me/playlists`, { headers });
    }
};
UserdataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
UserdataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserdataService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Projects\spotify profile\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map