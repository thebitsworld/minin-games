"use strict";
cc._RF.push(module, '17ec0k8nNhA0YmNsT+megFS', 'Tip');
// script/Common/Tip.js

"use strict";

var G = require("G");
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

        label: cc.Node
    },

    onLoad: function onLoad() {
        G.Tip = this;
        this.node.active = true;

        this.label.active = false;

        this.node.parent = null;
        this.node.position = cc.v2(375, 967);
        cc.game.addPersistRootNode(this.node);
    },
    start: function start() {
        this.initpos = this.label.position;
    },
    show: function show(str) {
        var pos = void 0;
        if (this.lastNode) {
            pos = this.lastNode.position;
        }

        var node = cc.instantiate(this.label);

        this.lastNode = node;

        if (pos && pos.y < this.initpos.y + this.label.height) {
            //出现在上个的下方

            node.position = cc.v2(pos.x, pos.y - this.label.height - 5);
        }

        node.active = true;

        node.getChildByName("label").getComponent(cc.Label).string = str + "";

        /// cc.director.getScheduler().getTimeScale()

        node.runAction(cc.sequence(cc.moveBy(2, 0, 200), cc.callFunc(function () {

            node.destroy();
        })));
        node.parent = this.node;
    }
}
// update (dt) {},
);

cc._RF.pop();