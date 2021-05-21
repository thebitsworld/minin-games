// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

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
        lock: cc.Node,

        stars: [cc.Node],

        normal: cc.Node,

        lv: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    init(lv, star) {


        if (star == null) {
            this.lock.active = true;

            this.normal.active = false;
            this.lv.node.active = false;


            for (let i in this.stars) {
                let node = this.stars[i];
                node.active = false;
            }
        } else {
            this.lock.active = false;

            this.normal.active = true;
            this.lv.node.active = true;

            for (let i in this.stars) {
                let node = this.stars[i];

                if (i < star) {
                    node.active = true;
                } else {
                    node.active = false;
                }
            }
            this.lv.string = lv;
        }




    },

    // update (dt) {},
});