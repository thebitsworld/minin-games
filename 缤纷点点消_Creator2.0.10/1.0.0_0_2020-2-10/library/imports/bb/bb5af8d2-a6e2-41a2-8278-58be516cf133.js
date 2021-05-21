"use strict";
cc._RF.push(module, 'bb5afjSpuJBooJ4WL5RbPEz', 'RankUI');
// script/Rank/RankUI.js

"use strict";

var SNS = require("SNS");
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
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        SNS.hideAD();
    },
    close: function close() {
        this.node.destroy();
    },
    share: function share() {

        SNS.shareLocal("比比看谁分最高", function () {}, function () {});
    },
    onDestroy: function onDestroy() {
        SNS.showAD();
    }
}

// update (dt) {},
);

cc._RF.pop();