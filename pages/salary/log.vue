<template>
  <page-container>
    <page-title>发放记录</page-title>
    <md-toolbar md-elevation="1" class="rounded md-body-1">
      <div class="spacer"></div>      
      <TextField></TextField>
      <md-button class="md-primary md-raised md-dense">搜索</md-button>
    </md-toolbar>
    <md-table md-card class="w-100 rounded data-table mt-3">
      <md-table-row>
        <md-table-head>项目标题</md-table-head>
        <md-table-head>姓名</md-table-head>
        <md-table-head>结算方式</md-table-head>
        <md-table-head>基本工资</md-table-head>
        <md-table-head>提成工资</md-table-head>
        <md-table-head>天数</md-table-head>
        <md-table-head>提成单数</md-table-head>
        <md-table-head>工资</md-table-head>
        <md-table-head>奖惩金额</md-table-head>
        <md-table-head>应发</md-table-head>
        <md-table-head>发放时间</md-table-head>
      </md-table-row>

      <md-table-row v-for="n of 20" :key="n">
        <md-table-cell>文本注册员</md-table-cell>
        <md-table-cell>林蛋大</md-table-cell>
        <md-table-cell>每月10日</md-table-cell>
        <md-table-cell>123元/天</md-table-cell>
        <md-table-cell>20元/天</md-table-cell>
        <md-table-cell>10</md-table-cell>
        <md-table-cell>20</md-table-cell>
        <md-table-cell>900</md-table-cell>
        <md-table-cell>199</md-table-cell>
        <md-table-cell>1000</md-table-cell>
        <md-table-cell>2088-02-02 08:00</md-table-cell>
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
