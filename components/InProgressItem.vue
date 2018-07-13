<template lang="html">
  <div>
    <div class="inprogress-item md-layout rounded md-elevation-1 bg-white">
      <div class="md-layout-item md-size-100 md-layout inprogress-item-head border-bottom">
        <div class="md-layout-item md-size-50 inprogress-item-title md-layout">
          <div class="md-layout-item text-truncate">直聘信用卡专员年薪20万</div>
          <div class="md-layout-item text-danger text-bold inprogress-item-price text-right">120-180元/天</div>
        </div>
        <div class="md-layout-item md-size-50 text-right md-layout">
          <div class="md-layout-item text-danger text-truncate">审核失败，招聘信息中不能包含违规内容</div>
          <div class="md-layout-item text-success text-bold text-right inprogress-item-status">正在招聘中</div>
        </div>
      </div>
      <div class="md-layout-item md-size-100 md-layout inprogress-item-content">
        <div class="md-layout-item md-size-66 md-xsmall-size-100">
          <div>
            <span>基本工资：80元/天</span>
            <span>提成：87/单</span>
          </div>
          <div>任务时间：不限时间</div>
          <div>工作地点：不限地点</div>
          <div class="md-layout">
            <span class="md-layout-item">招聘时间：<span>2018.05.01-2018.06.09</span></span>
            <span class="md-layout-item">任务周期：<span>2018.05.01-2018.06.01</span></span>
          </div>
          <div class="inprogress-item-tag">
            <tag>底薪加提成</tag><tag>平台代发</tag><tag>日结</tag><tag>不限时间</tag><tag>不限地点</tag>
          </div>
        </div>
        <div class="md-layout-item md-size-33 md-xsmall-size-100 md-layout md-alignment-center-space-between">
          <InProgressStatus class="md-layout-item md-size-100 text-center"></InProgressStatus>
          <div class="md-layout-item md-size-100 md-layout md-alignment-center-right">
            <md-button type="button" class="md-primary md-raised ml-0">结束招聘</md-button>
            <md-button type="button" class="md-primary md-raised">任务设置</md-button>
            <md-button type="button" class="md-primary mr-0" to="/post/detail">任务详情 ></md-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from "@/components/Tag";
import InProgressStatus from "@/components/InProgressStatus";
export default {
  name: "InProgressItem",
  components: {
    Tag,
    InProgressStatus
  }
};
</script>

<style lang="scss">
.inprogress-item {
  font-size: $size2;
  padding: 1rem;
  margin-bottom: 1rem;
  .inprogress-item-head {
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    .inprogress-item-status {
      flex: 0 0 6em;
    }
    .inprogress-item-price {
      flex: 0 0 8em;
      margin-right: 1rem;
      text-align: left;
    }
  }

  .inprogress-item-content {
    line-height: 1.8;
    span {
      & + span {
        margin-left: 2rem;
      }
      > span {
        font-size: $size1;
      }
    }
  }
  .inprogress-item-tag {
    padding: 0.5rem 0;
  }
}
</style>
