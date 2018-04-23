'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;
if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
  //we are in the browser and user is runnign metamask.
  //console.log("test");
  web3 = new _web2.default(window.web3.currentProvider);
} else {

  // we are on the server or user is not running metamask

  var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/SfKo0rixhccsqkUN3qF8');
  web3 = new _web2.default(provider);
}
exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7Ozs7O0FBRUEsSUFBSSxZQUFKO0FBQ0EsSUFBRyxPQUFPLEFBQVAsV0FBaUIsQUFBakIsZUFBK0IsT0FBTyxBQUFQLFNBQWMsQUFBaEQsYUFBNkQsQUFDM0Q7QUFDRTtBQUNDO1NBQU8sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQVAsQUFDSjtBQUpELE9BS0ksQUFFRjs7QUFFQTs7TUFBTSxXQUFTLElBQUksY0FBSyxBQUFMLFVBQWUsQUFBbkIsYUFDYixBQURhLEFBQWYsQUFHQTtTQUFLLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQUwsQUFDRDtBQUNEO2tCQUFlLEFBQWYiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiJEOi9ibG9ja2NoYWluL3dvcmtzcGFjZS9raWNrc3RhcnQtc29saWRpdHkifQ==