/* global getEnvSetting: true */

/** Tries to an environment variable. If none, then checks Meteor settings.
 *  @param {String} varName - Name of the variable
 *  @param {Boolean} [parseJSON=false] - If true, parses string values as JSON.
 *    Only applies to environment variables and not Meteor settings.
 *  @returns - Value of the variable
 */
getEnvSetting = function(varName, parseJSON) {
  'use strict';

  var ret = process.env[varName];
  if (ret && parseJSON && _.isString(ret)) {
    ret = JSON.parse(ret);
  }

  else if (typeof ret === 'undefined') {
    ret = Meteor.settings[varName];
  }

  return ret;
};