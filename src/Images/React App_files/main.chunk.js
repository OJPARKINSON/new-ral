(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "*{margin: 0;box-sizing: inherit;line-height: 1.5;padding:0;font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;}\n/* home */\n.image-gallery {\n    width: 70%;\n    margin: 0 auto;\n}\n/* Shop */\n.nav-wrapper {\n    display: block;\n    background-color: #444;\n    height: 4vw;\n    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);\n}\n.container {\n    width: 70%;\n    margin: 0 auto;\n    margin-bottom: 3vw;\n}\n.brand-logo {\n    display: inline-block;\n    color: white;\n    font-size: 2.1rem;\n    text-decoration: none;\n    -webkit-tap-highlight-color: transparent;\n    height: 100%;\n    line-height: 3.5vw;\n}\n.subLinks {\n    text-decoration: none;\n    padding-left: 0;\n    list-style-type: none;\n    float: right;\n}\n.subLinks li {\n    transition: background-color .3s;\n    float: left;\n    line-height: 4vw;\n    margin: 0 1vw;\n}\n.subLinks li a {\n    transition: background-color .3s;\n    font-size: 1.3vw;\n    color: #fff;\n    text-decoration: none;\n    display: block;\n    padding: .9vw .7vw 0 .7vw;\n    cursor: pointer;\n}\n.homeTitle {\n    margin: 0 auto;\n    text-align: center;\n    font-size: 2vw;\n    margin: 2vw 0;\n}\n.box{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 4vw;\n}\n.card {\n    display: block;\n    width: 100%;\n    margin: 0 auto;\n    background-color: #fff;\n    transition: box-shadow .25s;\n    border-radius: 2px;\n    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);\n}\n.cardImage {\n    width: 100%;\n    margin: 0 auto;\n    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);\n}\n.cardTitle {\n    box-sizing: inherit;\n    mix-blend-mode: black;\n    font-size: 1.5vw;\n    font-weight: 400;\n    max-width: 100%;\n    padding: 0 1vw;\n}\n.card-content {\n    padding: 1vw!important;\n}\n.addBtn i {\n    float: right;\n    height: 2vw; \n    width: 2vw;\n    text-align: center;\n    margin-right: 1vw;\n    background: red;\n    border-radius: 50%;\n    font-size: 2vw;\n    line-height: .9;\n    cursor: pointer;\n    box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);\n}\n.addBtn i:active ,.btn:active {\n    box-shadow: none;\n}\n\n\n/* Cart */\nh5 {\n    font-size: 1.64rem;\n    line-height: 110%;\n    margin: 1.0933333333rem 0 .656rem 0;\n    font-weight: 400;\n}\n.collection {\n    padding-left: 0;\n    list-style-type: none;\n    margin: .5rem 0 1rem 0;\n    border: 1px solid #e0e0e0;\n    border-radius: 2px;\n    overflow: hidden;\n    position: relative;\n}\n.collection-item {\n    min-height: 84px;\n    padding-left: 72px;\n    position: relative;\n    border-bottom: none;\n    display: flex;\n    background-color: #fff;\n    line-height: 1.5rem;\n    padding: 10px 20px;\n    margin: 0;\n}\n.item-img img {\n    list-style-type: none;\n    width: 150px;\n    margin-right: 25px;\n}\na i {\n    border: solid black;\n    border-width: 0 3px 3px 0;\n    display: inline-block;\n    padding: 3px;\n}\n.Up {\n    transform: rotate(-135deg);\n    -webkit-transform: rotate(-135deg);\n    margin-right: .5vw;\n}\n.Down {\n    line-height: 100;\n    transform: rotate(45deg);\n    -webkit-transform: rotate(45deg);\n}\n.waves-effect {\n    position: relative;\n    cursor: pointer;\n    display: inline-block;\n    overflow: hidden;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n    -webkit-tap-highlight-color: transparent;\n    vertical-align: middle;\n    z-index: 1;\n    transition: .3s ease-out;\n}\n.btn {\n    text-decoration: none;\n    color: #fff;\n    background-color: #26a69a;\n    text-align: center;\n    letter-spacing: .5px;\n    transition: background-color .2s ease-out;\n    cursor: pointer;\n    background-color: #e91e63 !important;\n    border: none;\n    border-radius: 2px;\n    display: inline-block;\n    height: 36px;\n    line-height: 36px;\n    padding: 0 16px;\n    text-transform: uppercase;\n    vertical-align: middle;\n    -webkit-tap-highlight-color: transparent;\n    font-size: 14px;\n    outline: 0;\n    box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);\n}\n.emptyText {\n    text-align: center;\n    padding: 2vw 0;\n    font-size: 1.2vw;\n    font-weight: 700;\n}\n/* Accordan */\n\n.acordian {\n    width: 75%;\n    margin: 0 auto;\n    margin-top: 3vw;\n}", ""]);



/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar */ "./src/components/navbar.js");
/* harmony import */ var _Shop_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Shop.js */ "./src/Shop.js");
/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Cart */ "./src/components/Cart.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Home */ "./src/Home.js");
/* harmony import */ var _FAQ_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FAQ.js */ "./src/FAQ.js");
var _jsxFileName = "/Users/ollie/Desktop/new-ray/shopping-cart/src/App.js";








class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "App",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/",
      component: _Home__WEBPACK_IMPORTED_MODULE_5__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/shop",
      component: _Shop_js__WEBPACK_IMPORTED_MODULE_3__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/cart",
      component: _components_Cart__WEBPACK_IMPORTED_MODULE_4__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/FAQ",
      component: _FAQ_js__WEBPACK_IMPORTED_MODULE_6__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/FAQ.js":
/*!********************!*\
  !*** ./src/FAQ.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ "./node_modules/react-accessible-accordion/dist/fancy-example.css");
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-accessible-accordion */ "./node_modules/react-accessible-accordion/dist/umd/index.js");
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/ollie/Desktop/new-ray/shopping-cart/src/FAQ.js";





class FAQ extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__["Accordion"], {
      className: "acordian",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionItemHeading"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionItemButton"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "Questions 1 - When can you place orders?")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionItemPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "24/7 but online online for collection / delivery before 10am must be ordered before 4pm the day before the delivery or colection."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionItemHeading"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionItemButton"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Question 2 - Where do we deliver to?")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionItemPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "Within 15 miles of Selby."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionItemHeading"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionItemButton"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "Question 3 -  What bread do we use?")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionItemPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "White, Brown, Garnary, Toasty."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionItemHeading"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionItemButton"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "Question 4 -  What coffee beans do we use?")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionItemPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "Black Ivory Coffee."))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])()(FAQ));

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image-gallery */ "./node_modules/react-image-gallery/build/image-gallery.js");
/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-image-gallery/styles/css/image-gallery.css */ "./node_modules/react-image-gallery/styles/css/image-gallery.css");
/* harmony import */ var react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/ollie/Desktop/new-ray/shopping-cart/src/Home.js";





class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.handleClick = id => {
      this.props.addToCart(id);
    };
  }

  render() {
    const images = [{
      original: 'https://www.simplyrecipes.com/wp-content/uploads/2013/04/green-eggs-ham-sandwich-horiz-a-1800.jpg'
    }, {
      original: 'https://www.sickchirpse.com/wp-content/uploads/2017/08/Bacon-Sarnie.jpg'
    }, {
      original: 'https://www.saltandlavender.com/wp-content/uploads/2016/09/salmonsandwich2.jpg'
    }];
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_image_gallery__WEBPACK_IMPORTED_MODULE_2___default.a, {
      showThumbnails: false,
      showPlayButton: false,
      items: images,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])()(Home));

/***/ }),

/***/ "./src/Images/Item1.jpg":
/*!******************************!*\
  !*** ./src/Images/Item1.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Item1.e6fcb96b.jpg";

/***/ }),

/***/ "./src/Images/Item2.jpg":
/*!******************************!*\
  !*** ./src/Images/Item2.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Item2.7c61a69b.jpg";

/***/ }),

/***/ "./src/Images/Item3.jpg":
/*!******************************!*\
  !*** ./src/Images/Item3.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Item3.9200cb90.jpg";

/***/ }),

/***/ "./src/Images/Item4.jpg":
/*!******************************!*\
  !*** ./src/Images/Item4.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Item4.ec260b7b.jpg";

/***/ }),

/***/ "./src/Images/Item5.jpg":
/*!******************************!*\
  !*** ./src/Images/Item5.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Item5.2d7f9308.jpg";

/***/ }),

/***/ "./src/Images/Item6.jpg":
/*!******************************!*\
  !*** ./src/Images/Item6.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Item6.de5ffe3d.jpg";

/***/ }),

/***/ "./src/Shop.js":
/*!*********************!*\
  !*** ./src/Shop.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_actions_cartActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/actions/cartActions */ "./src/components/actions/cartActions.js");
var _jsxFileName = "/Users/ollie/Desktop/new-ray/shopping-cart/src/Shop.js";




class Shop extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.handleClick = id => {
      this.props.addToCart(id);
    };
  }

  render() {
    let itemList = this.props.items.map(item => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card",
        key: item.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "cardImage",
        src: item.img,
        alt: item.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "cardTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        to: "/",
        className: "addBtn",
        onClick: () => {
          this.handleClick(item.id);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "+")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, item.desc), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Price: \xA3", item.price))));
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "homeTitle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Our items"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, itemList));
  }

}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(Object(_components_actions_cartActions__WEBPACK_IMPORTED_MODULE_2__["addToCart"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Shop));

/***/ }),

/***/ "./src/components/Cart.js":
/*!********************************!*\
  !*** ./src/components/Cart.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _actions_cartActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions/cartActions */ "./src/components/actions/cartActions.js");
/* harmony import */ var _Recipe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Recipe.js */ "./src/components/Recipe.js");
var _jsxFileName = "/Users/ollie/Desktop/new-ray/shopping-cart/src/components/Cart.js";






class Cart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.handleRemove = id => {
      this.props.removeItem(id);
    };

    this.handleAddQuantity = id => {
      this.props.addQuantity(id);
    };

    this.handleSubtractQuantity = id => {
      this.props.subtractQuantity(id);
    };

    this.handleEmptyBasket = id => {
      this.props.emptyBasket(id);
    };
  }

  render() {
    let addedItems = this.props.items.length ? this.props.items.map(item => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "collection-item",
        key: item.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: item.img,
        alt: item.img,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, item.desc), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Price: \xA3", item.price)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Quantity: ", item.quantity)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "add-remove",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "Up",
        onClick: () => {
          this.handleAddQuantity(item.id);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "Down",
        onClick: () => {
          this.handleSubtractQuantity(item.id);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "waves-effect btn",
        onClick: () => {
          this.handleRemove(item.id);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Remove")));
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "emptyText",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "Your basket is empty.");
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "You have ordered:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "collection",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, addedItems)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Recipe_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }));
  }

}

const mapStateToProps = state => {
  return {
    items: state.addedItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => {
      dispatch(Object(_actions_cartActions__WEBPACK_IMPORTED_MODULE_3__["removeItem"])(id));
    },
    addQuantity: id => {
      dispatch(Object(_actions_cartActions__WEBPACK_IMPORTED_MODULE_3__["addQuantity"])(id));
    },
    subtractQuantity: id => {
      dispatch(Object(_actions_cartActions__WEBPACK_IMPORTED_MODULE_3__["subtractQuantity"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Cart));

/***/ }),

/***/ "./src/components/Recipe.js":
/*!**********************************!*\
  !*** ./src/components/Recipe.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/ollie/Desktop/new-ray/shopping-cart/src/components/Recipe.js";

 // import { fromString } from 'long';
//import { addShipping } from './actions/cartActions'

class Recipe extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.handleChecked = e => {
      if (e.target.checked) {
        this.props.addShipping();
      } else {
        this.props.substractShipping();
      }
    };

    this.state = {
      firstName: "",
      lastName: "",
      notes: ""
    };
    this.handleText = this.handleText.bind(this);
  }

  componentWillUnmount() {
    if (this.refs.shipping.checked) {
      this.props.substractShipping();
    }
  }

  handleText(event) {
    this.props.information();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "collection",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "checkoutBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      ref: "shipping",
      onChange: this.handleChecked,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Shipping(+6$)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "checkoutPrice",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Total: ", this.props.total, " $")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      onChange: this.handleText,
      type: "text",
      name: "firstName",
      placeholder: "First Name",
      value: this.setState.firstName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      onChange: this.handleText,
      type: "text",
      name: "lastName",
      placeholder: "Last Name",
      value: this.state.lastName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      onChange: this.handleText,
      type: "text",
      name: "notes",
      placeholder: "Notes",
      value: this.state.notes,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "checkout",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "waves-effect waves-light btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Checkout")));
  }

}

const mapStateToProps = state => {
  return {
    addedItems: state.addedItems,
    total: state.total
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addShipping: () => {
      dispatch({
        type: 'ADD_SHIPPING'
      });
    },
    substractShipping: () => {
      dispatch({
        type: 'SUB_SHIPPING'
      });
    },
    information: () => {
      dispatch({
        type: 'ADD_INFO'
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Recipe));

/***/ }),

/***/ "./src/components/actions/action-types/cart-actions.js":
/*!*************************************************************!*\
  !*** ./src/components/actions/action-types/cart-actions.js ***!
  \*************************************************************/
/*! exports provided: ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM", function() { return REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUB_QUANTITY", function() { return SUB_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUANTITY", function() { return ADD_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SHIPPING", function() { return ADD_SHIPPING; });
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_ITEM = 'REMOVE_ITEM';
const SUB_QUANTITY = 'SUB_QUANTITY';
const ADD_QUANTITY = 'ADD_QUANTITY';
const ADD_SHIPPING = 'ADD_SHIPPING';

/***/ }),

/***/ "./src/components/actions/cartActions.js":
/*!***********************************************!*\
  !*** ./src/components/actions/cartActions.js ***!
  \***********************************************/
/*! exports provided: addToCart, removeItem, subtractQuantity, addQuantity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return removeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtractQuantity", function() { return subtractQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addQuantity", function() { return addQuantity; });
/* harmony import */ var _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types/cart-actions */ "./src/components/actions/action-types/cart-actions.js");
 //add cart action

const addToCart = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_CART"],
    id
  };
}; //remove item action

const removeItem = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_ITEM"],
    id
  };
}; //subtract qt action

const subtractQuantity = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["SUB_QUANTITY"],
    id
  };
}; //add qt action

const addQuantity = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_QUANTITY"],
    id
  };
};

/***/ }),

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/ollie/Desktop/new-ray/shopping-cart/src/components/navbar.js";



const Navbar = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "nav-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/",
    className: "brand-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "Mia's Sandwiches"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "subLinks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/shop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Shop")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "My cart")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/faq",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "FAQ")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/reducers/cartReducer.js":
/*!************************************************!*\
  !*** ./src/components/reducers/cartReducer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ollie_Desktop_new_ray_shopping_cart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Images_Item1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Images/Item1.jpg */ "./src/Images/Item1.jpg");
/* harmony import */ var _Images_Item1_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Images_Item1_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Images_Item2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Images/Item2.jpg */ "./src/Images/Item2.jpg");
/* harmony import */ var _Images_Item2_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Images_Item2_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Images_Item3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Images/Item3.jpg */ "./src/Images/Item3.jpg");
/* harmony import */ var _Images_Item3_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Images_Item3_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Images_Item4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Images/Item4.jpg */ "./src/Images/Item4.jpg");
/* harmony import */ var _Images_Item4_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Images_Item4_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Images_Item5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Images/Item5.jpg */ "./src/Images/Item5.jpg");
/* harmony import */ var _Images_Item5_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Images_Item5_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Images_Item6_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Images/Item6.jpg */ "./src/Images/Item6.jpg");
/* harmony import */ var _Images_Item6_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Images_Item6_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/action-types/cart-actions */ "./src/components/actions/action-types/cart-actions.js");








const initState = {
  items: [{
    id: 1,
    title: 'Egg, Tomato and Letuce',
    desc: "Hole grain bread containing a fried egg, sliced tomatto and letuce",
    price: 3,
    img: _Images_Item1_jpg__WEBPACK_IMPORTED_MODULE_1___default.a
  }, {
    id: 2,
    title: 'Ham, Egg and Letuce',
    desc: "Toasted bread holiding a fried egg, ham and letuce",
    price: 3,
    img: _Images_Item2_jpg__WEBPACK_IMPORTED_MODULE_2___default.a
  }, {
    id: 3,
    title: 'Bacon',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    price: 3,
    img: _Images_Item3_jpg__WEBPACK_IMPORTED_MODULE_3___default.a
  }, {
    id: 4,
    title: 'BLT',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    price: 3,
    img: _Images_Item4_jpg__WEBPACK_IMPORTED_MODULE_4___default.a
  }, {
    id: 5,
    title: 'Tuna',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    price: 3,
    img: _Images_Item5_jpg__WEBPACK_IMPORTED_MODULE_5___default.a
  }, {
    id: 6,
    title: 'Salmon',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    price: 4,
    img: _Images_Item6_jpg__WEBPACK_IMPORTED_MODULE_6___default.a
  }],
  addedItems: [],
  total: 0
};

const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_7__["ADD_TO_CART"]) {
    let addedItem = state.items.find(item => item.id === action.id); //check if the action id exists in the addedItems

    let existed_item = state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += 1;
      return Object(_Users_ollie_Desktop_new_ray_shopping_cart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        total: state.total + addedItem.price
      });
    } else {
      addedItem.quantity = 1; //calculating the total

      let newTotal = state.total + addedItem.price;
      return Object(_Users_ollie_Desktop_new_ray_shopping_cart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_7__["REMOVE_ITEM"]) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id); //calculating the total

    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return Object(_Users_ollie_Desktop_new_ray_shopping_cart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
      addedItems: new_items,
      total: newTotal
    });
  } //INSIDE CART COMPONENT


  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_7__["ADD_QUANTITY"]) {
    let addedItem = state.items.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return Object(_Users_ollie_Desktop_new_ray_shopping_cart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
      total: newTotal
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_7__["SUB_QUANTITY"]) {
    let addedItem = state.items.find(item => item.id === action.id); //if the qt == 0 then it should be removed

    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return Object(_Users_ollie_Desktop_new_ray_shopping_cart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        addedItems: new_items,
        total: newTotal
      });
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return Object(_Users_ollie_Desktop_new_ray_shopping_cart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_7__["ADD_SHIPPING"]) {
    return Object(_Users_ollie_Desktop_new_ray_shopping_cart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
      total: state.total + 6
    });
  }

  if (action.type === 'SUB_SHIPPING') {
    return Object(_Users_ollie_Desktop_new_ray_shopping_cart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
      total: state.total - 6
    });
  }

  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (cartReducer);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_reducers_cartReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/reducers/cartReducer */ "./src/components/reducers/cartReducer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var _jsxFileName = "/Users/ollie/Desktop/new-ray/shopping-cart/src/index.js";







const store = Object(redux__WEBPACK_IMPORTED_MODULE_6__["createStore"])(_components_reducers_cartReducer__WEBPACK_IMPORTED_MODULE_4__["default"]);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
  store: store,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
})), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/ollie/Desktop/new-ray/shopping-cart/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/ollie/Desktop/new-ray/shopping-cart/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map