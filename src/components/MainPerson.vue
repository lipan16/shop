<template>
    <div class="content">
        <div v-show="show" style="height: 12px; background: rgba(31,90,147,0.10);"></div>
        <van-cell :border="false"
                  title-style="font-family: PingFangSC-Semibold; font-size: 14px;color: #323233; margin-top: 16px">
            <template #title>
                <div style="display: flex; align-items: center">
                    <div style="margin-right: 4px; width: 3px; height: 14px; background: #5580d8"></div>
                    <div>{{ mainPerson.title || '主要人员' }}</div>
                </div>
            </template>
        </van-cell>
        <van-divider/>
        <div class="cBody">
            <div class="item" v-for="(item, index) in mainPerson.data" :key="index">
                <div class="name text-overflow">{{item.name}}</div>
                <div class="value text-overflow">{{ item.post }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MainPerson",
    props: {
        mainPerson: {},
        show: {
            type: Boolean,
            default: true
        },
    },
}
</script>

<style lang="less" scoped>
.content{
}

.cBody{
    display       : flex;
    flex-wrap     : wrap;
    align-content : flex-start;

    > :nth-child(3n-2){
        margin-left : 16px;
    }

    > :nth-child(3n-1){
        margin-right : 12px;
        margin-left  : 12px;
    }

    .item{
        width         : 106px;
        height        : 60px;
        background    : #f4f8ff;
        border-radius : 4px;
        margin-bottom : 12px;
        text-align    : center;

        .name{
            font-family : PingFangSC-Medium;
            font-size   : 14px;
            color       : #333333;
            line-height : 18px;
            margin-top  : 11px;
        }

        .value{
            margin-top  : 2px;
            font-family : PingFangSC-Regular;
            font-size   : 12px;
            color       : #999999;
        }
    }
}
</style>
