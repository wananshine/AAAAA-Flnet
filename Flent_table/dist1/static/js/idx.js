/**
 * Created by haiping on 2019/03/23.
 */

var vm = new Vue({
    el: "#floor-panel",
    data: {
        trailer: {
            "id":16,
            "title":"1",
            "image_url":"https://img.alicdn.com/simba/img/TB1q1A8rJknBKNjSZKPSut6OFXa.jpg",
            "video_url":"3",
            "pre_date":"01月01日 08:00"
        }, //直播预告
        playBack: {       
            "id":10542,
            "uid":4409,
            "title":"。？？？",
            "image_url":"http://flnet-test.oss-cn-shanghai.aliyuncs.com/head/2017/11/24_17:50:17/d1f44e2f09dc172978a4d3151d11d63e.png",
            "video_url":"http://live-video-test.flnet.cn.w.kunlunca.com/live/record/2018-01-08/flnet/4409/2018-01-08-09:16:11_2018-01-08-09:24:13.mp4",
            "click_num":12,
            "goods_ids":[

            ],
            "user_info":{
                "id":4409,
                "nick":"网友4409",
                "head_image_url":"http://flnet-test.oss-cn-shanghai.aliyuncs.com/head/2017/11/24_17:50:17/d1f44e2f09dc172978a4d3151d11d63e.png",
                "level":3
            }
        }, //回放
        videoArry: [      
            {
                "id":10542,
                "uid":4409,
                "title":"。？？？",
                "image_url":"http://flnet-test.oss-cn-shanghai.aliyuncs.com/head/2017/11/24_17:50:17/d1f44e2f09dc172978a4d3151d11d63e.png",
                "video_url":"http://live-video-test.flnet.cn.w.kunlunca.com/live/record/2018-01-08/flnet/4409/2018-01-08-09:16:11_2018-01-08-09:24:13.mp4",
                "click_num":12,
                "goods_ids":[

                ],
                "user_info":{
                    "id":4409,
                    "nick":"网友4409",
                    "head_image_url":"http://flnet-test.oss-cn-shanghai.aliyuncs.com/head/2017/11/24_17:50:17/d1f44e2f09dc172978a4d3151d11d63e.png",
                    "level":3
                }
            },
            {
                "id":10543,
                "uid":4409,
                "title":"。？？？",
                "image_url":"http://flnet-test.oss-cn-shanghai.aliyuncs.com/head/2017/11/24_17:50:17/d1f44e2f09dc172978a4d3151d11d63e.png",
                "video_url":"http://live-video-test.flnet.cn.w.kunlunca.com/live/record/2018-01-08/flnet/4409/2018-01-08-09:16:11_2018-01-08-09:24:13.mp4",
                "click_num":12,
                "goods_ids":[

                ],
                "user_info":{
                    "id":4409,
                    "nick":"网友4409",
                    "head_image_url":"http://flnet-test.oss-cn-shanghai.aliyuncs.com/head/2017/11/24_17:50:17/d1f44e2f09dc172978a4d3151d11d63e.png",
                    "level":3
                }
            }
        ] , //视频
        place: {},
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
        
        linkCustomer(link,e){
            e.preventDefault();
            //window.location.href=link;
            window.open(link); 
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

        //        var xhr = new XMLHttpRequest()
        //        xhr.open('GET', url, true)
        //        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //        xhr.onreadystatechange = function () {
        //            if (this.readyState === 4) {
        //                if (this.status === 200) {
        //                    
        //                } else {
        //                    var resJson = { code: this.status, response: this.response }
        //                    
        //                }
        //            }
        //        }
        //
        //        xhr.send()


    },
    created() {
        var _self = this;

        //直播预告
        this.ajaxCustomer("http://flnet-api.flnet.cn:8080/api/video/livePreview", "get", "", function (response) {
            console.log("response:",response)
            console.log("Ajax success")
        });
        //回放
        this.ajaxCustomer("http://flnet-api.flnet.cn:8080/api/video/lives", "get", "", function (response) {
            console.log("response:",response)
            console.log("Ajax success")
        });
        //视频
        this.ajaxCustomer("http://flnet-api.flnet.cn:8080/api/video/buy", "get", "", function (response) {
            console.log("response:",response)
            console.log("Ajax success")
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

    },
    beforeMount() {},
    mounted() {
        this.$nextTick(function () {
            // var player = new Aliplayer({
            //     id: "player-con",
            //     source: "http://player.pier39.cn/video/editor.mp4",
            //     width: "100%",
            //     height: "500px",
            //     cover: 'https://img.alicdn.com/tps/TB1EXIhOFXXXXcIaXXXXXXXXXXX-760-340.jpg',
            //     /* 设置封面时需要将 autoplay 和 preload 设置为 false */
            //     autoplay: false,
            //     preload: false,
            //     language: "zh-cn",
            //     isLive: false
            // }, function (player) {
            //     console.log("播放器创建成功");
            // });
            var player = new Aliplayer({
                "id": "player-con",
                "source": "//player.alicdn.com/video/aliyunmedia.mp4",
                "width": "100%",
                "height": "500px",
                "autoplay": true,
                "isLive": false,
                "rePlay": false,
                "playsinline": true,
                "preload": true,
                "controlBarVisibility": "hover",
                "useH5Prism": true
            }, function (player) {
                console.log("播放器创建了。");
            });
        })
    },
    beforeUpdate() {},
    updated() {},
    beforeDestory() {},
    destroyed() {}
})
