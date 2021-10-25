"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledButton = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var StyledButton = _styledComponents["default"].button(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  box-sizing: border-box;\n  height: 60px;\n  width: 100%;\n  min-width: 200px;\n  cursor: pointer;\n  transition: 0.3s all ease-out;\n  position: relative;\n  background: transparent;\n  color: #fff;\n  border: none;\n  display: block;\n  z-index: 100;\n  padding: 10px;\n\n  ::before {\n    content: '';\n    width: 94%;\n    height: 40px;\n    border-radius: 25px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    border: 1px solid #fff;\n    background: ", ";\n    transition: 0.2s all ease-out;\n    transform: scale(1);\n    opacity: 1;\n    z-index: -1;\n    margin: 10px 5px;\n    box-sizing: border-box;\n  }\n  ::after {\n    content: '';\n    width: 94%;\n    height: 40px;\n    border-radius: 25px;\n    background: ", ";\n    position: absolute;\n    top: 0;\n    left: 0;\n    transform: scale(0);\n    opacity: 0;\n    transition: 0.2s all ease-out;\n    z-index: -1;\n    margin: 10px 5px;\n    box-sizing: border-box;\n  }\n\n  :hover {\n    ::before {\n      transform: scale(0);\n      opacity: 0;\n    }\n    ::after {\n      transform: scale(1);\n      opacity: 1;\n    }\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.sidebarListBackground;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.newSpaceButtonHover;
});

exports.StyledButton = StyledButton;