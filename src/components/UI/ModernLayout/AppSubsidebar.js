"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _sized = require("@mui-treasury/styles/iconButton/sized");

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var AppSubSidebar = function AppSubSidebar() {
  var actionStyles = (0, _sized.useSizedIconButtonStyles)({
    childSize: 20,
    padding: 10,
  });
  return /*#__PURE__*/ _react["default"].createElement(
    _core.Box,
    {
      p: 1,
    },
    /*#__PURE__*/ _react["default"].createElement(
      _core.Grid,
      {
        container: true,
        spacing: 2,
      },
      /*#__PURE__*/ _react["default"].createElement(
        _core.Grid,
        {
          item: true,
        },
        /*#__PURE__*/ _react["default"].createElement(
          _core.IconButton,
          {
            classes: actionStyles,
          },
          /*#__PURE__*/ _react["default"].createElement(_core.Avatar, {
            src:
              "https://www.gstatic.com/companion/icon_assets/calendar_2x.png",
          })
        )
      ),
      /*#__PURE__*/ _react["default"].createElement(
        _core.Grid,
        {
          item: true,
        },
        /*#__PURE__*/ _react["default"].createElement(
          _core.IconButton,
          {
            classes: actionStyles,
          },
          /*#__PURE__*/ _react["default"].createElement(_core.Avatar, {
            src: "https://www.gstatic.com/companion/icon_assets/keep_2x.png",
          })
        )
      ),
      /*#__PURE__*/ _react["default"].createElement(
        _core.Grid,
        {
          item: true,
        },
        /*#__PURE__*/ _react["default"].createElement(
          _core.IconButton,
          {
            classes: actionStyles,
          },
          /*#__PURE__*/ _react["default"].createElement(_core.Avatar, {
            src: "https://www.gstatic.com/companion/icon_assets/tasks2_2x.png",
          })
        )
      ),
      /*#__PURE__*/ _react["default"].createElement(_core.Box, {
        borderTop: "1px solid #dadce0",
        my: 2,
        mx: "auto",
        width: 20,
      }),
      /*#__PURE__*/ _react["default"].createElement(
        _core.Grid,
        {
          item: true,
        },
        /*#__PURE__*/ _react["default"].createElement(
          _core.IconButton,
          {
            classes: actionStyles,
          },
          /*#__PURE__*/ _react["default"].createElement(_Add["default"], null)
        )
      )
    )
  );
};

var _default = AppSubSidebar;
exports["default"] = _default;
