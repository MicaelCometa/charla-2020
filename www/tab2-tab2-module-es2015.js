(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Listado de posts\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button expand=\"block\" class='update-btn' (click)='getPosts()'>actualizar</ion-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n\n  <ion-card *ngFor='let post of posts'>\n    <ion-card-header>\n      <ion-row>\n        <ion-col size='3'>\n          <img src='assets/avatares/{{post.image}}'>\n        </ion-col>\n        <ion-col size='9'>\n          <ion-card-subtitle>{{post.author}}</ion-card-subtitle>\n          <ion-card-title class='title'>{{post.title}}</ion-card-title>\n          \n        </ion-col>\n\n       \n      </ion-row>\n\n\n      \n    </ion-card-header>\n  \n    <ion-card-content>\n      {{post.comment}}\n    </ion-card-content>\n\n\n    <ion-col size='12'>\n      <p class='date'>{{post.date}}</p>\n    </ion-col>\n\n  </ion-card>\n  \n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".date {\n  margin: 0px;\n  right: 0px;\n  float: right;\n  bottom: 4px;\n  margin-bottom: 5px;\n  margin-right: 10px;\n}\n\n.date2 {\n  position: absolute;\n  right: 6px;\n  top: 20px;\n}\n\n.update-btn {\n  background: #798cd4;\n  border-radius: 4px;\n  color: #fff;\n}\n\nimg {\n  left: -4px;\n  border: solid 1px #bbbbbb;\n  border-radius: 80px;\n}\n\n.title {\n  margin-top: 10px;\n}\n\nion-card-header {\n  background: #313131;\n  padding-top: 1px;\n  padding-bottom: 0px;\n}\n\nion-card-header img {\n  background-color: #fff;\n}\n\nion-card-header ion-card-subtitle {\n  color: #fff;\n}\n\nion-card-header ion-card-title {\n  color: #fff;\n}\n\nion-card-header h1 {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9DOlxcSW9uaWNcXGNvbWV0YS1pZXMtMjAyMC9zcmNcXGFwcFxcdGFiMlxcdGFiMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0FGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDRSxnQkFBQTtBQ0VGOztBREdBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNFLG1CQUFBO0FDQUo7O0FEQ0U7RUFDRSxzQkFBQTtBQ0NKOztBRENFO0VBQ0UsV0FBQTtBQ0NKOztBRENFO0VBQ0UsV0FBQTtBQ0NKOztBRENFO0VBQ0Usa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmRhdGV7XG4gIG1hcmdpbjogMHB4O1xuICByaWdodDogMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGJvdHRvbTogNHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5kYXRlMntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNnB4O1xuICB0b3A6IDIwcHg7XG59XG4udXBkYXRlLWJ0bntcbiAgYmFja2dyb3VuZDogIzc5OGNkNDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuaW1ne1xuICBsZWZ0OiAtNHB4O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNiYmJiYmI7XG4gICAgYm9yZGVyLXJhZGl1czogODBweDtcbn1cbi50aXRsZXtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuXG5cbmlvbi1jYXJkLWhlYWRlcntcbiAgYmFja2dyb3VuZDojMzEzMTMxO1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIGltZ3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG4gIH1cbiAgaW9uLWNhcmQtc3VidGl0bGV7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgaW9uLWNhcmQtdGl0bGV7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgaDF7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxuICB9XG59IiwiLmRhdGUge1xuICBtYXJnaW46IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3R0b206IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5kYXRlMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDZweDtcbiAgdG9wOiAyMHB4O1xufVxuXG4udXBkYXRlLWJ0biB7XG4gIGJhY2tncm91bmQ6ICM3OThjZDQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbmltZyB7XG4gIGxlZnQ6IC00cHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNiYmJiYmI7XG4gIGJvcmRlci1yYWRpdXM6IDgwcHg7XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICMzMTMxMzE7XG4gIHBhZGRpbmctdG9wOiAxcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5pb24tY2FyZC1oZWFkZXIgaW1nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbmlvbi1jYXJkLWhlYWRlciBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuaW9uLWNhcmQtaGVhZGVyIGlvbi1jYXJkLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG59XG5pb24tY2FyZC1oZWFkZXIgaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/post.service */ "./src/app/services/api/post.service.ts");
/* harmony import */ var _models_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/post */ "./src/app/models/post.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");






let Tab2Page = class Tab2Page {
    constructor(postService, storage, alertController) {
        this.postService = postService;
        this.storage = storage;
        this.alertController = alertController;
        this.posts = Array();
    }
    ionViewDidEnter() {
        this.getPosts();
        this.checkHeroNameStorage();
    }
    checkHeroNameStorage() {
        return this.storage.get('heroName').then((storageName) => {
            if (!storageName) {
                this.generateSuperUltraName();
            }
            else {
                var heroName = this.storage.get('heroName');
                console.log('heroName ->', heroName);
                // this.generateSuperUltraName();
            }
        });
    }
    generateSuperUltraName() {
        var _verduras = Array('Aguacate', 'Fresa', 'Zanahoria', 'Kiwi', 'Limón', 'Mazorca', 'Naranja', 'Papa', 'Pepino', 'Pimiento', 'Plátano', 'Melón', 'Alcachofa', 'Calabaza');
        var _atributos = Array('impresionante', 'de combate', 'del imperio', 'salvavidas', 'del destino', 'espacial', 'nuclear', 'ninja', 'samurai', 'mutante', 'predator', 'pirata', 'astronauta', 'especial');
        var verduras = Array('Aguacate', 'Fresa', 'Zanahoria', 'Kiwi', 'Limón', 'Mazorca', 'Naranja', 'Papa', 'Pepino', 'Pimiento', 'Plátano', 'Melón', 'Alcachofa', 'Calabaza');
        var atributos = Array('impresionante', 'de combate', 'del imperio', 'salvavidas', 'del destino', 'espacial', 'nuclear', 'ninja', 'samurai', 'mutante', 'predator', 'pirata', 'astronauta', 'especial');
        this.postService.getAllNicks().subscribe(data => {
            var nicks;
            nicks = data.body;
            nicks.forEach(nick => {
                var nickArray = nick.name.split(' ');
                var name = nickArray.splice(0, 1)[0];
                // POSICION DEL NOMBRE
                var coincidence = verduras.indexOf(name);
                if (coincidence != -1) {
                    verduras.splice(coincidence, 1);
                }
                // POSICION DEL SUPERULTRAPODER
                var surname = nickArray.join(' ');
                var coincidence = atributos.indexOf(surname);
                if (coincidence != -1) {
                    atributos.splice(coincidence, 1);
                }
            });
            if (verduras.length >= 0) {
                verduras = _verduras;
                atributos = _atributos;
            }
            var indexVerduras = Math.floor(Math.random() * (verduras.length - 0) + 0);
            var indexAtributos = Math.floor(Math.random() * (verduras.length - 0) + 0);
            var name = verduras.splice(indexVerduras)[0];
            var surname = atributos.splice(indexAtributos)[0];
            var heroName = name + ' ' + surname;
            this.postService.checkNick(heroName).subscribe(data => {
                if (data.body == true) {
                    this.storage.set('heroName', heroName);
                    this.superAlert(heroName);
                }
            }, error => {
                console.log('error', error);
                this.generateSuperUltraName();
            });
        });
    }
    superAlert(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Hola',
                subHeader: '',
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    getPosts() {
        this.posts = Array();
        this.postService.getPosts().subscribe(data => {
            var posts;
            posts = data.body;
            console.log('posts', posts);
            posts.forEach(post => {
                var imgName = post.author.split(' ')[0].toLowerCase();
                imgName = imgName.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
                imgName = imgName + '.png';
                var thePost = new _models_post__WEBPACK_IMPORTED_MODULE_3__["Post"](post.id, post.title, post.comment, post.author, post.date);
                thePost.setImage(imgName);
                this.posts.push(thePost);
            });
        }, error => {
            console.log('error', error);
        });
    }
};
Tab2Page.ctorParameters = () => [
    { type: _services_api_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map