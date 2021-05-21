var G = {
    score: 0,
    gametime: 90,
    addtime: 0,
    tip(str) {
        G.Tip.show(str);
    },


    initUser: {
        uid: 0,
        lv: 1,
        lvs: {
            1: 0,
        },
        star: 0,
        volume: 1,
        maxscore: 0, //最高分
    },

    //加载玩家数据,如果没有则初始化
    loadData() {
        if (this.user) {
            return;
        }

        let str = cc.sys.localStorage.getItem('user');

        if (str == null || str == "") {
            cc.log("注册");
            G.user = G.initUser;
            G.user.uid = new Date().getTime();
            // G.user.ballTime = new Date().getTime();
            // str = JSON.stringify(G.initUser);
            G.save();
        } else {
            cc.log("登录");
            G.user = JSON.parse(str);

            if (!G.user.lvs) {
                cc.sys.localStorage.setItem('user', "");
                this.loadData();
                return;
            }
        }
        G.uid = G.user.uid;
        G.volume = G.user.volume;

        G.loadNetConfig();
    },
    loadNetConfig() {


        // cc.loader.loadRes('config', (err, jsonAsset) => {

        // G.netConfig = jsonAsset.json;

        G.netConfig = G.HomeUI.jsonAsset.json;

        cc.loader.load(G.netConfig.url, (err, res) => {

            if (err) {
                cc.log("加载netConfigUrl err", err);
                return;
            }
            cc.log("加载netConfigUrl res", res);

            G.netConfig = res;
            
           
        });

        // });

    },
    
    //保存玩家数据
    save() {
        cc.log("保存数据...");
        let str = JSON.stringify(G.user);
        cc.sys.localStorage.setItem('user', str);
        cc.log("保存数据成功:" + str);
    },


    get(type) {
        if (!this.pools) {
            this.pools = {};
        }


        let pool = this.pools[type];


        if (!pool) {
            // pool = new cc.Pool(type);
            pool = new cc.NodePool(type);
            // pool = [];

            this.pools[type] = pool;
        }

        let node = pool.get();
        // if (node) {
        //     node.deaded = false;
        // }

        return node;
    },
    put(type, node) {
        if (!this.pools) {
            this.pools = {};
        }
        let pool = this.pools[type];
        if (!pool) {
            this.get(type);
            pool = this.pools[type];
        }
        // node.deaded = true;
        pool.put(node);

    },

};
module.exports = G;