<template>
  <page-container class="inprogress-done">
    <page-title>已取消</page-title>
    <div class="inprogress-done-search">
      <md-toolbar md-elevation="1" class="rounded">
        <DropDown></DropDown>
        <div class="spacer"></div>
        <TextField></TextField>
        <md-button class="md-primary md-raised md-dense">搜索</md-button>
      </md-toolbar>
    </div>
    <div class="md-layout inprogress-done-table mt-3">
      <md-table md-card class="w-100 rounded data-table">
        <md-table-row>
          <md-table-head>任务标题</md-table-head>
          <md-table-head>职位类型</md-table-head>
          <md-table-head>工作类型</md-table-head>
          <md-table-head>创建时间</md-table-head>
          <md-table-head>取消时间</md-table-head>
        </md-table-row>

        <md-table-row v-for="n of 20" :key="n">
          <md-table-cell>多功能语言之间的互译功能</md-table-cell>
          <md-table-cell>翻译</md-table-cell>
          <md-table-cell>兼职</md-table-cell>
          <md-table-cell>2018-08-08</md-table-cell>
          <md-table-cell>2018-09-09</md-table-cell>
        </md-table-row>

      </md-table>
    </div>
  </page-container>
</template>
<script>
import PageTitle from "@/components/PageTitle";
import DropDown from "@/components/DropDown";
import TextField from "@/components/TextField";
import DataTable from "@/components/DataTable";

export default {
  name: "Cancel",
  components: {
    PageTitle,
    DropDown,
    TextField,
    DataTable
  }
};
</script>


<style lang="scss">
.inprogress-done {
}
</style>

