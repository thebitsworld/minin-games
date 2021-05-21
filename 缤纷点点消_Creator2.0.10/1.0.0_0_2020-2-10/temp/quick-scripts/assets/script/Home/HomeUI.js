(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/Home/HomeUI.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '34814nzs3pO+a9mpV/mWE6Q', 'HomeUI', __filename);
// script/Home/HomeUI.js

"use strict";

// var Colors = require("Colors");
var LoginAuth = require("PolySDK").LoginAuth;
var sdkConfig = require("PolySDK").sdkConfig;
var Share = require("PolySDK").Share;
var Tools = require("PolySDK").Tools;
var SNS = require("SNS");
var G = require("G");
cc.Class({
    extends: cc.Component,

    properties: {
        gameName: {
            default: null,
            type: cc.Node
        },
        // bg: {
        //     default: null,
        //     type: cc.Node
        // },
        startBtn: {
            default: null,
            type: cc.Node
        },
        shareBtn: cc.Node,
        RankUI: cc.Prefab,
        btnEffect: cc.AudioClip,
        jsonAsset: cc.JsonAsset
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.showAD();
        G.HomeUI = this;

        G.loadData();

        // 背景铺平
        // this.bg.width = cc.winSize.width;
        // this.bg.height = cc.winSize.height;
        // this.bg.color = Colors.startBg;
        // 设置文字
        var action = cc.repeatForever(cc.sequence(cc.scaleTo(1, 1.5), cc.scaleTo(1, 1)));
        this.gameName.runAction(action);
        // 设置按钮
    },
    rank: function rank() {
        var node = cc.instantiate(this.RankUI);
        node.parent = this.node;
    },
    showAD: function showAD() {
        SNS.createBannerAd();
        //SNS.showAD();
    },
    ad: function ad() {
        SNS.showVideo(function () {
            G.addtime = 20;
            cc.director.loadScene("Level");
            G.Tip.show("时间已增加");
        }, function () {
            G.Tip.show("看完广告获得奖励");
        });

        //修改
        /*cc.log("开启分享");
        SNS.share("快来帮我一下~", () => {
              G.addtime = 20;
            cc.director.loadScene("Level");
              G.Tip.show("时间已增加");
          }, () => {
              G.Tip.show("分享失败");
        });*/
    },
    share: function share() {
        cc.log("开启分享");
        Share.share(function () {}, function () {});
        return;
        SNS.share("这关太难了,你也来试试", function () {

            // G.tempfire = 5;
            // SNS.hidebbs();
            // cc.director.loadScene("Game");


            G.Tip.show("请分享到不同群");
        }, function () {

            G.Tip.show("分享失败");
        });
    },

    startGame: function startGame() {
        cc.audioEngine.playEffect(this.btnEffect);
        cc.director.loadScene("Level");
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

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
        //# sourceMappingURL=HomeUI.js.map
        