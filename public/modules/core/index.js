'use strict';

ApplicationConfiguration.registerModule('core'); // jshint ignore:line

require('./js/config/core.locales.js'); // jshint ignore:line
require('./js/config/core.menu.js'); // jshint ignore:line
require('./js/config/core.route.js'); // jshint ignore:line
require('./js/controllers/core.controller.js'); // jshint ignore:line
require('./js/controllers/nav.controller.js'); // jshint ignore:line
require('./js/controllers/footer.controller.js'); // jshint ignore:line
require('./js/services/core.service.js'); // jshint ignore:line
require('./js/services/scrollToElement.service.js'); // jshint ignore:line
require('./js/services/menus.service.js'); // jshint ignore:line
require('./js/directives/core.directive.js'); // jshint ignore:line
require('./js/controllers/about.controller.js');  // jshint ignore:line
require('./js/controllers/bios.controller.js');  // jshint ignore:line
require('./js/controllers/gallery.controller.js');  // jshint ignore:line
require('./js/controllers/volunteer.controller.js');  // jshint ignore:line