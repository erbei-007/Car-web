import Vue from "vue"
import VueAMap from 'vue-amap'
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
    key: 'dd25859efe42795158b338f9ec941b12',
    plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'Geocoder'],
    uiVersion: '1.0.11' // 版本号
});
