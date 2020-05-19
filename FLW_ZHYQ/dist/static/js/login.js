/**
 * Created by haiping on 2018/10/09.
 */

var vm = new Vue({
    el: "#login-layout",
    data: {
        login: {
            name: null,
            pwd: null,
        }
    },
    computed: {},
    watch: {},
    methods: {
        loginCustomer(e, login) { 
            console.log(login)
        }
    },
    beforeCreate() {},
    created() {
    },
    beforeMount() {},
    mounted() {
        this.$nextTick(function () {
        })
    },
    beforeUpdate() {},
    updated() {},
    beforeDestory() {},
    destroyed() {}
})
