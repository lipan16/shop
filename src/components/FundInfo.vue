<template>
    <div class="content">
        <van-cell :border="false"
                  title-style="font-family: PingFangSC-Semibold; font-size: 14px;color: #323233; margin-top: 16px">
            <template #title>
                <div style="display: flex; align-items: center">
                    <div style="margin-right: 4px; width: 3px; height: 14px; background: #5580d8"></div>
                    <div>{{ fundInfo.title || '股东出资信息' }}</div>
                </div>
            </template>
        </van-cell>
        <div class="cBody" v-for="(item, index) in fundInfo.data" :key="index">
            <van-divider/>
            <div class="item">
                <div>
                    <div class="name">{{ item.name }}</div>
                    <div class="label">股东</div>
                </div>
                <div>
                    <div class="fund">{{ item.fund }}</div>
                    <div class="label">认缴出资额</div>
                </div>
                <div>
                    <div class="radio">{{ item.ratio }}</div>
                    <div class="label">出资比例</div>
                </div>
                <div>
                    <div class="date">{{ item.date }}</div>
                    <div class="label">认缴出资日期</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FundInfo",
    props: {
        fundInfo: {}
    }
}
</script>

<style lang="less" scoped>
.cBody{
    margin : 0 16px;
    &:nth-child(n-1){
        margin-bottom: 20px;
    }
}

.item{
    display         : flex;
    justify-content : space-between;
    align-items     : center;
    text-align      : center;

    .name{
        font-family : PingFangSC-Medium;
        font-size   : 16px;
        color       : #323233;
    }

    .fund{
        font-family : DINAlternate-Bold;
        font-size   : 18px;
        color       : #e02020;
    }

    .radio{
        font-family : DINAlternate-Bold;
        font-size   : 18px;
        color       : #333333;
    }

    .date{
        font-family : DINAlternate-Bold;
        font-size   : 18px;
        color       : #333333;
    }

    .label{
        font-family : PingFangSC-Regular;
        font-size   : 12px;
        color       : #969799;
    }
}
</style>
