'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src\\App.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import logo from './logo.svg';
//import './App.css';

let logo = '';

class App extends _react.Component {
  render() {
    debugger;
    return _react2.default.createElement(
      'div',
      { className: 'App', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      },
      _react2.default.createElement(
        'div',
        { className: 'App-header', __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        },
        _react2.default.createElement('img', { src: logo, className: 'App-logo', alt: 'logo', __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }),
        _react2.default.createElement(
          'h2',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: this
          },
          'Welcome to React'
        )
      ),
      _react2.default.createElement(
        'p',
        { className: 'App-intro', __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        },
        'To get started, edit ',
        _react2.default.createElement(
          'code',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            },
            __self: this
          },
          'src/App.js'
        ),
        ' and save to reload.'
      )
    );
  }
}

exports.default = App;
//# sourceMappingURL=App.js.map