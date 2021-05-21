"use strict";
cc._RF.push(module, '58022sKTqlK7ZpBHB9B6+Ge', 'FullScreen');
// script/Common/FullScreen.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        //         this.node.width =cc.view.getCanvasSize().height;
        //         this.node.height = cc.view.getCanvasSize().width ;

        // return;

        // 1. 先找到 SHOW_ALL 模式适配之后，本节点的实际宽高以及初始缩放值
        var srcScaleForShowAll = Math.min(cc.view.getCanvasSize().width / this.node.width, cc.view.getCanvasSize().height / this.node.height);
        var realWidth = this.node.width * srcScaleForShowAll;
        var realHeight = this.node.height * srcScaleForShowAll;

        // 2. 基于第一步的数据，再做缩放适配
        this.node.scale = Math.max(cc.view.getCanvasSize().width / realWidth, cc.view.getCanvasSize().height / realHeight);
    }
}

// update (dt) {},
);

cc._RF.pop();