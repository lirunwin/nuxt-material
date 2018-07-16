<template>
  <page-container>
    <page-title>待评价</page-title>
    <md-toolbar md-elevation="1" class="rounded">
      <drop-down></drop-down>
      <div class="spacer"></div>
      <TextField></TextField>
      <md-button class="md-primary md-raised md-dense">搜索</md-button>
    </md-toolbar>
    <md-table md-card class="w-100 rounded data-table mt-3">
      <md-table-row>
        <md-table-head>任务标题</md-table-head>
        <md-table-head>任务类型</md-table-head>
        <md-table-head>姓名</md-table-head>
        <md-table-head>报名时间</md-table-head>
        <md-table-head>操作</md-table-head>
      </md-table-row>

      <md-table-row v-for="n of 20" :key="n">
        <md-table-cell>多功能语言之间的互译功能</md-table-cell>
        <md-table-cell>兼职</md-table-cell>
        <md-table-cell>三傻子</md-table-cell>
        <md-table-cell>2018-05-05 08:45</md-table-cell>
        <md-table-cell class="text-accent">
          <span @click="showDialog = !showDialog" class="pointer">评论</span>
        </md-table-cell>
      </md-table-row>
    </md-table>
    <md-dialog :md-active.sync="showDialog" class="comment-dialog md-scrollbar">
      <i class="iconfont icon-x" @click="showDialog = !showDialog"></i>
      <md-dialog-title class="border-bottom py-3">任务评价</md-dialog-title>
      <div class="md-scrollbar px-3 mb-3 comment-dialog-content">
          <div class="md-layout md-alignment-center p-3">
            <div class="md-layout-item item comment-dialog-item">
              评价指标：
            </div>
            <comment-stars></comment-stars>
          </div>
          <div class="md-layout md-alignment-center p-3">
            <div class="md-layout-item item comment-dialog-item">
              评价指标：
            </div>
            <comment-stars></comment-stars>
          </div>
          <div class="md-layout md-alignment-center p-3">
            <div class="md-layout-item item comment-dialog-item">
              评价指标：
            </div>
            <comment-stars></comment-stars>
          </div>
          <div class="md-layout md-alignment-center p-3">
            <div class="md-layout-item item comment-dialog-item">
              评价指标：
            </div>
            <comment-stars></comment-stars>
          </div>
          <div class="px-3 mt-3">
            <textarea class="textarea" placeholder="留言："></textarea>
          </div>
          <div class="text-center mt-3 pt-3">
            <md-button class="md-raised md-primary w-50">提交</md-button>
          </div>
      </div>
    </md-dialog>
  </page-container>
</template>
<script>
import DropDown from "@/components/DropDown";
import TextField from "@/components/TextField";
import CommentStars from "@/components/CommentStars";

export default {
  name: "Mission",
  components: {
    DropDown,
    TextField,
    CommentStars
  },
  data: () => ({
    showDialog: false
  })
};
</script>
<style lang="scss">
  .comment-dialog {
    max-width: 40%;
    width: 520px;
    max-height: 60vh;
    overflow: auto;
    .comment-dialog-item {
      flex: 0 0 6rem;
    }
  }
</style>
