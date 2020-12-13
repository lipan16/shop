<template>
    <div class="cur_page">
        <div class="box1">
            <van-cell center title="标题" :value="msg"></van-cell>
            <van-cell center title="标题">
                <van-tag color="red" round>{{ msg }}</van-tag>
            </van-cell>
        </div>
        <div class="box2">
            <van-tabs swipeable animated>
                <van-tab v-for="index in 4" :title="'选项'+index" :key="index">
                    <div class="test">
                        <van-steps direction="vertical">
                            <van-step v-for="i in 3" :key="i">
                                <h4>{{ i }} i</h4>
                            </van-step>
                        </van-steps>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
<!--        <div class="box3">-->
<!--            <van-button round>提交</van-button>-->
<!--        </div>-->

<!--        <div class="box4">-->
<!--            <van-cell center is-link title="类型" :value="optValue" @click="show = true"/>-->
<!--            <van-action-sheet close-on-popstate description="类型" v-model="show" :actions="option1"-->
<!--                              @select="onSelected"/>-->

<!--            <van-cell center is-link title="日期" :value="dateValue | dateFormat('yy/MM')"-->
<!--                      @click="showDate = true"/>-->
<!--            <van-popup v-model="showDate" round position="bottom">-->
<!--                <van-datetime-picker v-model="currentDate" type="year-month" :min-date="minDate"-->
<!--                                     :max-date="maxDate" :formatter="formatter" @confirm="selectDate"-->
<!--                                     @cancel="showDate = false"/>-->
<!--            </van-popup>-->
<!--            <el-date-picker v-model="month" type="month" placeholder="请选择月"></el-date-picker>-->

<!--        </div>-->
    </div>
</template>

<script>

export default {
    name   : "home",
    data(){
        return {
            msg        : 'home',
            show       : false,
            showDate   : false,
            optValue   : '请选择',
            dateValue  : '请选择',
            option1    : [
                {name: "全部1", value: 1},
                {name: "全部2", value: 2},
                {name: "全部3", value: 3},
                {name: "全部4", value: 4},
                {name: "全部5", value: 5, subname: "描述"},
            ],
            minDate    : new Date(1970, 0, 1),
            maxDate    : new Date(2099, 11, 1),
            currentDate: new Date(),
            month      : '',

        }
    },
    methods: {
        onSelected(item){
            this.show     = false
            this.optValue = item.name

        },
        formatter(type, value){
            if(type === 'year'){
                return `${value}`
            }else if(type === 'month'){
                return `${value}月`
            }
            return value
        },
        selectDate(value){
            this.showDate  = false
            this.dateValue = value
        }
    },
}
</script>

<style lang="less" scoped>
.cur_page {
    height : 100%;

    .box1 {

    }

    .box2 {
        //display: flex;
        //flex-direction: column;

        .test {
            //flex: 1;
            height                     : 345px;
            //overflow-y                 : scroll;
            //-webkit-overflow-scrolling : auto;
        }
    }

    .box3 {
        text-align : center;

        .van-button {
            width            : 80%;
            background-color : #fff;
        }
    }

    .box4 {
        z-index : auto;
    }
}
</style>