"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var useTextStyles = (0, _core.makeStyles)({
  root: {
    fontSize: 12,
    color: "#666",
  },
});

var AppFooter = function AppFooter() {
  var classes = useTextStyles();
  return /*#__PURE__*/ _react["default"].createElement(
    _core.Box,
    {
      px: "1rem",
      my: "1rem",
    },
    /*#__PURE__*/ _react["default"].createElement(
      _core.Grid,
      {
        container: true,
      },
      /*#__PURE__*/ _react["default"].createElement(
        _core.Grid,
        {
          item: true,
          xs: 12,
          sm: 4,
        },
        /*#__PURE__*/ _react["default"].createElement(
          _core.Typography,
          {
            classes: classes,
          },
          "47.43 GB (47%) of 100 GB used"
        ),
        /*#__PURE__*/ _react["default"].createElement(
          _core.Link,
          {
            classes: classes,
          },
          "Manage"
        )
      ),
      /*#__PURE__*/ _react["default"].createElement(
        _core.Grid,
        {
          item: true,
          xs: 12,
          sm: 4,
        },
        /*#__PURE__*/ _react["default"].createElement(
          _core.Box,
          {
            textAlign: "center",
            color: "#666",
          },
          /*#__PURE__*/ _react["default"].createElement(
            _core.Link,
            {
              classes: classes,
            },
            "Terms"
          ),
          " \u2022",
          " ",
          /*#__PURE__*/ _react["default"].createElement(
            _core.Link,
            {
              classes: classes,
            },
            "Privacy"
          ),
          " \u2022",
          " ",
          /*#__PURE__*/ _react["default"].createElement(
            _core.Link,
            {
              classes: classes,
            },
            "Program Policies"
          )
        )
      ),
      /*#__PURE__*/ _react["default"].createElement(
        _core.Grid,
        {
          item: true,
          xs: 12,
          sm: 4,
        },
        /*#__PURE__*/ _react["default"].createElement(
          _core.Box,
          {
            textAlign: "right",
          },
          /*#__PURE__*/ _react["default"].createElement(
            _core.Typography,
            {
              classes: classes,
            },
            "Last account activity: 22 minutes ago"
          ),
          /*#__PURE__*/ _react["default"].createElement(
            _core.Link,
            {
              classes: classes,
            },
            "Details"
          )
        )
      )
    )
  );
};

var _default = AppFooter;
exports["default"] = _default;
