<template>
  <page-container>
    <page-title>任务验收</page-title>
    <md-toolbar md-elevation="1" class="rounded">
      <div class="spacer"></div>
      <TextField></TextField>
      <md-button class="md-primary md-raised md-dense">搜索</md-button>
    </md-toolbar>
    <div>
      <md-table md-card class="w-100 rounded data-table mt-3">
        <md-table-row>
          <md-table-head>任务标题</md-table-head>
          <md-table-head>已确认签到</md-table-head>
          <md-table-head>驳回签到</md-table-head>
          <md-table-head>已确认单量</md-table-head>
          <md-table-head>驳回单量</md-table-head>
          <md-table-head>结算周期</md-table-head>
          <md-table-head>待确认签到</md-table-head>
          <md-table-head>待确认单量</md-table-head>
        </md-table-row>

        <md-table-row v-for="n of 20" :key="n">
          <md-table-cell>
            <nuxt-link to="/mission/detail">
              多功能语言之间的互译功能
            </nuxt-link>
          </md-table-cell>
          <md-table-cell>32</md-table-cell>
          <md-table-cell>45</md-table-cell>
          <md-table-cell>32</md-table-cell>
          <md-table-cell>22</md-table-cell>
          <md-table-cell>周二</md-table-cell>
          <md-table-cell>32</md-table-cell>
          <md-table-cell>454</md-table-cell>
        </md-table-row>
      </md-table>
    </div>
  </page-container>
</template>
<script>
import DropDown from "@/components/DropDown";
import TextField from "@/components/TextField";

export default {
  name: "Mission",
  components: {
    DropDown,
    TextField
  },
  data: () => ({
    checkAll: false
  })
};
</script>
