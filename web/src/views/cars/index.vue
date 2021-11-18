<template>
    <div class="cars-wrap">
        <div class="cars-swiper-wrap">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide>
                    <Carsitem height="800px" />
                </swiper-slide>
                <swiper-slide>
                    <Carsitem />
                </swiper-slide>
                <swiper-slide>
                    <Carsitem />
                </swiper-slide>
                <swiper-slide>
                    <Carsitem />
                </swiper-slide>
                <swiper-slide>
                    <Carsitem />
                </swiper-slide>
            </swiper>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </div>


    </div>
</template>


<script>
    import Carsitem from "@/components/carsList"
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    //import 'swiper/swiper-bundle.css'
    import 'swiper/css/swiper.css'
    export default {
        name: "cars",
        components: {
            Swiper,
            SwiperSlide,
            Carsitem
        },
        data() {
            return {
                swiperOption: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },

            }
        },
        methods: {
            show() {
                this.$router.push({
                    name: 'User'
                })
            }
        },

    }
</script>

<style lang="scss">
    @import "./index.scss"
</style>