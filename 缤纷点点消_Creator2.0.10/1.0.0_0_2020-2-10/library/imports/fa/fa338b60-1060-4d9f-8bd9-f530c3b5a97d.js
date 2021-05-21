"use strict";
cc._RF.push(module, 'fa338tgEGBNn4vZ9TDDtal9', 'lieying_login');
// script/lieying_login.js

'use strict';

var PolySDK = require('PolySDK');
cc.Class({
    extends: cc.Component,

    properties: {
        videoBtnsNode: cc.Node
    },

    onLoad: function onLoad() {
        cc.LieYingSDK.PolySDK.LoginAuth.login();
    },


    //停止按钮 响应事件
    onStopRecorder: function onStopRecorder() {
        cc.LieYingSDK.PolySDK.Recorder.stop(this.updateVideoBtnState.bind(this));
    },

    //开始按钮 响应事件
    onStartRecorder: function onStartRecorder() {
        cc.LieYingSDK.PolySDK.Recorder.start(this.updateVideoBtnState.bind(this));
    },

    //分享按钮  响应事件
    OnshareRecorder: function OnshareRecorder() {
        cc.LieYingSDK.PolySDK.Recorder.shareVideo_tt(cc.LieYingSDK.PolySDK.Recorder.videoPath);
        this.updateVideoBtnState();
    },


    //更新按钮状态，
    //其中  children[0]为  开始按钮 node 节点
    //     children[1]为  停止按钮 node 节点 
    updateVideoBtnState: function updateVideoBtnState() {

        if (cc.LieYingSDK.PolySDK.Recorder.videoPath == null) {
            if (cc.LieYingSDK.PolySDK.Recorder.isStart) {
                this.videoBtnsNode.children[0].active = false;
                this.videoBtnsNode.children[1].active = true;
                this.videoBtnsNode.children[2].active = false;
            } else {
                this.videoBtnsNode.children[0].active = true;
                this.videoBtnsNode.children[1].active = false;
                this.videoBtnsNode.children[2].active = false;
            }
        } else {
            this.videoBtnsNode.children[0].active = false;
            this.videoBtnsNode.children[1].active = false;
            this.videoBtnsNode.children[2].active = true;
        }
    }

});

cc._RF.pop();