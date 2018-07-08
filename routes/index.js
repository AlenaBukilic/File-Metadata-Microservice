'use strict';

const controller = require('../controllers/index')

module.exports = [
    {
        method: 'POST',
        path: 'api/upload',
        handler: controller.upload
    }
]
