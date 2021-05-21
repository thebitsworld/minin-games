
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


        appId:"",
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    jump(){

        wx.navigateToMiniProgram({
            appId: this.appId,
            // path: 'page/index/index?id=123',
            // extraData: {
            //   foo: 'bar'
            // },
            envVersion: 'release',
            success(res) {
              // 打开成功
            }
          })

    },

    // update (dt) {},
});
