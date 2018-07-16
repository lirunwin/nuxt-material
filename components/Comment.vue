<template lang="html">
  <div class="size-2 mb-3">
    <div class="comment-item p-3 md-layout rounded md-elevation-1 bg-white">
      <div class="md-layout-item md-size-100 md-layout md-alignment-bottom-center border-bottom mb-3 pb-3 line-height-1 comment-item-head">
        <div class="md-layout-item comment-item-title md-layout">
          <div class="md-layout-item text-truncate">直聘信用卡专员年薪20万</div>
        </div>
        <div class="md-layout-item comment-item-score text-right">
          综合评分          
        </div>
        <div class="md-layout-item md-title line-height-1 flex-0 pl-3">5.4</div>
      </div>
      <div class="md-layout-item md-size-100 md-layout md-gutter">
        <div class="md-layout-item md-size-33 md-layout md-alignment-bottom-center">
          <div class="md-layout-item flex-0">评价指标：</div>
          <stars class="md-layout-item"></stars>
        </div>
        <div class="md-layout-item md-size-33 md-layout md-alignment-bottom-center">
          <div class="md-layout-item flex-0">评价指标：</div>
          <stars class="md-layout-item"></stars>
        </div>
        <div class="md-layout-item md-size-33 md-layout md-alignment-bottom-center">
          <div class="md-layout-item flex-0">评价指标：</div>
          <stars class="md-layout-item"></stars>
        </div>
        <div class="md-layout-item md-size-33 md-layout md-alignment-bottom-center">
          <div class="md-layout-item flex-0">评价指标：</div>
          <stars class="md-layout-item"></stars>
        </div>
        <div class="md-layout-item md-size-33 md-layout md-alignment-bottom-center">
          <div class="md-layout-item flex-0">评价指标：</div>
          <stars class="md-layout-item"></stars>
        </div>        
      </div>
      <div class="md-layout-item md-size-100 mt-3">
        <div class="border rounded p-3">
          <div>评分说明</div>
          <div>
            说明说说明事实啊的撒 啊阿斯顿撒旦撒的撒阿达撒打算的按时打算几点刻录机啊圣诞节卡手机打开撒娇大了打卡萨大家爱是快乐的就是卡觉得卡手机端快捷奥斯卡登记卡时间段刻录机啊山东矿机奥斯卡等级爱上了电视剧啊手机登录爱神的箭阿圣诞快乐
          </div>
        </div>
      </div>
      <div class="md-layout-item md-size-100 mt-3 md-layout">
        <div class="md-layout-item md-caption">评价时间：2016-05-05 08:44</div>
        <div class="md-layout-item text-right">
          用户姓名：张三
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Stars from "@/components/CommentStars";
export default {
  name: "Comment",
  components: {
    Stars
  }
};
</script>

<style lang="scss">
.comment-items {
  .comment-item-head {
    padding-bottom: 0.8rem;
  }
}
</style>