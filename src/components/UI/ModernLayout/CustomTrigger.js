"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _core = require("@material-ui/core");

var _layout = require("@mui-treasury/layout");

var _KeyboardArrowRight = _interopRequireDefault(
  require("@material-ui/icons/KeyboardArrowRight")
);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _templateObject() {
  var data = _taggedTemplateLiteral([
    "\n  position: fixed;\n  z-index: 1300;\n  right: 8px;\n  bottom: 0.5rem;\n  padding: 10px;\n\n  svg {\n    transition: 0.3s;\n  }\n\n  &.CustomTrigger-closed {\n    transition: 0.3s;\n    box-shadow: 0 1px 1px 0 rgba(60, 64, 67, 0.3),\n      0 1px 3px 1px rgba(60, 64, 67, 0.15);\n    border-radius: 40px;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    right: -10px;\n    background-color: #fff;\n\n    &:hover {\n      background-color: #f1f3f4;\n      right: 0;\n      padding-right: 18px;\n      svg {\n        margin-left: 0;\n      }\n    }\n\n    svg {\n      transform: rotate(180deg);\n      margin-left: -6px;\n    }\n  }\n",
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
}

var StyledIconButton = (0, _styledComponents["default"])(_core.IconButton)(
  _templateObject()
);

var CustomTrigger = function CustomTrigger() {
  var _useSidebarTrigger = (0, _layout.useSidebarTrigger)("secondarySidebar"),
    state = _useSidebarTrigger.state,
    setOpen = _useSidebarTrigger.setOpen;

  return /*#__PURE__*/ _react["default"].createElement(
    StyledIconButton,
    {
      className: (0, _clsx["default"])(!state.open && "CustomTrigger-closed"),
      onClick: function onClick() {
        return setOpen("secondarySidebar", !state.open);
      },
    },
    /*#__PURE__*/ _react["default"].createElement(
      _KeyboardArrowRight["default"],
      {
        fontSize: "small",
      }
    )
  );
};

var _default = CustomTrigger;
exports["default"] = _default;
