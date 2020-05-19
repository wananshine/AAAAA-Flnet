/**
 * Created by haiping on 2018/10/09.
 */

var vm = new Vue({
    el: "#playback-detail",
    data: {
        loginUrl: "http://flnet-api.flnet.cn:8080/api/auth/login",
        playbackId: null,  //回放视频ID
        userData: {},      //用户个人数据
        products: [
            {
                "src": "https://img14.360buyimg.com/mobilecms/s455x455_jfs/t24811/56/1847290556/147042/e119cf09/5bbd4aedN738ff071.jpg!q70.dpg.webp",
                "name": "白令手表男士防水进口石英表钢带dw黑金情侣 简约ins 白令手表男士防水进口石英表钢带dw黑金情侣",
                "price": "343.00",
                "delprice": "555.25",
            },
            {
                "src": "https://img14.360buyimg.com/mobilecms/s455x455_jfs/t24811/56/1847290556/147042/e119cf09/5bbd4aedN738ff071.jpg!q70.dpg.webp",
                "name": "xxxxx",
                "price": "343.00",
                "delprice": "555.25",
            },
            {
                "src": "https://img14.360buyimg.com/mobilecms/s455x455_jfs/t24811/56/1847290556/147042/e119cf09/5bbd4aedN738ff071.jpg!q70.dpg.webp",
                "name": "xxxxx",
                "price": "343.00",
                "delprice": "555.25",
            },
            {
                "src": "https://img14.360buyimg.com/mobilecms/s455x455_jfs/t24811/56/1847290556/147042/e119cf09/5bbd4aedN738ff071.jpg!q70.dpg.webp",
                "name": "xxxxx",
                "price": "343.00",
                "delprice": "555.25",
            },
            {
                "src": "https://img14.360buyimg.com/mobilecms/s455x455_jfs/t24811/56/1847290556/147042/e119cf09/5bbd4aedN738ff071.jpg!q70.dpg.webp",
                "name": "xxxxx",
                "price": "343.00",
                "delprice": "555.25",
            },
            {
                "src": "https://img14.360buyimg.com/mobilecms/s455x455_jfs/t24811/56/1847290556/147042/e119cf09/5bbd4aedN738ff071.jpg!q70.dpg.webp",
                "name": "xxxxx",
                "price": "343.00",
                "delprice": "555.25",
            }
        ], //全部宝贝
        playList: [
            {
                "src": "https://img.alicdn.com/bao/uploaded/i4/672156617/TB2sdp.Cr1YBuNjSszhXXcUsFXa_!!672156617-0-item_pic.jpg",
                "name": "bering白令手表男进口简约时尚防水女表薄款潮腕表情侣石英表DW02bering白令手表男进口简约时尚防水女表薄款潮腕表情侣石英表DW02",
                "time": "2018-10-10",
                "watch": "1231"
            },
            {
                "src": "https://img.alicdn.com/bao/uploaded/i4/672156617/TB2sdp.Cr1YBuNjSszhXXcUsFXa_!!672156617-0-item_pic.jpg",
                "name": "bering白令手表男进口简约时尚防水女表薄款潮腕表情侣石英表DW02",
                "time": "2018-10-10",
                "watch": "1231"
            },
            {
                "src": "https://img.alicdn.com/bao/uploaded/i4/672156617/TB2sdp.Cr1YBuNjSszhXXcUsFXa_!!672156617-0-item_pic.jpg",
                "name": "dasf",
                "time": "2018-10-10",
                "watch": "1231"
            },
            {
                "src": "https://img.alicdn.com/bao/uploaded/i4/672156617/TB2sdp.Cr1YBuNjSszhXXcUsFXa_!!672156617-0-item_pic.jpg",
                "name": "bering白令手表男进口简约时尚防水女表薄款潮腕表情侣石英表DW02",
                "time": "2018-10-10",
                "watch": "1231"
            },
            {
                "src": "https://img.alicdn.com/bao/uploaded/i4/672156617/TB2sdp.Cr1YBuNjSszhXXcUsFXa_!!672156617-0-item_pic.jpg",
                "name": "bering白令手表男进口简约时尚防水女表薄款潮腕表情侣石英表DW02",
                "time": "2018-10-10",
                "watch": "1231"
            },
            {
                "src": "https://img.alicdn.com/bao/uploaded/i4/672156617/TB2sdp.Cr1YBuNjSszhXXcUsFXa_!!672156617-0-item_pic.jpg",
                "name": "dasf",
                "time": "2018-10-10",
                "watch": "1231"
            }
        ], //TA的回放
        hotPlayer:[
            {
                "id":10542,
                "uid":4409,
                "title":"。？？？",
                "image_url":"http://flnet-test.oss-cn-shanghai.aliyuncs.com/head/2017/11/24_17:50:17/d1f44e2f09dc172978a4d3151d11d63e.png",
                "video_url":"http://live-video-test.flnet.cn.w.kunlunca.com/live/record/2018-01-08/flnet/4409/2018-01-08-09:16:11_2018-01-08-09:24:13.mp4",
                "click_num":15,
                "goods_ids":[
                    {
                        "goods_id":"337",
                        "goods_name":"苏泊尔（SUPOR）CYSB50YC17Q-100全智能双胆电压力锅 5L",
                        "mktprice":"480.000",
                        "price":"470.000",
                        "image":"https://xiaochengxu.flnet.com/public/images/13/8a/37/967bf84d8fbfb212839c0b3236ed942832fa9378.jpg?1508309028#h",
                        "is_send_free":1,
                        "url":"https://xiaochengxu.flnet.com/product-337.html"
                    },
                    {
                        "goods_id":"687",
                        "goods_name":"测试 夏普(SHARP) FP-CH70-N 三层滤网 高性能防护 高效净化 空气净化器 流光金",
                        "mktprice":"3598.800",
                        "price":"0.010",
                        "image":"https://xiaochengxu.flnet.com/public/images/51/79/cf/0548e7b73fb7265aba3006b52a3e8abfdf9aa958.jpg?1512029043#h",
                        "is_send_free":1,
                        "url":"https://xiaochengxu.flnet.com/product-687.html"
                    }
                ],
                "user_info":{
                    "id":4409,
                    "nick":"网友4409",
                    "head_image_url":"http://flnet-test.oss-cn-shanghai.aliyuncs.com/head/2017/11/24_17:50:17/d1f44e2f09dc172978a4d3151d11d63e.png"
                }
            },
            {
                "id":10547,
                "uid":4384,
                "title":"大喊大叫",
                "image_url":"http://flnet-test.oss-cn-shanghai.aliyuncs.com/head/2017/11/14_14:47:18/12e59a33dea1bf0630f46edfe13d6ea2.png",
                "video_url":"http://live-video-test.flnet.cn/live/record/2018-01-10/flnet/4384/2018-01-10-19:32:52_2018-01-10-19:42:20.mp4",
                "click_num":4,
                "goods_ids":[
                    {
                        "goods_id":"337",
                        "goods_name":"苏泊尔（SUPOR）CYSB50YC17Q-100全智能双胆电压力锅 5L",
                        "mktprice":"480.000",
                        "price":"470.000",
                        "image":"https://xiaochengxu.flnet.com/public/images/13/8a/37/967bf84d8fbfb212839c0b3236ed942832fa9378.jpg?1508309028#h",
                        "is_send_free":1,
                        "url":"https://xiaochengxu.flnet.com/product-337.html"
                    },
                    {
                        "goods_id":"687",
                        "goods_name":"测试 夏普(SHARP) FP-CH70-N 三层滤网 高性能防护 高效净化 空气净化器 流光金",
                        "mktprice":"3598.800",
                        "price":"0.010",
                        "image":"https://xiaochengxu.flnet.com/public/images/51/79/cf/0548e7b73fb7265aba3006b52a3e8abfdf9aa958.jpg?1512029043#h",
                        "is_send_free":1,
                        "url":"https://xiaochengxu.flnet.com/product-687.html"
                    }
                ],
                "user_info":{
                    "id":4384,
                    "nick":"网友4384",
                    "head_image_url":"http://flnet-test.oss-cn-shanghai.aliyuncs.com/head/2017/11/14_14:47:18/12e59a33dea1bf0630f46edfe13d6ea2.png"
                }
            }
        ], //精彩回放
        reviewList:[
            {
                "id":2334,
                "content":"11111",
                "uid":3392,
                "user_info":{
                    "id":3392,
                    "level": 3,
                    "nick":"彭于晏",
                    "head_image_url":"http://flnet-test.oss-cn-shanghai.aliyuncs.com/head/2017/11/01_16:32:34/6463c88460bd63bbe256e495c63aa40b.png"
                }
            },
            {
                "id":2335,
                "content":"11111",
                "uid":3392,
                "user_info":{
                    "id":3392,
                    "level": 3,
                    "nick":"彭于晏",
                    "head_image_url":"http://flnet-test.oss-cn-shanghai.aliyuncs.com/head/2017/11/01_16:32:34/6463c88460bd63bbe256e495c63aa40b.png"
                }
            },
        ],  //评论列表
        place: {},
        isShow: 1,
        attentionTxt: "关注",
        sendInfo: ''
    },
    computed: {
        goodsList: function () {
            return this.goods_list.slice(0, this.limitNum);
        }
    },
    watch: {
        "place": {
            handler: function (defaultProvince) {},
            immediate: false, //声明immediate: true表示创建组件时立马执行一次
            deep: true
        },
    },
    methods: {

        //关闭直播商品推荐弹出框
        closeCustomer(e) {
            this.isShow = null;
        },

        //加入购物车
        addcartCustomer(pt,e) {
            console.log("加入购物车:", typeof pt,e)
        },

        //关注主播按钮
        attenCustomer(e, attentionTxt) {
            const atten = attentionTxt == "关注" ? "已关注" : "关注"
            this.$set(this.$data, "attentionTxt", atten)
            console.log("关注:", e, attentionTxt)
        },

        //发送聊天信息
        sendCustomer(e, info) {
            // const reviewListScroll = document.getElementById("review-list").scrollTop;
            // // const reviewListH = document.getElementById("review-list").offsetHeight;
            // const reviewListH = document.getElementById("review-list").clientHeight;

            const reviewObj = {
                "id": this.userData.id,
                "content": info,
                "uid": this.userData.uid,
                "user_info":{
                    "id": this.userData.user_info.id,
                    "nick": this.userData.user_info.nick,
                    "level": this.userData.user_info.level,
                    "head_image_url": this.userData.user_info.head_image_url
                }
            }

            if(info!=""){
                // this.playbackId;
                const commentUrl = "http://flnet-api.flnet.cn:8080/api/video/"+this.playbackId+"/lives/commnets"
                this.ajaxCustomer(commentUrl, "POST",reviewObj,function (response) {
                    console.log("成功:",response);
                });
                this.reviewList.push(reviewObj);
                const reviewListAll = document.getElementById("review-list").scrollHeight;
                setTimeout(()=>{
                    document.getElementById("review-list").scrollTop = reviewListAll + 40;
                },1)
                console.log(reviewListAll);
            }else{
                alert("评论不能为空")
            }

            this.$set(this.$data, "sendInfo", "");
            console.log("发送聊天信息:", e, info, this.reviewList);
        },

        //回车键发送聊天信息
        keyupCustomer(e, info) {
            this.sendCustomer(e, info);
            console.log("回车键发送聊天信息:", e, info)
        },
        
        //获取URL参数
        getUrlParam(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
            if (r != null) return unescape(r[2]); return null; //返回参数值
        },

        loginCustomer(e){

            this.ajaxCustomer(this.loginUrl, "post", "", function (response) {
                console.log("response:", response)
            });
        },

        //请求
        ajaxCustomer(url, type, data, success){
            $.ajax({
                url: url,
                type: type,
                data: data,
                dataType: "json", //请求数据类型
                contentType: "application/x-www-form-urlencoded;charset=UTF-8",
                timeout: 15000, //设置请求超时时间（毫秒）。此设置将覆盖全局设置。
                cache: false, //是否缓存，默认值: true，dataType 为 script 和 jsonp 时默认为 false
                async: true,
                beforeSend: function (XMLHttpRequest) {
                    //开始请求之前
                    console.log("正在获取数据...");
                },
                success: success,
                // success: function (response) {
                //     console.log(response)
                //     console.log("Ajax success!");
                // },
                complete: function (XMLHttpRequest, textStatus) {
                    //请求完成
                    // textStatus 可能为：null、'success'、 'notmodified'、 'error'、 'timeout'、 'abort'或'parsererror'等
                    console.log("获取数据完毕...");
                    if (textStatus == 'timeout') {
                        //判断是否超时
                        var xmlhttp = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHttp");
                        xmlhttp.abort(); //终止当前请求
                        console.log("网络超时！");
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    console.log("Ajax error!");
                    console.log(XMLHttpRequest.status);
                    console.log(XMLHttpRequest.readyState);
                    console.log(textStatus);
                }
            })
        }


    },
    beforeCreate() {
        console.log('beforeCreate')

    },
    created() {
        var _self = this;

        //获取参数
        this.playbackId = this.getUrlParam("id");
        console.log(this.playbackId)

        //获取播放详情数据
        const detailUrl = "http://flnet-api.flnet.cn:8080/api/video/"+this.playbackId+"/lives";
        this.ajaxCustomer(detailUrl, "get", "", function (response) {
            _self.userData = response.data;
            console.log("this.userData111",_self.userData)
            console.log("获取播放详情数据+response:",response)
            console.log("Ajax success")
        });


        //登录
        this.ajaxCustomer(this.loginUrl, "post", "", function (response) {
            console.log("登录+response:", response)
            this.response = response
        });

        //获取评论数据
        //http://flnet-api.flnet.cn:8080/api/video/{vid}/lives/commnets
        const commentUrl = "http://flnet-api.flnet.cn:8080/api/video/"+this.playbackId+"/lives/commnets"
        this.ajaxCustomer(commentUrl, "get", {},function (response) {
            console.log("成功:",response);
        });

        //精彩回放
        const livesUrl = "http://flnet-api.flnet.cn:8080/api/video/lives";
        this.ajaxCustomer(livesUrl, "get", "", function (response) {
            console.log("精彩回放+response:",response)
            console.log("Ajax success")
        });

    },
    beforeMount() {},
    mounted() {

        this.$nextTick(function () {

            const reviewListAll = document.getElementById("review-list").scrollHeight;
            setTimeout(()=>{
                document.getElementById("review-list").scrollTop = reviewListAll + 40;
            },1)

            var player = new Aliplayer({
                id: "player-con",
                source: "http://player.pier39.cn/video/editor.mp4",
                width: "100%",
                height: "100%",
                cover: 'https://img.alicdn.com/tps/TB1EXIhOFXXXXcIaXXXXXXXXXXX-760-340.jpg',
                /* 设置封面时需要将 autoplay 和 preload 设置为 false */
                autoplay: true,
                preload: false,
                language: "zh-cn",
                isLive: false
            }, function (player) {
                console.log("播放器创建成功");
            });
            // var player = new Aliplayer({
            //     "id": "player-con",
            //     "source": "//player.alicdn.com/video/aliyunmedia.mp4",
            //     "width": "100%",
            //     "height": "500px",
            //     "autoplay": true,
            //     "isLive": false,
            //     "rePlay": false,
            //     "playsinline": true,
            //     "preload": true,
            //     "controlBarVisibility": "hover",
            //     "useH5Prism": true
            // }, function (player) {
            //     console.log("播放器创建了。");
            // });




            /********轮播效果 start ********/


            /**
             * TA的回放轮播
             */
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 3,
                spaceBetween: 2,
                slidesPerGroup: 3,
                loop: true,
                loopFillGroupWithBlank: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });


            /**
             * 精彩回放=>商品推荐轮播
             */
            var swiper2 = new Swiper('.swiper-container2', {
                slidesPerView: 3.32,
                spaceBetween: 15,
                freeMode: true,
                slidesPerGroup: 3,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });

            /********轮播效果 end ********/


            // 封装点赞效果 start
            // (function ($) {
            //     // 最大心
            //     var heartMax = 32,
            //         // 最小心
            //         heartMin = 26,
            //         // 心的最多数量
            //         heartMaxNum = 80,
            //         // 心颜色数组
            //         colors = ["FF5D31", "FF7043", "FF9800", "F9A825", "F57F17", "FFCA28"],
            //         // 心svg图形
            //         svgString = '<svg viewBox="-1 -1 27 27"><path class="svgpath" style="fill:$fill$;stroke: #FFF; stroke-width: 1px;" d="M11.29,2C7-2.4,0,1,0,7.09c0,4.4,4.06,7.53,7.1,9.9,2.11,1.63,3.21,2.41,4,3a1.72,1.72,0,0,0,2.12,0c0.79-.64,1.88-1.44,4-3,3.09-2.32,7.1-5.55,7.1-9.94,0-6-7-9.45-11.29-5.07A1.15,1.15,0,0,1,11.29,2Z"/></svg>',
            //
            //         /**
            //          * [心样式及动画构造]
            //          * @param  {[object]} element [装心的容器]
            //          * @return {}
            //          */
            //         heartTemplate = function (element) {
            //             // 容器宽度
            //             this.width = element.width(),
            //                 // 容器高度
            //                 this.height = element.height();
            //             // 从[svgString]中取得图形随机色值
            //             var _color = colors[Math.floor(Math.random() * colors.length)],
            //                 // 添加进svgString并取得dom
            //                 _svgDom = $(svgString.replace("$fill$", "#" + _color));
            //
            //             // 赋值svgDom
            //             this.$el = _svgDom,
            //                 // 初始X坐标（容器宽度的一半减去10）
            //                 this.startX = this.width / 2 - 10,
            //                 // 初始Y坐标
            //                 this.y = 0,
            //
            //                 this.pos = Math.random() * Math.PI,
            //                 this.hz = Math.random() * 20 + 10,
            //                 this.zf = Math.random() * 15 + 10,
            //                 // 随机初始透明度值
            //                 this.opacityStart = Math.random() * 10 + 10,
            //
            //                 // 设置svg样式
            //                 this.setStyle(),
            //
            //                 // 插入容器
            //                 element.append(_svgDom),
            //
            //                 // 运行动画
            //                 this.run()
            //         };
            //
            //     /**
            //      * [设置样式]
            //      */
            //     heartTemplate.prototype.setStyle = function () {
            //
            //             var _left = this.startX + Math.sin(this.pos + this.y / this.hz) * this.zf,
            //                 _opactiy = 1 - Math.max((this.y - this.opacityStart) / (this.height - this.opacityStart), 0),
            //                 _size = Math.min(this.y * 2 / this.height * (heartMax - heartMin) + heartMin, heartMax);
            //
            //             this.$el.css({
            //                 left: _left,
            //                 bottom: this.y,
            //                 opacity: _opactiy
            //             }).width(_size).height(_size)
            //         },
            //         /**
            //          * [动画函数]
            //          * @return {}
            //          */
            //         heartTemplate.prototype.run = function () {
            //             var that = this,
            //                 delay = Math.random() * 20 + 10,
            //                 now = $.now(),
            //                 timer = setInterval(function () {
            //                     var curNow = $.now();
            //                     that.y += Math.round((curNow - now) / delay),
            //                         now = curNow,
            //
            //                         // 设置样式
            //                         that.setStyle(),
            //
            //                         // 如果y值大于等于容器高度则移除svgDom并且清除定时器
            //                         that.y >= that.height && (that.$el.remove(), clearTimeout(timer))
            //                 }, delay)
            //         };
            //
            //     /**
            //      * [点赞]
            //      * @return {}
            //      */
            //     var praises = function () {
            //         this.$root = $("#player-praises"),
            //             this.$inner = this.$root.find(".bubble");
            //         var broswer = 0;
            //         try {
            //             broswer = navigator.userAgent.match(/MSIE (\d+)/i)[1]
            //         } catch (n) {
            //             broswer = 0
            //         }
            //         broswer == 0 ? (this.$root.show(), this.initEvent()) : this.$root.hide()
            //     };
            //
            //     // 插入Dom
            //     praises.prototype.add = function (num) {
            //             num = num || 1;
            //             if (this.$inner.find("svg").length + num > heartMaxNum) return;
            //             for (var i = num; i > 0; i--)
            //                 new heartTemplate(this.$inner)
            //         },
            //
            //         // 事件绑定
            //         praises.prototype.initEvent = function () {
            //             var that = this;
            //
            //             this.$root.find(".praises").on("click", function (event) {
            //                 event.preventDefault(),
            //                     that.add()
            //             })
            //
            //             this.$root.on("praise:receive", function (e) {
            //                 that.add(e.num)
            //             })
            //         }
            //
            //     // 执行点赞方法
            //     new praises();
            //
            // })(jQuery)
            // 封装点赞效果 end


            /********点赞效果 start ********/

            // (function ($) {
            const heartMax = 32; //最大心
            const heartMin = 26; //最小心
            const heartMaxNum = 80; //心的最多数量
            const colors = ["FF5D31", "32ccea", "ff5dc1", "5a61f1", "FF7043", "ff922a", "FF9800", "F9A825", "F57F17", "FFCA28", "ff0000", "44d21d"]; // 心颜色数组
            const svgString = '<svg viewBox="-1 -1 27 27"><path class="svgpath" style="fill:$fill$;stroke: #FFF; stroke-width: 1px;" d="M11.29,2C7-2.4,0,1,0,7.09c0,4.4,4.06,7.53,7.1,9.9,2.11,1.63,3.21,2.41,4,3a1.72,1.72,0,0,0,2.12,0c0.79-.64,1.88-1.44,4-3,3.09-2.32,7.1-5.55,7.1-9.94,0-6-7-9.45-11.29-5.07A1.15,1.15,0,0,1,11.29,2Z"/></svg>'

            /**
             * [心样式及动画构造]
             * @param  {[object]} element [装心的容器]
             * @return {}
             */
            const heartTemplate = function (element) {
                // 容器宽度
                this.width = element.width(),
                    // 容器高度
                    this.height = element.height();
                // 从[svgString]中取得图形随机色值
                // var _color = colors[Math.floor(Math.random() * colors.length)],
                var _color = colors[Math.floor(Math.random() * colors.length)],
                    // 添加进svgString并取得dom
                    _svgDom = $(svgString.replace("$fill$", "#" + _color));

                // 赋值svgDom
                this.$el = _svgDom,
                    // 初始X坐标（容器宽度的一半减去10）
                    this.startX = this.width / 2 - 10,
                    // 初始Y坐标
                    this.y = 0,

                    this.pos = Math.random() * Math.PI,
                    this.hz = Math.random() * 20 + 10,
                    this.zf = Math.random() * 15 + 10,
                    // 随机初始透明度值
                    this.opacityStart = Math.random() * 10 + 10,

                    // 设置svg样式
                    this.setStyle(),

                    // 插入容器
                    element.append(_svgDom),

                    // 运行动画
                    this.run()
            }


            /**
             * [设置样式]
             */
            heartTemplate.prototype.setStyle = function () {

                    var _left = this.startX + Math.sin(this.pos + this.y / this.hz) * this.zf,
                        _opactiy = 1 - Math.max((this.y - this.opacityStart) / (this.height - this.opacityStart), 0),
                        _size = Math.min(this.y * 2 / this.height * (heartMax - heartMin) + heartMin, heartMax);

                    this.$el.css({
                        left: _left,
                        bottom: this.y,
                        opacity: _opactiy
                    }).width(_size).height(_size)
                },


                /**
                 * [动画函数]
                 * @return {}
                 */
                heartTemplate.prototype.run = function () {
                    var that = this,
                        delay = Math.random() * 20 + 10,
                        now = $.now(),
                        timer = setInterval(function () {
                            var curNow = $.now();
                            that.y += Math.round((curNow - now) / delay),
                                now = curNow,

                                // 设置样式
                                that.setStyle(),

                                // 如果y值大于等于容器高度则移除svgDom并且清除定时器
                                that.y >= that.height && (that.$el.remove(), clearTimeout(timer))
                        }, delay)
                };

            /**
             * [点赞]
             * @return {}
             */
            const praises = function () {
                this.$root = $("#play-like"),
                    this.$inner = this.$root.find(".bubble");
                var broswer = 0;
                try {
                    broswer = navigator.userAgent.match(/MSIE (\d+)/i)[1]
                } catch (n) {
                    broswer = 0
                }
                broswer == 0 ? (this.$root.show(), this.initEvent()) : this.$root.hide()
            };


            // 插入Dom
            praises.prototype.add = function (num) {
                    console.log(num)
                    num = num || 1;
                    if (this.$inner.find("svg").length + num > heartMaxNum) return;
                    for (var i = num; i > 0; i--)
                        new heartTemplate(this.$inner)
                },

                // 事件绑定
                praises.prototype.initEvent = function () {
                    var that = this;

                    this.$root.find(".praises").on("click", function (event) {
                        event.preventDefault(),
                            that.add(3)
                    })

                    this.$root.on("praise:receive", function (e) {
                        that.add(e.num)
                    })
                }

            // 执行点赞方法
            new praises();
            // })(jQuery)

            /********点赞效果 end ********/

        })
    },
    beforeUpdate() {},
    updated() {},
    beforeDestory() {},
    destroyed() {}
})
