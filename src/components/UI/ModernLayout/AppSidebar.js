"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _layout = require("@mui-treasury/layout");

var _core = require("@material-ui/core");

var _gmail = _interopRequireDefault(
  require("@mui-treasury/components/button/gmail")
);

var _gmail2 = _interopRequireDefault(
  require("@mui-treasury/components/sidebarItem/gmail")
);

var _collapsible = _interopRequireDefault(
  require("@mui-treasury/components/menu/collapsible")
);

var _Inbox = _interopRequireDefault(require("@material-ui/icons/Inbox"));

var _Star = _interopRequireDefault(require("@material-ui/icons/Star"));

var _InsertDriveFile = _interopRequireDefault(
  require("@material-ui/icons/InsertDriveFile")
);

var _People = _interopRequireDefault(require("@material-ui/icons/People"));

var _Info = _interopRequireDefault(require("@material-ui/icons/Info"));

var _KeyboardArrowDown = _interopRequireDefault(
  require("@material-ui/icons/KeyboardArrowDown")
);

var _KeyboardArrowUp = _interopRequireDefault(
  require("@material-ui/icons/KeyboardArrowUp")
);

var _ModeComment = _interopRequireDefault(
  require("@material-ui/icons/ModeComment")
);

var _Schedule = _interopRequireDefault(require("@material-ui/icons/Schedule"));

var _Mail = _interopRequireDefault(require("@material-ui/icons/Mail"));

var _Report = _interopRequireDefault(require("@material-ui/icons/Report"));

var _Settings = _interopRequireDefault(require("@material-ui/icons/Settings"));

var _Videocam = _interopRequireDefault(require("@material-ui/icons/Videocam"));

var _Keyboard = _interopRequireDefault(require("@material-ui/icons/Keyboard"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
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

var SidebarContent = (0, _layout.getSidebarContent)(
  _styledComponents["default"]
);

var AppSidebar = function AppSidebar() {
  var _React$useState = _react["default"].useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    index = _React$useState2[0],
    setIndex = _React$useState2[1];

  var _useSidebarCtx = (0, _layout.useSidebarCtx)(),
    expanded = _useSidebarCtx.expanded;

  var _useSidebarCollapse = (0, _layout.useSidebarCollapse)(),
    state = _useSidebarCollapse.state;

  var collapsed = !expanded && state.collapsed;

  var commonProps = function commonProps(i) {
    return {
      collapsed: collapsed,
      selected: i === index,
      onClick: function onClick() {
        setIndex(i);
      },
      dotOnCollapsed: true,
    };
  };

  return /*#__PURE__*/ _react["default"].createElement(
    _core.Box,
    {
      display: "flex",
      flexGrow: 1,
      flexDirection: "column",
      boxShadow:
        expanded &&
        "0 16px 10px 0 rgba(0,0,0,0.34), 0 11px 18px 0 rgba(0,0,0,0.12), 0 13px 5px -1px rgba(0,0,0,0.2)",
    },
    /*#__PURE__*/ _react["default"].createElement(
      _core.Box,
      {
        mt: 2,
        mb: collapsed ? 1 : 2,
        pl: 1,
      },
      /*#__PURE__*/ _react["default"].createElement(_gmail["default"], {
        collapsed: collapsed,
      })
    ),
    /*#__PURE__*/ _react["default"].createElement(
      SidebarContent,
      null,
      /*#__PURE__*/ _react["default"].createElement(
        _core.Box,
        {
          maxWidth: 240,
        },
        /*#__PURE__*/ _react["default"].createElement(
          _core.List,
          null,
          /*#__PURE__*/ _react["default"].createElement(
            _gmail2["default"],
            _extends(
              {
                color: "#da3125",
                startIcon: /*#__PURE__*/ _react["default"].createElement(
                  _Inbox["default"],
                  null
                ),
                label: "Inbox",
                amount: "1,198",
              },
              commonProps(0),
              {
                dotOnCollapsed: false,
              }
            )
          ),
          /*#__PURE__*/ _react["default"].createElement(
            _gmail2["default"],
            _extends(
              {
                startIcon: /*#__PURE__*/ _react["default"].createElement(
                  _Star["default"],
                  null
                ),
                label: "Starred",
              },
              commonProps(1)
            )
          ),
          /*#__PURE__*/ _react["default"].createElement(
            _gmail2["default"],
            _extends(
              {
                startIcon: /*#__PURE__*/ _react["default"].createElement(
                  _InsertDriveFile["default"],
                  null
                ),
                label: /*#__PURE__*/ _react["default"].createElement(
                  "b",
                  null,
                  "Drafts"
                ),
                amount: "5",
              },
              commonProps(2)
            )
          ),
          /*#__PURE__*/ _react["default"].createElement(
            _gmail2["default"],
            _extends(
              {
                color: "#1a73e8",
                startIcon: /*#__PURE__*/ _react["default"].createElement(
                  _People["default"],
                  null
                ),
                label: /*#__PURE__*/ _react["default"].createElement(
                  "b",
                  null,
                  "Social"
                ),
              },
              commonProps(3)
            )
          ),
          /*#__PURE__*/ _react["default"].createElement(
            _gmail2["default"],
            _extends(
              {
                color: "#e37400",
                startIcon: /*#__PURE__*/ _react["default"].createElement(
                  _Info["default"],
                  null
                ),
                label: "Updates",
              },
              commonProps(4)
            )
          ),
          /*#__PURE__*/ _react["default"].createElement(
            _collapsible["default"],
            {
              renderToggle: function renderToggle(_ref) {
                var menuCollapsed = _ref.collapsed,
                  onClick = _ref.onClick;
                return /*#__PURE__*/ _react["default"].createElement(
                  _gmail2["default"],
                  {
                    startIcon: menuCollapsed
                      ? /*#__PURE__*/ _react["default"].createElement(
                          _KeyboardArrowUp["default"],
                          null
                        )
                      : /*#__PURE__*/ _react["default"].createElement(
                          _KeyboardArrowDown["default"],
                          null
                        ),
                    label: collapsed ? "" : menuCollapsed ? "Less" : "More",
                    onClick: onClick,
                  }
                );
              },
            },
            /*#__PURE__*/ _react["default"].createElement(
              _gmail2["default"],
              _extends(
                {
                  startIcon: /*#__PURE__*/ _react["default"].createElement(
                    _ModeComment["default"],
                    null
                  ),
                  label: "Chats",
                },
                commonProps(5)
              )
            ),
            /*#__PURE__*/ _react["default"].createElement(
              _gmail2["default"],
              _extends(
                {
                  startIcon: /*#__PURE__*/ _react["default"].createElement(
                    _Schedule["default"],
                    null
                  ),
                  label: "Scheduled",
                },
                commonProps(6)
              )
            ),
            /*#__PURE__*/ _react["default"].createElement(
              _gmail2["default"],
              _extends(
                {
                  startIcon: /*#__PURE__*/ _react["default"].createElement(
                    _Mail["default"],
                    null
                  ),
                  label: "All Mail",
                },
                commonProps(7)
              )
            ),
            /*#__PURE__*/ _react["default"].createElement(
              _gmail2["default"],
              _extends(
                {
                  startIcon: /*#__PURE__*/ _react["default"].createElement(
                    _Report["default"],
                    null
                  ),
                  label: "Spam",
                  amount: "52",
                },
                commonProps(8)
              )
            ),
            /*#__PURE__*/ _react["default"].createElement(
              _gmail2["default"],
              _extends(
                {
                  startIcon: /*#__PURE__*/ _react["default"].createElement(
                    _Settings["default"],
                    null
                  ),
                  label: "Manage Labels",
                },
                commonProps(9)
              )
            )
          )
        )
      )
    ),
    /*#__PURE__*/ _react["default"].createElement(_core.Divider, null),
    /*#__PURE__*/ _react["default"].createElement(
      _core.Box,
      {
        maxWidth: 240,
        pb: 3,
        pt: 1.5,
      },
      /*#__PURE__*/ _react["default"].createElement(
        _core.List,
        {
          subheader:
            !collapsed &&
            /*#__PURE__*/ _react["default"].createElement(
              _core.Box,
              {
                ml: "26px",
                mr: "12px",
                mb: 1,
              },
              /*#__PURE__*/ _react["default"].createElement("b", null, "Meet"),
              " ",
              /*#__PURE__*/ _react["default"].createElement(
                _core.Box,
                {
                  ml: 0.5,
                  display: "inline-flex",
                  px: 0.5,
                  bgcolor: "#1a73e8",
                  color: "#fff",
                  fontSize: "0.75rem",
                  borderRadius: 4,
                },
                "New"
              )
            ),
        },
        /*#__PURE__*/ _react["default"].createElement(
          _gmail2["default"],
          _extends(
            {
              startIcon: /*#__PURE__*/ _react["default"].createElement(
                _Videocam["default"],
                null
              ),
              label: "Start a meeting",
            },
            commonProps(10)
          )
        ),
        /*#__PURE__*/ _react["default"].createElement(
          _gmail2["default"],
          _extends(
            {
              startIcon: /*#__PURE__*/ _react["default"].createElement(
                _Keyboard["default"],
                null
              ),
              label: "Join a meeting",
            },
            commonProps(11)
          )
        )
      )
    )
  );
};

var _default = AppSidebar;
exports["default"] = _default;
