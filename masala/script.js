var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery.default)(document).ready(function () {
  var i = [1, 2, 3].map(function (n) {
    return Math.pow(n, 2);
  });
  console.log(i);
});
