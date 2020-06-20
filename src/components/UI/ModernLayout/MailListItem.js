"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _core = require("@material-ui/core");

var _CheckBox = _interopRequireDefault(require("@material-ui/icons/CheckBox"));

var _CheckBoxOutlineBlank = _interopRequireDefault(
  require("@material-ui/icons/CheckBoxOutlineBlank")
);

var _Star = _interopRequireDefault(require("@material-ui/icons/Star"));

var _StarBorder = _interopRequireDefault(
  require("@material-ui/icons/StarBorder")
);

var _DragIndicator = _interopRequireDefault(
  require("@material-ui/icons/DragIndicator")
);

var _LabelOutlined = _interopRequireDefault(
  require("@material-ui/icons/LabelOutlined")
);

var _Drafts = _interopRequireDefault(require("@material-ui/icons/Drafts"));

var _Archive = _interopRequireDefault(require("@material-ui/icons/Archive"));

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

var _WatchLater = _interopRequireDefault(
  require("@material-ui/icons/WatchLater")
);

var _Label = _interopRequireDefault(require("@material-ui/icons/Label"));

var _sized = require("@mui-treasury/styles/iconButton/sized");

var _row = require("@mui-treasury/styles/gutter/row");

var _grab = require("@mui-treasury/styles/icon/grab");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral([
    "\n  font-size: 12px;\n  flex-basis: 100px;\n  flex-shrink: 0;\n  padding-right: 16px;\n  text-align: right;\n",
  ]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  flex-grow: 1;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral([
    "\n  flex-basis: 200px;\n  flex-shrink: 0;\n\n  & > *:not(:first-child) {\n    font-size: 12px;\n    margin-left: 4px;\n  }\n",
  ]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral([
    "\n  -webkit-font-smoothing: antialiased;\n  font-size: 14px;\n  color: #5f6368;\n  min-width: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  b {\n    color: rgba(0, 0, 0, 0.87);\n  }\n",
  ]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral([
    "\n  height: 40px;\n  display: flex;\n  position: relative;\n  align-items: center;\n  box-shadow: inset 0 -1px 0 0 rgba(100, 121, 143, 0.122);\n  &.MailListItem-read {\n    background-color: rgba(242, 245, 245, 0.8);\n  }\n  &:hover {\n    box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0,\n      0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);\n    z-index: 1;\n    ",
    " {\n      opacity: 1;\n    }\n    ",
    " {\n      &:not(.MailListItem-checked):not(.starred):not(.MailListItem-labeled) {\n        color: rgba(0, 0, 0, 0.54);\n      }\n    }\n  }\n  ",
    " {\n    opacity: 0;\n    transition: 0.2s;\n  }\n",
  ]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([
    "\n  color: rgba(0, 0, 0, 0.2);\n  &:hover {\n    color: rgba(0, 0, 0, 0.87);\n  }\n  &.MailListItem-checked {\n    color: rgba(0, 0, 0, 0.87);\n  }\n  &.MailListItem-starred,\n  &.MailListItem-labeled {\n    color: #f8cb69;\n  }\n",
  ]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([
    "\n  color: rgba(0, 0, 0, 0.54);\n  &:hover {\n    color: #000;\n  }\n",
  ]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([
    "\n  color: rgba(0, 0, 0, 0.2);\n  align-self: center;\n",
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

var StyledDrag = (0, _styledComponents["default"])(_DragIndicator["default"])(
  _templateObject()
);
var StyledTooltip = (0, _core.withStyles)({
  tooltip: {
    backgroundColor: "rgba(0,0,0,0.72)",
    fontSize: 12,
    marginTop: 0,
  },
})(_core.Tooltip);
var Action = (0, _styledComponents["default"])(_core.IconButton)(
  _templateObject2()
);
var StyledIconButton = (0, _styledComponents["default"])(_core.IconButton)(
  _templateObject3()
);
var Div = (0, _styledComponents["default"])("div")(
  _templateObject4(),
  StyledDrag,
  StyledIconButton,
  StyledDrag
);
var Text = (0, _styledComponents["default"])("div")(_templateObject5());
var Title = (0, _styledComponents["default"])(Text)(_templateObject6());
var Description = (0, _styledComponents["default"])(Text)(_templateObject7());
var DateLabel = (0, _styledComponents["default"])(Text)(_templateObject8());

var MailListItem = function MailListItem(_ref) {
  var read = _ref.read,
    _ref$initialStarred = _ref.initialStarred,
    initialStarred =
      _ref$initialStarred === void 0 ? false : _ref$initialStarred,
    _ref$initialLabeled = _ref.initialLabeled,
    initialLabeled =
      _ref$initialLabeled === void 0 ? false : _ref$initialLabeled,
    title = _ref.title,
    description = _ref.description,
    date = _ref.date;
  var actionStyles = (0, _sized.useSizedIconButtonStyles)({
    childSize: 20,
    padding: 10,
  });
  var gutterStyles = (0, _row.useRowGutterStyles)({
    size: -10,
    before: -8,
  });
  var grabStyles = (0, _grab.useGrabIconStyles)();

  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    hovered = _React$useState2[0],
    setHovered = _React$useState2[1];

  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    checked = _React$useState4[0],
    setChecked = _React$useState4[1];

  var _React$useState5 = _react["default"].useState(initialStarred),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    starred = _React$useState6[0],
    setStarred = _React$useState6[1];

  var _React$useState7 = _react["default"].useState(initialLabeled),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    labeled = _React$useState8[0],
    setLabeled = _React$useState8[1];

  return /*#__PURE__*/ _react["default"].createElement(
    Div,
    {
      className: (0, _clsx["default"])(read && "MailListItem-read"),
      onMouseOver: function onMouseOver() {
        return setHovered(true);
      },
      onMouseLeave: function onMouseLeave() {
        return setHovered(false);
      },
    },
    /*#__PURE__*/ _react["default"].createElement(StyledDrag, {
      className: grabStyles.root,
    }),
    /*#__PURE__*/ _react["default"].createElement(
      _core.Box,
      {
        flexShrink: 0,
        className: gutterStyles.parent,
      },
      /*#__PURE__*/ _react["default"].createElement(
        StyledIconButton,
        {
          className: (0, _clsx["default"])(checked && "MailListItem-checked"),
          classes: actionStyles,
          onClick: function onClick() {
            return setChecked(!checked);
          },
        },
        checked
          ? /*#__PURE__*/ _react["default"].createElement(
              _CheckBox["default"],
              null
            )
          : /*#__PURE__*/ _react["default"].createElement(
              _CheckBoxOutlineBlank["default"],
              null
            )
      ),
      /*#__PURE__*/ _react["default"].createElement(
        StyledIconButton,
        {
          className: (0, _clsx["default"])(starred && "MailListItem-starred"),
          classes: actionStyles,
          onClick: function onClick() {
            return setStarred(!starred);
          },
        },
        starred
          ? /*#__PURE__*/ _react["default"].createElement(
              _Star["default"],
              null
            )
          : /*#__PURE__*/ _react["default"].createElement(
              _StarBorder["default"],
              null
            )
      ),
      /*#__PURE__*/ _react["default"].createElement(
        StyledIconButton,
        {
          className: (0, _clsx["default"])(labeled && "MailListItem-labeled"),
          classes: actionStyles,
          onClick: function onClick() {
            return setLabeled(!labeled);
          },
        },
        labeled
          ? /*#__PURE__*/ _react["default"].createElement(
              _Label["default"],
              null
            )
          : /*#__PURE__*/ _react["default"].createElement(
              _LabelOutlined["default"],
              null
            )
      )
    ),
    /*#__PURE__*/ _react["default"].createElement(Title, null, title),
    /*#__PURE__*/ _react["default"].createElement(
      Description,
      null,
      description
    ),
    hovered
      ? /*#__PURE__*/ _react["default"].createElement(
          _core.Box,
          {
            flexShrink: 0,
            ml: 1,
            mr: 0.5,
          },
          /*#__PURE__*/ _react["default"].createElement(
            StyledTooltip,
            {
              title: "Archived",
            },
            /*#__PURE__*/ _react["default"].createElement(
              Action,
              {
                classes: actionStyles,
              },
              /*#__PURE__*/ _react["default"].createElement(
                _Archive["default"],
                null
              )
            )
          ),
          /*#__PURE__*/ _react["default"].createElement(
            StyledTooltip,
            {
              title: "Delete",
            },
            /*#__PURE__*/ _react["default"].createElement(
              Action,
              {
                classes: actionStyles,
              },
              /*#__PURE__*/ _react["default"].createElement(
                _Delete["default"],
                null
              )
            )
          ),
          /*#__PURE__*/ _react["default"].createElement(
            StyledTooltip,
            {
              title: "Mark as read",
            },
            /*#__PURE__*/ _react["default"].createElement(
              Action,
              {
                classes: actionStyles,
              },
              /*#__PURE__*/ _react["default"].createElement(
                _Drafts["default"],
                null
              )
            )
          ),
          /*#__PURE__*/ _react["default"].createElement(
            StyledTooltip,
            {
              title: "Snooze",
            },
            /*#__PURE__*/ _react["default"].createElement(
              Action,
              {
                classes: actionStyles,
              },
              /*#__PURE__*/ _react["default"].createElement(
                _WatchLater["default"],
                null
              )
            )
          )
        )
      : /*#__PURE__*/ _react["default"].createElement(DateLabel, null, date)
  );
};

var _default = MailListItem;
exports["default"] = _default;
