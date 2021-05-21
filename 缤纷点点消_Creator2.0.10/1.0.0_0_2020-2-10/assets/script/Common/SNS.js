var Share = require("PolySDK").Share;
var VideoAd = require("PolySDK").VideoAd;
var BannerAd = require("PolySDK").BannerAd;
var G = require("G");
var SNS = {

    load() {

        if (this.loaded) {
            return;
        }
        this.loaded = true;

        cc.log("验证分享");
        try {

            let res = wx.getLaunchOptionsSync();
            if (res && res.query && res.query.uid) {
                cc.log("成功邀请了！！！！！！！！query:" + res.query.uid);
            }
        } catch (error) {
            cc.error(error);
        }

        //监听
        cc.log("开始监听share");
        try {


            wx.showShareMenu({
                withShareTicket: true,
            });

            let width = cc.winSize.width;
            let height = cc.winSize.height;


            wx.onShareAppMessage(() => {
                if (G.netConfig.wx.shares) {
                    let q = G.netConfig.wx.shares[Math.floor(Math.random() * G.netConfig.wx.shares.length)];
                    return {
                        imageUrlId: q.imageUrlId,
                        imageUrl: q.imageUrl,

                        title: q.title,
                        query: "uid=" + G.uid,
                    }
                }



                return {
                    // imageUrlId: "OLRfZ2qySCmU3adcFZLBkw",
                    // imageUrl: "https://mmocgame.qpic.cn/wechatgame/gKwCzR9cWiaLafIqY6u3q4mnf0KnicfuqLnib7WpBwavU9j77w2QeRKGF25PBoiankZy/0",

                    title: "根本停不下来！！",
                    query: "uid=" + G.uid,
                    imageUrl: cc.game.canvas.toTempFilePathSync({
                        x: 0,
                        y: 0,
                        width: width,
                        height: height,
                        destWidth: width,
                        destHeight: height
                    }),
                }



            });

        } catch (error) {
            cc.error(error);
        }

        try {


            cc.log("监听EVENT_SHOW");
            cc.game.on(cc.game.EVENT_HIDE, () => {
                cc.log("触发EVENT_HIDE");
                if (!this.sharesuccess) {
                    return;
                }

                cc.log("检测到EVENT_HIDE");

                this.shareStartTime = new Date();
            }, this);

            cc.game.on(cc.game.EVENT_SHOW, () => {
                cc.log("触发EVENT_SHOW");
                if (!this.sharesuccess) {
                    return;
                }
                this.shareing = false;


                cc.log("检测到EVENT_SHOW");

                let time = new Date().getTime() - this.shareStartTime.getTime();

                cc.log("超过3秒才算成功,分享间隔时间ms:" + time);
                if (time > 3000) { //
                    cc.log('分享成功')
                    this.sharesuccess();
                } else {
                    cc.log('分享失败')
                    this.sharefail();
                }
                this.sharesuccess = null;

            }, this);
        } catch (e) {
            cc.error(e);

        }
    },

    createBannerAd(){
        BannerAd.createBannerAd();
    },

    showAD(forcead) { //显示横幅广告
        BannerAd.showBannerAd();
    },

    hideAD() { //关闭横幅广告
        BannerAd.hideBannerAd();
    },

    showVideo(success, fail) { //显示视频

        cc.LieYingSDK.PolySDK.platformEventCallback(vidioEventCallback.bind(this),
            shareEventCallback.bind(this),
            otherEventCallback.bind(this));
        function vidioEventCallback() {
            //广告UI   广告回调
            //这需要调用sdk中的 广告相关的代码
            VideoAd.createRewardedVideoAd(success, fail);
        }
        function shareEventCallback() {
            //分享UI   分享回调
            //这需要调用sdk中的 分享相关的代码
            G.Tip.show("暂无广告");
        }
        function otherEventCallback() {
            //正常UI   正常回调
            success();
        }


        //VideoAd.createRewardedVideoAd(success, fail);
    },


    award(success, fail) {
    },




    share(msg, success, fail) {
        Share.share()

    },
    shareLocal(msg, success, fail) {
        try {

            this.shareing = true;
            this.sharesuccess = success;
            this.sharefail = fail;
            Share.share();
            /*wx.shareAppMessage({
                title: msg,

                imageUrl: canvas.toTempFilePathSync({
                    destWidth: 500,
                    destHeight: 400
                }),

                query: "uid=" + G.uid,
            });*/

        } catch (e) {
            cc.error(e);
            G.Tip.show("分享出错");
            if (G.netConfig.wx.easy) {
                success();
            }
        }

    },

    showbbs() { //微信游戏圈论坛
        try {
            this.btn = wx.createGameClubButton({
                icon: 'green',
                style: {
                    left: 10,
                    top: 45,
                    width: 30,
                    height: 30,
                }
            });
            this.btn.show();
        } catch (e) {
            cc.error(e);
        }

    },

    hidebbs() {
        try {
            this.btn.hide();
        } catch (e) {
            cc.error(e);
        }
    },


    submit(type, score) {
        return;
        try {
            if (window.wx) {
                cc.log("提交分数");
                wx.postMessage({
                    messageType: 3,
                    MAIN_MENU_NUM: type,
                    score: score,
                });
            }
        } catch (e) {
            cc.error(e);
        }
    }

};
module.exports = SNS;