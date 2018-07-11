<template lang="html">
  <div class="card inprogress-item">
    <div class="row inprogress-item-head">
      <div class="col s6 inprogress-item-title">
        直聘信用卡专员年薪20万
        <span class="red-text">120-180元/天</span>
      </div>
      <div class="col s6 inprogress-item-status right-align">
        <span class="red-text">审核失败，招聘信息中不能包含违规内容</span>
        正在招聘中
      </div>
    </div>
    <div class="row inprogress-item-content">
      <div class="col s8">
        <div>
          <span>基本工资：80元/天</span>
          <span>提成：87/单</span>
        </div>
        <div>任务时间：不限时间</div>
        <div>工作地点：不限地点</div>
        <div>
          <span>招聘时间：2018.05.01-2018.06.09</span>
          <span>任务周期：2018.05.01-2018.06.01</span>
        </div>
        <div class="inprogress-item-tag">
          <tag>底薪加提成</tag><tag>平台代发</tag><tag>日结</tag><tag>不限时间</tag><tag>不限地点</tag>
        </div>
      </div>
      <div class="col s4">
        <InProgressStatus></InProgressStatus>
        <button type="button" class="btn">结束招聘</button>
        <button type="button" class="btn">任务设置</button>
        <nuxt-link :to="{path: '/inprogress/detail'}" class="">任务详情</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from '@/components/Tag';
import InProgressStatus from '@/components/InProgressStatus';
export default {
  name: 'InProgressItem',
  components: {
    Tag,
    InProgressStatus
  }
}
</script>

<style lang="scss">
.inprogress-item {
    font-size: $size2;
    padding: 1rem;
    .inprogress-item-head {
        border-bottom: 1px $border-color solid;
        padding-bottom: 1rem;
        margin-bottom: 1rem;
        .inprogress-item-status {
            color: $primary-color;
            span {
                margin-right: 2rem;
            }
        }
    }
    .inprogress-item-content {
        line-height: 1.8;
        span {
            &+span {
                margin-left: 3rem;
            }
        }
    }
    .inprogress-item-tag {
        padding: 0.5rem 0;
    }
}
</style>
