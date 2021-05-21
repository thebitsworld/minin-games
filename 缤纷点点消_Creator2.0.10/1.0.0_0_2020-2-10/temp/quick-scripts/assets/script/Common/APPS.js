(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/Common/APPS.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '134eeiUVzVP8oBpeMb2WsBG', 'APPS', __filename);
// script/Common/APPS.js

"use strict";

var G = require("G");
cc.Class({
  extends: cc.Component,

  properties: {

    excludeName: "" //排除掉的app名称

    // jsonUrl:"https://www.77xyz.xyz/gameres/apps/apps.json",

  },

  // LIFE-CYCLE CALLBACKS:

  onLoad: function onLoad() {
    G.APPS = this;
    this.prefab = this.node.children[0];
    this.node.removeAllChildren();
  },
  start: function start() {},
  init: function init() {
    var _this = this;

    for (var i in G.netConfig.wx.apps) {

      try {
        var _ret = function () {
          var app = G.netConfig.wx.apps[i];
          if (app.name == _this.excludeName) {
            return "continue";
          }

          var node = cc.instantiate(_this.prefab);

          node.getChildByName("nameLabel").getComponent(cc.Label).string = app.name + "";

          var icon = node.getChildByName("icon").getComponent(cc.Sprite);

          cc.loader.load(app.icon, function (err, texture) {
            icon.spriteFrame = new cc.SpriteFrame(texture);
          });

          node.on("touchstart", function () {
            _this.jump(app);
          });

          node.parent = _this.node;
        }();

        if (_ret === "continue") continue;
      } catch (e) {
        cc.error(e);
      }
    }
  },
  jump: function jump(app) {

    wx.navigateToMiniProgram({
      appId: app.appId,
      envVersion: 'release',
      success: function success(res) {
        // 打开成功
      }
    });
  }
}

// update (dt) {},
);

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
        //# sourceMappingURL=APPS.js.map
        