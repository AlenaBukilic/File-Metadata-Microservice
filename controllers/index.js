'use strict';

exports.upload = (req) => {

    const data = {
        name: req.payload.fileUp.filename,
        type: req.payload.fileUp.headers["content-type"],
        size: req.payload.fileUp.bytes
    }
    return data;
}