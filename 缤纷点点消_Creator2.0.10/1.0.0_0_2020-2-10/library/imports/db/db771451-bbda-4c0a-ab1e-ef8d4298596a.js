"use strict";
cc._RF.push(module, 'db771RRu9pMCqse741CmFlq', 'APP');
// script/Common/APP.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },


        appId: ""
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},
    jump: function jump() {

        wx.navigateToMiniProgram({
            appId: this.appId,
            // path: 'page/index/index?id=123',
            // extraData: {
            //   foo: 'bar'
            // },
            envVersion: 'release',
            success: function success(res) {
                // 打开成功
            }
        });
    }
}

// update (dt) {},
);

cc._RF.pop();