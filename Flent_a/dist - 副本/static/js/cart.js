/**
 * Created by haiping on 2019/04/13.
 */

var vm = new Vue({
    el: "#cart-panel",
    data: {
        trailer: {},
    },
    computed: {
        goodsList: function () {
            // return this.goods_list.slice(0, this.limitNum);
        }
    },
    watch: {
        "trailer": {
            handler: function (defaultProvince) {},
            immediate: false, //声明immediate: true表示创建组件时立马执行一次
            deep: true
        },
    },
    methods: {
        
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

        //直播预告
        // this.ajaxCustomer("http://flnet-api.flnet.cn:8080/api/video/livePreview", "get", "", function (response) {
        //     console.log("response:",response)
        //     console.log("Ajax success")
        // });
    },
    beforeMount() {},
    mounted() {
        this.$nextTick(function () {})
    },
    beforeUpdate() {},
    updated() {},
    beforeDestory() {},
    destroyed() {}
})
