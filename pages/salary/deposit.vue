<template>
  <page-container>
    <page-title>保证金</page-title>
    <md-toolbar md-elevation="1" class="rounded md-body-1">
      <div class="py-3">
        保证金金额 <br>
        <span class="text-danger md-headline">￥1000000.00</span>
        <span class="pl-3">元</span>
      </div>
      <div class="spacer"></div>
      <md-button class="md-primary md-raised md-dense align-self-end mb-3">充值</md-button>
      <md-button class="md-primary md-raised md-dense align-self-end mb-3">体现</md-button>
    </md-toolbar>
    <div class="md-elevation-1 rounded mt-3">
      <md-toolbar md-elevation="0" class="md-body-1">
        <div>
          保证金明细     
        </div>
        <div class="spacer"></div>
        <drop-down></drop-down>
      </md-toolbar>
      <md-table class="w-100 data-table">
        <md-table-row>
          <md-table-head>金额</md-table-head>
          <md-table-head>时间</md-table-head>
          <md-table-head>类型</md-table-head>
        </md-table-row>

        <md-table-row v-for="n of 20" :key="n">
          <md-table-cell class="text-center">+1000</md-table-cell>
          <md-table-cell>2088-02-02 08:00</md-table-cell>
          <md-table-cell>充值</md-table-cell>
        </md-table-row>
      </md-table>
    </div>
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
