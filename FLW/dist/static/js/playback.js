/**
 * Created by haiping on 2018/10/09.
 */

var vm = new Vue({
    el: "#playback-panel",
    data: {
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
        ],
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
    methods: {},
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        var _self = this;

        $.ajax({
            url: "http://flnet-api.flnet.cn:8080/api/video/lives",
            type: "post",
            data: "",
            dataType: "json", //请求数据类型
            contentType: "application/x-www-form-urlencoded;charset=UTF-8",
            timeout: 15000, //设置请求超时时间（毫秒）。此设置将覆盖全局设置。
            cache: false, //是否缓存，默认值: true，dataType 为 script 和 jsonp 时默认为 false
            async: true,
            beforeSend: function (XMLHttpRequest) {
                //开始请求之前
                console.log("正在获取数据...");
            },
            success: function (response) {
               if(response.code === 1){
                   // _self.hotPlayer = response.data
               }
                console.log('data:',response)
                console.log("Ajax success!");
            },
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

        // var xhr = new XMLHttpRequest();
        // xhr.open('POST', "http://flnet-wap.flnet.cn/flnet_live/videoList", true);
        // xhr.timeout = 10000;  // 超时时间
        // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        // xhr.onreadystatechange = function (e) {
        //     if (this.readyState === 4) {
        //         if (this.status === 200) {
        //             console.log("result",this, JSON.parse(this.responseText))
        //         } else {
        //             var resJson = { code: this.status, response: this.response }
        //         }
        //     }
        // }
        // xhr.onload = function () {
        //     console.log("请求完成。在此进行处理")
        //     // 请求完成。在此进行处理。
        // };
        // xhr.ontimeout = function (e) {
        //     console.log("超时。在此做某事")
        //     // XMLHttpRequest 超时。在此做某事。
        // };
        // xhr.send()

    },
    beforeMount() {},
    mounted() {
        this.$nextTick(function () {
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 3.32,
                spaceBetween: 15,
                freeMode: true,
                slidesPerGroup : 3,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        })

    },
    beforeUpdate() {},
    updated() {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    },
    beforeDestory() {},
    destroyed() {}
})
