"use strict";
cc._RF.push(module, '311edJmX/ZC967t7v105RMj', 'PolySDK');
// script/PolySDK.js

"use strict";

/**
 * 聚合SDK 配置中心
 */
var poly_sdk_config = {

    // 平台 id 
    sdk_key_tt: "tt", //头条
    sdk_key_qq: "qq", //QQ
    sdk_key_vivo: "vivo", // vivo
    sdk_key_xiaomi: "xiaomi", // 小米
    sdk_key_baidu: "baidu", //百度
    sdk_key_oppo: "oppo", //oppo
    sdk_key_weixin: "weixin", //微信
    sdk_key_jikewan: "jikewan", //即刻玩
    sdk_key_qtt: "qtt", //趣头条
    sdk_key_4399: "4399", //4399
    sdk_key_ios: "ios", //ios
    sdk_key_android: "android", //android
    sdk_key_wangmai: "wangmai", //旺脉
    sdk_key_juzhang: "juzhang", //巨掌

    //当前运行得 平台
    runSDK: "tt",

    // 后台配置参数 游戏ID
    game_id: 105, //【登陆参数   参考：小游戏登录接口文档】

    appid: "",

    shareTitle: "这关太难了",
    shareImgUrl: "",

    userLoginUrl: "https://xcx.api.chenxinghuyu.com/game/login",
    failLoginUrl: "https://xcx.api.chenxinghuyu.com/game/faillogin",
    videopushUrl: "https://xcx.api.chenxinghuyu.com/game/videopush",
    bannerpushUrl: "https://xcx.api.chenxinghuyu.com/game/bannerpush",
    screenimgUrl: "https://xcx.api.chenxinghuyu.com/game/screenimg",

    userLoginData: {
        session_key: null,
        open_id: null, //渠道uid
        display_id: null //平台内的id   "000000"为 游客模式
    },

    default_video_id: "000000", // 视频   id  默认值  如果该渠道没有 videoid   则 使用该 默认值
    default_banner_id: "000000", // banner id  默认值  如果该渠道没有 banner_id 则 使用该 默认值

    HTTPtoken: "fdsfwe45teadfet8adf3TdgD8",

    //fail_code  错误代码  网络错误 : 7400   ,  用户拒绝  : 7401  ， 未知错误 : 7402
    failCode: {
        netErr: 7400,
        userRefusedTo: 7401,
        unknown: 7402
    },
    /**
     *  avatarUrl	string	用户头像
        nickName	string	用户名
        gender	    number	用户性别，0: 未知；1:男性；2:女性
        age         string	用户年龄
        city	    string	用户城市
        province	string	用户省份
        country	    string	用户国家
        language	string	用户语言，
        openid	    string	用户的openid，可作为用户的唯一标识。
        id	        string	用户的user id，可能为空。
        unionid	    string	用户在开放平台上的唯一标示符，可能为空。
        location    string  用户位置信息
        constellation string 用户星座信息
        phoneNum    string  用户手机号
      */

    localStorageUserkeys: ['display_id', 'avatarUrl', 'nickName', 'gender', 'age', 'city', 'province', 'country', 'language', 'unionid', 'id', 'openid', "location", "constellation", "phoneNum"],

    tt: {
        banner_id: "",
        video_id: [],
        type: 10 //【登陆参数 固定 不需要修改】
    },

    weixin: {
        banner_id: "",
        video_id: [],
        type: 0 //【登陆参数 固定 不需要修改】
    },

    qq: {
        banner_id: "",
        video_id: [],
        type: 13 //【登陆参数 固定 不需要修改】
    },
    xiaomi: {
        banner_id: "",
        video_id: [],
        type: 12 //【登陆参数 固定 不需要修改】
    },
    baidu: {
        banner_id: "",
        video_id: [],
        appSid: '', // 【广告参数】白青藤 应用管理 ID
        type: 7 //【登陆参数 固定 不需要修改】
    },
    vivo: {
        banner_id: "",
        video_id: [],
        native_id: [],
        type: 5 //【登陆参数 固定 不需要修改】
    },
    oppo: {
        banner_id: "",
        video_id: [],
        AppID: "", // 【广告参数   传对应AppID参数】
        type: 6 //【登陆参数 固定 不需要修改】
    },
    jikewan: {
        banner_id: "",
        banner_adId: "",
        screenOrientation: "", // 【视频 广告参数】   1、横屏；2、竖屏
        video_adId: [], // 【视频 广告参数】
        video_id: [],
        type: 9 //【登陆参数 固定 不需要修改】
    },
    ios: {
        banner_id: "", //banner 广告id 
        video_id: [], //所有得 激励视频 id
        interface_path: "", // ios 接口 路径
        type: 16 //【登陆参数 固定 不需要修改】
    },
    android: {
        banner_id: "", //banner 广告id  
        video_id: [], //所有得 激励视频 id
        interface_path: "", // 安卓 接口 路径  例：interface_path:"com/vivigames/scmj/WXAPI"
        type: 15 //【登陆参数 固定 不需要修改】
    },
    wangmai: {
        type: 17 //【登陆参数 固定 不需要修改】
    },
    juzhang: {
        clientId: '95',
        clientSecret: '4cce432ccabc74a81eb21cb981088deef087522b',
        adType: { //广告类型 【固定 不需要修改】
            banner_Ad: "1", //Banner广告
            openS_Ad: "2", //开屏广告
            vertical_Ad: "3", //激励视频竖屏
            horizontal_Ad: "4", //激励视频横屏
            allS_vertical_Ad: "5", //全屏视频竖屏  
            allS_horizontal_Ad: "6", //全屏视频横屏
            insert_Ad: "7" //插屏广告
        },
        type: 18 //【登陆参数 固定 不需要修改】
    }
};

var Tools = function () {
    var instance;
    var Tools = function Tools() {
        if (instance) {
            return instance;
        }

        this.sendRequest = function (path, data, handler) {
            if (typeof cc == "undefined") {
                throw new Error("cc is undefined 请检查当前运行环境 是否是 CocosCreator");
            }
            var xhr = cc.loader.getXMLHttpRequest();
            xhr.timeout = 5000;
            var str = "?";
            for (var k in data) {
                if (str != "?") {
                    str += "&";
                }
                str += k + "=" + data[k];
            }
            var requestURL = path + encodeURI(str);
            console.log("RequestURL:" + requestURL);
            xhr.open("GET", requestURL, true);
            if (cc.sys.isNative) {
                xhr.setRequestHeader("Access-Control-Allow-Origin", "Accept-Encoding", "gzip,deflate", "text/html;charset=UTF-8");
            }

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
                    console.log("http res(" + xhr.responseText.length + "):" + xhr.responseText);
                    try {
                        var ret = JSON.parse(xhr.responseText);
                        handler && handler(ret); /* code */
                    } catch (e) {
                        console.log("onreadystatechange 1 err = " + e);
                        handler && handler(null);
                        throw new Error(e);
                        //handler(null);
                    }
                }
            };

            xhr.onerror = function (e) {
                handler && handler(null);
            };

            xhr.send();
            return xhr;
        };

        /**
         *  1，  hex_md5(value)
              2，  b64_md5(value)
              3，  str_md5(value)
              4，  hex_hmac_md5(key, data)
              5，  b64_hmac_md5(key, data)
              6，  str_hmac_md5(key, data)
         */
        this.crypto = function () {
            var hexcase = 0; /* hex output format. 0 - lowercase; 1 - uppercase        */
            var b64pad = ""; /* base-64 pad character. "=" for strict RFC compliance   */
            var chrsz = 8; /* bits per input character. 8 - ASCII; 16 - Unicode      */

            /*
            * These are the functions you'll usually want to call
            * They take string arguments and return either hex or base-64 encoded strings
            */
            function hex_md5(s) {
                return binl2hex(core_md5(str2binl(s), s.length * chrsz));
            }
            function b64_md5(s) {
                return binl2b64(core_md5(str2binl(s), s.length * chrsz));
            }
            function str_md5(s) {
                return binl2str(core_md5(str2binl(s), s.length * chrsz));
            }
            function hex_hmac_md5(key, data) {
                return binl2hex(core_hmac_md5(key, data));
            }
            function b64_hmac_md5(key, data) {
                return binl2b64(core_hmac_md5(key, data));
            }
            function str_hmac_md5(key, data) {
                return binl2str(core_hmac_md5(key, data));
            }

            /*
            * Perform a simple self-test to see if the VM is working
            */
            function md5_vm_test() {
                return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
            }

            /*
            * Calculate the MD5 of an array of little-endian words, and a bit length
            */
            function core_md5(x, len) {
                /* append padding */
                x[len >> 5] |= 0x80 << len % 32;
                x[(len + 64 >>> 9 << 4) + 14] = len;

                var a = 1732584193;
                var b = -271733879;
                var c = -1732584194;
                var d = 271733878;

                for (var i = 0; i < x.length; i += 16) {
                    var olda = a;
                    var oldb = b;
                    var oldc = c;
                    var oldd = d;

                    a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
                    d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
                    c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
                    b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
                    a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
                    d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
                    c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
                    b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
                    a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
                    d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
                    c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
                    b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
                    a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
                    d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
                    c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
                    b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

                    a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
                    d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
                    c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
                    b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
                    a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
                    d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
                    c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
                    b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
                    a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
                    d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
                    c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
                    b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
                    a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
                    d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
                    c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
                    b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

                    a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
                    d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
                    c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
                    b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
                    a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
                    d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
                    c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
                    b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
                    a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
                    d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
                    c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
                    b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
                    a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
                    d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
                    c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
                    b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

                    a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
                    d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
                    c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
                    b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
                    a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
                    d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
                    c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
                    b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
                    a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
                    d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
                    c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
                    b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
                    a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
                    d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
                    c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
                    b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

                    a = safe_add(a, olda);
                    b = safe_add(b, oldb);
                    c = safe_add(c, oldc);
                    d = safe_add(d, oldd);
                }
                return Array(a, b, c, d);
            }

            /*
            * These functions implement the four basic operations the algorithm uses.
            */
            function md5_cmn(q, a, b, x, s, t) {
                return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
            }
            function md5_ff(a, b, c, d, x, s, t) {
                return md5_cmn(b & c | ~b & d, a, b, x, s, t);
            }
            function md5_gg(a, b, c, d, x, s, t) {
                return md5_cmn(b & d | c & ~d, a, b, x, s, t);
            }
            function md5_hh(a, b, c, d, x, s, t) {
                return md5_cmn(b ^ c ^ d, a, b, x, s, t);
            }
            function md5_ii(a, b, c, d, x, s, t) {
                return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
            }

            /*
            * Calculate the HMAC-MD5, of a key and some data
            */
            function core_hmac_md5(key, data) {
                var bkey = str2binl(key);
                if (bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);

                var ipad = Array(16),
                    opad = Array(16);
                for (var i = 0; i < 16; i++) {
                    ipad[i] = bkey[i] ^ 0x36363636;
                    opad[i] = bkey[i] ^ 0x5C5C5C5C;
                }

                var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
                return core_md5(opad.concat(hash), 512 + 128);
            }

            /*
            * Add integers, wrapping at 2^32. This uses 16-bit operations internally
            * to work around bugs in some JS interpreters.
            */
            function safe_add(x, y) {
                var lsw = (x & 0xFFFF) + (y & 0xFFFF);
                var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
                return msw << 16 | lsw & 0xFFFF;
            }

            /*
            * Bitwise rotate a 32-bit number to the left.
            */
            function bit_rol(num, cnt) {
                return num << cnt | num >>> 32 - cnt;
            }

            /*
            * Convert a string to an array of little-endian words
            * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
            */
            function str2binl(str) {
                var bin = Array();
                var mask = (1 << chrsz) - 1;
                for (var i = 0; i < str.length * chrsz; i += chrsz) {
                    bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << i % 32;
                }return bin;
            }

            /*
            * Convert an array of little-endian words to a string
            */
            function binl2str(bin) {
                var str = "";
                var mask = (1 << chrsz) - 1;
                for (var i = 0; i < bin.length * 32; i += chrsz) {
                    str += String.fromCharCode(bin[i >> 5] >>> i % 32 & mask);
                }return str;
            }

            /*
            * Convert an array of little-endian words to a hex string.
            */
            function binl2hex(binarray) {
                var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
                var str = "";
                for (var i = 0; i < binarray.length * 4; i++) {
                    str += hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 + 4 & 0xF) + hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 & 0xF);
                }
                return str;
            }

            /*
            * Convert an array of little-endian words to a base-64 string
            */
            function binl2b64(binarray) {
                var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                var str = "";
                for (var i = 0; i < binarray.length * 4; i += 3) {
                    var triplet = (binarray[i >> 2] >> 8 * (i % 4) & 0xFF) << 16 | (binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4) & 0xFF) << 8 | binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4) & 0xFF;
                    for (var j = 0; j < 4; j++) {
                        if (i * 8 + j * 6 > binarray.length * 32) str += b64pad;else str += tab.charAt(triplet >> 6 * (3 - j) & 0x3F);
                    }
                }
                return str;
            }

            return {
                hex_md5: hex_md5,
                b64_md5: b64_md5,
                str_md5: str_md5,
                hex_hmac_md5: hex_hmac_md5,
                b64_hmac_md5: b64_hmac_md5,
                str_hmac_md5: str_hmac_md5
            };
        };
    };
    return Tools;
}();

var tools = new Tools();
/**
 * 登陆聚合
 * 
 * login(args,callback)
 */
var LoginAuth = function () {
    var instance;
    var LoginAuth = function LoginAuth() {
        if (instance) {
            return instance;
        }
        this._vivo_islogin = false;
        this._xiaomi_islogin = false;
        this._baidu_islogin = false;
        this._oppo_islogin = false;
        this._tt_islogin = false;
        this._qq_islogin = false;
        this._weixin_islogin = false;
        this._default_islogin = false;
        this._wangmai_islogin = false;
        this.login = function (args, callback) {
            console.log("LoginAuth start runSDK = " + poly_sdk_config.runSDK + "  args =" + args);
            switch (poly_sdk_config.runSDK) {
                case poly_sdk_config.sdk_key_qq:
                    if (typeof qq == "undefined") {
                        console.log("QQ qq is undefined");
                        return;
                    }
                    this.qq_login(args, callback);
                    break;
                case poly_sdk_config.sdk_key_tt:
                    if (typeof tt == "undefined") {
                        console.log("TouTiao tt is undefined");
                        return;
                    }
                    this.tt_login(args, callback);
                    break;
                case poly_sdk_config.sdk_key_vivo:
                    if (typeof qg == "undefined") {
                        console.log("vivo qg is undefined");
                        return;
                    }
                    this.vivo_login(args, callback);
                    break;
                case poly_sdk_config.sdk_key_xiaomi:
                    if (typeof qg == "undefined") {
                        console.log("xiaomi qg is undefined");
                        return;
                    }
                    this.xiaomi_login(args, callback);
                    break;
                case poly_sdk_config.sdk_key_baidu:
                    if (typeof swan == "undefined") {
                        console.log("baidu swan is undefined");
                        return;
                    }
                    this.baidu_login(args, callback);
                    break;
                case poly_sdk_config.sdk_key_oppo:
                    if (typeof qg == "undefined") {
                        console.log("oppo qg is undefined");
                        return;
                    }
                    this.oppo_login(args, callback);
                    break;
                case poly_sdk_config.sdk_key_weixin:
                    if (typeof wx == "undefined") {
                        console.log("weixin wx is undefined");
                        return;
                    }
                    this.weixin_login(args, callback);
                    break;
                case poly_sdk_config.sdk_key_wangmai:
                    if (typeof WMAds == "undefined") {
                        console.log("旺脉 WMAds is undefined");
                        return;
                    }
                    this.wangmai_login(args, callback);
                    break;
                case poly_sdk_config.sdk_key_juzhang:
                    this.juzhang_login(args, callback);
                    break;
                default:
                    console.log(poly_sdk_config.runSDK + " is not undefined By LoginAuth");

            }
        };

        this.tt_login = function (args, callback) {
            var self = this;
            if (self._tt_islogin) return;

            function checkSession(clicked) {
                //判断用户登录状态是否有效
                if (typeof tt == "undefined") return;
                tt.checkSession({
                    success: function success(res) {
                        //直接进入游戏
                        login(false, clicked);
                        getUserInfo();
                        init();

                        clicked && clicked(true);
                    },
                    fail: function fail() {
                        //调用登录和授权
                        console.log("调用登录和授权");
                        login(false, clicked);
                        getUserInfo();
                        clicked && clicked(false);
                    }
                });
            }

            function login(force, clicked) {
                if (typeof tt == "undefined") return;
                self._tt_islogin = true;
                tt.login({
                    force: force,
                    success: function success(res) {
                        console.log("touTiao 后端授权 唯一标识 code = " + res.code);
                        if (res.code) {
                            console.log("登录用户信息：" + JSON.stringify(res));
                            self.getUserDisplayId(res.code);
                        } else {
                            //游客登陆
                            self.default_login();
                            console.log("登录用户信息：" + JSON.stringify(res));
                        }
                    },
                    fail: function fail(res) {
                        //调用登录和授权
                        console.log("调用登录失败 = " + JSON.stringify(res));
                        self.sendLoginfailMsg(res);
                    }
                });
            }

            function init() {
                if (typeof tt == "undefined") return;
                //初始化右上角分享
                tt.showShareMenu({
                    withShareTicket: true
                });
                /*qq.onShareAppMessage(function () {
                    return {
                        title:  cc.vv.CG.SharingText[0].text,
                        imageUrl:cc.vv.CG.SharingText[0].res ,
                    }
                });*/
                self.launchOption = tt.getLaunchOptionsSync();
                //开启监听小游戏回到前台的事件 (分享返回，下拉框返回)
                tt.onShow(function (dt) {
                    console.log('回到前台onShow');
                    console.log(dt);
                    if (self.launchOption.scene == 1044) {
                        //判断是否从群分享链接进入  打开群排行
                        console.log(" 打开群排行");
                        //self.open.getComponent('openDomain').openCrowdRank(self.launchOption.shareTicket);
                    } else if (dt.scene == 1044) {
                        //  self.open.getComponent('openDomain').openCrowdRank(dt.shareTicket);
                    } else if (self.launchOption.scene == 1007) {
                        //判断是否为分享页进入
                        console.log(" 分享好友开启");
                        console.log('分享好友开启' + self.launchOption.query);
                    } else if (dt.scene == 1007) {
                        console.log(" 分享好友开启");
                        console.log('分享好友开启' + dt.query);
                    }
                });
            }

            function getUserInfo() {
                // 可以通过 qq.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
                tt.getSetting({
                    success: function success(res) {
                        console.log("scope.userInfo = " + res.authSetting['scope.userInfo']);
                        if (!res.authSetting['scope.userInfo']) {
                            tt.getUserInfo({
                                success: function success(res) {
                                    console.log('getUserInfo success data = ', JSON.stringify(res));

                                    self.setlocalUserInfo({
                                        "avatarUrl": res.userInfo.avatarUrl,
                                        "nickName": res.userInfo.nickName,
                                        "gender": res.userInfo.gender,
                                        "city": res.userInfo.city,
                                        "province": res.userInfo.province,
                                        "country": res.userInfo.country,
                                        "language": res.userInfo.language
                                    });
                                },
                                fail: function fail(res) {
                                    console.log("getUserInfo\u8C03\u7528\u5931\u8D25 = " + JSON.stringify(res));
                                }
                            });
                        } else {}
                    },
                    fail: function fail() {
                        console.log("getSetting   fail");
                    }
                });
            }

            checkSession(function (isLogin) {
                callback && callback(isLogin);
            });
        };

        /**
         * args   Type: Object
         *  
         * 
         * 例：
         *      LoginAuth.login({
                  btnNode : self.startBtn //你得开始按钮 node 节点
                },function(req){
                    self.startGame(); //进入游戏页面
                });
         * 
         */
        this.qq_login = function (args, callback) {
            var self = this;
            if (self._qq_islogin) return;

            function login(clicked) {
                self._qq_islogin = true;
                qq.login({
                    success: function success(res) {
                        if (res.code) {
                            console.log("qq 后端授权 唯一标识 code = " + res.code);

                            self.getUserDisplayId(res.code);

                            getUserInfo(function () {
                                clicked && clicked(true);
                            });
                        } else {
                            console.log("调用登录失败 = " + JSON.stringify(res));
                            self.sendLoginfailMsg(res);
                            clicked && clicked(false);
                        }
                    }
                });
            }

            function checkSession(clicked) {
                qq.checkSession({
                    success: function success() {

                        console.log("检查登陆成功 checkSession   success");
                        clicked && clicked(true);
                    },
                    fail: function fail() {
                        console.log("检查登陆失败 checkSession   fail");
                        clicked && clicked(false);
                    }
                });
            }

            function getUserInfo(clicked) {
                qq.getUserInfo({
                    success: function success(res) {
                        var userInfo = res.userInfo;
                        console.log('getUserInfo success data = ', JSON.stringify(userInfo));

                        self.setlocalUserInfo({
                            "avatarUrl": res.userInfo.avatarUrl,
                            "nickName": res.userInfo.nickName,
                            "gender": res.userInfo.gender,
                            "city": res.userInfo.city,
                            "province": res.userInfo.province,
                            "country": res.userInfo.country,
                            "language": res.userInfo.language
                        });

                        clicked && clicked();
                    },
                    fail: function fail(res) {
                        reject(res);
                        console.log("获取用户信息失败！err = " + JSON.stringify(err));
                    }
                });
            }

            function createUserInfoButton() {

                var btnNode = {
                    width: cc.view.getVisibleSize().width,
                    height: cc.view.getVisibleSize().height
                };
                self.systemInfo = qq.getSystemInfoSync();
                var btnSize = cc.size(btnNode.width + 0.1, btnNode.height + 0.1);
                var frameSize = cc.view.getFrameSize();
                var winSize = cc.director.getWinSize();

                //适配不同机型来创建微信授权按钮
                var left = 0;
                var top = 0;
                var width = btnSize.width / winSize.width * frameSize.width;
                var height = btnSize.height / winSize.height * frameSize.height;
                console.log("left: ", left);
                console.log("top: ", top);
                console.log("width: ", width);
                console.log("height: ", height);
                var button = qq.createUserInfoButton({
                    type: 'image',
                    image: "",
                    style: {
                        left: left,
                        top: top,
                        width: width,
                        height: height
                    }
                });
                console.log("显示按钮");
                return button;
            }

            function getSetting(clicked) {
                // 可以通过 qq.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
                qq.getSetting({
                    success: function success(res) {
                        if (!res.authSetting['scope.userInfo']) {
                            self.infoButton = createUserInfoButton();
                            self.infoButton.show();
                            onTap(function (req) {
                                clicked && clicked(1);
                            });
                        } else {
                            clicked && clicked(0);
                        }
                    },
                    fail: function fail() {
                        console.log("getSetting   fail");
                        clicked && clicked(-1);
                    }
                });
            }

            function onTap(clicked) {
                self.infoButton.onTap(function (res) {
                    console.log('button ontap:', res);
                    self.infoButton.hide();
                    if (res.errMsg == "operateWXData:ok" || res.errMsg == "getUserInfo:ok") {
                        //operateWXData   getUserInfo
                        if (res['rawData']) {

                            JSON.stringify(cc.sys.localStorage.setItem('qqUserInfo', res['userInfo']));
                            clicked && clicked(true);
                        }
                    } else {
                        self.sendLoginfailMsg(res, poly_sdk_config.failCode.userRefusedTo);
                        clicked && clicked(false);
                    }
                }.bind(self));
            }

            checkSession(function (data) {
                if (data) {

                    login(function (isLogin) {
                        callback && callback(isLogin);
                    });
                } else {
                    getSetting(function (code) {
                        login(function (isLogin) {
                            callback && callback(isLogin);
                        });
                    });
                }
            });
        };

        this.vivo_login = function (args, callback) {
            var self = this;
            if (self._vivo_islogin) return;

            if (typeof qg != "undefined") {
                self._vivo_islogin = true;
                qg.authorize({
                    type: "token",
                    success: function success(obj) {
                        console.log("vivo 前端授权 唯一标识 accessToken = " + obj.accessToken);
                        self.getUserDisplayId(obj.accessToken);
                        qg.getProfile({
                            token: obj.accessToken,
                            success: function success(res) {

                                var data = JSON.stringify(res);
                                console.log('getUserInfo success data = ', JSON.stringify(data));

                                self.setlocalUserInfo({
                                    "avatarUrl": data.avatar,
                                    "nickName": data.nickname,
                                    "openid": data.openid,
                                    "id": data.id,
                                    "unionid": data.unionid
                                });

                                callback && callback(true);
                            },
                            fail: function fail(data, code) {
                                try {
                                    console.log("getProfile  fail = " + JSON.stringify(data));
                                } catch (error) {}

                                callback && callback(false);
                            }
                        });
                    },
                    fail: function fail(data, code) {
                        console.log("调用登录失败 = " + JSON.stringify(data));
                        callback && callback(false);
                        self.sendLoginfailMsg(data);
                    }
                });
            }
        };

        this.oppo_login = function (args, callback) {
            var self = this;
            if (self._oppo_islogin) return;

            function login(clicked) {
                self._oppo_islogin = true;
                qg.login({
                    success: function success(res) {
                        var data = JSON.stringify(res.data);
                        console.log("oppo 登陆成功 ：" + data);

                        self.setlocalUserInfo({
                            "id": res.data.uid,
                            "avatarUrl": res.data.avatar,
                            "nickName": res.data.nickName,
                            "gender": res.data.sex,
                            "phoneNum": res.data.phoneNum,
                            "age": res.data.age
                        });

                        clicked && clicked(res.data);
                    },
                    fail: function fail(res) {
                        console.log("调用登录失败 = " + JSON.stringify(res));
                        // errCode、errMsg
                        self.sendLoginfailMsg(res);
                        console.log(JSON.stringify(res));
                        clicked && clicked(false);
                    }
                });
            }

            /**
             * 
             *  签名生成步骤
                第一步，准备签名所需参数(version 字段不参与签名)
                      pkgName(游戏包名)
                appKey(游戏上架时分配的Key)
                appSecret(游戏上架时分配的密钥)
                token(登录时获得的token)
                timeStamp(时间戳，毫秒，取当前时间值)
                第二步，将参数按照字典序排序,使用URL键值对的格式（即key1=value1&key2=value2…）拼接成字符串
                      appKey=11&appSecret=22&pkgName=com.oppo.testgame&timeStamp=1526304757000&token=ccb5ae1cf111de847db508edb90fa633
                第三步，使用 md5 算法对构造的源串进行加密,将得到的字符串所有字符转换为大写
                      C26228F50092BC9CA251AF41C4F70022
                *  */
            /**
             * 
             * @param {*} pkgName 
             * @param {*} appKey 
             * @param {*} appSecret 
             * @param {*} token 
             * @param {*} timeStamp 
             */
            function getSign(appKey, appSecret, pkgName, timeStamp, token) {
                var keys = {
                    "appKey": appKey,
                    "appSecret": appSecret,
                    "pkgName": pkgName,
                    "timeStamp": timeStamp,
                    "token": token
                };

                var str = "";
                for (var key in keys) {
                    if (keys.hasOwnProperty(key)) {
                        var val = keys[key];
                        str += key + '=' + val + '&';
                    }
                }
                str = str.substring(str.length - 1) == '&' ? str.substring(0, str.length - 1) : str;

                return tools.crypto().hex_md5(str).toUpperCase();
            }

            function getUserInfo(token, clicked) {
                /**
                 *  pkgName	字符串	是	游戏包名
                    token	字符串	是	登录时获得的token
                    timeStamp	字符串	是	时间戳，毫秒，取当前时间值
                    sign	字符串	是	签名
                 */
                console.log("token = " + token);
                var timestamp = new Date().getTime();
                var sign = getSign(poly_sdk_config.oppo.AppKey, poly_sdk_config.oppo.AppSecret, poly_sdk_config.oppo.pkgName, timestamp, token);
                console.log("sign = " + sign);
                var resData = {
                    pkgName: poly_sdk_config.oppo.pkgName,
                    token: token,
                    timeStamp: timestamp,
                    sign: sign
                };

                tools.sendRequest(poly_sdk_config.oppo.userInfoUrl, resData, function (data) {
                    if (data && data.errorcode == 200) {

                        self.setlocalUserInfo({
                            "id": data.userInfo.userId,
                            "avatarUrl": data.userInfo.avatar,
                            "nickName": data.userInfo.userName,
                            "gender": data.userInfo.sex,
                            "location": data.userInfo.location,
                            "constellation": data.userInfo.constellation,
                            "age": data.userInfo.age
                        });
                        clicked && clicked(data);
                    } else {
                        console.log("OPPO 获取用户信息失败 ： " + JSON.stringify(data));
                        clicked && clicked(false);
                    }
                });
            }

            login(function (req) {
                if (req) {
                    console.log("oppo 前端授权 唯一标识 token = " + req.token);
                    self.getUserDisplayId(req.token);
                    //  getUserInfo(req.token);
                }
            });
        };

        this.xiaomi_login = function (args, callback) {
            var self = this;
            if (this._xiaomi_islogin) return;

            function initEvent() {
                qg.onUserInfoChange(function (res) {
                    console.log("onUserInfoChange");
                    console.log(res.userInfo.nickName);

                    console.log(res.userInfo.avatarUrl);

                    console.log(res.userInfo.gender);
                });

                qg.offUserInfoChange(function () {
                    console.log("offUserInfoChange");
                });
            }

            function login(clicked) {
                self._xiaomi_islogin = true;
                qg.login({
                    success: function success(res) {
                        console.log("小米快玩 login success" + JSON.stringify(res));
                        console.log("xiaomi 前端授权 唯一标识 token = " + res.token + "  session = " + res.session);
                        self.getUserDisplayId(res.token, res.session);
                        clicked && clicked(true);
                    },
                    fail: function fail(res) {
                        console.log("调用登录失败 = " + JSON.stringify(res));
                        self.sendLoginfailMsg(res);
                        clicked && clicked(false);
                    }
                });
            }

            function getUserInfo() {
                qg.getUserInfo({

                    success: function success(res) {
                        console.log('getUserInfo success data = ', JSON.stringify(res.userInfo));
                        self.setlocalUserInfo({
                            "avatarUrl": res.userInfo.avatarUrl,
                            "nickName": res.userInfo.nickName,
                            "gender": res.userInfo.gender
                        });
                    },

                    fail: function fail() {

                        console.log('user reject!');
                    },

                    complete: function complete(res) {

                        console.log('get userInfo complete');
                    }

                });
            }

            initEvent();
            login(function () {
                getUserInfo();
            });
        };

        this.baidu_login = function (args, callback) {
            var self = this;
            if (self._baidu_islogin) return;
            var button = null;
            function checkSession(clicked) {
                swan.checkSession({
                    success: function success() {

                        clicked && clicked(true);
                        console.log('登录态有效');
                    },
                    fail: function fail() {
                        clicked && clicked(true);
                        console.log('登录态无效');
                    }
                });
            }

            function isLoginSync(clicked) {
                try {
                    var result = swan.isLoginSync();
                    console.log('isLoginSync', result.isLogin);
                    clicked && clicked(result.isLogin);
                } catch (e) {
                    console.log('error', e);
                    clicked && clicked(false);
                }
            }

            function login(loginCallBack) {
                self._baidu_islogin = true;
                console.log("login()");
                swan.login({
                    success: function success(res) {
                        console.log('登录成功', res);
                        console.log("baidu  后端授权 唯一标识 code = " + res.code);
                        loginCallBack && loginCallBack(res);
                    },
                    fail: function fail(e) {
                        console.log("调用登录失败 = " + JSON.stringify(res));
                        self.sendLoginfailMsg(e);
                        loginCallBack && loginCallBack(false);
                    },
                    complete: function complete(res) {
                        console.log("login complete = " + JSON.stringify(res));
                        if (res.errCode == 10004) {
                            //用户拒绝登陆
                            loginCallBack && loginCallBack(false);
                        }
                    }
                });
            }

            //暂时没用到
            function createUserInfoButton() {
                console.log('createUserInfoButton  开始');
                var btnNode = args.btnNode;
                self.systemInfo = swan.getSystemInfoSync();
                var btnSize = cc.size(btnNode.width + 0.1, btnNode.height + 0.1);
                var frameSize = cc.view.getFrameSize();
                var winSize = cc.director.getWinSize();

                //适配不同机型来创建微信授权按钮
                var left = (winSize.width * 0.5 + btnNode.x - btnSize.width * 0.5) / winSize.width * frameSize.width;
                var top = (winSize.height * 0.5 - btnNode.y - btnSize.height * 0.5) / winSize.height * frameSize.height;
                var width = btnSize.width / winSize.width * frameSize.width;
                var height = btnSize.height / winSize.height * frameSize.height;
                console.log("left: ", left);
                console.log("top: ", top);
                console.log("width: ", width);
                console.log("height: ", height);

                button = swan.createUserInfoButton({
                    type: 'image',
                    image: "",
                    style: {
                        left: left,
                        top: top,
                        width: width,
                        height: height
                    }
                });
                console.log('createUserInfoButton  成功');
                onTap();
                button.show();

                return button;
            }

            function getSetting(clicked) {
                console.log("getSetting");
                swan.authorize({
                    scope: 'scope.userInfo',
                    success: function success(res) {
                        swan.getSetting({
                            success: function success(res) {
                                console.log("getSetting 成功 = " + JSON.stringify(res));
                                clicked && clicked(res.authSetting['scope.userInfo']);
                            },
                            fail: function fail(err) {
                                console.log(err);
                                console.log("getSetting 失败 = " + JSON.stringify(err));
                                clicked && clicked(false);
                            },
                            complete: function complete(res) {
                                console.log("getSetting complete = " + JSON.stringify(res));
                            }
                        });
                    },
                    fail: function fail(err) {
                        console.log(err);
                        console.log("authorize 失败 = " + JSON.stringify(err));
                        clicked && clicked(false);
                    },
                    complete: function complete(res) {
                        console.log("authorize complete = " + JSON.stringify(res));
                    }
                });
            }

            function getSwanId(clicked) {
                swan.getSwanId({
                    success: function success(res) {
                        console.log("swanid = " + res.data.swanid);
                        clicked && clicked(res.data.swanid);
                    },
                    fail: function fail(err) {
                        console.log("获取 getSwanId 失败 ! " + err);
                        clicked && clicked(false);
                    }
                });
            }

            function getUserInfo() {
                getSwanId(function (swanid) {
                    swan.getUserInfo({
                        swanIdList: ['selfSwanId', swanid],
                        success: function success(res) {
                            console.log('getUserInfo success data = ', JSON.stringify(res.userInfo));

                            self.setlocalUserInfo({
                                "avatarUrl": res.userInfo.avatarUrl,
                                "nickName": res.userInfo.nickName,
                                "gender": res.userInfo.gender
                            });
                        },
                        fail: function fail(res) {
                            console.log("getUserInfo fail = " + res);
                        },
                        complete: function complete(res) {
                            self.sendLoginMiNiFramework();
                            console.log("getUserInfo complete = " + res);
                        }
                    });
                });
            }

            //暂时没用到
            function onTap(clicked) {
                button.onTap(function (res) {
                    console.log('button ontap:', res);
                    button.hide();
                    if (res.errMsg == "operateWXData:ok" || res.errMsg == "getUserInfo:ok") {
                        //operateWXData   getUserInfo
                        if (res['rawData']) {

                            JSON.stringify(cc.sys.localStorage.setItem('qqUserInfo', res['userInfo']));
                            clicked && clicked(true);
                        }
                    } else {
                        clicked && clicked(false);
                    }
                }.bind(self));
            }

            checkSession();
            isLoginSync(function ($isLoginSync) {
                if ($isLoginSync) {

                    login(function ($islogin) {
                        var code = $islogin ? $islogin.code : null;
                        self.getUserDisplayId(code, null, function (iswin) {
                            console.log("iswin = " + iswin);
                            if (iswin) {
                                getSetting(function (isUserInfo) {
                                    if (isUserInfo) {
                                        getUserInfo();
                                    } else {
                                        console.log("isUserInfo : " + isUserInfo);
                                        self.sendLoginMiNiFramework();
                                    }
                                });
                            }
                        });
                    });
                } else {
                    login(function ($islogin) {
                        var code = $islogin ? $islogin.code : null;
                        self.getUserDisplayId(code, null, function (iswin) {
                            console.log("iswin = " + iswin);
                            if (iswin) {
                                getSetting(function (isUserInfo) {
                                    if (isUserInfo) {
                                        getUserInfo();
                                    } else {
                                        console.log("isUserInfo : " + isUserInfo);
                                        self.sendLoginMiNiFramework();
                                    }
                                });
                            }
                        });
                    });
                }
            });
        };

        /**
         * args   Type: Object
         *  
         * 
         * 例：
         *      LoginAuth.login({
                  btnNode : self.startBtn //你得开始按钮 node 节点
                },function(req){
                    self.startGame();
                });
         * 
         */
        this.weixin_login = function (args, callback) {
            var self = this;
            if (self._weixin_islogin) return;

            function login(clicked) {
                self._weixin_islogin = true;
                wx.login({
                    success: function success(res) {
                        if (res.code) {
                            console.log("res.code = " + res.code);
                            self.getUserDisplayId(res.code);

                            getUserInfo(function () {
                                clicked && clicked(true);
                            });
                        } else {
                            console.log("调用登录失败 = " + JSON.stringify(res));
                            clicked && clicked(false);
                        }
                    }
                });
            }

            function checkSession(clicked) {
                wx.checkSession({
                    success: function success() {

                        console.log("检查登陆成功 checkSession   success");
                        clicked && clicked(true);
                    },
                    fail: function fail() {
                        console.log("检查登陆失败 checkSession   fail");
                        clicked && clicked(false);
                    }
                });
            }

            function getUserInfo(clicked) {
                wx.getUserInfo({
                    success: function success(res) {
                        var userInfo = res.userInfo;
                        console.log('getUserInfo success data = ', JSON.stringify(userInfo));

                        self.setlocalUserInfo({
                            "avatarUrl": res.userInfo.avatarUrl,
                            "nickName": res.userInfo.nickName,
                            "gender": res.userInfo.gender,
                            "city": res.userInfo.city,
                            "province": res.userInfo.province,
                            "country": res.userInfo.country,
                            "language": res.userInfo.language
                        });

                        clicked && clicked();
                    }
                });
            }

            function createUserInfoButton() {

                var btnNode = {
                    width: cc.view.getVisibleSize().width,
                    height: cc.view.getVisibleSize().height
                };
                self.systemInfo = wx.getSystemInfoSync();
                var btnSize = cc.size(btnNode.width + 0.1, btnNode.height + 0.1);
                var frameSize = cc.view.getFrameSize();
                var winSize = cc.director.getWinSize();

                //适配不同机型来创建微信授权按钮
                var left = 0;
                var top = 0;
                var width = btnSize.width / winSize.width * frameSize.width;
                var height = btnSize.height / winSize.height * frameSize.height;
                console.log("left: ", left);
                console.log("top: ", top);
                console.log("width: ", width);
                console.log("height: ", height);
                var button = wx.createUserInfoButton({
                    type: 'image',
                    image: "",
                    style: {
                        left: left,
                        top: top,
                        width: width,
                        height: height
                    }
                });
                console.log("显示按钮");
                return button;
            }

            function getSetting(clicked) {
                // 可以通过 qq.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
                wx.getSetting({
                    success: function success(res) {
                        if (!res.authSetting['scope.userInfo']) {
                            self.infoButton = createUserInfoButton();
                            self.infoButton.show();
                            onTap(function (req) {
                                clicked && clicked(1);
                            });
                        } else {
                            clicked && clicked(0);
                        }
                    },
                    fail: function fail() {
                        console.log("getSetting   fail");
                        clicked && clicked(-1);
                    }
                });
            }

            function onTap(clicked) {
                self.infoButton.onTap(function (res) {
                    console.log('button ontap:', res);
                    self.infoButton.hide();
                    if (res.errMsg == "operateWXData:ok" || res.errMsg == "getUserInfo:ok") {
                        //operateWXData   getUserInfo
                        if (res['rawData']) {

                            JSON.stringify(cc.sys.localStorage.setItem('qqUserInfo', res['userInfo']));
                            clicked && clicked(true);
                        }
                    } else {
                        self.sendLoginfailMsg(res, poly_sdk_config.failCode.userRefusedTo);
                        clicked && clicked(false);
                    }
                }.bind(self));
            }

            checkSession(function (data) {
                if (data) {
                    login(function (isLogin) {
                        callback && callback(isLogin);
                    });
                } else {
                    getSetting(function (code) {
                        login(function (isLogin) {
                            callback && callback(isLogin);
                        });
                    });
                }
            });
        };

        this.wangmai_login = function (callback) {
            var self = this;
            console.log("wangmai_login start   self._wangmai_islogin = " + self._wangmai_islogin);
            if (self._wangmai_islogin) return;

            WMAds.getLoginUserInfo && WMAds.getLoginUserInfo({
                engine: 'Cocos', //Egret引擎更改为Egret
                onSuccess: function onSuccess(res) {
                    console.log(res);

                    try {
                        res = JSON.parse(res);
                        if (!res || res == null || !res.userId || res.userId == "" || typeof res.userId == "undefined") {
                            console.log("WMAds.getLoginUserInfo  res.userId  fail");
                            self.default_login();
                            callback && callback(false);
                        } else {
                            self.getUserDisplayId(res.userId, null, function (iswin) {
                                console.log("wangmai_login end   iswin = " + iswin);
                                self._wangmai_islogin = true;
                                callback && callback(iswin);
                            });
                        }
                    } catch (error) {
                        console.log("wangmai_login getLoginUserInfo error  = " + error);
                        self.default_login();
                        callback && callback(false);
                    }
                }
            });
        };

        this.default_login = function (callback) {
            var self = this;
            console.log("default_login start   self.default_login = " + self._default_islogin);
            if (self._default_islogin) return;

            this.getUserDisplayId(null, null, function (iswin) {
                console.log("default_login end   iswin = " + iswin);
                self._default_islogin = true;
                callback && callback(iswin);
            });
        };

        this.juzhang_login = function (callback) {
            if (cc.LieYingSDK.PolySDK.adjuzsdk) return;
            var clientId = poly_sdk_config.juzhang.clientId;
            var clientSecret = poly_sdk_config.juzhang.clientSecret;
            if (!clientId || clientId == "") {
                console.log("当前 巨掌 clientId  为空");
                return;
            }
            if (!clientSecret || clientSecret == "") {
                console.log("当前 巨掌 clientSecret  为空");
                return;
            }
            cc.LieYingSDK.PolySDK.adjuzsdk = new Adjuzsdk({
                clientId: clientId,
                clientSecret: clientSecret,
                callback: function callback(data) {
                    console.log("SDK初始化", data);
                    // 调用初始化账户
                    jsInitAccount();
                    // 查询广告激励视频是否已缓存
                    jsAdLoaded();
                }
            });

            // 初始化账户
            function jsInitAccount() {
                // accountId：游戏账户
                cc.LieYingSDK.PolySDK.adjuzsdk.jsInitAccount(function (data) {
                    console.log('以获取账户id' + data.accountId);
                    // 数据埋点，首页加载完毕后调用，防止黑屏
                    cc.LieYingSDK.PolySDK.adjuzsdk.jsOpenGame();
                });
            }

            // 激励视频是否缓存
            function jsAdLoaded() {
                cc.LieYingSDK.PolySDK.adjuzsdk.jsAdLoaded(function (data) {
                    if (data.adtype == 1) {
                        if (data.code == 1) {
                            console.log('横版视频已缓存');
                        } else {
                            console.log('横版视频未缓存');
                        }
                    } else {
                        if (data.code == 1) {
                            console.log('竖版视频已缓存');
                        } else {
                            console.log('竖版视频未缓存');
                        }
                    }
                });
            }
        };

        this.setlocalUserInfo = function (args) {
            if (!args) return;
            console.time('setlocalUserInfo End time');
            var keys = poly_sdk_config.localStorageUserkeys;

            for (var key in args) {
                if (args.hasOwnProperty(key)) {

                    if (keys.indexOf(key) > -1) {
                        var val = args[key];

                        if (typeof val == "undefined") {
                            console.log("setlocalUserInfo failure msg : " + key + " is not val ");
                            continue;
                        }

                        cc.sys.localStorage.setItem(key, val);
                        console.log("cc.sys.localStorage.setItem success update : key = " + key + "  val = " + val);
                    } else {
                        console.log("setlocalUserInfo Error msg : " + key + "  not Find ");
                    }
                }
            }

            console.timeEnd('setlocalUserInfo End time');
        };

        this.getlocalUserInfo = function (key) {
            if (!key) return;
            if (cc.sys.localStorage.getItem(key) && cc.sys.localStorage.getItem(key) != "") {
                return cc.sys.localStorage.getItem(key);
            } else {
                console.log(key + " not Find");
                return null;
            }
        };

        this.sendLoginfailMsg = function (err, fail_code, callback) {

            if (!poly_sdk_config || typeof poly_sdk_config == "undefined" || !poly_sdk_config.runSDK || typeof poly_sdk_config.runSDK == "undefined") {
                console.log("聚合SDK 初始化失败 请联系管理人员  By sendLoginfailMsg");
                return;
            }

            var type = poly_sdk_config[poly_sdk_config.runSDK].type;
            var game_id = poly_sdk_config.game_id;

            if (typeof type == "undefined" || type == null || typeof game_id == "undefined" || game_id == null || typeof type_response_data == "undefined" || type_response_data == null) {

                console.log("sendLoginfailMsg sendRequest Err : type || game_id || type_response_data 参数为空或错误");
                callback && callback(false, null);
                return;
            }

            var type_response_data = null;
            try {
                type_response_data = JSON.stringify(err);
            } catch (error) {
                console.log("sendLoginfailMsg JSON.stringify  ERR  error = " + error);
                callback && callback();
                return;
            }
            var fail_code = 7402;

            //fail_code  错误代码  网络错误 : 7400   ,  用户拒绝  : 7401  ， 未知错误 : 7402
            var resData = {
                type: type,
                game_id: game_id,
                fail_code: fail_code || poly_sdk_config.failCode.unknown,
                type_response_data: type_response_data
            };

            tools.sendRequest(poly_sdk_config.failLoginUrl, resData, function (data) {
                if (data && data.errorcode == 200) {

                    console.log("sendLoginfailMsg sendRequest success");
                    callback && callback(true, data);
                } else {
                    console.log("sendLoginfailMsg sendRequest failure  data = " + JSON.stringify(data));
                    callback && callback(false, data);
                }
            });
        };

        this.getSDKConfig = function () {
            return poly_sdk_config;
        };
        /**
         * 1.4 获取用户displayId
         * POST/GET
         * type    int     渠道ID
         * game_id int     游戏ID
         * opcode  String  根据不同渠道的 code 或者 是 openid
         * session String  (目前只有小米渠道需要传，其它渠道不需要)
         */
        this.getUserDisplayId = function (opcode, session, callback) {
            var self = this;
            if (!poly_sdk_config || typeof poly_sdk_config == "undefined" || !poly_sdk_config.runSDK || typeof poly_sdk_config.runSDK == "undefined") {
                console.log("聚合SDK 初始化失败 请联系管理人员  By getUserDisplayId");
                callback && callback(false, null);
                return;
            }

            var type = poly_sdk_config[poly_sdk_config.runSDK].type;
            var game_id = poly_sdk_config.game_id;

            var display_id = self.getlocalUserInfo('display_id') || "";

            console.log("getUserDisplayId \u5F00\u59CB \u53C2\u6570: type \uFF1A" + type + " game_id : " + game_id + " opcode : " + opcode + " session : " + session);

            if (typeof type == "undefined" || type == null || typeof game_id == "undefined" || game_id == null) {

                console.log("getUserDisplayId sendRequest Err : type || game_id 参数为空或错误");
                callback && callback(false, null);
                return;
            }

            if (poly_sdk_config.runSDK == poly_sdk_config.sdk_key_xiaomi) {
                if (typeof session == "undefined" || session == null) {
                    console.log("getUserDisplayId sendRequest Err : session 参数为空或错误");
                    callback && callback(false, null);
                    return;
                }
            }

            if (typeof opcode == "undefined" || opcode == null) {
                opcode = "000000";
            }
            console.log("getUserDisplayId sendRequest \u5F00\u59CB \u53C2\u6570: type \uFF1A" + type + " game_id : " + game_id + " opcode : " + opcode + " session : " + session);
            var resData = {
                type: type,
                game_id: game_id,
                opcode: opcode,
                display_id: display_id,
                session: session || null
            };
            tools.sendRequest(poly_sdk_config.userLoginUrl, resData, function (data) {
                if (data && data.code == 200) {

                    console.log("getUserDisplayId sendRequest success data = " + JSON.stringify(data));
                    poly_sdk_config.userLoginData.display_id = data.data.display_id;
                    self.setlocalUserInfo({
                        display_id: poly_sdk_config.userLoginData.display_id
                    });
                    callback && callback(true, data);
                } else {
                    console.log("getUserDisplayId sendRequest failure  data = " + JSON.stringify(data));
                    callback && callback(false, data);
                }
            });
        };

        this.sendLoginMiNiFramework = function () {
            console.log("sendLoginMiNiFramework");
            if (!poly_sdk_config || typeof poly_sdk_config == "undefined" || !poly_sdk_config.runSDK || typeof poly_sdk_config.runSDK == "undefined") {
                console.log("聚合SDK 初始化失败 请联系管理人员  By sendLoginMiNiFramework");
                return;
            }

            var type = poly_sdk_config[poly_sdk_config.runSDK].type;
            var game_id = poly_sdk_config.game_id;

            if (typeof type == "undefined" || type == null || typeof game_id == "undefined" || game_id == null) {

                console.log("sendLoginMiNiFramework sendRequest Err : type || game_id 参数为空或错误");
                return;
            }

            if (typeof poly_sdk_config.userLoginData.display_id == "undefined" || !poly_sdk_config.userLoginData.display_id) {

                console.log("sendLoginMiNiFramework sendRequest Err : poly_sdk_config.userLoginData.display_id 参数为空或错误");
                return;
            }

            var resdata = {
                display_id: poly_sdk_config.userLoginData.display_id,
                game_id: game_id,
                channel_id: type,
                name: this.getlocalUserInfo("nickName") || "",
                img: this.getlocalUserInfo("avatarUrl") || ""

            };
            console.log("sendLoginMiNiFramework \u5F00\u59CB \u53C2\u6570: resdata \uFF1A" + JSON.stringify(resdata));

            cc.LieYingSDK.DAO.UserDAO.login(resdata);
        };

        return instance = this;
    };

    return LoginAuth;
}();

/**
 * BannerAd  Banner广告聚合
 * 
 */
var BannerAd = function () {
    var instance;
    var BannerAd = function BannerAd() {
        if (instance) {
            return instance;
        }
        var self = this;
        this.createBannerAd = function (callback) {
            console.log("createBannerAd start runSDK = " + poly_sdk_config.runSDK);
            switch (poly_sdk_config.runSDK) {
                case poly_sdk_config.sdk_key_qq:
                    if (typeof qq == "undefined") {
                        console.log("QQ qq is undefined");
                        return;
                    }
                    this.createBannerAd_qq(callback);
                    break;
                case poly_sdk_config.sdk_key_tt:
                    if (typeof tt == "undefined") {
                        console.log("TouTiao tt is undefined");
                        return;
                    }
                    this.createBannerAd_tt(callback);
                    break;
                case poly_sdk_config.sdk_key_vivo:
                    if (typeof qg == "undefined") {
                        console.log("vivo qg is undefined");
                        return;
                    }
                    this.createBannerAd_vivo(callback);
                    break;
                case poly_sdk_config.sdk_key_xiaomi:
                    if (typeof qg == "undefined") {
                        console.log("xiaomi qg is undefined");
                        return;
                    }
                    this.createBannerAd_xiaomi(callback);
                    break;
                case poly_sdk_config.sdk_key_baidu:
                    if (typeof swan == "undefined") {
                        console.log("baidu swan is undefined");
                        return;
                    }
                    this.createBannerAd_baidu(callback);
                    break;
                case poly_sdk_config.sdk_key_oppo:
                    if (typeof qg == "undefined") {
                        console.log("oppo qg is undefined");
                        return;
                    }
                    this.createBannerAd_oppo(callback);
                    break;
                case poly_sdk_config.sdk_key_weixin:
                    if (typeof wx == "undefined") {
                        console.log("WX wx is undefined");
                        return;
                    }
                    this.createBannerAd_weixin(callback);
                    break;
                case poly_sdk_config.sdk_key_qtt:
                    if (typeof qttGame == "undefined") {
                        console.log("qtt qttGame is undefined");
                        return;
                    }
                    this.createBannerAd_qtt(callback);
                    break;
                case poly_sdk_config.sdk_key_jikewan:
                    if (typeof AdSDK == "undefined") {
                        console.log("即刻玩 AdSDK is undefined");
                        return;
                    }
                    this.createBannerAd_jikewan(callback);
                    break;
                case poly_sdk_config.sdk_key_ios:

                    if (!cc || !cc.sys.isNative || cc.sys.os != cc.sys.OS_IOS) {
                        console.log("原生 IOS 初始化 环境失败! ");
                        return;
                    }
                    this.createBannerAd_ios(callback);

                    break;
                case poly_sdk_config.sdk_key_android:

                    if (!cc || !cc.sys.isNative || cc.sys.os != cc.sys.OS_ANDROID) {
                        console.log("原生 安卓 初始化 环境失败! ");
                        return;
                    }
                    this.createBannerAd_android(callback);

                    break;

                case poly_sdk_config.sdk_key_juzhang:
                    if (!cc.LieYingSDK.PolySDK.adjuzsdk) {
                        console.log("巨掌 adjuzsdk is undefined");
                        return;
                    }
                    this.createBannerAd_juzhang(callback);
                    break;
                default:
                    console.log(poly_sdk_config.runSDK + " is not undefined By BannerAd");
            }
        };
        this.showBannerAd = function () {
            this._isShowBannerAd = true;
            if (this._bannerAd) {
                this._bannerAd.show();
            }
        }, this.hideBannerAd = function () {
            this._isShowBannerAd = false;
            if (this._bannerAd) {
                this._bannerAd.hide();
            }
        };

        this.createBannerAd_tt = function (callback) {
            var bannerid = poly_sdk_config.tt.banner_id;
            var bannerAdWidth = 0;
            var self = this;
            if (self._bannerAd) {
                return;
            }
            if (!bannerid || bannerid == "") {
                console.log("当前 头条 banner_id  为空");
                self.sendBannerpush(0);
                callback && callback(false);
                return;
            }

            if (typeof tt != "undefined") {
                self._isShowBannerAd = true;

                var _tt$getSystemInfoSync = tt.getSystemInfoSync(),
                    windowWidth = _tt$getSystemInfoSync.windowWidth,
                    windowHeight = _tt$getSystemInfoSync.windowHeight;

                var targetBannerAdWidth = 200;

                // 创建一个居于屏幕底部正中的广告
                self._bannerAd = tt.createBannerAd({
                    adUnitId: bannerid,
                    style: {
                        top: windowHeight - targetBannerAdWidth / 16 * 9 // 根据系统约定尺寸计算出广告高度
                    }
                });

                // 尺寸调整时会触发回调
                // 注意：如果在回调里再次调整尺寸，要确保不要触发死循环！！！
                self._bannerAd.onResize(function (size) {
                    if (bannerAdWidth <= 0) {
                        bannerAdWidth = size.width;
                    }
                    self._bannerAd.style.left = (windowWidth - bannerAdWidth) / 2;
                });

                self._bannerAd.onLoad(function () {
                    self.sendBannerpush(1);
                    if (self._isShowBannerAd) {
                        self.showBannerAd();
                    } else {
                        self.hideBannerAd();
                    }
                    callback && callback(true);
                });
            } else {
                self.sendBannerpush(0);
                callback && callback(false);
                console.log("tt is undefined");
            }
        };

        this.createBannerAd_qq = function (callback) {
            var bannerid = poly_sdk_config.qq.banner_id;
            var self = this;
            if (!bannerid || bannerid == "") {
                console.log("当前 QQ banner_id  为空");
                self.sendBannerpush(0);
                callback && callback(false);
                return;
            }
            if (self._bannerAd) {
                return;
            }

            self._isShowBannerAd = true;
            self._bannerAd = qq.createBannerAd({
                adUnitId: bannerid,
                style: {
                    width: 320
                }
            });
            // 尺寸调整时会触发回调            // 注意：如果在回调里再次调整尺寸，要确保不要触发死循环！！！   
            self._bannerAd.onResize(function (size) {
                console.log('Resize后正式宽高:', size.width, size.height);

                // 在这里可以根据banner宽高进行定位
                self._bannerAd.style.top = 76;
                self._bannerAd.style.left = 320;
            });

            self._bannerAd.onError(function (res) {
                console.log('bannerAd onError', res);
                self.sendBannerpush(0);
                callback && callback(false);
            });
            console.log("createBannerAd_qq   self._bannerAd = " + self._bannerAd);
            self._bannerAd.onLoad(function (res) {
                console.log("createBannerAd_vivo  self._isShowBannerAd = " + self._isShowBannerAd);
                self.sendBannerpush(1);
                if (self._isShowBannerAd) {

                    self.showBannerAd();
                } else {
                    self.hideBannerAd();
                }
                callback && callback(true);
            });
        };

        this.createBannerAd_vivo = function (callback) {
            var bannerid = poly_sdk_config.vivo.banner_id;
            var self = this;
            if (!bannerid || bannerid == "") {
                console.log("当前 vivo bannerid  为空");
                self.sendBannerpush(0);
                callback && callback(false);
                return;
            }
            if (self._bannerAd) {
                return;
            }
            self._isShowBannerAd = true;
            console.log("createBannerAd_vivo");

            if (qg.getSystemInfoSync().platformVersionCode < 1031) {
                console.log("createBannerAd_vivo  当前版本不支持广告");
                self.sendBannerpush(0);
                callback && callback(false);
            } else {
                console.log("createBannerAd_vivo  支持广告");
                // 支持广告

                var _qg$getSystemInfoSync = qg.getSystemInfoSync(),
                    windowWidth = _qg$getSystemInfoSync.windowWidth,
                    windowHeight = _qg$getSystemInfoSync.windowHeight;

                var targetBannerAdWidth = 200;
                self._bannerAd = qg.createBannerAd({
                    posId: bannerid,
                    style: {}
                });
                console.log("createBannerAd_vivo   self._bannerAd = " + self._bannerAd);
                self._bannerAd.onLoad(function () {
                    console.log("createBannerAd_vivo  self._isShowBannerAd = " + self._isShowBannerAd);
                    self.sendBannerpush(1);
                    if (self._isShowBannerAd) {

                        self.showBannerAd();
                    } else {
                        self.hideBannerAd();
                    }
                    callback && callback(true);
                });
            }
        };

        this.createBannerAd_oppo = function (callback) {
            var bannerid = poly_sdk_config.oppo.banner_id;
            var self = this;
            if (!poly_sdk_config.oppo.AppID || poly_sdk_config.oppo.AppID == "") {
                console.log("当前 oppo AppID  为空");
                self.sendBannerpush(0);
                callback && callback(false);
                return;
            }
            if (self._bannerAd) {
                return;
            }
            if (!bannerid || bannerid == "") {
                console.log("当前 oppo bannerid  为空");
                self.sendBannerpush(0);
                callback && callback(false);
                return;
            }
            self._isShowBannerAd = true;
            console.log("createBannerAd_oppo");

            if (qg.getSystemInfoSync().minPlatformVersion < 1031) {
                console.log("createBannerAd_oppo  当前版本不支持广告");
                self.sendBannerpush(0);
                callback && callback(false);
            } else {
                console.log("createBannerAd_oppo  支持广告");

                qg.initAdService({
                    appId: poly_sdk_config.oppo.AppID,
                    isDebug: false,
                    success: function success(res) {
                        console.log("success");

                        // 支持广告
                        self._bannerAd = qg.createBannerAd({
                            posId: bannerid
                        });
                        console.log("createBannerAd_oppo   self._bannerAd = " + self._bannerAd);
                        self.sendBannerpush(1);
                        if (self._isShowBannerAd) {

                            self.showBannerAd();
                        } else {
                            self.hideBannerAd();
                        }
                        callback && callback(true);
                    },
                    fail: function fail(res) {
                        console.log("fail:" + res.code + res.msg);
                        self.sendBannerpush(0);
                        callback && callback(false);
                    },
                    complete: function complete(res) {
                        console.log("complete");
                    }
                });
            }
        };

        this.createBannerAd_baidu = function (callback) {
            var bannerid = poly_sdk_config.baidu.banner_id;
            if (self._bannerAd) {
                return;
            }
            if (!poly_sdk_config.baidu.appSid || poly_sdk_config.baidu.appSid == "") {
                console.log("当前 百度 appSid (白青藤 应用管理 ID) 为空");
                self.sendBannerpush(0);
                callback && callback(false);
                return;
            }

            if (!bannerid || bannerid == "") {
                console.log("当前 百度 bannerid  为空");
                self.sendBannerpush(0);
                callback && callback(false);
                return;
            }

            self._isShowBannerAd = true;
            console.log("createBannerAd_baidu  getSystemInfoSync = " + JSON.stringify(swan.getSystemInfoSync()));
            if (swan.getSystemInfoSync().SDKVersion < "1.11.0") {
                console.log("baidu SDKVersion 过低 不支持 Banner 广告！");
                self.sendBannerpush(0);
                callback && callback(false);
                return;
            }

            var _swan$getSystemInfoSy = swan.getSystemInfoSync(),
                windowWidth = _swan$getSystemInfoSy.windowWidth,
                windowHeight = _swan$getSystemInfoSy.windowHeight;

            var targetBannerAdWidth = 200;
            self._bannerAd = swan.createBannerAd({
                adUnitId: bannerid,
                appSid: poly_sdk_config.baidu.appSid,
                style: {
                    left: (windowWidth - targetBannerAdWidth) / 2,
                    top: windowHeight - targetBannerAdWidth / 16 * 9,
                    width: targetBannerAdWidth
                }
            });
            console.log("createBannerAd_baidu   self._bannerAd = " + self._bannerAd);

            self._bannerAd.onError(function (err) {
                self.sendBannerpush(0);
                console.log("createBannerAd_baidu onError = " + err);
            });

            self._bannerAd.onLoad(function () {
                console.log(' banner 加载完成');
                console.log("createBannerAd_baidu  self._isShowBannerAd = " + self._isShowBannerAd);
                self.sendBannerpush(1);
                if (self._isShowBannerAd) {
                    self.showBannerAd();
                } else {
                    self.hideBannerAd();
                }
                callback && callback(true);
            });
        };

        this.createBannerAd_xiaomi = function (callback) {
            var bannerid = poly_sdk_config.xiaomi.banner_id;
            var self = this;
            if (self._bannerAd) {
                return;
            }
            if (!bannerid || bannerid == "") {
                console.log("当前 小米 bannerid  为空");
                self.sendBannerpush(0);
                callback && callback(false);
                return;
            }

            self._isShowBannerAd = true;
            console.log("createBannerAd_xiaomi");

            var _qg$getSystemInfoSync2 = qg.getSystemInfoSync(),
                windowWidth = _qg$getSystemInfoSync2.windowWidth,
                windowHeight = _qg$getSystemInfoSync2.windowHeight;

            var targetBannerAdWidth = 200;
            self._bannerAd = qg.createBannerAd({
                adUnitId: bannerid,
                style: {
                    left: (windowWidth - targetBannerAdWidth) / 2,
                    top: windowHeight - targetBannerAdWidth / 16 * 9,
                    width: targetBannerAdWidth
                }
            });
            console.log("createBannerAd_xiaomi   self._bannerAd = " + self._bannerAd);

            self._bannerAd.onLoad(function () {
                console.log(' banner 加载完成');
                console.log("createBannerAd_xiaomi  self._isShowBannerAd = " + self._isShowBannerAd);
                self.sendBannerpush(1);
                if (self._isShowBannerAd) {

                    self.showBannerAd();
                } else {
                    self.hideBannerAd();
                }
                callback && callback(true);
            });
        };

        this.createBannerAd_weixin = function (callback) {
            var bannerid = poly_sdk_config.weixin.banner_id;
            var self = this;
            if (self._bannerAd) {
                return;
            }
            if (!bannerid || bannerid == "") {
                console.log("当前 微信 bannerid  为空");
                self.sendBannerpush(0);
                callback && callback(false);
                return;
            }

            if (typeof wx != "undefined") {
                self._isShowBannerAd = true;

                var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
                    windowWidth = _wx$getSystemInfoSync.windowWidth,
                    windowHeight = _wx$getSystemInfoSync.windowHeight;

                var targetBannerAdWidth = 200;
                if (typeof wx.createBannerAd == "undefined") return;
                self._bannerAd = wx.createBannerAd({
                    adUnitId: bannerid,
                    style: {
                        left: (windowWidth - targetBannerAdWidth) / 2,
                        top: windowHeight - targetBannerAdWidth / 16 * 9,
                        width: targetBannerAdWidth
                    }
                });

                self._bannerAd.onResize(function (res) {
                    console.log(res.width, res.height);
                    console.log(self._bannerAd.style.realWidth, self._bannerAd.style.realHeight);
                });

                console.log("createBannerAd_weixin   self._bannerAd = " + self._bannerAd);
                self._bannerAd.onLoad(function (req) {
                    console.log(' banner 加载完成');
                    console.log("createBannerAd_weixin  self._isShowBannerAd = " + self._isShowBannerAd);
                    self.sendBannerpush(1);
                    if (req == undefined || req == null) {
                        if (self._isShowBannerAd) {
                            self.showBannerAd();
                        } else {
                            self.hideBannerAd();
                        }
                        callback && callback(true);
                    } else {
                        callback && callback(false);
                    }
                });

                self._bannerAd.onError(function (err) {
                    console.log("onError = " + err);
                    self.sendBannerpush(0);
                });
            } else {
                self.sendBannerpush(0);
                callback && callback(false);
                console.log("wx is undefined");
            }
        };

        this.createBannerAd_qtt = function () {
            this._bannerAd = this._bannerAd || {};
            if (!this._bannerAd.show) {
                this._bannerAd.show = function () {
                    console.log("createBannerAd_qtt  show");
                    qttGame.showBanner();
                };
            }

            if (!this._bannerAd.hide) {
                this._bannerAd.hide = function () {
                    console.log("createBannerAd_qtt  hide");
                    qttGame.hideBanner();
                };
            }
        };

        this.createBannerAd_jikewan = function (callback) {
            console.log("createBannerAd_jikewan");
            var bannerid = poly_sdk_config.jikewan.banner_id;
            var banner_adId = poly_sdk_config.jikewan.banner_adId;
            var self = this;
            if (self._bannerAd) {
                return;
            }
            if (!bannerid || bannerid == "") {
                console.log("当前 即可玩 bannerid  为空");
                self.sendBannerpush(0);
                callback && callback(false);
                return;
            }

            if (!banner_adId || banner_adId == "") {
                console.log("当前 即可玩 banner_adId  为空");
                self.sendBannerpush(0);
                callback && callback(false);
                return;
            }
            AdSDK.init();
            if (typeof AdSDK != "undefined" && AdSDK != null) {
                self._isShowBannerAd = true;

                self._bannerAd = AdSDK.createBannerAd(banner_adId, bannerid, 2);

                self._bannerAd.onLoad(function (param) {
                    console.log("createBannerAd_jikewan banner onLoad:", param == 1);
                    console.log(' banner 加载完成');
                    console.log("createBannerAd_jikewan  self._isShowBannerAd = " + self._isShowBannerAd);
                    self.sendBannerpush(1);
                    if (self._isShowBannerAd) {

                        self.showBannerAd();
                    } else {
                        self.hideBannerAd();
                    }
                    callback && callback(true);
                });
                self._bannerAd.onError(function (param) {
                    console.log("banner onError:", param);
                    self.sendBannerpush(0);
                    callback && callback(false);
                });
                self._bannerAd.onResize(function (param) {
                    console.log("banner onResize:", param);
                    self.sendBannerpush(0);
                    callback && callback(false);
                });
            } else {
                console.log("AdSDK is undefined");
                self.sendBannerpush(0);
                callback && callback(false);
            }
        };

        this.createBannerAd_ios = function (callback) {
            var bannerid = poly_sdk_config.ios.banner_id;
            this._bannerAd = this._bannerAd || {};
            var self = this;
            if (!bannerid || bannerid == "") {
                self.sendBannerpush(0);
                console.log("当前 ios bannerid  为空");
                callback && callback(false);
                return;
            }

            try {

                // AdBanner 回调接口 
                // bannerid 
                // type 1: 创建回调  type 2 : 显示回调   type 3 : 隐藏回调      数据类型：String   
                // code ： 200 调用成功    code ： 500 调用失败    数据类型：String
                // errMgr : 错误信息    数据类型：String
                cc.LY_SDK_Native_AdBanner_Callback = function (bannerid, type, code, errMgr) {
                    console.log("start 创建回调 cc.LY_SDK_Native_AdBanner_Callback  bannerid = " + bannerid);
                    function call(onSuccess, onError) {
                        if (code == "200") {
                            onSuccess && onSuccess();
                        } else {
                            console.log("LY_SDK_Native_AdBanner_Callback  errMgr = " + errMgr);
                            onError && onError();
                        }
                    }
                    switch (type) {
                        case '1':
                            call(null, function () {
                                self.sendBannerpush(0);
                            });
                            break;

                        case '2':
                            call(function () {
                                self.sendBannerpush(1);
                            }, function () {
                                self.sendBannerpush(0);
                            });
                            break;

                        case '3':
                            call(function () {
                                self.sendBannerpush(1);
                            }, function () {
                                self.sendBannerpush(0);
                            });
                            break;
                        default:
                            console.log(" cc.LY_SDK_Native_AdBanner_Callback error  type = " + type);
                            self.sendBannerpush(0);
                            break;
                    }
                };

                this._bannerAd.show = function () {
                    console.log("createBannerAd_ios  show  bannerid = " + bannerid);
                    jsb.reflection.callStaticMethod(poly_sdk_config.ios.interface_path, "showAdBannerinRootViewBannerId:", bannerid);
                };

                this._bannerAd.hide = function () {
                    console.log("createBannerAd_ios  hide bannerid = " + bannerid);
                    jsb.reflection.callStaticMethod(poly_sdk_config.ios.interface_path, "hideAdBannerinRootViewBannerId:", bannerid);
                };
            } catch (error) {
                console.log("createBannerAd_ios error" + JSON.stringify(error));
            }
        }, this.createBannerAd_android = function (callback) {

            var bannerid = poly_sdk_config.android.banner_id;
            this._bannerAd = this._bannerAd || {};
            var self = this;
            if (!bannerid || bannerid == "") {
                console.log("当前 android bannerid  为空");
                callback && callback(false);
                return;
            }

            // AdBanner 回调接口 
            // bannerid 
            // type 1: 创建回调  type 2 : 显示回调   type 3 : 隐藏回调      数据类型：String   
            // code ： 200 调用成功    code ： 500 调用失败    数据类型：String
            // errMgr : 错误信息    数据类型：String
            cc.LY_SDK_Native_AdBanner_Callback = function (bannerid, type, code, errMgr) {
                console.log("start 创建回调 cc.LY_SDK_Native_AdBanner_Callback  bannerid = " + bannerid);
                function call(onSuccess, onError) {
                    if (code == "200") {
                        onSuccess && onSuccess();
                    } else {
                        console.log("LY_SDK_Native_AdBanner_Callback  errMgr = " + errMgr);
                        onError && onError();
                    }
                }
                switch (type) {
                    case '1':
                        call(null, function () {
                            self.sendBannerpush(0);
                        });
                        break;

                    case '2':
                        call(function () {
                            self.sendBannerpush(1);
                        }, function () {
                            self.sendBannerpush(0);
                        });
                        break;

                    case '3':
                        call(function () {
                            self.sendBannerpush(1);
                        }, function () {
                            self.sendBannerpush(0);
                        });
                        break;
                    default:
                        console.log(" cc.LY_SDK_Native_AdBanner_Callback error  type = " + type);
                        self.sendBannerpush(0);
                        break;
                }
            };

            this._bannerAd.show = function () {
                console.log("createBannerAd_android  show  bannerid = " + bannerid);
                jsb.reflection.callStaticMethod(poly_sdk_config.android.interface_path, "showAdBannerAd", "(Ljava/lang/String;)V", bannerid);
            };

            this._bannerAd.hide = function () {
                console.log("createBannerAd_android  hide bannerid = " + bannerid);
                jsb.reflection.callStaticMethod(poly_sdk_config.android.interface_path, "hideAdBannerAd", "(Ljava/lang/String;)V", bannerid);
            };
        }, this.createBannerAd_juzhang = function (callback) {
            // res为播放状态1为成功，0为失败
            var adtype = Number(poly_sdk_config.juzhang.adType.banner_Ad);
            cc.LieYingSDK.PolySDK.adjuzsdk.jsOpenAD(adtype, function (res) {
                if (res.status == 1) {
                    console.log('广告开始播放');
                    if (res.playStatus == 1) {
                        console.log('广告播放完毕');
                    } else {
                        console.log('广告pending');
                    }
                } else {
                    console.log('广告播放失败');
                }
            });
        },
        /**
         * isend  0 : 调用失败   1：调取失败
         * address_id 广告位置
         */
        this.sendBannerpush = function (isend, callback) {

            if (!poly_sdk_config || typeof poly_sdk_config == "undefined" || !poly_sdk_config.runSDK || typeof poly_sdk_config.runSDK == "undefined") {
                console.log("聚合SDK 初始化失败 请联系管理人员  By sendBannerpush");
                return;
            }

            var channel_id = poly_sdk_config[poly_sdk_config.runSDK].type;
            var game_id = poly_sdk_config.game_id;
            var token = poly_sdk_config.HTTPtoken;
            var display_id = poly_sdk_config.userLoginData.display_id || "000000";

            var conf_banner = poly_sdk_config[poly_sdk_config.runSDK].banner_id;
            var banner_id = !conf_banner || conf_banner == "" ? poly_sdk_config.default_banner_id : conf_banner;

            var address_id = 0;
            if (typeof channel_id == "undefined" || channel_id == null || typeof game_id == "undefined" || game_id == null || typeof isend == "undefined" || isend == null || typeof banner_id == "undefined" || banner_id == null || typeof address_id == "undefined" || address_id == null) {

                console.log("sendBannerpush sendRequest Err : channel_id || game_id || token  ||  isend || banner_id || address_id 参数为空或错误");
                callback && callback(false, null);
                return;
            }

            var resData = {
                token: token,
                game_id: game_id,
                channel_id: channel_id,
                display_id: display_id,
                isend: isend,
                banner_id: banner_id,
                address_id: address_id
            };

            tools.sendRequest(poly_sdk_config.bannerpushUrl, resData, function (data) {
                if (data && data.errorcode == 200) {

                    console.log("sendBannerpush sendRequest success");
                    callback && callback(true, data);
                } else {
                    console.log("sendBannerpush sendRequest failure  data = " + JSON.stringify(data));
                    callback && callback(false, data);
                }
            });
        };

        return instance = this;
    };

    return BannerAd;
}();

/**
 * VideoAd 视频广告聚合
 * 
 * onSuccess (function) //成功回调
 * onCancel  (function) //失败回调
 * createRewardedVideoAd(voidid,onSuccess,onCancel)
 */
var VideoAd = function () {
    var instance;
    var VideoAd = function VideoAd() {
        if (instance) {
            return instance;
        }
        this._ios_isvideo_move = false; // iOS 视频 是否在播放中
        this._android_isvideo_move = false; // 安卓 视频 是否在播放中
        this._adjuzsdk = null; // 巨掌SDK
        var self = this;
        this.createRewardedVideoAd = function (void_index, onSuccess, onCancel, onLoad) {
            console.log("createRewardedVideoAd start runSDK = " + poly_sdk_config.runSDK);
            switch (poly_sdk_config.runSDK) {
                case poly_sdk_config.sdk_key_qq:
                    if (typeof qq == "undefined") {
                        console.log("QQ qq is undefined");
                        return;
                    }
                    this.createRewardedVideoAd_qq(void_index, onSuccess, onCancel, onLoad);
                    break;
                case poly_sdk_config.sdk_key_tt:
                    if (typeof tt == "undefined") {
                        console.log("TouTiao tt is undefined");
                        return;
                    }
                    this.createRewardedVideoAd_tt(void_index, onSuccess, onCancel, onLoad);
                    break;
                case poly_sdk_config.sdk_key_vivo:
                    if (typeof qg == "undefined") {
                        console.log("vivo qg is undefined");
                        return;
                    }
                    this.createRewardedVideoAd_vivo(void_index, onSuccess, onCancel, onLoad);
                    break;
                case poly_sdk_config.sdk_key_xiaomi:
                    if (typeof qg == "undefined") {
                        console.log("xiaomi qg is undefined");
                        return;
                    }
                    this.createRewardedVideoAd_xiaomi(void_index, onSuccess, onCancel, onLoad);
                    break;
                case poly_sdk_config.sdk_key_baidu:
                    if (typeof swan == "undefined") {
                        console.log("baidu swan is undefined");
                        return;
                    }
                    this.createRewardedVideoAd_baidu(void_index, onSuccess, onCancel, onLoad);
                    break;
                case poly_sdk_config.sdk_key_oppo:
                    if (typeof qg == "undefined") {
                        console.log("oppo qg is undefined");
                        return;
                    }
                    this.createRewardedVideoAd_oppo(void_index, onSuccess, onCancel, onLoad);
                    break;
                case poly_sdk_config.sdk_key_weixin:
                    if (typeof wx == "undefined") {
                        console.log("WX wx is undefined");
                        return;
                    }
                    this.createRewardedVideoAd_weixin(void_index, onSuccess, onCancel, onLoad);
                    break;
                case poly_sdk_config.sdk_key_qtt:
                    if (typeof qttGame == "undefined") {
                        console.log("qtt qttGame is undefined");
                        return;
                    }
                    this.createRewardedVideoAd_qtt(void_index, onSuccess, onCancel, onLoad);
                    break;
                case poly_sdk_config.sdk_key_jikewan:
                    if (typeof AdSDK == "undefined") {
                        console.log("即刻玩 AdSDK is undefined");
                        return;
                    }
                    this.createRewardedVideoAd_jikewan(void_index, onSuccess, onCancel, onLoad);
                    break;
                case poly_sdk_config.sdk_key_4399:
                    if (typeof h5api == "undefined") {
                        console.log("4399 h5api is undefined");
                        return;
                    }
                    this.createRewardedVideoAd_4399(void_index, onSuccess, onCancel, onLoad);
                    break;
                case poly_sdk_config.sdk_key_ios:

                    if (!cc || !cc.sys.isNative || cc.sys.os != cc.sys.OS_IOS) {
                        console.log("原生 IOS 初始化 环境失败! ");
                        return;
                    }
                    this.createRewardedVideoAd_ios(void_index, onSuccess, onCancel, onLoad);
                    break;
                case poly_sdk_config.sdk_key_android:

                    if (!cc || !cc.sys.isNative || cc.sys.os != cc.sys.OS_ANDROID) {
                        console.log("原生 安卓 初始化 环境失败! ");
                        return;
                    }
                    this.createRewardedVideoAd_android(void_index, onSuccess, onCancel, onLoad);
                    break;
                case poly_sdk_config.sdk_key_wangmai:

                    if (typeof WMAds == "undefined") {
                        console.log("旺脉 WMAds is undefined");
                        return;
                    }

                    this.createRewardedVideoAd_wangmai(void_index, onSuccess, onCancel, onLoad);
                    break;
                case poly_sdk_config.sdk_key_juzhang:
                    if (!cc.LieYingSDK.PolySDK.adjuzsdk) {
                        console.log("巨掌 adjuzsdk is undefined");
                        return;
                    }
                    this.createRewardedVideoAd_juzhang(void_index, onSuccess, onCancel, onLoad);
                    break;
                default:
                    onLoad && onLoad(false);
                    console.log(poly_sdk_config.runSDK + " is not undefined By VideoAd");
            }
        };

        this.createRewardedVideoAd_tt = function (void_index, onSuccess, onCancel, onLoad) {
            var voidid = poly_sdk_config.tt.video_id[void_index];
            var self = this;
            if (!voidid || voidid == "") {
                console.log("当前 头条 voidid  为空");
                self.sendVideopush(0, void_index);
                onLoad && onLoad(false);
                return;
            }

            if (typeof tt != "undefined") {
                var close_listener = function close_listener(req) {
                    if (req && req.isEnded) {
                        if (onSuccess) {
                            self.sendVideopush(1, void_index);
                            onSuccess();
                        }
                    } else {
                        if (onCancel) {
                            self.sendVideopush(2, void_index);
                            onCancel();
                        }
                    }
                    videoAd.offClose && videoAd.offClose(close_listener);
                };

                var videoAd = tt.createRewardedVideoAd({
                    adUnitId: voidid
                });

                videoAd.load().then(function () {
                    console.log('激励视频加载成功');
                    videoAd.show().then(function () {
                        console.log('激励视频 广告显示成功');
                        onLoad && onLoad(true);
                    }).catch(function (err) {
                        self.sendVideopush(0, void_index);
                        console.log('激励视频 广告显示失败:' + err.errMsg);
                        onLoad && onLoad(false);
                    });
                }).catch(function (err) {
                    self.sendVideopush(0, void_index);
                    console.log('激励视频加载失败:' + err.errMsg);
                    onLoad && onLoad(false);
                });

                videoAd.onClose(close_listener);
            } else {
                self.sendVideopush(0, void_index);
                onLoad && onLoad(false);
                console.log("tt is undefined");
            }
        };

        this.createRewardedVideoAd_qq = function (void_index, onSuccess, onCancel, onLoad) {

            var voidid = poly_sdk_config.qq.video_id[void_index];
            var self = this;
            if (!voidid || voidid == "") {
                console.log("当前 QQ voidid  为空");
                self.sendVideopush(0, void_index);
                onLoad && onLoad(false);
                return;
            }

            var videoAd = qq.createRewardedVideoAd({
                adUnitId: voidid
            });
            videoAd.onError(function (res) {
                console.log('videoAd onError', res);
                self.sendVideopush(0, void_index);
                onLoad && onLoad(false);
            });

            function close_listener(req) {
                if (req && req.isEnded) {
                    if (onSuccess) {
                        console.log("正常播放结束，可以下发游戏奖励");
                        self.sendVideopush(1, void_index);
                        onSuccess();
                    }
                } else {
                    if (onCancel) {
                        console.log("播放中途退出，不下发游戏奖励");
                        self.sendVideopush(2, void_index);
                        onCancel();
                    }
                }
                videoAd.offClose && videoAd.offClose(close_listener);
            }

            videoAd.onClose(close_listener);

            videoAd.load().then(function () {
                console.log('激励视频加载成功');
                videoAd.show().then(function () {
                    console.log('激励视频 广告显示成功');
                    onLoad && onLoad(true);
                }).catch(function (err) {
                    self.sendVideopush(0, void_index);
                    console.log('激励视频 广告显示失败');
                    onLoad && onLoad(false);
                });
            }).catch(function (err) {
                self.sendVideopush(0, void_index);
                onLoad && onLoad(false);
                console.log('激励视频加载失败');
            });
        };

        this.createRewardedVideoAd_vivo = function (void_index, onSuccess, onCancel, onLoad) {
            var voidid = poly_sdk_config.vivo.video_id[void_index];
            var self = this;
            console.log("onLoad = " + onLoad);
            if (!voidid || voidid == "") {
                console.log("当前 vivo voidid  为空");
                self.sendVideopush(0, void_index);
                onLoad && onLoad(false);
                return;
            }
            try {
                if (typeof qg != "undefined") {
                    var close_listener = function close_listener(req) {
                        if (req && req.isEnded) {
                            if (onSuccess) {
                                console.log("正常播放结束，可以下发游戏奖励");
                                self.sendVideopush(1, void_index);
                                onSuccess();
                            }
                        } else {
                            if (onCancel) {
                                console.log("播放中途退出，不下发游戏奖励");
                                self.sendVideopush(2, void_index);
                                onCancel();
                            }
                        }
                        rewardedVideoAd.offClose && rewardedVideoAd.offClose(close_listener);
                    };

                    console.log("createRewardedVideoAd_vivo = " + qg.createRewardedVideoAd);
                    var rewardedVideoAd = void 0;
                    if (qg.createRewardedVideoAd) {
                        // 判断该API是否支持
                        rewardedVideoAd = qg.createRewardedVideoAd({
                            posId: voidid
                        });
                    } else {
                        self.sendVideopush(0, void_index);
                        qg.showToast({
                            message: "暂无广告,或播放未完成"
                        });
                        onLoad && onLoad(false);
                    }

                    rewardedVideoAd.load().then(function () {
                        console.log("激励视频广告加载成功");
                        rewardedVideoAd.show().then(function () {
                            console.log("激励视频广告显示成功");
                            onLoad && onLoad(true);
                        }).catch(function (err) {
                            console.log("激励视频广告显示失败", err);
                            self.sendVideopush(0, void_index);
                            qg.showToast({
                                message: "暂无广告,或播放未完成"
                            });
                            onLoad && onLoad(false);
                        });
                    }).catch(function (err) {
                        console.log("激励视频广告加载失败", err);
                        self.sendVideopush(0, void_index);
                        qg.showToast({
                            message: "暂无广告,或播放未完成"
                        });
                        onLoad && onLoad(false);
                    });

                    rewardedVideoAd.onClose(close_listener);
                } else {
                    console.log("qg is undefined");
                    self.sendVideopush(0, void_index);
                    qg.showToast({
                        message: "暂无广告,或播放未完成"
                    });
                    onLoad && onLoad(false);
                }
            } catch (error) {
                onLoad && onLoad(false);
            }
        };

        this.createRewardedVideoAd_baidu = function (void_index, onSuccess, onCancel, onLoad) {
            var voidid = poly_sdk_config.baidu.video_id[void_index];
            var self = this;
            if (!poly_sdk_config.baidu.appSid || poly_sdk_config.baidu.appSid == "") {
                console.log("当前 百度 appSid (白青藤 应用管理 ID) 为空");
                self.sendVideopush(0, void_index, 1);
                onLoad && onLoad(false);
                return;
            }

            if (!voidid || voidid == "") {
                console.log("当前 百度 voidid  为空");
                self.sendVideopush(0, void_index);
                onLoad && onLoad(false);
                return;
            }

            if (typeof swan != "undefined") {
                var close_listener = function close_listener(req) {
                    if (req && req.isEnded) {
                        if (onSuccess) {
                            console.log("正常播放结束，可以下发游戏奖励");
                            self.sendVideopush(1, void_index);
                            onSuccess();
                        }
                    } else {
                        if (onCancel) {
                            console.log("播放中途退出，不下发游戏奖励");
                            self.sendVideopush(2, void_index);
                            onCancel();
                        }
                    }
                    rewardedVideoAd.offClose && rewardedVideoAd.offClose(close_listener);
                };

                console.log("createRewardedVideoAd_baidu");
                var rewardedVideoAd = void 0;

                rewardedVideoAd = swan.createRewardedVideoAd({
                    adUnitId: voidid,
                    appSid: poly_sdk_config.baidu.appSid
                });

                rewardedVideoAd.load().then(function () {
                    console.log("激励视频广告加载成功");
                    rewardedVideoAd.show().then(function () {
                        console.log("激励视频广告显示成功");
                        onLoad && onLoad(true);
                    }).catch(function (err) {
                        console.log("激励视频广告显示失败", err);
                        self.sendVideopush(0, void_index);
                        onLoad && onLoad(false);
                        //  cc.vv.uitools.showTips(cc.director.getScene().getChildByName('Canvas'), "暂无广告,或播放未完成");
                    });
                }).catch(function (err) {
                    console.log("激励视频广告加载失败", err);
                    self.sendVideopush(0, void_index);
                    onLoad && onLoad(false);
                    // cc.vv.uitools.showTips(cc.director.getScene().getChildByName('Canvas'), "暂无广告,或播放未完成");
                });

                rewardedVideoAd.onClose(close_listener);
            } else {
                console.log("swan is undefined");
                self.sendVideopush(0, void_index);
                onLoad && onLoad(false);
                //  cc.vv.uitools.showTips(cc.director.getScene().getChildByName('Canvas'), "暂无广告,或播放未完成");
            }
        };

        this.createRewardedVideoAd_xiaomi = function (void_index, onSuccess, onCancel, onLoad) {
            var voidid = poly_sdk_config.xiaomi.video_id[void_index];
            var self = this;
            if (!voidid || voidid == "") {
                console.log("当前 小米 voidid  为空");
                self.sendVideopush(0, void_index);
                onLoad && onLoad(false);
                return;
            }

            if (typeof qg != "undefined") {
                var close_listener = function close_listener(req) {
                    if (req && req.isEnded) {
                        if (onSuccess) {
                            console.log("正常播放结束，可以下发游戏奖励");
                            self.sendVideopush(1, void_index);
                            onSuccess();
                        }
                    } else {
                        if (onCancel) {
                            console.log("播放中途退出，不下发游戏奖励");
                            self.sendVideopush(2, void_index);
                            onCancel();
                        }
                    }
                    rewardedVideoAd.offClose && rewardedVideoAd.offClose(close_listener);
                };

                console.log("createRewardedVideoAd_xiaomi");
                var rewardedVideoAd = void 0;

                rewardedVideoAd = qg.createRewardedVideoAd({
                    adUnitId: voidid
                });

                rewardedVideoAd.load().then(function () {
                    console.log("激励视频广告加载成功");
                    rewardedVideoAd.show().then(function () {
                        console.log("激励视频广告显示成功");
                        onLoad && onLoad(true);
                    }).catch(function (err) {
                        console.log("激励视频广告显示失败", err);
                        self.sendVideopush(0, void_index);
                        onLoad && onLoad(false);
                        // cc.vv.uitools.showTips(cc.director.getScene().getChildByName('Canvas'), "暂无广告,或播放未完成");
                    });
                }).catch(function (err) {
                    console.log("激励视频广告加载失败", err);
                    self.sendVideopush(0, void_index);
                    onLoad && onLoad(false);
                    // cc.vv.uitools.showTips(cc.director.getScene().getChildByName('Canvas'), "暂无广告,或播放未完成");
                });

                rewardedVideoAd.onClose(close_listener);
            } else {
                console.log("qg is undefined");
                self.sendVideopush(0, void_index);
                onLoad && onLoad(false);
                //  cc.vv.uitools.showTips(cc.director.getScene().getChildByName('Canvas'), "暂无广告,或播放未完成");
            }
        };

        this.createRewardedVideoAd_oppo = function (void_index, onSuccess, onCancel, onLoad) {
            var voidid = poly_sdk_config.oppo.video_id[void_index];
            var self = this;
            if (!poly_sdk_config.oppo.AppID || poly_sdk_config.oppo.AppID == "") {
                console.log("当前 oppo AppID  为空");
                self.sendVideopush(0, void_index);
                onLoad && onLoad(false);
                return;
            }

            if (!voidid || voidid == "") {
                console.log("当前 oppo voidid  为空");
                self.sendVideopush(0, void_index);
                onLoad && onLoad(false);
                return;
            }

            var rewardedVideoAd = void 0;
            qg.initAdService({
                appId: poly_sdk_config.oppo.AppID,
                isDebug: true,
                success: function success(res) {
                    rewardedVideoAd = qg.createRewardedVideoAd({
                        posId: voidid
                    });
                    rewardedVideoAd.load();
                    rewardedVideoAd.onLoad(function () {
                        console.log("激励视频广告加载成功");

                        rewardedVideoAd.show();
                    });
                    rewardedVideoAd.onVideoStart(function () {
                        console.log("激励视频 开始播放");
                        onLoad && onLoad(true);
                    });
                    rewardedVideoAd.onError(function (err) {
                        console.log("激励视频广告加载失败", err);
                        self.sendVideopush(0, void_index);
                        onLoad && onLoad(false);
                    });

                    function close_listener(req) {
                        if (req && req.isEnded) {
                            if (onSuccess) {
                                console.log("正常播放结束，可以下发游戏奖励");
                                self.sendVideopush(1, void_index);
                                onSuccess();
                            }
                        } else {
                            if (onCancel) {
                                console.log("播放中途退出，不下发游戏奖励");
                                self.sendVideopush(2, void_index);
                                onCancel();
                            }
                        }
                        rewardedVideoAd.destroy && rewardedVideoAd.destroy();
                    }
                    rewardedVideoAd.onClose(close_listener);
                },
                fail: function fail(res) {
                    console.log("fail:" + res.code + res.msg);
                    self.sendVideopush(0, void_index);
                    onLoad && onLoad(false);
                },
                complete: function complete(res) {
                    try {
                        console.log("complete" + JSON.stringify(res));
                    } catch (error) {
                        self.sendVideopush(0, void_index);
                        onLoad && onLoad(false);
                    }
                }
            });
        };

        this.createRewardedVideoAd_weixin = function (void_index, onSuccess, onCancel, onLoad) {
            var voidid = poly_sdk_config.weixin.video_id[void_index];
            var self = this;
            if (!voidid || voidid == "") {
                console.log("当前 weixin voidid  为空");
                self.sendVideopush(0, void_index);
                onLoad && onLoad(false);
                return;
            }

            if (typeof wx != "undefined") {
                var close_listener = function close_listener(req) {
                    if (req && req.isEnded) {
                        if (onSuccess) {
                            console.log("正常播放结束，可以下发游戏奖励");
                            self.sendVideopush(1, void_index);
                            onSuccess();
                        }
                    } else {
                        if (onCancel) {
                            console.log("播放中途退出，不下发游戏奖励");
                            self.sendVideopush(2, void_index);
                            onCancel();
                        }
                    }
                    rewardedVideoAd.offClose && rewardedVideoAd.offClose(close_listener);
                    // rewardedVideoAd.destroy&&rewardedVideoAd.destroy();
                };

                var rewardedVideoAd = wx.createRewardedVideoAd({
                    adUnitId: voidid
                });

                rewardedVideoAd.load().then(function () {
                    console.log('激励视频加载成功');
                    rewardedVideoAd.show().then(function () {
                        console.log('激励视频 广告显示成功');
                        onLoad && onLoad(true);
                    }).catch(function (err) {
                        self.sendVideopush(0, void_index);
                        console.log('激励视频 广告显示失败');
                        onLoad && onLoad(false);
                    });
                }).catch(function (err) {
                    self.sendVideopush(0, void_index);
                    onLoad && onLoad(false);
                    console.log('激励视频加载失败');
                });

                rewardedVideoAd.onClose(close_listener);

                rewardedVideoAd.onError(function callback(res) {
                    self.sendVideopush(0, void_index);
                    onLoad && onLoad(false);
                    console.log("onError  = " + JSON.stringify(res));
                });
            } else {
                self.sendVideopush(0, void_index);
                onLoad && onLoad(false);
                console.log("wx is undefined");
            }
        };

        this.createRewardedVideoAd_qtt = function (void_index, onSuccess, onCancel, onLoad) {
            // showHDAD示例
            var options = {};
            options.gametype = 1; //互动游戏类型，1(砸金蛋)  2(laba)  3(大转盘)
            options.rewardtype = 1; //互动广告框，只有 1
            options.data = {};
            options.data.title = "刷新道具"; //互动抽中奖后的道具提示文字
            options.data.url = "//newidea4-gamecenter-frontend.1sapp.com/game/prod/fkxxl_img/1.png"; //互动抽中奖后的道具图标(可选)
            options.callback = function (res) {
                //回调函数
                if (res == 1) {
                    //播放完成，发放奖励
                    console.log("showVideo  onSuccess  res = " + res);
                    self.sendVideopush(1, void_index);
                    onSuccess && onSuccess();
                } else {
                    console.log("showVideo  onCancel  res = " + res);
                    //res = 0    填充不足
                    //res = 2    提前关闭
                    self.sendVideopush(1, void_index);
                    onSuccess && onSuccess();
                }
            };
            qttGame.showHDAD(options);
        };

        this.createRewardedVideoAd_4399 = function (void_index, onSuccess, onCancel, onLoad) {
            var self = this;
            if (typeof h5api != "undefined" && h5api != null) {
                h5api.canPlayAd(function (data) {
                    console.log("是否可播放广告", data.canPlayAd, "剩余次数", data.remain);

                    if (data.remain >= 1) {
                        if (data.canPlayAd) {
                            h5api.playAd(function (obj) {
                                console.log('代码:' + obj.code + ',消息:' + obj.message);
                                if (obj.code === 10000) {
                                    onLoad && onLoad(true);
                                } else if (obj.code === 10001) {
                                    console.log('播放结束');
                                    self.sendVideopush(1, void_index);

                                    onSuccess && onSuccess();
                                } else {
                                    console.log('广告异常');
                                    self.sendVideopush(2, void_index);

                                    onCancel && onCancel(obj.message, true);
                                }
                            });
                        }
                    } else {
                        self.sendVideopush(0, void_index);
                        onLoad && onLoad(false, "今日广告次数用完!");
                    }
                });
            } else {
                self.sendVideopush(0, void_index);
                onLoad && onLoad(false, "今日广告次数用完!");
                console.log("4399 h5api is undefined");
            }
        };

        this.createRewardedVideoAd_jikewan = function (void_index, onSuccess, onCancel, onLoad) {
            var voidid = poly_sdk_config.jikewan.video_id[void_index];
            var video_adId = poly_sdk_config.jikewan.video_adId[void_index];
            var self = this;

            if (!poly_sdk_config.jikewan.screenOrientation || poly_sdk_config.jikewan.screenOrientation == "") {
                console.log("当前 jikewan screenOrientation  为空");
                self.sendVideopush(0, void_index);
                onLoad && onLoad(false);
                return;
            }

            if (!voidid || voidid == "") {
                console.log("当前 jikewan voidid  为空");
                self.sendVideopush(0, void_index);
                onLoad && onLoad(false);
                return;
            }

            if (!video_adId || video_adId == "") {
                console.log("当前 jikewan video_adId  为空");
                self.sendVideopush(0, void_index);
                onLoad && onLoad(false);
                return;
            }

            AdSDK.init();
            var videoAd = AdSDK.createRewardedVideoAd(video_adId, void_index, poly_sdk_config.jikewan.screenOrientation);

            var isEnded = false;
            videoAd.onLoad(function (param) {
                console.log("rewardedvideoAd onLoad ~ param = ", param);
                videoAd.show().then(function (res) {
                    isEnded = true;
                    onLoad && onLoad(true);
                }, function (err) {
                    console.log('videoAd 1 广告显示失败 err = ' + err);
                    isEnded = false;
                    self.sendVideopush(0, void_index);
                    onLoad && onLoad(false, "暂无广告,或播放未完成");
                });
            });

            function close_listener(req) {
                console.log("onClose  req = " + req);
                if (isEnded) {
                    if (onSuccess) {
                        console.log('videoAd 1 广告显示成功！');
                        self.sendVideopush(1, void_index);
                        onSuccess();
                    }
                } else {
                    if (onCancel) {
                        console.log('videoAd 中途退出！');
                        self.sendVideopush(2, void_index);
                        onCancel();
                    }
                }
                try {
                    videoAd.offClose && videoAd.offClose(close_listener);
                    videoAd.destroy && videoAd.destroy();
                } catch (error) {
                    console.log("offClose or destroy err = " + error);
                }
            }

            videoAd.onClose(close_listener);

            videoAd.onError(function (param) {
                console.log("onError param = " + param);
                self.sendVideopush(0, void_index);
                onLoad && onLoad(false, "暂无广告,或播放未完成");
            });
        };

        this.createRewardedVideoAd_ios = function (void_index, onSuccess, onCancel, onLoad) {
            var voidid = poly_sdk_config.ios.video_id[void_index];
            console.log("createRewardedVideoAd_ios  voidid = " + voidid + "    this._ios_isvideo_move = " + this._ios_isvideo_move);
            var self = this;
            if (!voidid || voidid == "") {
                console.log("当前 ios voidid  为空");
                self.sendVideopush(0, void_index);
                onLoad && onLoad(false);
                return;
            }

            if (this._ios_isvideo_move) {
                console.log("当前还有未播放完得视频");
                self.sendVideopush(0, void_index);
                onLoad && onLoad(false);
                return;
            }

            // 创建回调接口 iswin true 成功   false 失败
            cc.LY_SDK_Native_createVideo_Callback = function (iswin) {
                console.log("start 创建回调 cc.LY_SDK_Native_createVideo_Callback  iswin = " + iswin);
                if (iswin == "true") {
                    console.log("LY_SDK_Native_createVideo_Callback  true");
                    jsb.reflection.callStaticMethod(poly_sdk_config.ios.interface_path, "showAdRewardinRootViewScreenId");
                } else {
                    self.sendVideopush(0, void_index);
                    console.log("LY_SDK_Native_createVideo_Callback  false");
                    self._ios_isvideo_move = false;
                    console.log("self._ios_isvideo_move = " + self._ios_isvideo_move);
                }
                onLoad && onLoad(iswin);
            };

            // 显示回调接口 iswin true 成功   false 失败
            cc.LY_SDK_Native_showVideo_Callback = function (iswin) {
                console.log("start 显示回调 cc.LY_SDK_Native_showVideo_Callback  iswin = " + iswin);
                self._ios_isvideo_move = false;
                if (iswin == "true") {
                    console.log("LY_SDK_Native_showVideo_Callback  true");
                    self.sendVideopush(1, void_index);
                    onSuccess && onSuccess();
                } else {
                    console.log("LY_SDK_Native_showVideo_Callback  false");
                    self.sendVideopush(2, void_index);
                    onCancel && onCancel();
                }
                console.log("self._ios_isvideo_move = " + self._ios_isvideo_move);
            };

            try {
                this._ios_isvideo_move = true;
                console.log("开始调用 ios creatAdRewardinRootViewScreenId  voidid = " + voidid);
                jsb.reflection.callStaticMethod(poly_sdk_config.ios.interface_path, "creatAdRewardinRootViewScreenId:", voidid);
            } catch (error) {
                self.sendVideopush(0, void_index);
                console.log("调用 ios creatAdRewardinRootViewScreenId error = " + JSON.stringify(error));
                this._ios_isvideo_move = false;
            }
        };

        this.createRewardedVideoAd_android = function (void_index, onSuccess, onCancel, onLoad) {
            var voidid = poly_sdk_config.android.video_id[void_index];
            console.log("createRewardedVideoAd_android  voidid = " + voidid + "    this._android_isvideo_move = " + this._android_isvideo_move);
            var self = this;
            if (!voidid || voidid == "") {
                self.sendVideopush(0, void_index);
                console.log("当前 android voidid  为空");
                onLoad && onLoad(false);
                return;
            }

            if (this._android_isvideo_move) {
                self.sendVideopush(0, void_index);
                console.log("当前还有未播放完得视频");
                onLoad && onLoad(false);
                return;
            }

            console.log("我是最新的代码！！！");
            cc.LY_SDK_Native_createVideo_Callback = function (iswin) {
                console.log("start 创建回调 cc.LY_SDK_Native_createVideo_Callback  iswin = " + iswin);
                if (iswin == "true") {
                    console.log("LY_SDK_Native_createVideo_Callback  true");
                    jsb.reflection.callStaticMethod(poly_sdk_config.android.interface_path, "showRewardedVideoAd", "()V");
                } else {
                    self.sendVideopush(0, void_index);
                    console.log("LY_SDK_Native_createVideo_Callback  false");
                    self._android_isvideo_move = false;
                    console.log("self._android_isvideo_move = " + self._android_isvideo_move);
                }
                onLoad && onLoad(iswin);
            };

            cc.LY_SDK_Native_showVideo_Callback = function (iswin) {
                console.log("start 显示回调 cc.LY_SDK_Native_showVideo_Callback  iswin = " + iswin);
                self._android_isvideo_move = false;
                if (iswin == "true") {
                    self.sendVideopush(1, void_index);
                    console.log("LY_SDK_Native_showVideo_Callback  true");
                    onSuccess && onSuccess();
                } else {
                    self.sendVideopush(2, void_index);
                    console.log("LY_SDK_Native_showVideo_Callback  false");
                    onCancel && onCancel();
                }
                console.log("self._android_isvideo_move = " + self._android_isvideo_move);
            };

            try {
                this._android_isvideo_move = true;
                console.log("开始调用 android createRewardedVideoAd  voidid = " + voidid);
                jsb.reflection.callStaticMethod(poly_sdk_config.android.interface_path, "createRewardedVideoAd", "(Ljava/lang/String;)V", voidid);
            } catch (error) {
                self.sendVideopush(0, void_index);
                console.log("调用 android createRewardedVideoAd error = " + JSON.stringify(error));
                this._android_isvideo_move = false;
            }
        };

        this.createRewardedVideoAd_wangmai = function (void_index, onSuccess, onCancel, onLoad) {
            var _this = this;

            var self = this;

            WMAds.showAd({
                adType: 1,
                engine: 'Cocos',
                onSuccess: function onSuccess() {
                    console.log("onSuccess");
                    onLoad && onLoad(true);
                },
                onClose: function onClose() {
                    console.log("onClose");
                    _this.sendVideopush(1, void_index);
                    onSuccess && onSuccess();
                },
                onVideoComplete: function onVideoComplete() {
                    console.log("onVideoComplete");
                },
                onNoAd: function onNoAd() {
                    console.log("onNoAd");
                    _this.sendVideopush(0, void_index);
                    onLoad && onLoad(false);
                }
            });
        };

        this.createRewardedVideoAd_juzhang = function (void_index, onSuccess, onCancel, onLoad) {
            // res为播放状态1为成功，0为失败
            var adtype = Number(poly_sdk_config.juzhang.adType.vertical_Ad);
            console.log("adtype" + adtype);
            cc.LieYingSDK.PolySDK.adjuzsdk.jsOpenAD(adtype, function (res) {
                if (res.status == 1) {
                    console.log('广告开始播放');
                    onLoad && onLoad(true);
                    if (res.playStatus == 1) {
                        console.log('广告播放完毕');
                        self.sendVideopush(1, void_index);
                        onSuccess();
                    } else {
                        console.log('广告pending');
                        self.sendVideopush(2, void_index);
                        onCancel();
                    }
                } else {
                    console.log('广告播放失败');
                    self.sendVideopush(0, void_index);
                    onLoad && onLoad(false);
                }
            });
        };

        /**
         * isend  0 : 调用失败   1：看完    2: 没看完
         * void_index 广告索引
         */
        this.sendVideopush = function (isend, void_index, callback) {

            if (!poly_sdk_config || typeof poly_sdk_config == "undefined" || !poly_sdk_config.runSDK || typeof poly_sdk_config.runSDK == "undefined") {
                console.log("聚合SDK 初始化失败 请联系管理人员  By sendBannerpush");
                return;
            }

            var channel_id = poly_sdk_config[poly_sdk_config.runSDK].type;
            var game_id = poly_sdk_config.game_id;
            var token = poly_sdk_config.HTTPtoken;
            var display_id = poly_sdk_config.userLoginData.display_id || "000000";
            var conf_video = poly_sdk_config[poly_sdk_config.runSDK].video_id;
            var voidid = conf_video ? conf_video[void_index] || poly_sdk_config.default_video_id : poly_sdk_config.default_video_id;

            if (typeof channel_id == "undefined" || channel_id == null || typeof game_id == "undefined" || game_id == null || typeof display_id == "undefined" || display_id == null || typeof token == "undefined" || token == null || typeof isend == "undefined" || isend == null || typeof voidid == "undefined" || voidid == null) {

                console.log("sendBannerpush sendRequest Err : channel_id || game_id || display_id || token  ||  isend || voidid  参数为空或错误");
                callback && callback(false, null);
                return;
            }

            var resData = {
                token: token,
                game_id: game_id,
                channel_id: channel_id,
                display_id: display_id,
                isend: isend,
                advert_id: voidid,
                address_id: void_index
            };

            tools.sendRequest(poly_sdk_config.videopushUrl, resData, function (data) {
                if (data && data.errorcode == 200) {

                    console.log("sendBannerpush sendRequest success");
                    callback && callback(true, data);
                } else {
                    console.log("sendBannerpush sendRequest failure  data = " + JSON.stringify(data));
                    callback && callback(false, data);
                }
            });
        };

        return instance = this;
    };

    return VideoAd;
}();

/**
 * NativeAd 原生广告聚合
 * 
 * onSuccess (function) //成功回调
 * onCancel  (function) //失败回调
 * createNativeAd(voidid,onSuccess,onCancel)
 */
var NativeAd = function () {
    var instance;
    var NativeAd = function NativeAd() {
        if (instance) {
            return instance;
        }

        var self = this;
        this.createNativeAd = function (native_index, onSuccess, onCancel) {
            console.log("createRewardedVideoAd start runSDK = " + poly_sdk_config.runSDK);
            switch (poly_sdk_config.runSDK) {
                case poly_sdk_config.sdk_key_qq:
                    if (typeof qq == "undefined") {
                        console.log("QQ qq is undefined");
                        return;
                    }

                    break;
                case poly_sdk_config.sdk_key_tt:
                    if (typeof tt == "undefined") {
                        console.log("TouTiao tt is undefined");
                        return;
                    }

                    break;
                case poly_sdk_config.sdk_key_vivo:
                    if (typeof qg == "undefined") {
                        console.log("vivo qg is undefined");
                        return;
                    }
                    this.createNativeAd_vivo(native_index, onSuccess, onCancel);
                    break;
                case poly_sdk_config.sdk_key_xiaomi:
                    if (typeof qg == "undefined") {
                        console.log("xiaomi qg is undefined");
                        return;
                    }

                    break;
                case poly_sdk_config.sdk_key_baidu:
                    if (typeof swan == "undefined") {
                        console.log("baidu swan is undefined");
                        return;
                    }

                    break;
                case poly_sdk_config.sdk_key_oppo:
                    if (typeof qg == "undefined") {
                        console.log("oppo qg is undefined");
                        return;
                    }

                    break;
                case poly_sdk_config.sdk_key_weixin:
                    if (typeof wx == "undefined") {
                        console.log("WX wx is undefined");
                        return;
                    }

                    break;
                case poly_sdk_config.sdk_key_qtt:
                    if (typeof qttGame == "undefined") {
                        console.log("qtt qttGame is undefined");
                        return;
                    }

                    break;
                case poly_sdk_config.sdk_key_jikewan:
                    if (typeof AdSDK == "undefined") {
                        console.log("即刻玩 AdSDK is undefined");
                        return;
                    }

                    break;
                case poly_sdk_config.sdk_key_4399:
                    if (typeof h5api == "undefined") {
                        console.log("4399 h5api is undefined");
                        return;
                    }

                    break;
                default:
                    onLoad && onLoad(false);
                    console.log(poly_sdk_config.runSDK + " is not undefined By createNativeAd");
            }
        };

        this.createNativeAd_vivo = function (native_index, onSuccess, onCancel) {
            // 错误的回调，creat的是在onerror里面，load，show等的回调在自己的catch里面

            var nativeid = poly_sdk_config.vivo.native_id[native_index];
            var self = this;

            if (!nativeid || nativeid == "") {
                console.log("当前 vivo nativeid  为空");
                onCancel && onCancel();
                return;
            }

            var nativeAd = void 0;
            var nativeCurrentAdList = void 0;
            function init() {
                nativeAd = qg.createNativeAd({
                    posId: nativeid
                });
                nativeAd.onLoad(function (res) {
                    qg.showToast({
                        message: "原生广告加载完成"
                    });
                    console.log('原生广告加载完成', JSON.stringify(res));
                    if (res && res.adList) {
                        nativeCurrentAdList = res.adList.pop();
                        nativeAd.reportAdClick({ adId: nativeCurrentAdList.adId.toString() });
                        onSuccess && onSuccess();
                    }
                });
                nativeAd.onError(function (err) {
                    switch (err.errCode) {
                        case -3:
                            console.log("原生广告加载失败---调用太频繁", JSON.stringify(err));
                            qg.showToast({
                                message: "原生广告加载失败---调用太频繁"
                            });
                            onCancel && onCancel();
                            break;
                        default:
                            // 参考 https://minigame.vivo.com.cn/documents/#/lesson/open-ability/ad?id=广告错误码信息 对错误码做分类处理
                            console.log("原生广告展示失败");
                            console.log(JSON.stringify(err));
                            qg.showToast({
                                message: "\u539F\u751F\u5E7F\u544A\u5C55\u793A\u5931\u8D25"
                            });
                            onCancel && onCancel();
                            break;
                    }
                });
            }

            function load() {
                var adLoad = nativeAd.load();
                adLoad && adLoad.then(function () {
                    qg.showToast({
                        message: '加载成功'
                    });
                    return;
                }).catch(function (err) {
                    console.log('加载失败', JSON.stringify(err));
                    onCancel && onCancel();
                });
            }

            init();
            load();
        };

        return instance = this;
    };

    return NativeAd;
}();

/**
 * Share 分享聚合

 * onSuccess (function) //成功回调
 * onFail    (function) //失败回调
 * 
 * share(onSuccess,onFail, shareTitle, shareImgUrl)
 */

var Share = function () {
    var instance;
    var Share = function Share() {
        if (instance) {
            return instance;
        }

        var self = this;
        this.share = function (onSuccess, onFail, shareTitle, shareImgUrl) {

            console.log("Share start runSDK = " + poly_sdk_config.runSDK + "  shareTitle = " + shareTitle + "  shareImgUrl = " + shareImgUrl);
            var shareTitle = shareTitle != undefined ? shareTitle : poly_sdk_config.shareTitle;
            var shareImgUrl = shareImgUrl != undefined ? shareImgUrl : poly_sdk_config.shareImgUrl;

            switch (poly_sdk_config.runSDK) {

                case poly_sdk_config.sdk_key_qq:
                    if (typeof qq == "undefined") {
                        console.log("QQ qq is undefined");
                        return;
                    }
                    this.shareAppMessage_qq(onSuccess, onFail, shareTitle, shareImgUrl);
                    break;
                case poly_sdk_config.sdk_key_tt:
                    if (typeof tt == "undefined") {
                        console.log("TouTiao tt is undefined");
                        return;
                    }
                    this.shareAppMessage_tt(onSuccess, onFail, shareTitle, shareImgUrl);
                    break;
                case poly_sdk_config.sdk_key_vivo:
                    if (typeof qg == "undefined") {
                        console.log("vivo qg is undefined");
                        return;
                    }

                    break;
                case poly_sdk_config.sdk_key_xiaomi:
                    if (typeof qg == "undefined") {
                        console.log("xiaomi qg is undefined");
                        return;
                    }
                    break;
                case poly_sdk_config.sdk_key_baidu:
                    if (typeof swan == "undefined") {
                        console.log("baidu swan is undefined");
                        return;
                    }
                    this.shareAppMessage_baidu(onSuccess, onFail, shareTitle, shareImgUrl);
                    break;
                case poly_sdk_config.sdk_key_oppo:
                    if (typeof qg == "undefined") {
                        console.log("oppo qg is undefined");
                        return;
                    }
                    break;
                case poly_sdk_config.sdk_key_weixin:
                    if (typeof wx == "undefined") {
                        console.log("WX wx is undefined");
                        return;
                    }
                    this.shareAppMessage_wx(onSuccess, onFail, shareTitle, shareImgUrl);
                    break;
                default:
                    console.log(poly_sdk_config.runSDK + " is not undefined By Share");
            }
        };

        this.shareAppMessage_tt = function (_success, _fail, shareTitle, shareImgUrl) {
            if (typeof tt != "undefined") {
                self._isShare = true;
                tt.shareAppMessage({
                    title: shareTitle,
                    imageUrl: shareImgUrl,
                    success: function success(data) {
                        console.log(data);
                        self._isShare = false;
                        if (_success) {
                            _success();
                        }
                    },
                    fail: function fail(data) {
                        console.log(data);
                        self._isShare = false;
                        if (_fail) {
                            _fail();
                        }
                    }
                });
            } else {
                console.log("tt is undefined");
            }
        };

        this.shareAppMessage_qq = function (_success2, _fail2, shareTitle, shareImgUrl) {
            if (typeof wx != "undefined") {
                self._isShare = true;

                wx.shareAppMessage({
                    title: shareTitle,
                    imageUrl: shareImgUrl,
                    success: function success(data) {
                        console.log(data);
                        self._isShare = false;
                        if (_success2) {
                            _success2();
                        }
                    },
                    fail: function fail(data) {
                        console.log(data);
                        self._isShare = false;
                        if (_fail2) {
                            _fail2();
                        }
                    }
                });
            }
        };

        this.shareAppMessage_baidu = function (_success3, _fail3, shareTitle, shareImgUrl) {
            if (typeof swan != "undefined") {
                self._isShare = true;
                swan.shareAppMessage({
                    title: shareTitle,
                    imageUrl: shareImgUrl,
                    success: function success(data) {
                        console.log(data);
                        self._isShare = false;

                        cc.LieYingSDK.DAO.SystemDAO.sharetask();

                        if (_success3) {
                            _success3();
                        }
                    },
                    fail: function fail(data) {
                        console.log(data);
                        self._isShare = false;
                        if (_fail3) {
                            _fail3();
                        }
                    }
                });
            } else {
                console.log("swan is undefined");
            }
        };

        this.shareAppMessage_wx = function (success, fail, shareTitle, shareImgUrl) {
            if (typeof wx != "undefined") {
                self._isShare = true;
                if (success) {
                    success();
                }
                wx.shareAppMessage({
                    title: shareTitle,
                    imageUrl: shareImgUrl
                });
            }
        };

        return instance = this;
    };

    return Share;
}();

/**
 * 录像
 * start(callback)
 * stop(callback)
 */
var Recorder = function () {
    var instance;
    var Recorder = function Recorder() {
        if (instance) {
            return instance;
        }
        this.duration = 20; //录制时间
        this.isStart = false; //是否开始录制  false 未开始  true 已开始
        this.isCanOverVideo = false; //是否可以结束录制
        this.minVideoTime = 5000; //最低录制时间 单位 ms
        this.tips = "录制时间最少5秒哦！"; //提示
        this.showToastTime = 2000; //头条消息框显示时间 单位ms
        this.isinitEvent = false;
        this.isOpenShareVideo = false;
        var self = this;
        this.VideoPath = null;

        this.stop = function (callback) {
            console.log("录屏结束");
            this.videoPath = null;
            switch (poly_sdk_config.runSDK) {

                case poly_sdk_config.sdk_key_qq:
                    if (typeof qq == "undefined") {
                        console.log("QQ qq is undefined");
                        return;
                    }
                    break;
                case poly_sdk_config.sdk_key_tt:
                    if (typeof tt == "undefined") {
                        console.log("TouTiao tt is undefined");
                        return;
                    }
                    this.stop_tt(callback);
                    break;
                case poly_sdk_config.sdk_key_vivo:
                    if (typeof qg == "undefined") {
                        console.log("vivo qg is undefined");
                        return;
                    }

                    break;
                case poly_sdk_config.sdk_key_xiaomi:
                    if (typeof qg == "undefined") {
                        console.log("xiaomi qg is undefined");
                        return;
                    }
                    break;
                case poly_sdk_config.sdk_key_baidu:
                    if (typeof swan == "undefined") {
                        console.log("baidu swan is undefined");
                        return;
                    }
                    break;
                case poly_sdk_config.sdk_key_oppo:
                    if (typeof qg == "undefined") {
                        console.log("oppo qg is undefined");
                        return;
                    }
                    break;
                default:
                    console.log(poly_sdk_config.runSDK + " is not undefined By Share");
            }
        };

        this.start = function (callback) {
            console.log("录屏开始");
            switch (poly_sdk_config.runSDK) {

                case poly_sdk_config.sdk_key_qq:
                    if (typeof qq == "undefined") {
                        console.log("QQ qq is undefined");
                        return;
                    }
                    break;
                case poly_sdk_config.sdk_key_tt:
                    if (typeof tt == "undefined") {
                        console.log("TouTiao tt is undefined");
                        return;
                    }
                    this.start_tt(callback);
                    break;
                case poly_sdk_config.sdk_key_vivo:
                    if (typeof qg == "undefined") {
                        console.log("vivo qg is undefined");
                        return;
                    }

                    break;
                case poly_sdk_config.sdk_key_xiaomi:
                    if (typeof qg == "undefined") {
                        console.log("xiaomi qg is undefined");
                        return;
                    }
                    break;
                case poly_sdk_config.sdk_key_baidu:
                    if (typeof swan == "undefined") {
                        console.log("baidu swan is undefined");
                        return;
                    }
                    break;
                case poly_sdk_config.sdk_key_oppo:
                    if (typeof qg == "undefined") {
                        console.log("oppo qg is undefined");
                        return;
                    }
                    break;
                default:
                    console.log(poly_sdk_config.runSDK + " is not undefined By Share");
            }
        };

        this.initEvent = function (callback) {
            if (this.isinitEvent) return;
            var recorder = tt.getGameRecorderManager();
            recorder.onStop(function (res) {

                self.isStart = false;

                if (!self.isOpenShareVideo) {
                    self.videoPath = res.videoPath;
                    console.log("录屏结束 ：" + res.videoPath);
                }

                try {
                    callback && callback();
                } catch (error) {}

                if (self.isOpenShareVideo) {
                    self.isOpenShareVideo = false;

                    recorder.clipVideo({
                        path: res.videoPath,
                        timeRange: [self.duration, 0],
                        success: function success(res) {
                            console.log("clipVideo  success");
                            self.videoPath = res.videoPath;
                            console.log(res.videoPath); // 生成最后10秒的视频

                            self.shareVideo_tt(res.videoPath);
                        },
                        fail: function fail(e) {

                            console.log('录屏失败 ! : ' + JSON.stringify(e));

                            tt.showToast({
                                title: '录屏失败！',
                                duration: self.showToastTime,
                                icon: "none",
                                success: function success(res) {
                                    console.log("" + res);
                                },
                                fail: function fail(res) {
                                    console.log("showToast\u8C03\u7528\u5931\u8D25");
                                }
                            });
                        }
                    });
                }
            });

            recorder.onStart(function (res) {
                console.log('录屏开始');
                self.isStart = true;
                self.isCanOverVideo = false;
                try {
                    callback && callback();
                } catch (error) {}
                setTimeout(function () {
                    self.isCanOverVideo = true;
                    console.log("scheduleOnce = " + self.isCanOverVideo);
                }, self.minVideoTime);
            });
        };

        this.stop_tt = function (callback) {

            if (!self.isCanOverVideo) {
                tt.showToast({
                    title: self.tips,
                    duration: self.showToastTime,
                    icon: "none",
                    success: function success(res) {
                        console.log("" + res);
                    },
                    fail: function fail(res) {
                        console.log("showToast\u8C03\u7528\u5931\u8D25");
                    }
                });
                return;
            }
            self.isOpenShareVideo = true;
            this.initEvent(callback);
            var recorder = tt.getGameRecorderManager();
            recorder.stop();
        };

        this.start_tt = function (callback) {

            this.initEvent(callback);
            var recorder = tt.getGameRecorderManager();
            recorder.start({
                duration: self.duration
            });
        };

        this.shareVideo_tt = function (videoPath) {
            this.videoPath = null;
            var self = this;
            if (typeof tt != "undefined") {
                console.log('shareVideo_tt  videoPath = ' + videoPath);
                tt.shareAppMessage({
                    channel: 'video',
                    extra: {
                        videoPath: videoPath // 可用录屏得到的视频地址
                    },
                    success: function success() {
                        console.log('分享视频成功');
                    },
                    fail: function fail(e) {
                        console.log('分享视频失败 ! : ' + JSON.stringify(e));
                        if (e.errMsg == "shareAppMessage:cancel cancel" || e.errMsg == "shareAppMessage:cancel") {
                            tt.showToast({
                                title: '分享视频失败 ！',
                                duration: self.showToastTime,
                                icon: "none",
                                success: function success(res) {
                                    console.log("" + res);
                                },
                                fail: function fail(res) {
                                    console.log("showToast\u8C03\u7528\u5931\u8D25");
                                }
                            });
                        } else {
                            tt.showToast({
                                title: self.tips,
                                duration: self.showToastTime,
                                icon: "none",
                                success: function success(res) {
                                    console.log("" + res);
                                },
                                fail: function fail(res) {
                                    console.log("showToast\u8C03\u7528\u5931\u8D25");
                                }
                            });
                        }
                    }
                });
            } else {
                console.log("tt is undefined");
            }
        };

        return instance = this;
    };

    return Recorder;
}();

/**
 * 剪贴板
 */
var Clipboard = function () {
    var instance;
    var Clipboard = function Clipboard() {
        if (instance) {
            return instance;
        }

        var self = this;
        this.setClipboardData = function (txt, onSuccess, onFail) {

            switch (poly_sdk_config.runSDK) {

                case poly_sdk_config.sdk_key_qq:
                    if (typeof qq == "undefined") {
                        console.log("QQ qq is undefined");
                        onFail && onFail();
                        return;
                    }

                    break;
                case poly_sdk_config.sdk_key_tt:
                    if (typeof tt == "undefined") {
                        console.log("TouTiao tt is undefined");
                        onFail && onFail();
                        return;
                    }
                    this.setClipboardData_tt(txt, onSuccess, onFail);
                    break;
                case poly_sdk_config.sdk_key_vivo:
                    if (typeof qg == "undefined") {
                        console.log("vivo qg is undefined");
                        onFail && onFail();
                        return;
                    }

                    break;
                case poly_sdk_config.sdk_key_xiaomi:
                    if (typeof qg == "undefined") {
                        console.log("xiaomi qg is undefined");
                        onFail && onFail();
                        return;
                    }
                    break;
                case poly_sdk_config.sdk_key_baidu:
                    if (typeof swan == "undefined") {
                        console.log("baidu swan is undefined");
                        onFail && onFail();
                        return;
                    }
                    this.setClipboardData_baidu(txt, onSuccess, onFail);
                    break;
                case poly_sdk_config.sdk_key_oppo:
                    if (typeof qg == "undefined") {
                        console.log("oppo qg is undefined");
                        onFail && onFail();
                        return;
                    }
                    break;
                case poly_sdk_config.sdk_key_weixin:
                    if (typeof qq == "undefined") {
                        console.log("WX wx is undefined");
                        onFail && onFail();
                        return;
                    }

                    break;
                case poly_sdk_config.sdk_key_h5:
                    this.setClipboardData_h5(txt, onSuccess, onFail);
                    break;

                default:
                    console.log(poly_sdk_config.runSDK + " is not undefined By Share");
            }
        };

        this.getClipboardData = function (onSuccess, onFail) {

            switch (poly_sdk_config.runSDK) {

                case poly_sdk_config.sdk_key_qq:
                    if (typeof qq == "undefined") {
                        console.log("QQ qq is undefined");
                        onFail && onFail();
                        return;
                    }

                    break;
                case poly_sdk_config.sdk_key_tt:
                    if (typeof tt == "undefined") {
                        console.log("TouTiao tt is undefined");
                        onFail && onFail();
                        return;
                    }
                    this.getClipboardData_tt(onSuccess, onFail);
                    break;
                case poly_sdk_config.sdk_key_vivo:
                    if (typeof qg == "undefined") {
                        console.log("vivo qg is undefined");
                        onFail && onFail();
                        return;
                    }

                    break;
                case poly_sdk_config.sdk_key_xiaomi:
                    if (typeof qg == "undefined") {
                        console.log("xiaomi qg is undefined");
                        onFail && onFail();
                        return;
                    }
                    break;
                case poly_sdk_config.sdk_key_baidu:
                    if (typeof swan == "undefined") {
                        console.log("baidu swan is undefined");
                        onFail && onFail();
                        return;
                    }
                    this.getClipboardData_baidu(onSuccess, onFail);
                    break;
                case poly_sdk_config.sdk_key_oppo:
                    if (typeof qg == "undefined") {
                        console.log("oppo qg is undefined");
                        onFail && onFail();
                        return;
                    }
                    break;
                case poly_sdk_config.sdk_key_weixin:
                    if (typeof qq == "undefined") {
                        console.log("WX wx is undefined");
                        onFail && onFail();
                        return;
                    }

                    break;
                default:
                    onFail && onFail();
                    console.log(poly_sdk_config.runSDK + " is not undefined By Share");
            }
        };

        this.setClipboardData_tt = function (txt, onSuccess, onFail) {
            tt.setClipboardData({
                data: txt,
                success: function success(res) {
                    console.log("setClipboardData\u8C03\u7528\u6210\u529F");
                    onSuccess && onSuccess();
                },
                fail: function fail(res) {
                    console.log("setClipboardData\u8C03\u7528\u5931\u8D25");
                    onFail && onFail();
                }
            });
        };

        this.getClipboardData_tt = function (onSuccess, onFail) {
            tt.getClipboardData({
                success: function success(res) {
                    console.log("" + res.data);
                    onSuccess && onSuccess();
                },
                fail: function fail(res) {
                    console.log("getClipboardData\u8C03\u7528\u5931\u8D25");
                    onFail && onFail();
                }
            });
        };

        this.setClipboardData_baidu = function (txt, onSuccess, onFail) {
            swan.setClipboardData({
                data: txt,
                success: function success(res) {
                    console.log("setClipboardData\u8C03\u7528\u6210\u529F");
                    onSuccess && onSuccess();
                },
                fail: function fail(res) {
                    console.log("setClipboardData\u8C03\u7528\u5931\u8D25");
                    onFail && onFail();
                }
            });
        };

        this.getClipboardData_baidu = function (onSuccess, onFail) {
            swan.getClipboardData({
                success: function success(res) {
                    console.log("" + res.data);
                    onSuccess && onSuccess();
                },
                fail: function fail(res) {
                    console.log("getClipboardData\u8C03\u7528\u5931\u8D25");
                    onFail && onFail();
                }
            });
        };

        this.setClipboardData_h5 = function (txt, onSuccess, onFail) {
            console.log('复制');

            var input = txt;
            var el = document.createElement('textarea');
            el.value = input;
            el.setAttribute('readonly', '');
            el.style.contain = 'strict';
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            el.style.fontSize = '12pt'; // Prevent zooming on iOS

            var selection = getSelection();
            var originalRange = false;
            if (selection.rangeCount > 0) {
                originalRange = selection.getRangeAt(0);
            }
            document.body.appendChild(el);
            el.select();
            el.selectionStart = 0;
            el.selectionEnd = input.length;

            var success = false;
            try {
                success = document.execCommand('copy');
            } catch (err) {}

            document.body.removeChild(el);

            if (originalRange) {
                selection.removeAllRanges();
                selection.addRange(originalRange);
            }
            if (success) {
                onSuccess && onSuccess();
            } else {
                onFail && onFail();
            }
            return success;
        };

        return instance = this;
    };

    return Clipboard;
}();

/**
 * 
 * 打开另一个小程序。
 * @param {*} callback 
 */

var Navigate = function Navigate() {
    var instance;
    var Navigate = function Navigate() {
        if (instance) {
            return instance;
        }
        var self = this;

        this.navigateToMiniProgram = function (key, path, extraData, onSuccess, onFail) {
            console.log("navigateToMiniProgram start runSDK = " + poly_sdk_config.runSDK);
            switch (poly_sdk_config.runSDK) {
                case poly_sdk_config.sdk_key_qq:
                    if (typeof qq == "undefined") {
                        console.log("QQ qq is undefined");
                        return;
                    }

                    break;
                case poly_sdk_config.sdk_key_tt:
                    if (typeof tt == "undefined") {
                        console.log("TouTiao tt is undefined");
                        return;
                    }

                    break;
                case poly_sdk_config.sdk_key_vivo:
                    if (typeof qg == "undefined") {
                        console.log("vivo qg is undefined");
                        return;
                    }

                    break;
                case poly_sdk_config.sdk_key_xiaomi:
                    if (typeof qg == "undefined") {
                        console.log("xiaomi qg is undefined");
                        return;
                    }

                    break;
                case poly_sdk_config.sdk_key_baidu:
                    if (typeof swan == "undefined") {
                        console.log("baidu swan is undefined");
                        return;
                    }
                    this.navigateToMiniProgram_baidu(key, path, extraData, onSuccess, onFail);
                    break;
                case poly_sdk_config.sdk_key_oppo:
                    if (typeof qg == "undefined") {
                        console.log("oppo qg is undefined");
                        return;
                    }
                    this.navigateToMiniProgram_oppo(key, path, extraData, onSuccess, onFail);
                    break;
                case poly_sdk_config.sdk_key_weixin:
                    if (typeof wx == "undefined") {
                        console.log("WX wx is undefined");
                        return;
                    }

                    break;
                case poly_sdk_config.sdk_key_qtt:
                    if (typeof qttGame == "undefined") {
                        console.log("qtt qttGame is undefined");
                        return;
                    }

                    break;
                case poly_sdk_config.sdk_key_jikewan:
                    if (typeof AdSDK == "undefined") {
                        console.log("即刻玩 AdSDK is undefined");
                        return;
                    }

                    break;
                case poly_sdk_config.sdk_key_4399:
                    if (typeof h5api == "undefined") {
                        console.log("4399 h5api is undefined");
                        return;
                    }

                    break;
                default:
                    onFail && onFail();
                    console.log(poly_sdk_config.runSDK + " is not undefined By createNativeAd");
            }
        };

        this.navigateToMiniProgram_baidu = function (key, path, extraData, onSuccess, onFail) {
            swan.navigateToMiniProgram({
                appKey: key, // 要打开的小程序 App Key
                // path        : path,
                // extraData   : extraData,
                success: function success(res) {
                    onSuccess && onSuccess();
                    console.log('navigateToMiniProgram success', res);
                },
                fail: function fail(err) {
                    onFail && onFail();
                    console.log('navigateToMiniProgram fail', err);
                }
            });
        };

        this.navigateToMiniProgram_oppo = function (key, path, extraData, onSuccess, onFail) {
            // swan.navigateToSmartProgram({
            //     pkgName     : key, // 要打开的小游戏包名
            //     path        : path,
            //     extraData   : extraData,
            //     success: function(){
            //         onSuccess&&onSuccess();
            //     },
            //     fail: function(res){
            //         console.log(JSON.stringify(res));
            //         onFail&&onFail();
            //     }
            // });
        };

        return instance = this;
    };
    return Navigate;
};

/**
 * 获取 logo 图片
 * @param {*} callback 
 */
var getLogoIMG = function getLogoIMG(callback) {

    if (!poly_sdk_config || typeof poly_sdk_config == "undefined" || !poly_sdk_config.runSDK || typeof poly_sdk_config.runSDK == "undefined") {
        console.log("聚合SDK 初始化失败 请联系管理人员  By sendBannerpush");
        return;
    }

    var channel_id = poly_sdk_config[poly_sdk_config.runSDK].type;
    var game_id = poly_sdk_config.game_id;

    if (typeof channel_id == "undefined" || channel_id == null || typeof game_id == "undefined" || game_id == null) {

        console.log("sendBannerpush sendRequest Err : channel_id || game_id  参数为空或错误");
        callback && callback(false, null);
        return;
    }

    var resData = {
        game_id: game_id,
        channel_id: channel_id
    };

    tools.sendRequest(poly_sdk_config.screenimgUrl, resData, function (data) {
        if (!data) {
            console.log("getLogoIMG sendRequest failure  Server ERR  data is null  data = " + data);
            callback && callback(false, null);
            return;
        }
        if (data.code == 200) {
            console.log("getLogoIMG sendRequest success data = " + JSON.stringify(data));
            callback && callback(true, data.data);
        } else {
            console.log("getLogoIMG sendRequest failure  data = " + JSON.stringify(data));
            callback && callback(false, null);
        }
    });
};

/**
 * 平台回调
 * vidioEventCallback    广告回调
 * shareEventCallback    分享回调
 * otherEventCallback    正常回调
 */
var platformEventCallback = function platformEventCallback(vidioEventCallback, shareEventCallback, otherEventCallback) {
    switch (poly_sdk_config.runSDK) {
        case poly_sdk_config.sdk_key_qq:
            if (typeof qq != "undefined") {
                if (poly_sdk_config.qq.video_id.length != 0) {
                    vidioEventCallback();
                } else {
                    shareEventCallback();
                }
            } else {
                otherEventCallback();
            }
            break;
        case poly_sdk_config.sdk_key_tt:
            if (typeof tt != "undefined") {
                if (poly_sdk_config.tt.video_id.length != 0) {
                    vidioEventCallback();
                } else {
                    shareEventCallback();
                }
            } else {
                otherEventCallback();
            }
            break;
        case poly_sdk_config.sdk_key_weixin:
            if (typeof wx != "undefined") {
                if (poly_sdk_config.weixin.video_id.length != 0) {
                    vidioEventCallback();
                } else {
                    shareEventCallback();
                }
            } else {
                otherEventCallback();
            }
            break;
        case poly_sdk_config.sdk_key_baidu:
            if (typeof swan != "undefined") {
                if (poly_sdk_config.baidu.video_id.length != 0) {
                    vidioEventCallback();
                } else {
                    shareEventCallback();
                }
            } else {
                otherEventCallback();
            }
            break;
        case poly_sdk_config.sdk_key_vivo:
            if (typeof qg != "undefined") {
                if (poly_sdk_config.vivo.video_id.length != 0) {
                    vidioEventCallback();
                } else {
                    otherEventCallback();
                }
            } else {
                otherEventCallback();
            }
            break;
        case poly_sdk_config.sdk_key_oppo:
            if (typeof qg != "undefined") {
                if (poly_sdk_config.oppo.video_id.length != 0) {
                    vidioEventCallback();
                } else {
                    otherEventCallback();
                }
            } else {
                otherEventCallback();
            }
            break;
        case poly_sdk_config.sdk_key_xiaomi:
            if (typeof qg != "undefined") {
                if (poly_sdk_config.xiaomi.video_id.length != 0) {
                    vidioEventCallback();
                } else {
                    otherEventCallback();
                }
            } else {
                otherEventCallback();
            }
            break;
        case poly_sdk_config.sdk_key_4399:
            if (typeof h5api != "undefined") {
                PolySDK.VideoAd.getVideoAdNumber(function (remain) {
                    if (remain == 0) {
                        otherEventCallback();
                    } else {
                        vidioEventCallback();
                    }
                });
            } else {
                otherEventCallback();
            }
            break;
        case poly_sdk_config.sdk_key_qtt:
            if (typeof qttGame != "undefined") {
                vidioEventCallback();
            } else {
                otherEventCallback();
            }
            break;
        case poly_sdk_config.sdk_key_jikewan:
            if (typeof AdSDK != "undefined") {
                if (poly_sdk_config.jikewan.video_adId.length != 0) {
                    vidioEventCallback();
                } else {
                    otherEventCallback();
                }
            } else {
                otherEventCallback();
            }
            break;
        case poly_sdk_config.sdk_key_ios:
            if (cc || cc.sys.isNative || cc.sys.os == cc.sys.OS_IOS) {
                if (poly_sdk_config.ios.video_id.length != 0) {
                    vidioEventCallback();
                } else {
                    otherEventCallback();
                }
            } else {
                otherEventCallback();
            }
            break;
        case poly_sdk_config.sdk_key_android:
            if (cc || cc.sys.isNative || cc.sys.os == cc.sys.OS_ANDROID) {
                if (poly_sdk_config.android.video_id.length != 0) {
                    vidioEventCallback();
                } else {
                    otherEventCallback();
                }
            } else {
                otherEventCallback();
            }
            break;
        case poly_sdk_config.wangmai:
            if (typeof WMAds != "undefined") {
                vidioEventCallback();
            } else {
                otherEventCallback();
            }
            break;
        case poly_sdk_config.juzhang:
            if (cc.LieYingSDK.PolySDK.adjuzsdk) {
                vidioEventCallback();
            } else {
                otherEventCallback();
            }
            break;
        default:
            otherEventCallback();
            break;
    }
};

module.exports = {
    LoginAuth: new LoginAuth(),
    BannerAd: new BannerAd(),
    VideoAd: new VideoAd(),
    NativeAd: new NativeAd(),
    Share: new Share(),
    sdkConfig: poly_sdk_config,
    Tools: new Tools(),
    Recorder: new Recorder(),
    Clipboard: new Clipboard(),
    Navigate: new Navigate(),
    getLogoIMG: getLogoIMG,
    platformEventCallback: platformEventCallback
};
cc.LieYingSDK = cc.LieYingSDK || {};
cc.LieYingSDK.PolySDK = module.exports;

cc._RF.pop();