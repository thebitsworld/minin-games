(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/Game/AliveUI.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b81c0C7WmJIXb6gFtZEB1cC', 'AliveUI', __filename);
// script/Game/AliveUI.js

"use strict";

var SNS = require("SNS");
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
        OverUI: cc.Prefab,

        scoreLabel: cc.Label

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        SNS.showAD();
        this.scoreLabel.string = "" + G.game.gametime;
    },
    ad: function ad() {
        var _this = this;

        var self = this;
        SNS.hideAD();
        SNS.showVideo(function () {
            G.game.over = false;
            console.log("添加这之前的分数" + G.game.gametime);
            if (G.game.gametime > 0) {
                G.game.gametime += 20;

                G.game.addhp();
            } else {
                G.game.gametime = 20;
            }
            console.log("添加这之后的分数" + G.game.gametime);
            self.node.destroy();
        }, function () {
            G.Tip.show("看完广告获得奖励");
        });
        return;

        cc.log("开启分享");
        SNS.share("快来帮我一下~", function () {

            G.game.over = false;
            G.game.gametime += 20;
            G.game.addhp();

            _this.node.destroy();
        }, function () {

            G.Tip.show("分享失败");
        });
    },
    jump: function jump() {
        SNS.hideAD();

        var node = cc.instantiate(this.OverUI);

        node.parent = this.node.parent;

        this.node.destroy();
    }
}
// update (dt) {},

);

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
        //# sourceMappingURL=AliveUI.js.map
        