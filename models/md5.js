/**
 * Created by Yangwang on 2017/5/26 10:05.
 */
var crypto = require("crypto");
module.exports = function(mingma){
    var md5 = crypto.createHash('md5');
    var password = md5.update(mingma).digest('base64');
    return password;
}