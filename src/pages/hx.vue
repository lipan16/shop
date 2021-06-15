<template>
    <div class="hx">
        <div class="head">
            <div class="titleZh">上海市爱翻译股份有限公司</div>
            <div class="titleEn">Shanghai aifanyi Co., Ltd</div>
        </div>
        <van-tabs v-model="tabActive" sticky animated swipeable background="none" color="#FFFFFF"
                  title-active-color="#FFFFFF" title-inactive-color="#ffffff">
            <van-tab title="基础信息">
                <van-collapse v-model="colActive">
                    <van-collapse-item :is-link="false">
                        <template #title>
                            <van-cell :border="false"
                                      title-style="font-family: PingFangSC-Semibold;
                                      font-size: 14px;color: #323233; margin-top: 16px" is-link>
                                <template #title>
                                    <span style="border-right: solid #5580d8 3px; margin-right: 4px;"></span>
                                    <span>工商信息</span>
                                </template>
                            </van-cell>
                            <van-divider/>
                            <van-cell :border="false" title="曾用名" value="福建省-福州市-鼓楼区"/>
                            <van-cell :border="false" title="注册号" value="科学研究及技术服务业"/>
                            <van-cell :border="false" title="统一社会信用代码" value="9134858MA2345USDS"/>
                            <van-cell :border="false" title="纳税人识别号" value="李奥"/>
                            <van-cell :border="false" title="进出口企业代码" value="13012344321"/>
                            <van-cell :border="false" title="注册资本" value="科学研究及技术服务业"/>
                        </template>
                        <van-cell :border="false" title="实邀资本" value="9134858MA2345USDS"/>
                        <van-cell :border="false" title="所属行业" value="李奥"/>
                        <van-cell :border="false" title="企业类型" value="企业类型"/>
                        <van-cell :border="false" title="经营状态" value="经营状态"/>
                        <van-cell :border="false" title="成立日期" value="成立日期"/>
                        <van-cell :border="false" title="核准日期" value="核准日期"/>
                        <van-cell :border="false" title="营业期限" value="营业期限"/>
                        <van-cell :border="false" title="登记机关" value="登记机关"/>
                        <van-cell :border="false" title="人员规模" value="人员规模"/>
                        <van-cell :border="false" title="参保人数" value="参保人数"/>
                        <van-cell :border="false" title="注册地址" value="注册地址"/>
                        <van-cell :border="false" title="经营范围" value="经营范围"/>
                    </van-collapse-item>
                </van-collapse>
            </van-tab>
            <van-tab title="股东信息"></van-tab>
            <van-tab title="企业对外信息"></van-tab>
            <van-tab title="年报信息"></van-tab>
            <van-tab title="法律风险"></van-tab>
            <van-tab title="经营风险"></van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
    name: "hx",
    data(){
        return {
            tabActive: 0,
            colActive: [],
        }
    }
}
</script>

<style lang="less" scoped>
.hx{
    width           : 100%;
    height          : 667px;
    background      : url("../assets/bg.svg") no-repeat;
    background-size : 100%;
}

.head{
    margin : 20px 0 12px 16px;

    .titleZh{
        font-family : PingFangSC-Semibold;
        font-size   : 19px;
        color       : #ffffff;
    }

    .titleEn{
        font-family : PingFangSC-Regular;
        font-size   : 14px;
        color       : #ffffff;
    }
}

/deep/ .van-tabs{
    .van-tabs__nav--line{
        height : 22px;
    }

    .van-tabs__line{
        height : 2px;
    }

    .van-tabs--line{
        height : auto;
    }

    .van-tab{
        opacity : 0.7;
    }

    .van-tab--active{
        opacity : 1;
    }
}

/deep/ .van-cell{
    padding : 0 8px;

    .van-cell__title{
        font-family : PingFangSC-Regular;
        font-size   : 14px;
        color       : #999999;
    }

    .van-cell__value{
        font-family : PingFangSC-Regular;
        font-size   : 14px;
        color       : #333333;
    }
}

/deep/ .van-divider{
    margin : 10px 0;
}

/deep/ .van-icon-arrow::before{
    margin-top : 16px;
}
</style>
