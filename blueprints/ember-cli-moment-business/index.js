'use strict';

module.exports = {
  description: ''

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('moment-business');
  }
};
