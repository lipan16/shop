<template>
    <div class="content">
        <div style="height: 12px; background: rgba(31,90,147,0.10);"></div>
        <van-cell :border="false"
                  title-style="font-family: PingFangSC-Semibold; font-size: 14px;color: #323233; margin-top: 16px">
            <template #title>
                <div style="display: flex; align-items: center">
                    <div style="margin-right: 4px; width: 3px; height: 14px; background: #5580d8"></div>
                    <div>{{ baseItem.title || '标题' }}</div>
                </div>
            </template>
        </van-cell>
        <van-divider/>
        <div class="cBody">
            <div class="item" v-for="(term, index) in baseItem.data" :key="index">
                <div class="name">
                    <van-cell style="background: #5580d8;" title-class="titleClass" value-class="valueClass"
                              :title="term.title" :value="term.value" :border="false"/>
                </div>
                <van-cell class="value" v-for="(item, j) in term.data" :key="j"
                          :title="item.name" :value="item.value" :border="false"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BaseItem",
    props: {
        baseItem: {}
    },
}
</script>

<style lang="less" scoped>
.content{
}

.cBody{
    .item{
        background    : #f4f8ff;
        border-radius : 4px;
        margin        : 12px 16px;

        .name{
            padding       : 8px 0 8px 8px;
            border-radius : 4px 4px 0 0;
            background    : #5580d8;
        }

        .titleClass{
            font-family : PingFangSC-Medium;
            font-size   : 16px;
            color       : #ffffff;
            line-height : 20px;
            min-width   : 60%
        }

        .valueClass{
            font-family : PingFangSC-Medium;
            font-size   : 16px;
            color       : #ffffff;
            line-height : 20px;
        }

        .value{
            background-color : #f4f8ff;
            padding-top      : 12px;
        }
    }
}
</style>

