
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
        progressBar: cc.ProgressBar,
        loadingLabel: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

        cc.director.preloadScene("Game", this.onProgress.bind(this), this.onFinished.bind(this));


    },
    //预加载进度
    onProgress: function (completedCount, totalCount, item) {
        let completedRate = completedCount / totalCount;
        this.progressBar.progress = completedRate;
        this.loadingLabel.string = "加载中...（" + Math.floor(completedRate * 100) + "%）";
    },
    //预加载完成
    onFinished: function () {


        this.loadingLabel.string = "加载完成（100%）";

        cc.director.loadScene("Home");

    },

    // update (dt) {},
});