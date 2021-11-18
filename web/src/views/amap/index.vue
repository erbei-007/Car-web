<template>
    <div class="aMap">
        <el-amap vid="amapContainer" class="amap-demo" :events="events"></el-amap>
    </div>
</template>

<script>
    import { AMapManager, lazyAMapApiLoaderInstance } from 'vue-amap'
    export default {
        name: "amap",
        data() {
            return {

                map: null,
                zoom: 11,
                events: {

                }
            }
        },
        mounted() {
            lazyAMapApiLoaderInstance.load().then(() => {
                // your code ...
                this.map = new AMap.Map('amapContainer', {
                    center: [116.397765, 39.908413],
                    zoom: this.zoom,
                });
            });
        },
    }
</script>

<style lang="scss">
    .aMap {
        height: 100vh;
    }
</style>