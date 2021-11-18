<template>
    <div>
        <!-- 会员 -->
        <!-- <div id="children-view" :class="[show ? 'open':'']"> -->
        <div id="children-view" :class="{open:show}">
            <router-view />
        </div>
        <!-- 导航栏 -->
        <Navbar />
        <!-- cars 渲染 -->
        <!-- <Cars /> -->
        <!-- 地图 -->
        <Map />


    </div>
</template>

<script>
    import Map from '../amap/index';
    import Cars from '../cars/index';
    import Navbar from '@c/navbar/index';
    export default {
        name: "index",
        components: { Map, Cars, Navbar },
        data() {
            return {
                //show: false,
            }
        },
        created() {

        },
        computed: {
            show() {
                const router = this.$route;
                //console.log(router);
                return router.name === 'Home' ? false : true

            },

        },
        mounted() {
            document.addEventListener('mouseup', (e) => {
                const userCon = document.getElementById('children-view');
                if (userCon) {
                    if (!userCon.contains(e.target)) {
                        this.$router.push({
                            name: "Home",
                        })
                    }
                }
            })
        },
        watch: {
            //监听路由名字是不是首页 判断会员栏是不是需要展示
            // 缺点：刷新后就没了所以要放在计算缓存属性里面
            // "$route": {
            //     handler(newValue) {
            //         //console.log(newValue);
            //         const routerName = newValue.name;
            //         //console.log(routerName);
            //         this.show = routerName === 'Home' ? false : true
            //         console.log(this.show);
            //     }
            // }
        }

    }
</script>

<style lang="scss">
    #children-view {
        position: fixed;
        top: 0;
        right: -600px;
        bottom: 0;
        z-index: 101;
        width: 400px;
        background-color: #34393f;
        @include webkit(box-shadow, -5px 0 38px rgba(0, 0, 0, .4));
        -webkit-transition: all .3s ease 0s;
        -moz-transition: all .3s ease 0s;
        -ms-transition: all .3s ease 0s;
        -o-transition: all .3s ease 0s;
        transition: all .3s ease 0s;

        &.open {
            right: 0;
        }
    }
</style>