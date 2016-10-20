var
    Promise = require('bluebird'),
    async = require('async'),
    _gut = {}
;

_gut.defn = function (_opts) {
    return new Promise(function (resolve, reject) {
        var opts = _opts || {},
            _rsrc = opts["_rsrc_"],
            rsrc = new _rsrc(),
            res = { status:"success"};

        delete opts["_rsrc_"];

        var keys = Object.keys(opts);
        async.each(keys,function(key,key_cb){
            rsrc[key] = opts[key];
            key_cb();
        },function(err){
            rsrc.save(function(err){
                if(err)
                    return reject(err);
                return resolve(rsrc);
            })
        });
    });
};

module.exports = _gut.defn;
