'use strict';

const controller = require('../controllers/index')

module.exports = [
    {
        method: 'POST',
        path: '/api/upload',
        config: {
            payload: {
                output: 'stream',
                parse: true,
                allow: 'multipart/form-data'
            }
        },
        handler: controller.upload
    }
]
