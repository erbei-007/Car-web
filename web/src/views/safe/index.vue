<template>
    <div class="user-container">
        <Back column="安全设置" />
        <ul class="group-links">
            <router-link to="/password" tag="a" class="arrow">
                修改登录密码
            </router-link>
            <router-link to="aa" tag="a" class="arrow">
                设置资金密码
            </router-link>
            <router-link to="/telephone" tag="a" class="arrow">
                绑定手机号
            </router-link>
            <router-link to="aa" tag="a" class="arrow">
                绑定银行卡
            </router-link>
        </ul>

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