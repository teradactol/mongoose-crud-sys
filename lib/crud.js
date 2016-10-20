var
    create = require('./create'),
    read = require('./read'),
    update = require('./update'),
    _delete = require('./delete'),
    _gut = {}
;

_gut._create = create;
_gut._read = read;
_gut._update = update;
_gut._delete = _delete;

module.exports = _gut;
