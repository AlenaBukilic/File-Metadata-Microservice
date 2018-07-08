'use strict';

const Hapi = require('hapi');
const Inert = require('inert');

const server = Hapi.server({
    host:'localhost',
    port: 8000
});

async function start() {

    await server.register(Inert);

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: 'public',
                index: ['index.html']
            }
        }
    });
    server.route(searchRoutes);

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();