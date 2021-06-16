<template>
    <div class="hx">
        <div class="head">
            <div class="titleZh">上海市爱翻译股份有限公司</div>
            <div class="titleEn">Shanghai aifanyi Co., Ltd</div>
        </div>
        <van-tabs v-model="tabActive" animated swipeable background="none" color="#FFFFFF"
                  title-active-color="#FFFFFF" title-inactive-color="#ffffff">
            <van-tab title="基础信息">
                <van-collapse v-model="colActive">
                    <van-collapse-item :is-link="false">
                        <template #title>
                            <van-cell :border="false"
                                      title-style="font-family: PingFangSC-Semibold;
                                      font-size: 14px;color: #323233; margin-top: 16px" is-link>
                                <template #title>
                                    <div style="display: flex; align-items: center">
                                        <div style="margin-right: 4px; width: 3px; height: 14px; background: #5580d8"></div>
                                        <div>工商信息</div>
                                    </div>
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

                <MainPerson :mainPerson="mainPerson"/>
                <BaseItem :baseItem="corporateBranch"/>
                <BaseItem :baseItem="changeLog"/>
                <ContactInfo :contactInfo="contactInfo"/>
            </van-tab>
            <van-tab title="股东信息">
                <FundInfo :fundInfo="fundInfo"/>
                <BaseItem :baseItem="otherCompanyPostInfo"/>
            </van-tab>
            <van-tab title="企业对外信息">
                <BaseItem :show="false" :baseItem="comExternalFund"/>
                <BaseItem :base-item="perExternalFund"/>
            </van-tab>
            <van-tab title="年报信息">
                <ContactInfo :show="false" :contact-info="socialSecurityInfo"/>
                <ContactInfo :contact-info="manageInfo"/>
                <BaseItem :base-item="yearFundInfo"/>
                <BaseItem :base-item="equityChange"/>
                <BaseItem :base-item="externalGuarantee"/>
            </van-tab>
            <van-tab title="法律风险">
                <BaseItem :show="false" :base-item="comExternalFund"/>
                <BaseItem :base-item="dishonestyPerInfo"/>
            </van-tab>
            <van-tab title="经营风险">
                <BaseItem :show="false" :base-item="seriouslyIllegal"/>
                <BaseItem :base-item="abnormalOperation"/>
                <BaseItem :base-item="administrativePenalties"/>
                <BaseItem :base-item="equityPledge"/>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import MainPerson from "../components/MainPerson"
import BaseItem from "../components/BaseItem";
import ContactInfo from "../components/ContactInfo";
import FundInfo from "../components/FundInfo";

export default {
    name: "hx",
    components: {
        FundInfo,
        ContactInfo,
        BaseItem,
        MainPerson
    },
    data(){
        return {
            tabActive: 1, // 激活的tab
            colActive: [], // 基础信息 --> 工商信息是否展开
            mainPerson: {
                title: "主要人员",
                data: [
                    {name: "王逸一", post: "董事"},
                    {name: "王逸一", post: "企业法人"},
                    {name: "王逸一", post: "财务总监"},
                    {name: "王逸一", post: "董事"},
                    {name: "王逸一", post: "董事"},
                    {name: "王逸一", post: "董事"},
                ]
            },
            corporateBranch: {
                title: "企业分支机构",
                data: [
                    {
                        title: "科学研究及技术服务业", value: "12", data: [
                            {name: "统一社会信用代码", value: "189271982901829"},
                            {name: "统一社会信用代码", value: "189271982901829"},
                        ]
                    }, {
                        title: "科学研究及技术服务业", data: [
                            {name: "统一社会信用代码", value: "189271982901829"},
                            {name: "统一社会信用代码", value: "189271982901829"},
                        ]
                    },
                ]
            },
            changeLog: {
                title: "变更记录",
                data: [
                    {
                        title: "科学研究及技术服务业", data: [
                            {name: "变更日期", value: "2021.3.21"},
                            {name: "变更前", value: "变更前"},
                            {name: "变更后", value: "变更后"},
                        ]
                    }, {
                        title: "科学研究及技术服务业", data: [
                            {name: "变更日期", value: "2021.3.21"},
                            {name: "变更前", value: "变更前"},
                            {name: "变更后", value: "变更后"},
                        ]
                    },
                ]
            },
            contactInfo: {
                title: "联系信息",
                data: [
                    {title: "电话", value: "电话"},
                    {title: "邮箱", value: "邮箱"},
                    {title: "网址", value: "网址"},
                    {title: "地址", value: "地址"},
                ]
            },
            fundInfo: {
                title: "股东出资信息",
                data: [
                    {name: "陈XX", fund: "500", ratio: "51%", date: "2021.5.31"},
                    {name: "陈XX", fund: "500", ratio: "51%", date: "2021.5.31"},
                    {name: "陈XX", fund: "500", ratio: "51%", date: "2021.5.31"},
                    {name: "陈XX", fund: "500", ratio: "51%", date: "2021.5.31"},
                ]
            },
            otherCompanyPostInfo: {
                title: "法人其他公司职位信息",
                data: [
                    {
                        title: "企业名称展示在这里", data: [
                            {name: "企业类型", value: "企业类型.3.21"},
                            {name: "企业状态", value: "企业状态"},
                            {name: "法定代表人", value: "法定代表人"},
                            {name: "注册资本", value: "注册资本"},
                            {name: "职务", value: "职务"},
                        ]
                    }, {
                        title: "企业名称展示在这里", data: [
                            {name: "企业类型", value: "企业类型.3.21"},
                            {name: "企业状态", value: "企业状态"},
                            {name: "法定代表人", value: "法定代表人"},
                            {name: "注册资本", value: "注册资本"},
                            {name: "职务", value: "职务"},
                        ]
                    },
                ]
            },
            comExternalFund: {
                title: "企业对外投资",
                data: [
                    {
                        title: "企业名称展示在这里", data: [
                            {name: "统一社会信用代码", value: "统一社会信用代码"},
                            {name: "企业类型", value: "企业类型.3.21"},
                            {name: "法定代表人", value: "法定代表人"},
                            {name: "注册资金", value: "注册资金"},
                            {name: "注册资金币种", value: "注册资金币种"},
                            {name: "注销日期", value: "注销日期"},
                            {name: "企业状态", value: "企业状态"},
                        ]
                    }, {
                        title: "企业名称展示在这里", data: [
                            {name: "统一社会信用代码", value: "统一社会信用代码"},
                            {name: "企业类型", value: "企业类型.3.21"},
                            {name: "法定代表人", value: "法定代表人"},
                            {name: "注册资金", value: "注册资金"},
                            {name: "注册资金币种", value: "注册资金币种"},
                            {name: "注销日期", value: "注销日期"},
                            {name: "企业状态", value: "企业状态"},
                        ]
                    },
                ]
            },
            perExternalFund: {
                title: "法人对外投资信息",
                data: [
                    {
                        title: "企业名称展示在这里", data: [
                            {name: "统一社会信用代码", value: "统一社会信用代码"},
                            {name: "企业类型", value: "企业类型.3.21"},
                            {name: "法定代表人", value: "法定代表人"},
                            {name: "注册资金", value: "注册资金"},
                            {name: "注册资金币种", value: "注册资金币种"},
                            {name: "注销日期", value: "注销日期"},
                            {name: "企业状态", value: "企业状态"},
                        ]
                    }, {
                        title: "企业名称展示在这里", data: [
                            {name: "统一社会信用代码", value: "统一社会信用代码"},
                            {name: "企业类型", value: "企业类型.3.21"},
                            {name: "法定代表人", value: "法定代表人"},
                            {name: "注册资金", value: "注册资金"},
                            {name: "注册资金币种", value: "注册资金币种"},
                            {name: "注销日期", value: "注销日期"},
                            {name: "企业状态", value: "企业状态"},
                        ]
                    },
                ]
            },
            socialSecurityInfo: {
                title: "年报-社保信息",
                data: [
                    {title: "电话", value: "电话"},
                    {title: "邮箱", value: "邮箱"},
                    {title: "网址", value: "网址"},
                    {title: "地址", value: "地址"},
                ]
            },
            manageInfo: {
                title: "年报-经营信息",
                data: [
                    {title: "电话", value: "电话"},
                    {title: "邮箱", value: "邮箱"},
                    {title: "网址", value: "网址"},
                    {title: "地址", value: "地址"},
                ]
            },
            yearFundInfo: {
                title: "年报-出资信息",
                data: [
                    {
                        title: "企业名称展示在这里", data: [
                            {name: "统一社会信用代码", value: "统一社会信用代码"},
                            {name: "企业类型", value: "企业类型.3.21"},
                            {name: "法定代表人", value: "法定代表人"},
                            {name: "注册资金", value: "注册资金"},
                            {name: "注册资金币种", value: "注册资金币种"},
                            {name: "注销日期", value: "注销日期"},
                            {name: "企业状态", value: "企业状态"},
                        ]
                    }, {
                        title: "企业名称展示在这里", data: [
                            {name: "统一社会信用代码", value: "统一社会信用代码"},
                            {name: "企业类型", value: "企业类型.3.21"},
                            {name: "法定代表人", value: "法定代表人"},
                            {name: "注册资金", value: "注册资金"},
                            {name: "注册资金币种", value: "注册资金币种"},
                            {name: "注销日期", value: "注销日期"},
                            {name: "企业状态", value: "企业状态"},
                        ]
                    },
                ]
            },
            equityChange: {
                title: " 年报-股权变更",
                data: [
                    {
                        title: "企业名称展示在这里", data: [
                            {name: "统一社会信用代码", value: "统一社会信用代码"},
                            {name: "企业类型", value: "企业类型.3.21"},
                            {name: "法定代表人", value: "法定代表人"},
                            {name: "注册资金", value: "注册资金"},
                            {name: "注册资金币种", value: "注册资金币种"},
                            {name: "注销日期", value: "注销日期"},
                            {name: "企业状态", value: "企业状态"},
                        ]
                    }, {
                        title: "企业名称展示在这里", data: [
                            {name: "统一社会信用代码", value: "统一社会信用代码"},
                            {name: "企业类型", value: "企业类型.3.21"},
                            {name: "法定代表人", value: "法定代表人"},
                            {name: "注册资金", value: "注册资金"},
                            {name: "注册资金币种", value: "注册资金币种"},
                            {name: "注销日期", value: "注销日期"},
                            {name: "企业状态", value: "企业状态"},
                        ]
                    },
                ]
            },
            externalGuarantee: {
                title: "年报-对外担保",
                data: [
                    {
                        title: "企业名称展示在这里", data: [
                            {name: "统一社会信用代码", value: "统一社会信用代码"},
                            {name: "企业类型", value: "企业类型.3.21"},
                            {name: "法定代表人", value: "法定代表人"},
                            {name: "注册资金", value: "注册资金"},
                            {name: "注册资金币种", value: "注册资金币种"},
                            {name: "注销日期", value: "注销日期"},
                            {name: "企业状态", value: "企业状态"},
                        ]
                    }, {
                        title: "企业名称展示在这里", data: [
                            {name: "统一社会信用代码", value: "统一社会信用代码"},
                            {name: "企业类型", value: "企业类型.3.21"},
                            {name: "法定代表人", value: "法定代表人"},
                            {name: "注册资金", value: "注册资金"},
                            {name: "注册资金币种", value: "注册资金币种"},
                            {name: "注销日期", value: "注销日期"},
                            {name: "企业状态", value: "企业状态"},
                        ]
                    },
                ]
            },
            dishonestyPerInfo: {
                title: "失信被执行人信息",
                data: [
                    {
                        title: "企业名称展示在这里", data: [
                            {name: "统一社会信用代码", value: "统一社会信用代码"},
                            {name: "企业类型", value: "企业类型.3.21"},
                            {name: "法定代表人", value: "法定代表人"},
                            {name: "注册资金", value: "注册资金"},
                            {name: "注册资金币种", value: "注册资金币种"},
                            {name: "注销日期", value: "注销日期"},
                            {name: "企业状态", value: "企业状态"},
                        ]
                    }, {
                        title: "企业名称展示在这里", data: [
                            {name: "统一社会信用代码", value: "统一社会信用代码"},
                            {name: "企业类型", value: "企业类型.3.21"},
                            {name: "法定代表人", value: "法定代表人"},
                            {name: "注册资金", value: "注册资金"},
                            {name: "注册资金币种", value: "注册资金币种"},
                            {name: "注销日期", value: "注销日期"},
                            {name: "企业状态", value: "企业状态"},
                        ]
                    },
                ]
            },
            seriouslyIllegal: {
                title: "严重违法",
                data: [
                    {
                        title: "列入日期", value: "2020年3月1日", data: [
                            {name: "统一社会信用代码", value: "统一社会信用代码"},
                            {name: "企业类型", value: "企业类型.3.21"},
                            {name: "法定代表人", value: "法定代表人"},
                            {name: "注册资金", value: "注册资金"},
                            {name: "注册资金币种", value: "注册资金币种"},
                            {name: "注销日期", value: "注销日期"},
                            {name: "企业状态", value: "企业状态"},
                        ]
                    }, {
                        title: "列入日期", value: "2020年3月1日", data: [
                            {name: "统一社会信用代码", value: "统一社会信用代码"},
                            {name: "企业类型", value: "企业类型.3.21"},
                            {name: "法定代表人", value: "法定代表人"},
                            {name: "注册资金", value: "注册资金"},
                            {name: "注册资金币种", value: "注册资金币种"},
                            {name: "注销日期", value: "注销日期"},
                            {name: "企业状态", value: "企业状态"},
                        ]
                    },
                ]
            },
            abnormalOperation: {
                title: "异常经营",
                data: [
                    {
                        title: "列入日期", value: "2020年3月1日", data: [
                            {name: "统一社会信用代码", value: "统一社会信用代码"},
                            {name: "企业类型", value: "企业类型.3.21"},
                            {name: "法定代表人", value: "法定代表人"},
                            {name: "注册资金", value: "注册资金"},
                            {name: "注册资金币种", value: "注册资金币种"},
                            {name: "注销日期", value: "注销日期"},
                            {name: "企业状态", value: "企业状态"},
                        ]
                    }, {
                        title: "列入日期", value: "2020年3月1日", data: [
                            {name: "统一社会信用代码", value: "统一社会信用代码"},
                            {name: "企业类型", value: "企业类型.3.21"},
                            {name: "法定代表人", value: "法定代表人"},
                            {name: "注册资金", value: "注册资金"},
                            {name: "注册资金币种", value: "注册资金币种"},
                            {name: "注销日期", value: "注销日期"},
                            {name: "企业状态", value: "企业状态"},
                        ]
                    },
                ]
            },
            administrativePenalties: {
                title: "行政处罚",
                data: [
                    {
                        title: "列入日期", value: "2020年3月1日", data: [
                            {name: "统一社会信用代码", value: "统一社会信用代码"},
                            {name: "企业类型", value: "企业类型.3.21"},
                            {name: "法定代表人", value: "法定代表人"},
                            {name: "注册资金", value: "注册资金"},
                            {name: "注册资金币种", value: "注册资金币种"},
                            {name: "注销日期", value: "注销日期"},
                            {name: "企业状态", value: "企业状态"},
                        ]
                    }, {
                        title: "列入日期", value: "2020年3月1日", data: [
                            {name: "统一社会信用代码", value: "统一社会信用代码"},
                            {name: "企业类型", value: "企业类型.3.21"},
                            {name: "法定代表人", value: "法定代表人"},
                            {name: "注册资金", value: "注册资金"},
                            {name: "注册资金币种", value: "注册资金币种"},
                            {name: "注销日期", value: "注销日期"},
                            {name: "企业状态", value: "企业状态"},
                        ]
                    },
                ]
            },
            equityPledge: {
                title: "股权出质",
                data: [
                    {
                        title: "列入日期", value: "2020年3月1日", data: [
                            {name: "统一社会信用代码", value: "统一社会信用代码"},
                            {name: "企业类型", value: "企业类型.3.21"},
                            {name: "法定代表人", value: "法定代表人"},
                            {name: "注册资金", value: "注册资金"},
                            {name: "注册资金币种", value: "注册资金币种"},
                            {name: "注销日期", value: "注销日期"},
                            {name: "企业状态", value: "企业状态"},
                        ]
                    }, {
                        title: "列入日期", value: "2020年3月1日", data: [
                            {name: "统一社会信用代码", value: "统一社会信用代码"},
                            {name: "企业类型", value: "企业类型.3.21"},
                            {name: "法定代表人", value: "法定代表人"},
                            {name: "注册资金", value: "注册资金"},
                            {name: "注册资金币种", value: "注册资金币种"},
                            {name: "注销日期", value: "注销日期"},
                            {name: "企业状态", value: "企业状态"},
                        ]
                    },
                ]
            },
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

    .van-tab__pane-wrapper{
        overflow : scroll;
        height   : 553px
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
