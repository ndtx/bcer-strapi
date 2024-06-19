'use strict';

/**
 * comunicat service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::comunicat.comunicat');
