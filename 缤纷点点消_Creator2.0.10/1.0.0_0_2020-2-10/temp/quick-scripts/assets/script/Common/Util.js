(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/Common/Util.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a7d2ct7aI1AR785+NwLTIcO', 'Util', __filename);
// script/Common/Util.js

"use strict";

window.Util = {

    //获取区间随机值
    randomNum: function randomNum(Min, Max) {
        if (Max < Min) {
            Max = Min;
        }
        return Math.floor(Math.random() * (Max - Min + 1) + Min);

        var Range = Max - Min;
        var Rand = Math.random();
        var num = Min + Math.floor(Rand * Range);
        return num;
    },


    //获取区间随机值
    random: function random(Min, Max) {
        if (Max < Min) {
            Max = Min;
        }
        return Math.random() * (Max - Min + 1) + Min;
    },
    remove: function remove(arr, b) {
        var a = arr.indexOf(b);
        if (a >= 0) {
            arr.splice(a, 1);
            return true;
        }
        return false;
    }
};
Date.prototype.Format = function (fmt) {
    //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "H+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }return fmt;
};

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Util.js.map
        