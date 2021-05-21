window.Util = {

    //获取区间随机值
    randomNum(Min, Max) {
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
    random(Min, Max) {
        if (Max < Min) {
            Max = Min;
        }
        return Math.random() * (Max - Min + 1) + Min;
    },


    remove(arr, b) {
        let a = arr.indexOf(b);
        if (a >= 0) {
            arr.splice(a, 1);
            return true;
        }
        return false;
    },
};
Date.prototype.Format = function (fmt) { //author: meizz 
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
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}