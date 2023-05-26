"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHtttp = void 0;
const express_1 = require("express");
const handleHtttp = (resp, error, ErrorRaw) => {
    express_1.response.status(500);
    express_1.response.send({ error: error });
};
exports.handleHtttp = handleHtttp;
