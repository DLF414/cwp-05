let _articles = require("../articles.json");
let seed = 0;
const articles = exports;

articles.readAll = function (req, res, payload, cb) {
    cb(null, _articles);
};

articles.read = function (req, res, payload, cb) {
    let index = _articles.findIndex(article => article.id === payload.id);

    if (index !== -1) {
        cb(null, _articles[index]);
    }
    else {
        cb({code: 405, message: 'Article not found'});
    }
};

articles.create = function (req, res, payload, cb) {
    payload.id = Date.now() + seed;
    _articles.push(payload);
    cb(null, payload);
};

articles.update = function (req, res, payload, cb) {
    let index = _articles.findIndex(article => article.id === payload.id);

    if (index !== -1) {
        _articles[index] = payload;
        cb(null, payload);
    }
    else {
        cb({code: 405, message: 'Article not found'});
    }
};

articles.delete = function (req, res, payload, cb) {
    let index = _articles.findIndex(article => article.id === payload.id);

    if (index !== -1) {
        _articles.splice(index, 1);
        cb(null, _articles);
    }
    else {
        cb({code: 405, message: 'Article not found'});
    }
};