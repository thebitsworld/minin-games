var G = require("G");
cc.Class({
  extends: cc.Component,

  properties: {



    excludeName: "",//排除掉的app名称

    // jsonUrl:"https://www.77xyz.xyz/gameres/apps/apps.json",

  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    G.APPS=this;
    this.prefab = this.node.children[0];
    this.node.removeAllChildren();

  },

  start() {
  },

  init() {


    for (let i in G.netConfig.wx.apps) {

      try {
        let app = G.netConfig.wx.apps[i];
        if (app.name == this.excludeName) {
          continue;
        }

        let node = cc.instantiate(this.prefab);

        node.getChildByName("nameLabel").getComponent(cc.Label).string = app.name + "";

        let icon = node.getChildByName("icon").getComponent(cc.Sprite);


        cc.loader.load(app.icon, function (err, texture) {
          icon.spriteFrame = new cc.SpriteFrame(texture);
        });

        node.on("touchstart", () => {
          this.jump(app);
        });


        node.parent = this.node;

      } catch (e) {
        cc.error(e);
      }

    }

  },

  jump(app) {

    wx.navigateToMiniProgram({
      appId: app.appId,
      envVersion: 'release',
      success(res) {
        // 打开成功
      }
    })

  },

  // update (dt) {},
});
