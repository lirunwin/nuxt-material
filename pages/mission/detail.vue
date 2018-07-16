<template>
  <page-container class="mission-detail">
    <page-title>查看详情</page-title>
    <md-toolbar md-elevation="1" class="rounded md-body-1 mission-detial-serarch">

      <md-button class="md-primary md-raised md-dense">全部通过</md-button>
      <div class="spacer"></div>

      <span class="pl-3">日期：</span>
      <drop-down></drop-down>
      <drop-down></drop-down>

      <span class="pl-3">状态：</span>
      <drop-down></drop-down>
      <TextField></TextField>
      <md-button class="md-primary md-raised md-dense">搜索</md-button>
    </md-toolbar>
    <md-table md-card class="w-100 rounded data-table mt-3">
      <md-table-row>
        <md-table-head class="text-center" style="width: 2rem;">
          <md-checkbox class="md-primary m-0"></md-checkbox>
        </md-table-head>
        <md-table-head>姓名</md-table-head>
        <md-table-head>日期</md-table-head>
        <md-table-head style="width: 20rem;">签到</md-table-head>
        <md-table-head>单量</md-table-head>
        <md-table-head>验收</md-table-head>
        <md-table-head>工资</md-table-head>
        <md-table-head>奖惩金额</md-table-head>
        <md-table-head>工资确认</md-table-head>
      </md-table-row>

      <md-table-row v-for="n of 20" :key="n">

        <md-table-cell class="text-center">
          <md-checkbox class="md-primary m-0" :indeterminate="true"></md-checkbox>
        </md-table-cell>
        <md-table-cell>宝强</md-table-cell>
        <md-table-cell>2099-12-12</md-table-cell>
        <md-table-cell>
          <div class="line-height-3 text-center">
            <div class="md-layout" v-for="n of 4" :key="n">
              <div class="md-layout-item md-size-50">2018-12-12 08:00</div>
              <div class="md-layout-item md-size-50">2018-12-12 08:00</div>
            </div>
          </div>
        </md-table-cell>
        <md-table-cell>5</md-table-cell>
        <md-table-cell>
          <span class="text-accent pointer" @click="showDetailDialog = !showDetailDialog">详情</span>
        </md-table-cell>
        <md-table-cell>800元</md-table-cell>
        <md-table-cell>
          <div>+100</div>
          <div>
            <md-button class="md-dense md-primary border mt-3" @click="showBonusDialog = !showBonusDialog">设置</md-button>
          </div>
        </md-table-cell>
        <md-table-cell>
          <div>
            <md-button class="md-dense md-primary border">全部验收</md-button>
          </div>
          <div>
            <md-button class="md-dense md-primary border mt-3">工资确认</md-button>
          </div>
        </md-table-cell>
      </md-table-row>
    </md-table>
    <md-dialog :md-active.sync="showDetailDialog" class="mission-dialog md-scrollbar">
      <i class="iconfont icon-x" @click="showDetailDialog = !showDetailDialog"></i>
      <md-dialog-title class="border-bottom py-3">小何 - 2019-05-05</md-dialog-title>
      <div class="md-scrollbar px-3 mb-3 mission-dialog-detail">
        <div class="p-3 border rounded md-layout mb-3">
          <div class="md-layout-item">
            <div class="md-layout md-alignment-top">
              <div class="md-layout-item flex-0">
                上班：
              </div>
              <div class="md-layout-item">
                2018-02-05 08:05<br>四川省光华一街
              </div>
            </div>
            <div class="md-layout md-alignment-top mt-3">
              <div class="md-layout-item flex-0">
                下班：
              </div>
              <div class="md-layout-item">
                2018-02-05 08:05<br>四川省光华一街
              </div>
            </div>
          </div>
          <div class="md-layout-item flex-0 md-layout md-alignment-center-space-between flex-column">
            <div class="md-title">3小时</div>
            <md-button class="md-primary border md-dense">驳回</md-button>
          </div>
        </div>
        <div class="p-3 border rounded md-layout mb-3">
          <div class="md-layout-item">
            <div class="md-layout md-alignment-top">
              <div class="md-layout-item flex-0">
                上班：
              </div>
              <div class="md-layout-item">
                2018-02-05 08:05<br>四川省光华一街
              </div>
            </div>
            <div class="md-layout md-alignment-top mt-3">
              <div class="md-layout-item flex-0">
                下班：
              </div>
              <div class="md-layout-item">
                2018-02-05 08:05<br>四川省光华一街
              </div>
            </div>
          </div>
          <div class="md-layout-item flex-0 md-layout md-alignment-center-space-between flex-column">
            <div class="md-title">3小时</div>
            <md-button class="md-primary border md-dense">驳回</md-button>
          </div>
        </div>
        <div class="p-3 border rounded md-layout mb-3">
          <div class="md-layout-item">
            <div class="md-layout md-alignment-top">
              <div class="md-layout-item flex-0">
                上班：
              </div>
              <div class="md-layout-item">
                2018-02-05 08:05<br>四川省光华一街
              </div>
            </div>
            <div class="md-layout md-alignment-top mt-3">
              <div class="md-layout-item flex-0">
                下班：
              </div>
              <div class="md-layout-item">
                2018-02-05 08:05<br>四川省光华一街
              </div>
            </div>
          </div>
          <div class="md-layout-item flex-0 md-layout md-alignment-center-space-between flex-column">
            <div class="md-title">3小时</div>
            <md-button class="md-primary border md-dense">驳回</md-button>
          </div>
        </div>
        <div class="text-center">
          <md-button class="md-primary md-raised w-50">全部通过</md-button>
        </div>
      </div>
    </md-dialog>
    <md-dialog :md-active.sync="showBonusDialog" class="mission-dialog md-scrollbar">
      <i class="iconfont icon-x" @click="showBonusDialog = !showBonusDialog"></i>
      <md-dialog-title class="border-bottom py-3">小何 - 奖惩金额</md-dialog-title>
      <div class="md-scrollbar px-3 mb-3">
        <div class="mx-auto w-75 py-3">
          <div class="w-50">
            <drop-down></drop-down>
          </div>
          <div class="mt-3">
            <textarea class="textarea" placeholder="说明（200字以内）"></textarea>
          </div>
        </div>
        <div class="text-center">
          <md-button class="md-primary md-raised w-50">全部通过</md-button>
        </div>
      </div>
    </md-dialog>
  </page-container>
</template>
<script>
import DropDown from "@/components/DropDown";
import TextField from "@/components/TextField";

export default {
  name: "MissionDetail",
  components: {
    DropDown,
    TextField
  },
  data: () => ({
    showDetailDialog: false,
    showBonusDialog: false
  })
};
</script>

<style lang="scss">
.mission-detial-serarch {
  span {
    margin-left: 2rem;
  }
}
.mission-dialog {
  max-width: 60%;
  width: 520px;
  max-height: 60vh;
  overflow: auto;
}
</style>

