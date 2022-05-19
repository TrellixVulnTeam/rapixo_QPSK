"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _md = require("react-icons/md");

require("./ReactFaqsComponent.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const FAQS = props => {
  const [expandFAQ, setExpandFAQ] = (0, _react.useState)(null);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.data.faqs.map((faq, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "faq-section"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "faq",
      style: {
        backgroundColor: props.data.backgroundColor
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "faq-heading"
    }, /*#__PURE__*/_react.default.createElement("span", {
      style: {
        color: props.data.titleColor
      }
    }, faq.question), expandFAQ === index ? /*#__PURE__*/_react.default.createElement(_md.MdRemove, {
      onClick: () => setExpandFAQ(null),
      className: "faq-icon",
      size: 30,
      style: {
        color: props.data.iconColor
      }
    }) : /*#__PURE__*/_react.default.createElement(_md.MdAdd, {
      onClick: () => setExpandFAQ(index),
      className: "faq-icon",
      size: 30,
      style: {
        color: props.data.iconColor
      }
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: expandFAQ === index ? "show show-faq-2" : "hide"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: expandFAQ === index ? "show-faq-text" : "hide-faq-text",
      style: {
        color: props.data.answerColor
      }
    }, faq.answer))));
  }));
};

var _default = FAQS;
exports.default = _default;