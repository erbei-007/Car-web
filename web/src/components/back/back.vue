<template>
    <div class="header-back">
        <div class="back">
            <i class="icon">
            </i>
            <h4 class="title">{{column}}</h4>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Back",
        props: {
            column: {
                type: String,
                default: "",
            }
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
    .header-back {
        padding-bottom: 147px;
        position: relative;
    }

    .back {
        position: absolute;
        top: 21px;
        left: 0;
        right: 0;
        height: 40px;
        line-height: 40px;
    }

    .title {
        font-size: 16px;
        margin-left: 33px;
        color: #fff;
    }

    .icon {
        height: 40px;
        width: 40px;
        position: absolute;
        left: 0;
        top: 0;

        &:before {
            content: "";
            display: block;
            position: absolute;
            left: 0;
            top: 12px;
            width: 12px;
            height: 12px;
            border-left: 1px solid #00a3ff;
            border-top: 1px solid #00a3ff;
            @include webkit(transform, rotate(-45deg));
            cursor: pointer;
        }
    }
</style>