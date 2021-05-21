"use strict";
cc._RF.push(module, 'b7c87huwTlNZbQfNF6TeBra', 'LevelUI');
// script/Level/LevelUI.js

"use strict";

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
        scrollView: cc.ScrollView
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        this.init();
    },
    init: function init() {
        var _this = this;

        this.scrollView.content.removeAllChildren();

        var _loop = function _loop(i) {

            var lv = i;
            var star = G.user.lvs[lv];

            var node = cc.instantiate(_this.itemPrefab);

            var js = node.getComponent("LevelItem");
            js.init(lv, star);
            if (star != null) {
                node.on("click", function () {
                    G.lv = lv; //当前关卡
                    _this.startgame();
                });
            } else {}

            node.parent = _this.scrollView.content;
        };

        for (var i = 1; i <= 99; i++) {
            _loop(i);
        }
    },
    startgame: function startgame() {
        SNS.hideAD();
        cc.director.loadScene("Game");
    },
    home: function home() {
        SNS.hideAD();
        cc.director.loadScene("Home");
    }
}
// update (dt) {},
);

cc._RF.pop();