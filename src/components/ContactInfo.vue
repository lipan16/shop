<template>
    <div class="content">
        <div v-show="show" style="height: 12px; background: rgba(31,90,147,0.10);"></div>
        <van-cell :border="false"
                  title-style="font-family: PingFangSC-Semibold; font-size: 14px;color: #323233; margin-top: 16px">
            <template #title>
                <div style="display: flex; align-items: center">
                    <div style="margin-right: 4px; width: 3px; height: 14px; background: #5580d8"></div>
                    <div>{{ contactInfo.title || '联系信息' }}</div>
                </div>
            </template>
        </van-cell>
        <van-divider/>
        <div class="cBody">
            <van-cell v-for="(item, index) in contactInfo.data" :key="index"
                      :title="item.title" :value="item.value" :border="false"/>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContactInfo",
    props: {
        contactInfo: {},
        show: {
            type: Boolean,
            default: true
        },
    }
}
</script>

<style lang="less" scoped>
.cBody{
    margin: 0 16px 16px 16px;
}
</style>
