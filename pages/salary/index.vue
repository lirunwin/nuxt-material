<template>
  <page-container>
    <page-title>代发工资</page-title>
    <md-toolbar md-elevation="1" class="rounded md-body-1">
      <md-button class="md-primary md-raised md-dense">立即发放</md-button>
      <div class="spacer"></div>      
      <TextField></TextField>
      <md-button class="md-primary md-raised md-dense">搜索</md-button>
    </md-toolbar>
    <md-table md-card class="w-100 rounded data-table mt-3">
      <md-table-row>
        <md-table-head class="text-center" style="width: 2rem;">
          <md-checkbox class="md-primary m-0"></md-checkbox>
        </md-table-head>
        <md-table-head>项目标题</md-table-head>
        <md-table-head>姓名</md-table-head>
        <md-table-head>工资模式</md-table-head>
        <md-table-head>结算方式</md-table-head>
        <md-table-head>基本工资</md-table-head>
        <md-table-head>提成工资</md-table-head>
        <md-table-head>天数</md-table-head>
        <md-table-head>提成单数</md-table-head>
        <md-table-head>工资</md-table-head>
        <md-table-head>奖惩金额</md-table-head>
        <md-table-head>应发</md-table-head>
        <md-table-head>状态</md-table-head>
      </md-table-row>

      <md-table-row v-for="n of 20" :key="n">

        <md-table-cell class="text-center">
          <md-checkbox class="md-primary m-0" :indeterminate="true"></md-checkbox>
        </md-table-cell>
        <md-table-cell>文本注册员</md-table-cell>
        <md-table-cell>林蛋大</md-table-cell>
        <md-table-cell>底薪加提成</md-table-cell>
        <md-table-cell>每月10日</md-table-cell>
        <md-table-cell>123元/天</md-table-cell>
        <md-table-cell>20元/天</md-table-cell>
        <md-table-cell>10</md-table-cell>
        <md-table-cell>20</md-table-cell>
        <md-table-cell>900</md-table-cell>
        <md-table-cell>199</md-table-cell>
        <md-table-cell>1000</md-table-cell>
        <md-table-cell><span class="text-accent pointer">立即发放</span></md-table-cell>
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
