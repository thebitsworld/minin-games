"use strict";
cc._RF.push(module, '77af17P04RIlZOjRtE44DsB', 'GameRecorderManager');
// script/Common/GameRecorderManager.js

"use strict";

var G = require("G");
cc.Class({
    extends: cc.Component,

    properties: {
        recorder: null,
        duration: 300,
        isStart: false,
        isCanOverVideo: false, //是否可以结束录制
        minVideoTime: 5, // 单位 s
        tips: "录制时间最少5秒哦！"
    },
    onLoad: function onLoad() {
        var self = this;

        self.init();
    },

    //初始化接口
    init: function init() {
        var self = this;
        if (typeof tt != "undefined") {

            if (!self.recorder) {
                console.log("self.recorder");
                self.recorder = tt.getGameRecorderManager();
            }

            self.clipIndexList = []; // 剪辑索引列表

            self.recorder.onError(function (errMsg) {
                console.log('录屏错误 ：' + errMsg);
            });

            self.recorder.onResume(function (errMsg) {
                console.log('录屏继续');
                // do somethine;
            });

            self.recorder.onPause(function (errMsg) {
                console.log('录屏暂停');
                // do somethine;
            });

            self.recorder.onStart(function (res) {
                console.log('录屏开始');
                self.isStart = true;
                self.isCanOverVideo = false;
                self.node.children[0].active = false;
                self.node.children[1].active = true;
                self.scheduleOnce(function () {
                    self.isCanOverVideo = true;
                }, self.minVideoTime);
            });

            self.recorder.onStop(function (res) {
                // stop 之后调用表示裁剪录屏中的最后10s
                console.log("录屏结束 ：" + res.videoPath);
                self.isStart = false;
                self.isCanOverVideo = false;
                self.node.children[0].active = true;
                self.node.children[1].active = false;
                self.recorder.clipVideo({
                    path: res.videoPath,
                    timeRange: [self.duration, 0],
                    success: function success(res) {
                        console.log("clipVideo  success");
                        console.log(res.videoPath); // 生成最后10秒的视频
                        self.shareVideo(res.videoPath);
                    },
                    fail: function fail(e) {
                        console.log("clipVideo  fail");
                        console.error(e);
                    }
                });
            });
        }
    },
    startVideoClick: function startVideoClick() {
        var self = this;
        if (!self.recorder) return;
        if (self.isStart) {
            G.Tip.show(self.tips);
        } else {
            self.recorder.start({ duration: self.duration });
        }
    },


    stopVideoClick: function stopVideoClick() {
        var self = this;
        if (!self.recorder) return;
        console.log("stopVideoClick");
        self.isCanOverVideo ? self.recorder.stop() : G.Tip.show(self.tips);
    },

    startAndstopClick: function startAndstopClick(e) {
        var self = this;
        if (!self.isCanOverVideo) {
            self.startVideoClick();
        } else {
            self.stopVideoClick();
        }
    },

    shareVideo: function shareVideo(videoPath) {
        var self = this;
        if (typeof tt != "undefined") {
            tt.shareVideo({
                videoPath: videoPath,
                success: function success(res) {
                    console.log("分享视频成功");
                },
                fail: function fail(e) {
                    console.log("分享视频失败");
                    if (e.errMsg == "shareVideo:fail cancel") return;
                    //console.error(e)
                    G.Tip.show(self.tips);
                }
            });
        }
    }

});

cc._RF.pop();