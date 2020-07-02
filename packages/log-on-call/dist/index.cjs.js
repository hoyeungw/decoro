'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var says = require('@palett/says');
var deco = require('@spare/deco');
var decoVector = require('@spare/deco-vector');
var enumBrackets = require('@spare/enum-brackets');
var enumChars = require('@spare/enum-chars');
var enumDataTypes = require('@typen/enum-data-types');
var timestampPretty = require('@valjoux/timestamp-pretty');

const LOGGER = 'logger';
const decoArgs = decoVector.Deco({
  bracket: enumBrackets.NONE,
  delim: enumChars.SP
});
/**
 *
 * @param {string|Object} [p]
 * @param {string} [p.caller]
 * @param {boolean} [p.showArgs]
 * @param {boolean} [p.showReturn]
 * @return Function
 */

const LogOnCall = p => {
  if (typeof p === enumDataTypes.OBJ) {
    if (!p.caller) p.caller = LOGGER;
  } else {
    p = {
      caller: typeof p === enumDataTypes.STR ? p : String(p),
      outcome: false,
      showArgs: false
    };
  }

  return logOnCall.bind(p);
};
const VALUE = 'value',
      GET = 'get',
      METHOD = 'method',
      PROPERTY = 'property';
function logOnCall(context) {
  // ({ ...context }) |> delogger
  const config = this;
  const {
    key,
    descriptor
  } = context;

  if (VALUE in descriptor) {
    descriptor.value = wrapLogger.call(config, METHOD, key, descriptor.value);
  }

  if (GET in descriptor) {
    descriptor.get = wrapLogger.call(config, PROPERTY, key, descriptor.get);
  }

  return context;
}

function wrapLogger(kind, key, callable) {
  const {
    caller,
    showArgs,
    showReturn
  } = this !== null && this !== void 0 ? this : {};
  return function () {
    var _instance$constructor, _info;

    const instance = this,
          className = instance === null || instance === void 0 ? void 0 : (_instance$constructor = instance.constructor) === null || _instance$constructor === void 0 ? void 0 : _instance$constructor.name,
          callee = className ? says.ros(className) + '.' + says.ros(key) : says.ros(key),
          result = callable.apply(instance, arguments);
    let info = 'calling ' + says.ros(kind) + ' ' + callee;
    if (showArgs && kind === METHOD) info += '(' + decoArgs(Array.from(arguments)) + ')';
    if (showReturn) info += ' = ' + deco.deco(result);
    _info = info, says.says[caller !== null && caller !== void 0 ? caller : LOGGER].p(timestampPretty.time())(_info);
    return result;
  };
}

exports.LogOnCall = LogOnCall;
