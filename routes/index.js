'use strict';

const controller = require('../controllers/index')

module.exports = [
    {
        method: 'POST',
        path: '/api/upload',
        config: {
            payload: {
                maxBytes: 209715200,
                output: 'file',
                parse: true,
                // allow: 'multipart/form-data'
            }
        },
        handler: controller.upload
    }
]
