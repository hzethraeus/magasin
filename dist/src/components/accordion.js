"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _accordionModule = _interopRequireDefault(require("./accordion.module.css"));

var _singleacc = _interopRequireDefault(require("./singleacc.js"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Accordion = function Accordion() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: _accordionModule.default.accordion,
      children: AccordionData.map(function (accObject) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_singleacc.default, {
            title: accObject.title,
            content: accObject.content
          })
        }, accObject.id);
      })
    })
  });
};

var AccordionData = [{
  id: 1,
  title: "Title 1",
  content: "Lorem Ipsum"
}, {
  id: 2,
  title: "Title 2",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit lorem sit amet vehicula euismod."
}, {
  id: 3,
  title: "Title 3",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum nibh at tincidunt lobortis. Mauris vel ligula et massa tristique tincidunt at eget arcu. Nunc augue dolor, varius non mollis sed, porttitor non turpis."
}];
var _default = Accordion;
exports.default = _default;

//# sourceMappingURL=accordion.js.map