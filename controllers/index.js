'use strict';

exports.upload = async (req, res) => {

    const data = {
        name: req.payload.fileUp.filename,
        type: req.payload.fileUp.headers["content-type"],
        size: req.payload.fileUp.bytes
    }
    return await data;
}