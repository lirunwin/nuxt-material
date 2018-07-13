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
        <md-table-head class="text-center">
          <md-checkbox class="md-primary m-0"></md-checkbox>
        </md-table-head>
        <md-table-head>姓名</md-table-head>
        <md-table-head>日期</md-table-head>
        <md-table-head>签到</md-table-head>
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
        <md-table-cell class="line-height-3 text-center p-0">
          <div class="md-layout">
            <div class="md-layout-item md-size-50">2018-12-12 08:00</div>
            <div class="md-layout-item md-size-50">2018-12-12 08:00</div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-50">2018-12-12 08:00</div>
            <div class="md-layout-item md-size-50">2018-12-12 08:00</div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-50">2018-12-12 08:00</div>
            <div class="md-layout-item md-size-50">2018-12-12 08:00</div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-50">2018-12-12 08:00</div>
            <div class="md-layout-item md-size-50">2018-12-12 08:00</div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-50">2018-12-12 08:00</div>
            <div class="md-layout-item md-size-50">2018-12-12 08:00</div>
          </div>
        </md-table-cell>
        <md-table-cell>5</md-table-cell>
        <md-table-cell>
          <span class="text-accent pointer">详情</span>
        </md-table-cell>
        <md-table-cell>800元</md-table-cell>
        <md-table-cell>
          <div>+100</div>
          <div>
            <md-button class="md-dense md-primary border mt-3">设置</md-button>
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
  }
};
</script>

<style lang="scss">
.mission-detial-serarch {
  span {
    margin-left: 2rem;
  }
}
</style>

