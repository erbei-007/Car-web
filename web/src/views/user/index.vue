<template>
    <div class="user-container">
        <div class="user-info">
            <img src="../../assets/face.png" alt="">
            <div class="meta">
                <h4 class="name">602690169@qq.com</h4>
                <span>
                    文明驾驶分:
                    <strong>0</strong>
                </span>
            </div>
        </div>
        <ul class="group-links">
            <router-link to="aa" tag="a" class="arrow">
                <i class="icon icon-user-link-1"></i>
                我的账户
            </router-link>
            <router-link to="aa" tag="a" class="arrow">
                <i class="icon icon-user-link-2"></i>
                租车订单
            </router-link>
            <router-link to="aa" tag="a" class="arrow">
                <i class="icon icon-user-link-3"></i>
                实名认证
            </router-link>
            <router-link to="/safe" tag="a" class="arrow">
                <i class="icon icon-user-link-4"></i>
                安全设置
            </router-link>
            <router-link to="aa" tag="a" class="arrow">
                <i class="icon icon-user-link-5"></i>
                帮助中心
            </router-link>
        </ul>
        <button class="logout">退出</button>
    </div>
</template>


<script>
    export default {
        name: "user",
        data() {
            return {

            }
        },

    }
</script>

<style lang="scss">
    @import "./index.scss";

    .logout {
        width: 158px;
        height: 58px;
        background-color: #2d3339;
        border-radius: 100px;
        text-align: center;
        line-height: 58px;
        color: #fff;
        font-size: 18px;
        border: none;
        outline: none;
        position: absolute;
        left: 50%;
        margin-left: -79px;
        bottom: 60px;
    }
</style>