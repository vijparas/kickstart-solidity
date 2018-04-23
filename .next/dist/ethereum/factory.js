'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var campaignFactoryInstance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), '0x5039a58461942c2a1C2eA505De88d2809DB119Cd');
exports.default = campaignFactoryInstance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxmYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbkZhY3RvcnkiLCJjYW1wYWlnbkZhY3RvcnlJbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBNEIsQUFBNUI7Ozs7OztBQUNBLElBQU0sMEJBQXlCLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUN2QixLQUFLLEFBQUwsTUFBVywwQkFBZ0IsQUFBM0IsQUFEdUIsWUFFdkIsQUFGdUIsQUFBL0IsQUFJQTtrQkFBZSxBQUFmIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiRDovYmxvY2tjaGFpbi93b3Jrc3BhY2Uva2lja3N0YXJ0LXNvbGlkaXR5In0=