var
    Promise = require('bluebird'),
    _gut = {}
;

_gut.defn = function (_opts) {
    return new Promise(function (resolve, reject) {

        var opts = _opts || {},
            _rsrc = opts["_rsrc_"];

        delete opts["_rsrc_"];

        _rsrc.remove(opts,function(err){
            if(err)
                return reject(err);
            return resolve();
        });
    });
};

module.exports = _gut.defn;