<template lang="html">
  <div>
    <div class="mission-reject-item md-layout rounded md-elevation-1 bg-white">
      <div class="md-layout-item md-size-100 md-layout mission-reject-item-head border-bottom">
        <div class="md-layout-item md-size-50 mission-reject-item-title md-layout">
          <div class="md-layout-item text-truncate">直聘信用卡专员年薪20万</div>
        </div>
        <div class="md-layout-item md-size-50 text-right md-layout">
          <div class="md-layout-item text-success text-bold text-right mission-reject-item-status">已申述</div>
        </div>
      </div>
      <div class="md-layout-item md-size-100 md-layout mission-reject-item-content">
        <div class="md-layout-item md-size-66 md-xsmall-size-100">
          <div>用户名：张三</div>
          <div>
            <span>上班：2018-07-15 19:31:37</span>
            <span>四川身成都市光滑东二路</span>
          </div>
          <div>
            <span>下班：2018-07-15 19:31:37</span>
            <span>四川身成都市光滑东二路</span>
          </div>
          <div>
            <span>驳回时间：2018-07-15 19:31:37</span>
            <span class="text-danger">驳回原因：未按时完成任务</span>
          </div>
        </div>
        <div class="md-layout-item md-size-33 md-xsmall-size-100 md-layout flex-column md-alignment-bottom-space-between">
          <div class="md-layout-item md-headline">3小时</div>
          <div class="md-layout-item">
             <md-button type="button" class="md-primary md-raised mx-0">撤回通过</md-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MissionReject",
  components: {
  }
};
</script>

<style lang="scss">
.mission-reject-item {
  font-size: $size2;
  padding: 1rem;
  margin-bottom: 1rem;
  .mission-reject-item-head {
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }

  .mission-reject-item-content {
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
}
</style>
