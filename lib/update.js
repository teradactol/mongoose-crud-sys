var
    Promise = require('bluebird'),
    _gut = {}
;

_gut.defn = function (_opts) {
    return new Promise(function (resolve, reject) {

        var opts = _opts || {},
            update = JSON.parse(opts["_update_"]) || {},
            _rsrc = opts["_rsrc_"];

        delete opts["_rsrc_"];
        delete opts["_update_"];

        _rsrc.update(opts,update,{"multi":true},function(err,raw){
            if(err)
                return reject(err);
            return resolve(raw);
        });
    });
};

module.exports = _gut.defn;