webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.2a03becbb13aecd5c4d2.hot-update.js.map