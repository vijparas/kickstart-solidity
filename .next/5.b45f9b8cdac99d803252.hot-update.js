webpackHotUpdate(5,{

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _factory = __webpack_require__(494);

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\blockchain\\workspace\\kickstart-solidity\\pages\\index.js?entry';


var ShowCampaigns = function (_Component) {
  (0, _inherits3.default)(ShowCampaigns, _Component);

  function ShowCampaigns() {
    (0, _classCallCheck3.default)(this, ShowCampaigns);

    return (0, _possibleConstructorReturn3.default)(this, (ShowCampaigns.__proto__ || (0, _getPrototypeOf2.default)(ShowCampaigns)).apply(this, arguments));
  }

  (0, _createClass3.default)(ShowCampaigns, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, this.props.campaigns[2]);
    }
  }], [{
    key: 'getInitialProps',

    //next doesnot execute componentDidMount function on server side
    // async componentDidMount(){
    //
    //  //console.log(campaigns);
    // }
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var campaigns;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeoloyedCampaigns().call();

              case 2:
                campaigns = _context.sent;
                return _context.abrupt('return', { campaigns: campaigns });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ShowCampaigns;
}(_react.Component);

exports.default = ShowCampaigns;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJTaG93Q2FtcGFpZ25zIiwicHJvcHMiLCJjYW1wYWlnbnMiLCJtZXRob2RzIiwiZ2V0RGVvbG95ZWRDYW1wYWlnbnMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBTyxBQUFZOzs7Ozs7Ozs7SSxBQUNiOzs7Ozs7Ozs7Ozs2QkFVSSxBQUNOOzZCQUFPLGNBQUE7O29CQUFBO3NCQUFBLEFBQU07QUFBTjtBQUFBLE9BQUEsT0FBTSxBQUFLLE1BQUwsQUFBVyxVQUF4QixBQUFPLEFBQU0sQUFBcUIsQUFDbkM7OztTQVhEOztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O3VCQUU2QixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUIsQUFBaEIsQUFBdUM7O21CQUF6RDtBO2lEQUNDLEVBQUMsVyxBQUFELEFBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFSRyxBLEFBYzVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L2Jsb2NrY2hhaW4vd29ya3NwYWNlL2tpY2tzdGFydC1zb2xpZGl0eSJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "D:\\blockchain\\workspace\\kickstart-solidity\\pages\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\blockchain\\workspace\\kickstart-solidity\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5iNDVmOWI4Y2RhYzk5ZDgwMzI1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NmU5MGEzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tJy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xyXG5jbGFzcyBTaG93Q2FtcGFpZ25zIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gIC8vbmV4dCBkb2Vzbm90IGV4ZWN1dGUgY29tcG9uZW50RGlkTW91bnQgZnVuY3Rpb24gb24gc2VydmVyIHNpZGVcclxuICAvLyBhc3luYyBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gIC8vXHJcbiAgLy8gIC8vY29uc29sZS5sb2coY2FtcGFpZ25zKTtcclxuICAvLyB9XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpe1xyXG4gICAgICAgY29uc3QgY2FtcGFpZ25zID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlb2xveWVkQ2FtcGFpZ25zKCkuY2FsbCgpO1xyXG4gICAgICAgcmV0dXJuIHtjYW1wYWlnbnM6Y2FtcGFpZ25zfTtcclxuICB9XHJcbiAgcmVuZGVyKCl7XHJcbiAgICByZXR1cm4gPGRpdj57dGhpcy5wcm9wcy5jYW1wYWlnbnNbMl19PC9kaXY+O1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTaG93Q2FtcGFpZ25zO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFWQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBREE7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9