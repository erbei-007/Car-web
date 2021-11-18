<template>
    <div>
        <section class="cars-item">
            <header>
                <h4 class="cars-logo">
                    <img src="../../assets/cars-logo.png" alt="Mustang 2019款">
                    <span>Mustang 2019款</span>
                </h4>
                <p class="car-attr">新能源汽车 5座</p>
            </header>
            <div class="cars-content">
                <div class="info">
                    <div>
                        <h4 class="car-number">粤A 888888</h4>
                        <div>
                            <ul class="car-electric active-li-8">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <p class="distance">
                                <sub>约</sub>
                                <strong>600</strong>
                                <sub>KM</sub>
                            </p>
                        </div>
                    </div>
                </div>
                <img src="../../assets/pic001.jpg" alt="">
            </div>
            <footer>
                <a href="javascript void(0);" class="footer-link">某某停车场</a>
            </footer>
        </section>
        <section class="cars-item cars-datailed" :style="'height:' + height">
            <div class="scroll">
                <h4 class="colum">某某停车场
                    <i class="close"></i>
                </h4>
                <header>
                    <h4 class="cars-logo">
                        <img src="../../assets/cars-logo.png" alt="Mustang 2019款">
                        <span>Mustang 2019款</span>
                    </h4>
                    <p class="car-attr">新能源汽车 5座</p>
                </header>
                <img src="../../assets/pic001.jpg" alt="" width="100%">
                <div class="clearfix">
                    <div class="fs-24 pull-left">
                        粤A88888
                    </div>
                    <p class="distance pull-right">
                        <sub>约</sub>
                        <strong>600</strong>
                        <sub>KM</sub>
                    </p>
                </div>
                <div class="car-electric-box">
                    <div class="p-r">
                        <span class="e-high p-a" style="width:80%"></span>
                        <span class="e-bg"></span>
                    </div>
                </div>
                <p class=" color-main text-center" style="margin: 32px 0 28px;">取车约支付12.0元停车费，实际补贴12.0元</p>
                <ul class="cars-type-list">
                    <li class="current">
                        <h4 class="name">日租车</h4>
                        <span class="price">￥300/1天</span>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div class="clause">
                    <span class="pull-left">参保《全面保障服务》用车更放心</span>
                    <i class="current"></i>
                </div>
            </div>
            <div>
                <a href="javascript:void(0);" class="select-car--btn">预约车辆</a>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "CarsList",
        props: {
            height: {
                type: String,
                default: "257px"
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./index.scss"
</style>