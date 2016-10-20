var
    Promise = require('bluebird'),
    _gut = {}
;

_gut.defn = function (_opts) {
    return new Promise(function (resolve, reject) {

        var opts = _opts || {},
            limit = parseInt(opts["_limit_"]) || 10,
            page = parseInt(opts["_page_"]) || 1,
            fields = opts["_fields_"] || "",
            _rsrc = opts["_rsrc_"],
            rsrc = new _rsrc(),
            res = {};

            delete opts["_rsrc_"];
            delete opts["_limit_"];
            delete opts["_page_"];
            delete opts["_fields_"];

            _rsrc.count(opts,function(err,record_count){
                var max_pages = Math.ceil(record_count/limit);
                _rsrc.find(opts,fields,{skip:((page-1)*limit),limit:limit},function(err,results){
                    res["data"] = results;
                    res["records"] = record_count;
                    res["pages"] = max_pages;
                    res["page"] = page;
                    return resolve(res);
                });

            });
    });
};

module.exports = _gut.defn;