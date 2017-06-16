webpackJsonp([1,4],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServerService = (function () {
    function ServerService(http, router) {
        this.http = http;
        this.router = router;
    }
    ServerService.prototype.requestOauthToken = function (username, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Authorization': 'Basic YnJvd3Nlcjo=' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var body = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */]();
        body.append('username', username);
        body.append('password', password);
        body.append('scope', 'ui');
        body.append('grant_type', 'password');
        return this.http.post('http://localhost/uaa/oauth/token', body, options);
        // return this.http.post('uaa/oauth/token', body , options);
    };
    ServerService.prototype.registerNewAccount = function (username, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify({ 'username': username, 'password': password });
        console.log('body is ' + body);
        return this.http.post('http://localhost/accounts/', body, options);
        // return this.http.post('accounts/', body, options);
    };
    ServerService.prototype.getCurrentAccount = function () {
        var token = this.getOauthTokenFromStorage();
        var account = null;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + token });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get('http://localhost/accounts/current', { headers: headers });
        // return this.http.get('accounts/current', {headers: headers});
    };
    ServerService.prototype.getOauthTokenFromStorage = function () {
        return localStorage.getItem('token');
    };
    ServerService.prototype.saveOauthTokenToStorage = function (token) {
        localStorage.setItem('token', token);
    };
    ServerService.prototype.getUserNameFromStorage = function () {
        return localStorage.getItem('username');
    };
    ServerService.prototype.saveUserNameToStorage = function (username) {
        localStorage.setItem('username', username);
    };
    ServerService.prototype.clearLocalStorage = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
    };
    ServerService.prototype.getAllMovies = function () {
        var token = this.getOauthTokenFromStorage();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + token });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get('http://localhost/movies/movie/all', options);
        // return this.http.get('movies/movie/all', options);
    };
    ServerService.prototype.addRent = function (movieId, movieName) {
        var userId = this.getUserNameFromStorage();
        var token = this.getOauthTokenFromStorage();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer' + token });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify({ 'userId': userId, 'movieId': movieId, 'movieName': movieName });
        this.http.post('http://localhost/rents/rent', body, options).subscribe();
        // this.http.post('rents/rent', body, options).subscribe();
    };
    ServerService.prototype.deleteRent = function (id) {
        var token = this.getOauthTokenFromStorage();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer' + token });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        this.http.delete('http://localhost/rents/rent/' + id).subscribe();
        // this.http.delete('rents/rent/' + id).subscribe();
        location.reload();
    };
    ServerService.prototype.getAllNotOrderedRents = function () {
        var userId = this.getUserNameFromStorage();
        var token = this.getOauthTokenFromStorage();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + token });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get('http://localhost/rents/rent/' + userId, options);
        // return this.http.get('rents/rent/' + userId, options);
    };
    ServerService.prototype.getAllOrderedRents = function () {
        var userId = this.getUserNameFromStorage();
        var token = this.getOauthTokenFromStorage();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + token });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get('http://localhost/rents/rent/all/' + userId, options);
        // return this.http.get('rents/rent/all/' + userId, options);
    };
    ServerService.prototype.completeOrder = function () {
        var userId = this.getUserNameFromStorage();
        var token = this.getOauthTokenFromStorage();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + token });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.put('http://localhost/rents/rent/' + userId, options).subscribe();
        // return this.http.put('rents/rent/' + userId, options).subscribe();
    };
    return ServerService;
}());
ServerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ServerService);

var _a, _b;
//# sourceMappingURL=server.service.js.map

/***/ }),

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_server_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(serverService, router) {
        this.serverService = serverService;
        this.router = router;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.serverService.clearLocalStorage();
    };
    LoginComponent.prototype.requestOauthTokenFormAction = function () {
        var _this = this;
        this.serverService.requestOauthToken(this.username, this.password).
            subscribe(function (response) {
            _this.serverService.saveOauthTokenToStorage(response.json().access_token);
            _this.serverService.saveUserNameToStorage(_this.username);
            location.reload();
            _this.router.navigate(['home']);
        }, function (error) {
            _this.error = 'Bad creditentials! Please enter again!';
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(180),
        styles: [__webpack_require__(167)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_server_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_movie_model__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieDetailComponent = (function () {
    function MovieDetailComponent(serverService, router) {
        this.serverService = serverService;
        this.router = router;
    }
    MovieDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serverService.getCurrentAccount().
            subscribe(function (response) {
        }, function (error) {
            console.log('You need to log in!' + error);
            _this.router.navigate(['/login']);
        });
    };
    return MovieDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_movie_model__["a" /* Movie */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_movie_model__["a" /* Movie */]) === "function" && _a || Object)
], MovieDetailComponent.prototype, "movieDetail", void 0);
MovieDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_14" /* Component */])({
        selector: 'app-movie-detail',
        template: __webpack_require__(181),
        styles: [__webpack_require__(168)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_server_service__["a" /* ServerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], MovieDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=movie-detail.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_server_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieComponent = (function () {
    function MovieComponent(serverService, router) {
        this.serverService = serverService;
        this.router = router;
        this.detailClicked = false;
    }
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serverService.getCurrentAccount().
            subscribe(function (response) {
        }, function (error) {
            console.log('You need to log in!' + error);
            _this.router.navigate(['/login']);
        });
    };
    MovieComponent.prototype.setMovieForDetail = function (detail) {
        this.movie = detail;
    };
    MovieComponent.prototype.onDetailClicked = function (feature) {
        this.detailClicked = feature;
    };
    MovieComponent.prototype.back = function () {
        this.detailClicked = false;
        this.movie = null;
    };
    return MovieComponent;
}());
MovieComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* Component */])({
        selector: 'app-movie',
        template: __webpack_require__(182),
        styles: [__webpack_require__(169)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MovieComponent);

var _a, _b;
//# sourceMappingURL=movie.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_server_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoviesComponent = (function () {
    function MoviesComponent(serverService, router) {
        this.serverService = serverService;
        this.router = router;
        this.movieEmitter = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["s" /* EventEmitter */]();
        this.detailClickedEmitter = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["s" /* EventEmitter */]();
    }
    MoviesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serverService.getCurrentAccount().
            subscribe(function (response) {
            _this.serverService.getAllMovies().
                subscribe(function (response) {
                _this.movies = response.json();
            }, function (error) {
            });
        }, function (error) {
            console.log('You need to log in!' + error);
            _this.router.navigate(['/login']);
        });
    };
    MoviesComponent.prototype.onDetailClick = function (id) {
        this.movie = this.movies.find(function (movie) { return movie.id === id; });
        this.movieEmitter.emit(this.movie);
        this.detailClickedEmitter.emit(true);
    };
    MoviesComponent.prototype.onRentClick = function (movieId, movieName) {
        this.serverService.addRent(movieId, movieName);
    };
    return MoviesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["w" /* Output */])(),
    __metadata("design:type", Object)
], MoviesComponent.prototype, "movieEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["w" /* Output */])(),
    __metadata("design:type", Object)
], MoviesComponent.prototype, "detailClickedEmitter", void 0);
MoviesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* Component */])({
        selector: 'app-movies',
        template: __webpack_require__(183),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MoviesComponent);

var _a, _b;
//# sourceMappingURL=movies.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_server_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrdersComponent = (function () {
    function OrdersComponent(serverService) {
        this.serverService = serverService;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serverService.getAllNotOrderedRents()
            .subscribe(function (response) {
            _this.orders = response.json();
        }, function (error) {
            console.log('You need to log in!' + error);
        });
        this.serverService.getAllOrderedRents()
            .subscribe(function (response) {
            _this.orderHistory = response.json();
        }, function (error) {
            console.log('You need to log in!' + error);
        });
    };
    OrdersComponent.prototype.onDelete = function (id) {
        this.serverService.deleteRent(id);
    };
    OrdersComponent.prototype.onOrder = function () {
        this.serverService.completeOrder();
        location.reload();
    };
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-orders',
        template: __webpack_require__(184),
        styles: [__webpack_require__(171)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_server_service__["a" /* ServerService */]) === "function" && _a || Object])
], OrdersComponent);

var _a;
//# sourceMappingURL=orders.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_server_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(serverService, router) {
        this.serverService = serverService;
        this.router = router;
        this.error = '';
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.registerAccount = function () {
        var _this = this;
        this.serverService.registerNewAccount(this.username, this.password).
            subscribe(function (response) {
            _this.error = 'Account created';
            setTimeout(function () {
                _this.router.navigate(['/']);
            }, 3000);
        }, function (error) {
            console.log(error);
            _this.error = 'Bad creditentials';
        });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__(185),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StartComponent = (function () {
    function StartComponent() {
    }
    StartComponent.prototype.ngOnInit = function () { };
    return StartComponent;
}());
StartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-start',
        template: __webpack_require__(186),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [])
], StartComponent);

//# sourceMappingURL=start.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnverifiedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UnverifiedComponent = (function () {
    function UnverifiedComponent() {
    }
    UnverifiedComponent.prototype.ngOnInit = function () {
    };
    return UnverifiedComponent;
}());
UnverifiedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-unverified',
        template: __webpack_require__(187),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [])
], UnverifiedComponent);

//# sourceMappingURL=unverified.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "p {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".vertical-center {\n  min-height: 100%;  \n  min-height: 100vh; \n\n  display: -webkit-box; \n\n  display: -ms-flexbox; \n\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.jumbotron {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: transparent;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".vertical-center {\n  min-height: 100%;  \n  min-height: 100vh; \n\n  display: -webkit-box; \n\n  display: -ms-flexbox; \n\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.jumbotron {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: transparent;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".jumbotron {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: rgba(192,192,192,0.2);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".vertical-center {\n  min-height: 100%;  /* Fallback for browsers do NOT support vh unit */\n  min-height: 100vh; /* These two lines are counted as one :-)       */\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <div class=\"container\">\n    <div class=\"row\">\n      Oups! Something went wrong! ;)\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" routerLink=\"/\"><img src=\"https://cdn4.iconfinder.com/data/icons/IMPRESSIONS/multimedia/png/256/video.png\" style=\"display: block;\n    margin: 0 auto; max-height: 20px\"/></a>\n    </div>\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li><a routerLink=\"/home\">Movies</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a *ngIf=\"logged === true\" routerLink=\"/orders\">My orders</a></li>\n        <li><a *ngIf=\"logged === true\" (click)=\"logout()\">Logout</a></li>\n        <li><a *ngIf=\"logged === false\" routerLink=\"/login\">Login</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports = "<app-movie></app-movie>"

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"jumbotron vertical-center\">\n      <div class=\"col-sm-12 col-md-6 col-md-offset-3\">\n        <a routerLink=\"/\"><img src=\"https://cdn4.iconfinder.com/data/icons/IMPRESSIONS/multimedia/png/256/video.png\" style=\"display: block;\n    margin: 0 auto; max-height: 200px\"></a>\n        <h5 style=\"color: red\">{{ error }} <span class=\"label label-danger\"></span></h5>\n        <br>\n        <label>Login</label>\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-user\" id=\"login\"></span></span>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\"> \n        </div>\n        <br>\n        <label>Password</label>\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-lock\" id=\"password\"></span></span>\n          <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\"> \n        </div>\n        <br>\n        <button type=\"submit\" class=\"button btn btn-primary\" (keyup.enter)=\"requestOauthTokenFormAction()\" (click)=\"requestOauthTokenFormAction()\">Login</button>       \n        <div style=\"text-align: center\">\n            <a routerLink=\"/signup\">Create an account</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-4 col-lg-2\">\n      <img src=\"{{movieDetail.imageUri}}\" style=\"max-height: 200px\">\n    </div>\n    <div class=\"col-sm-12 col-md-8 col-lg-10 align-text-top\">\n        <h2>{{movieDetail.name}}</h2> <h6 style=\"color: red\">Price: {{movieDetail.price}}</h6>\n        <br>\n        {{movieDetail.desc}}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-movies (movieEmitter)=\"setMovieForDetail($event)\" (detailClickedEmitter)=\"onDetailClicked($event)\" *ngIf=\"detailClicked === false\"></app-movies>\n    <app-movie-detail [movieDetail]=\"movie\" *ngIf=\"detailClicked !== false\"></app-movie-detail>\n    <br>\n      <button class=\"btn btn-success\" (click)=\"back()\" *ngIf=\"detailClicked !== false\">Back</button>\n</div>\n\n"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-4 col-lg-4\" *ngFor=\"let movie of movies\">\n      <div class=\"thumbnail\">\n      <img style=\"max-height: 480px;\" (click)=\"onDetailClick(movie.id)\" src=\"{{movie.imageUri}}\" alt=\" {{movie.name}}\" >\n      <div class=\"caption\">\n        <h3>{{movie.name}}</h3> <h6 style=\"color: red\">Price: {{movie.price}}</h6>\n        <p><a class=\"btn btn-primary\" role=\"button\" (click)=\"onDetailClick(movie.id)\">Details</a> <a class=\"btn btn-danger\" (click)=\"onRentClick(movie.id, movie.name)\"role=\"button\">Rent</a></p>\n      </div>\n    </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <label *ngIf=\"orders?.length === 0\">No active orders</label>\n      <table class=\"table table-sm\" *ngIf=\"orders?.length !== 0\">\n        <thead>\n          <tr>\n            <th>Movie Name</th>\n            <th>Order Id</th>\n            <th>Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let order of orders\">\n            <th scope=\"row\">{{ order.movieName }}</th>\n            <td>{{ order.id }}</td>\n            <td><a style=\"cursor: pointer; text-decoration: none\" (click)=\"onDelete(order.id)\">Delete <span class=\"glyphicon glyphicon-remove\"></span></a></td>\n          </tr>\n        </tbody>\n      </table>\n      <button *ngIf=\"orders?.length !== 0\" type=\"button\" class=\"btn btn-success center-block\" (click)=\"onOrder()\">Order</button>\n      <br>\n      <br>\n      <br>\n      <hr style=\"border-color: darkslategrey\">\n    </div>\n    <div class=\"col-lg-12\">\n      <label>Order history:</label>\n      <ul class=\"list-group\">\n        <li *ngFor=\"let history of orderHistory\" class=\"list-group-item\">{{ history.movieName }} <a class=\"align-right\">{{ history.date }}</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron vertical-center\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-6 col-md-offset-3\">\n        <a routerLink=\"/\"><img src=\"https://cdn4.iconfinder.com/data/icons/IMPRESSIONS/multimedia/png/256/video.png\" style=\"display: block;\n    margin: 0 auto; max-height: 200px\"></a>\n        <h5 style=\"color: red\">{{ error }} <span class=\"label label-danger\"></span></h5>\n        <br>\n        <label>Login</label>\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-user\" id=\"login\"></span></span>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\"> \n        </div>\n        <br>\n        <label>Password</label>\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-lock\" id=\"password\"></span></span>\n          <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\">\n        </div>\n        <h6 style=\"color: red;\">(Please specify a password with a minimum of 6 characters)</h6>\n        <br>\n        <button type=\"submit\" class=\"button btn btn-danger\" (click)=\"registerAccount()\">Register</button>        \n        <div style=\"text-align: center\">\n            <a routerLink=\"/login\">Sign in!</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"jumbotron\">\n  <h1 class=\"display-3\">Hey there freshman! ;)</h1>\n  <p class=\"lead\">This is an example of <strong>Java-Based Microservices</strong> with Spring Boot, Spring Cloud and Docker. Each of the services run with separate, dedicated <strong>Mongo</strong> database.</p>\n  <p class=\"lead\"><strong>Tech stack used:</strong> Java EE 8, Angular 2, Microservice Architecture Pattern, Spring Boot, Spring Cloud, Spring Security / Auth0 / JWT, Spring Data JPA, Docker,REST, Json, Maven</p>\n  <hr class=\"my-4\">\n  <p>Have fun!</p>\n  <p class=\"lead\">\n    <a class=\"btn btn-primary btn-lg\" routerLink=\"/login\" role=\"button\">Login</a> <a class=\"btn btn-primary btn-lg\" routerLink=\"/signup\" role=\"button\">Create Account</a>\n  </p>\n</div>\n  </div>\n</div>"

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron vertical-center\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-6 col-md-offset-3\">\n        <a routerLink=\"/\"><img src=\"https://cdn4.iconfinder.com/data/icons/IMPRESSIONS/multimedia/png/256/video.png\" style=\"display: block;\n        margin: 0 auto; max-height: 200px\"></a>\n        <br>\n        <h3 style=\"color: red; text-align: center\">To view this page you need to be logged in!<span class=\"label label-danger\"></span></h3>\n        <div style=\"text-align: center\">\n          <a routerLink=\"/\">Login</a> / <a routerLink=\"/signup\">Register</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(87);


/***/ }),

/***/ 86:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 86;


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(108);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Movie; });
var Movie = (function () {
    function Movie() {
    }
    return Movie;
}());

//# sourceMappingURL=movie.model.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(176),
        styles: [__webpack_require__(163)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_server_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signup_signup_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__unverified_unverified_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__movie_movie_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__movie_movies_movies_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__movie_movie_detail_movie_detail_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__header_header_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__start_start_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__blank_blank_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__orders_orders_component__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_15__start_start_component__["a" /* StartComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_9__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'unverified', component: __WEBPACK_IMPORTED_MODULE_10__unverified_unverified_component__["a" /* UnverifiedComponent */] },
    { path: 'movie', component: __WEBPACK_IMPORTED_MODULE_11__movie_movie_component__["a" /* MovieComponent */] },
    { path: 'movies', component: __WEBPACK_IMPORTED_MODULE_12__movie_movies_movies_component__["a" /* MoviesComponent */] },
    { path: 'movie-detail', component: __WEBPACK_IMPORTED_MODULE_13__movie_movie_detail_movie_detail_component__["a" /* MovieDetailComponent */] },
    { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_17__orders_orders_component__["a" /* OrdersComponent */] },
    { path: 'error', component: __WEBPACK_IMPORTED_MODULE_16__blank_blank_component__["a" /* BlankComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_10__unverified_unverified_component__["a" /* UnverifiedComponent */],
            __WEBPACK_IMPORTED_MODULE_11__movie_movie_component__["a" /* MovieComponent */],
            __WEBPACK_IMPORTED_MODULE_12__movie_movies_movies_component__["a" /* MoviesComponent */],
            __WEBPACK_IMPORTED_MODULE_13__movie_movie_detail_movie_detail_component__["a" /* MovieDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_14__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_15__start_start_component__["a" /* StartComponent */],
            __WEBPACK_IMPORTED_MODULE_16__blank_blank_component__["a" /* BlankComponent */],
            __WEBPACK_IMPORTED_MODULE_17__orders_orders_component__["a" /* OrdersComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_0__services_server_service__["a" /* ServerService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlankComponent = (function () {
    function BlankComponent() {
    }
    BlankComponent.prototype.ngOnInit = function () {
    };
    return BlankComponent;
}());
BlankComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-blank',
        template: __webpack_require__(177),
        styles: [__webpack_require__(164)]
    }),
    __metadata("design:paramtypes", [])
], BlankComponent);

//# sourceMappingURL=blank.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_server_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(serverService, router) {
        this.serverService = serverService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var token = this.serverService.getOauthTokenFromStorage();
        if (token) {
            this.loggedSwitch(true);
        }
        else {
            this.loggedSwitch(false);
        }
    };
    HeaderComponent.prototype.loggedSwitch = function (status) {
        if (status) {
            this.logged = status;
        }
        else {
            this.logged = status;
        }
    };
    HeaderComponent.prototype.logout = function () {
        this.serverService.clearLocalStorage();
        location.reload();
        this.router.navigate(['/']);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(178),
        styles: [__webpack_require__(165)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_server_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(serverService, router) {
        this.serverService = serverService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(179),
        styles: [__webpack_require__(166)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ })

},[221]);
//# sourceMappingURL=main.bundle.js.map