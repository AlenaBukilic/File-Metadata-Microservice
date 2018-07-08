'use strict';

exports.upload = async (req, res) => {
    const file = req.payload.file;
    const data = req.payload;
    console.log(data);
    return await data;
}