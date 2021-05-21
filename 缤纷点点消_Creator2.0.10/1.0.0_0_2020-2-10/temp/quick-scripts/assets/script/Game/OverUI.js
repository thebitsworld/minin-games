(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/Game/OverUI.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'abb92FkKAJAcZ76wc009Hlx', 'OverUI', __filename);
// script/Game/OverUI.js

"use strict";

// var Colors = require("Colors");
var SNS = require("SNS");
var G = require("G");
var sdkConfig = require("PolySDK").sdkConfig;
cc.Class({
    extends: cc.Component,

    properties: {
        // gameText:{
        //     default:null,
        //     type:cc.Node
        // },
        // textLabel:{
        //     default:null,
        //     type:cc.Label
        // },
        scoreLabel: cc.Label,
        maxscoreLabel: cc.Label,
        overEffect: cc.AudioClip,
        addCoin: cc.AudioClip,
        btnEffect: cc.AudioClip,
        bencidefen_but_01: cc.Node
        // score:0,
        // changeScore:0,
    },

    // use this for initialization
    onLoad: function onLoad() {

        this.score = 0;
        this.changeScore = 0;
        SNS.createBannerAd();
        // 背景层
        // this.bg.width = cc.winSize.width;
        // this.bg.height = cc.winSize.height;
        // this.bg.setPosition(this.bg.width/2,this.bg.height/2);
        // this.bg.color = Colors.overBg;
        // 文字层
        // this.gameText.setPosition(cc.winSize.width/2,cc.winSize.height/2);
        // var action = cc.repeatForever(cc.sequence(cc.scaleTo(1, 1.5),cc.scaleTo(1,1)));
        // this.gameText.runAction(action);
        // 播放结束音效
        cc.audioEngine.playEffect(this.overEffect);
        // 分数
        // this.scoreText.setPosition(this.gameText.x,this.gameText.y+200);
        // this.score = G.game.score;
        // this.schedule(this.updateScore,0.1,cc.REPEAT_FOREVER,2);
        // 点击分数立即加到最高分数
        // var self = this;
        // this.bg.on(cc.Node.EventType.TOUCH_START,function(event){
        //     cc.log("score text touch");
        //     cc.audioEngine.playEffect(self.addCoin);
        //     self.changeScore = self.score;
        //     self.scoreLabel.string = "最终分数："+self.changeScore;
        // }, this.bg);
        // 返回按钮
        // this.backBtn.setPosition(this.gameText.x,this.gameText.y-200);
        this.scoreLabel.string = "" + G.game.gametime;
        this.maxscoreLabel.string = "历史最高分:" + G.game.gametime;
        cc.audioEngine.playEffect(this.addCoin);

        if (sdkConfig.runSDK == sdkConfig.sdk_key_xiaomi) {
            this.bencidefen_but_01.active = false;
        }

        if (sdkConfig.runSDK == sdkConfig.sdk_key_oppo) {
            this.bencidefen_but_01.active = false;
        }
        if (sdkConfig.runSDK == sdkConfig.sdk_key_vivo) {
            this.bencidefen_but_01.active = false;
        }
        // SNS.submit(G.game.score);
    },
    start: function start() {

        // SNS.submit(G.lv, G.game.gametime);
    },

    // updateScore() {
    //     if (this.score <= this.changeScore) {
    //         this.unschedule(this.updateScore);
    //     }
    //     this.changeScore += 20;
    //     this.changeScore = this.changeScore > this.score ? this.score : this.changeScore;
    //     // 添加音效
    //     cc.audioEngine.playEffect(this.addCoin);

    // },


    ad: function ad() {
        SNS.hideAD();
        SNS.showVideo(function () {
            G.addtime = 30;
            cc.director.loadScene("Game");
            G.Tip.show("时间已增加");
        }, function () {
            G.Tip.show("看完广告获得奖励");
        });
        return;
        //修改
        cc.log("开启分享");
        SNS.share("快来帮我一下~", function () {

            G.addtime = 30;
            cc.director.loadScene("Game");

            G.Tip.show("时间已增加");
        }, function () {

            G.Tip.show("分享失败");
        });
    },
    restart: function restart() {
        SNS.hideAD();
        cc.director.loadScene("Game");
    },
    share: function share() {
        cc.log("开启分享");
        SNS.shareLocal("快来帮我一下~", function () {
            G.tempfire = 5;
            //SNS.hidebbs();
            cc.director.loadScene("Game");
        }, function () {

            G.Tip.show("分享失败");
        });
    },

    back: function back() {
        // G.score = 0;
        SNS.hideAD();
        cc.audioEngine.playEffect(this.btnEffect);
        cc.director.loadScene("Home");
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
        //# sourceMappingURL=OverUI.js.map
        