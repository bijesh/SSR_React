"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _App = _interopRequireDefault(require("./App"));

var _posts = _interopRequireDefault(require("./posts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _posts.default)().then(function (posts) {
  (0, _reactDom.render)(_react.default.createElement(_App.default, {
    posts: posts
  }), document.querySelector('#root'));
});