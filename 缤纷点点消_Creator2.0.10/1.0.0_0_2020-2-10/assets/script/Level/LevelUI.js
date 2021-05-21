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

        itemPrefab: cc.Node,
        scrollView: cc.ScrollView,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.init();
    },

    init() {

        this.scrollView.content.removeAllChildren();


        for (let i = 1; i <= 99; i++) {

            let lv = i;
            let star = G.user.lvs[lv];

            let node = cc.instantiate(this.itemPrefab);

            let js = node.getComponent("LevelItem");
            js.init(lv, star);
            if (star != null) {
                node.on("click", () => {
                    G.lv = lv; //当前关卡
                    this.startgame();
                });
            } else {

            }

            node.parent = this.scrollView.content;
        }

    },
    startgame() {
        SNS.hideAD();
        cc.director.loadScene("Game");
    },
    home() {
        SNS.hideAD();
        cc.director.loadScene("Home");
    },
    // update (dt) {},
});