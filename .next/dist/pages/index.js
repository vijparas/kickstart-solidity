'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\blockchain\\workspace\\kickstart-solidity\\pages\\index.js?entry';


var ShowCampaigns = function (_Component) {
  (0, _inherits3.default)(ShowCampaigns, _Component);

  function ShowCampaigns() {
    (0, _classCallCheck3.default)(this, ShowCampaigns);

    return (0, _possibleConstructorReturn3.default)(this, (ShowCampaigns.__proto__ || (0, _getPrototypeOf2.default)(ShowCampaigns)).apply(this, arguments));
  }

  (0, _createClass3.default)(ShowCampaigns, [{
    key: 'renderCampaigns',
    value: function renderCampaigns() {

      var campaigns = this.props.campaigns.map(function (address) {
        return {
          header: address,
          description: _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          }, 'View Campaign'),
          fluid: true
        };
      });
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: campaigns, __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, this.renderCampaigns());
      // return <div>{this.renderCampaigns()}</div>;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJDYXJkIiwiU2hvd0NhbXBhaWducyIsImNhbXBhaWducyIsInByb3BzIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJyZW5kZXJDYW1wYWlnbnMiLCJtZXRob2RzIiwiZ2V0RGVvbG95ZWRDYW1wYWlnbnMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVE7Ozs7Ozs7SUFDRixBOzs7Ozs7Ozs7OztzQ0FVYSxBQUVmOztVQUFNLGlCQUFVLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSSxtQkFBUyxBQUNoRDs7a0JBQU8sQUFDRSxBQUNQO3VDQUFZLGNBQUE7O3dCQUFBOzBCQUFBO0FBQUE7QUFBQSxXQUFBLEVBRlAsQUFFTyxBQUNaO2lCQUhGLEFBQU8sQUFHQyxBQUVUO0FBTFEsQUFDTDtBQUZKLEFBQWdCLEFBT2hCLE9BUGdCOzJDQU9ULEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7NkJBRUQsQUFDTjs2QkFBTyxjQUFBOztvQkFBQTtzQkFBQSxBQUFNO0FBQU47QUFBQSxPQUFBLE9BQVAsQUFBTyxBQUFNLEFBQUssQUFDbEI7QUFDRDs7O1NBdkJEOztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O3VCQUU2QixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUJBQWhCLEEsQUFBdUM7O21CQUF6RDtBO2lEQUNDLEVBQUMsV0FBRCxBQUFXLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFSRyxBLEFBMEI1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9ibG9ja2NoYWluL3dvcmtzcGFjZS9raWNrc3RhcnQtc29saWRpdHkifQ==