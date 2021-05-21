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

        arr: [cc.SpriteFrame],
        icon: cc.Node,
        num: 15,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.icon.active = false;
        this.pool = new cc.NodePool("");
    },

    start() {


        this.schedule(() => {


            for (let i = 0; i < this.num; i++) {
                let node = this.pool.get();
                if (node == null) {
                    node = cc.instantiate(this.icon);
                    node.active = true;
                }


                node.getComponent(cc.Sprite).spriteFrame = this.arr[Math.floor(Math.random() * this.arr.length)];
                node.position = cc.v2(Math.random() * this.node.parent.width - this.node.parent.width / 2, this.node.parent.height / 2);
                node.color = new cc.Color(Math.random() * 255, Math.random() * 255, Math.random() * 255);
                node.scale = Math.random() * 1;
                node.runAction(cc.sequence(cc.moveBy(5 + 10 * Math.random(), 0, -2000), cc.callFunc(() => {

                    node.stopAllActions();
                    // node.parent = null;
                    this.pool.put(node);

                })));
                // node.runAction(cc.repeatForever(cc.skewBy(2, 0, -90)));
                node.runAction(cc.repeatForever(cc.rotateBy(2 + 2 * Math.random(), 360 * Math.random(), 360 * Math.random())));
                // node.runAction(cc.spawn(cc.moveBy(10+30* Math.random(), 0, -1000), cc.skewBy(2, 0, -90)));



                //, cc.repeatForever(cc.rotateBy(5, 360))
                // node.runAction(cc.spawn(cc.moveBy(50 * Math.random(), 0, -1000), cc.repeatForever(cc.rotateBy(5, 360, 360))));
                node.parent = this.node.parent;

            }



        }, 0.5);

    },

    // update (dt) {},
});