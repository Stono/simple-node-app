/*
 * simple-node-app
 * https://github.com/kstoney/simple-node-app
 *
 * Copyright (c) 2017 Karl Stoney
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function() {
  let self = {};
  self.execute = function() {
    return 'awesome';
  };

  return Object.freeze(self);
};
