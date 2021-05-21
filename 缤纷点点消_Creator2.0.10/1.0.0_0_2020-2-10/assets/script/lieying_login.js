var PolySDK = require('PolySDK');
cc.Class({
    extends: cc.Component,

    properties: {
        videoBtnsNode: cc.Node
    },

    onLoad() {
      
    },

    //停止按钮 响应事件
    onStopRecorder() {
        cc.LieYingSDK.PolySDK.Recorder.stop(this.updateVideoBtnState.bind(this));
    },
    //开始按钮 响应事件
    onStartRecorder() {
        cc.LieYingSDK.PolySDK.Recorder.start(this.updateVideoBtnState.bind(this));
    },
    //分享按钮  响应事件
    OnshareRecorder() {
        cc.LieYingSDK.PolySDK.Recorder.shareVideo_tt(cc.LieYingSDK.PolySDK.Recorder.videoPath);
        this.updateVideoBtnState();
    },

    //更新按钮状态，
    //其中  children[0]为  开始按钮 node 节点
    //     children[1]为  停止按钮 node 节点 
    updateVideoBtnState: function () {

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
    },

});
