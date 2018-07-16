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
          <div class="md-layout-item text-primary text-bold text-right inprogress-item-status">正在招聘中</div>
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
            <md-button type="button" class="md-primary md-raised" @click="showDialog = !showDialog">任务设置</md-button>
            <md-button type="button" class="md-primary mr-0" to="/post/detail">任务详情 ></md-button>
          </div>
        </div>
      </div>
    </div>
    <md-dialog :md-active.sync="showDialog" class="post-mission-dialog md-scrollbar">
      <i class="iconfont icon-x" @click="showDialog = !showDialog"></i>
      <md-dialog-title class="border-bottom py-3">任务设置</md-dialog-title>
      <div class="md-scrollbar px-3 mb-3 post-mission-dialog-items">
        <div class="md-layout md-alignment-center-left mb-3">
          <span>最低学历：</span>
          <div class="md-layout-item md-size-60">
            <text-field></text-field>
          </div>
        </div>
        <div class="md-layout md-alignment-center-left mb-3">
          <span>招聘人数：</span>
          <div class="md-layout-item md-size-60">
            <text-field></text-field>
          </div>
        </div>
        <div class="md-layout md-alignment-center-left mb-3">
          <span>任职周期：</span>
          <div class="md-layout-item md-layout">
            <drop-down class="md-layout-item"></drop-down>
            <drop-down class="md-layout-item"></drop-down>
          </div>
        </div>
        <div class="md-layout md-alignment-center-left mb-3">
          <span>最少申请任务天数：</span>
          <div class="md-layout-item md-layout md-alignment-center">
            <text-field class="md-layout-item"></text-field>
            <md-checkbox v-model="radios.a" class="md-layout-item">不允许短期兼职</md-checkbox>
          </div>
        </div>
        <div class="md-layout md-alignment-center-left mb-3">
          <span>每天最少工作小时：</span>
          <div class="md-layout-item md-layout md-alignment-center">
            <text-field class="md-layout-item"></text-field>
            <md-checkbox v-model="radios.b" class="md-layout-item">不允许短期兼职</md-checkbox>
          </div>
        </div>
        <div class="md-layout md-alignment-center-left mb-3">
          <span>报名模式：</span>
          <div class="md-layout-item md-layout md-alignment-center">
            <md-checkbox v-model="radios.c" class="md-layout-item">允许个人报名</md-checkbox>
            <md-checkbox v-model="radios.d" class="md-layout-item">允许战队报名</md-checkbox>
          </div>
        </div>
        <div class="md-layout md-alignment-center-left mb-3">
          <span>战队最少报名人数：</span>
          <div class="md-layout-item md-size-60">
            <text-field></text-field>
          </div>
          <div>/人</div>
        </div>
        <div class="md-layout md-alignment-center-left mb-3">
          <span>战队最多报名人数：</span>
          <div class="md-layout-item md-size-60">
            <text-field></text-field>
          </div>
          <div>/人</div>
        </div>
        <div class="md-layout md-alignment-center-left mb-3">
          <span>招聘结束日期：</span>
          <div class="md-layout-item md-size-60">
            <drop-down></drop-down>
          </div>
        </div>
        <div class="text-center pt-3">
          <md-button class="md-primary md-raised w-50">提交</md-button>
        </div>
      </div>
    </md-dialog>
  </div>
</template>

<script>
import Tag from "@/components/Tag";
import InProgressStatus from "@/components/InProgressStatus";
import TextField from "@/components/TextField";
import DropDown from "@/components/DropDown";
export default {
  name: "InProgressItem",
  components: {
    Tag,
    InProgressStatus,
    TextField,
    DropDown
  },
  data: () => ({
    showDialog: false,
    radios: {}
  })
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
.post-mission-dialog {
  max-width: 60%;
  width: 520px;
  max-height: 60vh;
  overflow: auto;
  font-size: $size1;
  .post-mission-dialog-items span {
    flex: 0 0 10em;
    text-align: right;
  }
}
</style>
