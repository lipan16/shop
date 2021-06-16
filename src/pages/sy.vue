<template>
    <div class="sy">
        <div class="messages">
            <div class="message" v-for="(item, index) in messages" :key="index">
                <div class="msgD">
                    <van-badge :dot="item.dot">
                        <div class="msgT">{{ item.title }}</div>
                    </van-badge>
                </div>
                <div class="msgN">{{ item.detail }}</div>
            </div>
        </div>

        <div class="products">
            <div class="pHead">
                <div class="title">关注产品</div>
                <div class="more">更多</div>
            </div>
            <div class="product">
                <div class="pTitle">
                    <div class="title">江苏银行理财项目合作</div>
                    <img src="" alt="">
                    <span>买</span>
                    <span>发行</span>
                    <span>平台报价</span>
                </div>
                <div class="pBody">
                    <div class="head">
                        <div class="h0">
                            <div class="h1">200亿起</div>
                            <div class="h2">规模</div>
                        </div>
                        <div class="h4">
                            <div class="h3">1.5年起</div>
                            <div class="h2">期限</div>
                        </div>
                    </div>
                    <div class="pLine"></div>
                    <div class="end">
                        <div class="e0">
                            <div class="e1">收益率</div>
                            <div class="e2">5.20%</div>
                        </div>
                        <div class="e3">
                            <div class="e1">报价方</div>
                            <div class="e2">兴业银行上海…</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "sy",
    data(){
        return {
            messages: [
                {dot: true, title: '大额变动', detail: '上海市某某股份有限公司转账10000万元'},
                {dot: false, title: '业务到期', detail: '上海市某某公司办理的定期存款业务即将到…'},
                {dot: false, title: '临界客户', detail: '上市公司行业案例新鲜出炉'}
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.sy{
    width : 100%;
}

.messages{
    background    : #ffffff;
    border        : 1px solid #f5f9fc;
    box-shadow    : 0 0 12px 0 rgba(96, 98, 105, 0.09);
    border-radius : 8px;
    margin        : 20px 8px 0 8px;
    padding-top   : 20px;

    .message{
        margin-bottom : 16px;

        .msgD{
            margin-left : 12px;
            display     : inline-block;
        }

        .msgT{
            background    : #ffe3c5;
            border-radius : 2px;
            font-family   : PingFangSC-Regular;
            font-size     : 10px;
            color         : #ff7c00;
            text-align    : center;
            line-height   : 14px;
            padding       : 2px 4px;
        }

        .msgN{
            margin-left : 8px;
            display     : inline-block;
            font-family : PingFangSC-Regular;
            font-size   : 14px;
            color       : #666666;
            line-height : 18px;
        }
    }
}

.products{
    margin-left  : 8px;
    margin-right : 8px;

    .pHead{

    }

    .product{
        .pTitle{
            display         : flex;
            justify-content : flex-start;
            margin-top      : 20px;
            margin-bottom   : 13px;

            .title{
                margin-left : 12px;
                font-family : PingFangSC-Medium;
                font-size   : 13px;
                color       : #333333;
                line-height : 20px;
            }

            > span{
                background    : #ffe6bb;
                border-radius : 2px;
                padding       : 2px 4px;
                margin-left   : 5px;
                font-family   : PingFangSC-Regular;
                font-size     : 10px;
                color         : #af7f29;
            }
        }

        .pBody{
            display : flex;
            height  : 64px;

            .head{
                display : flex;
                width   : 190px;

                .h0{
                    margin-left : 12px;
                }

                .h1{
                    font-family : DINAlternate-Bold;
                    font-size   : 22px;
                    color       : #ff2f2f;
                }

                .h4{
                    margin-left : 20px;
                }

                .h2{
                    font-family : PingFangSC-Regular;
                    font-size   : 13px;
                    color       : #91959a;
                }

                .h3{
                    font-family : DINAlternate-Bold;
                    font-size   : 22px;
                    color       : #303133;
                }
            }

            .pLine{
                padding-top : 8px;
                border      : 0.5px solid #f0f3fa;
            }

            .end{
                margin-left    : 15px;
                display        : flex;
                flex-direction : column;

                .e1{
                    display     : inline-block;
                    font-family : PingFangSC-Regular;
                    font-size   : 13px;
                    color       : #91959a;
                }

                .e2{
                    margin-left : 10px;
                    display     : inline-block;
                    font-family : DINAlternate-Bold;
                    font-size   : 15px;
                    color       : #969a9f;
                }

                .e3{
                    margin-top : 8px;
                }
            }
        }
    }
}
</style>
