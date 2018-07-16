<template>
  <page-container>
    <page-title>已评价</page-title>
    <md-toolbar md-elevation="1" class="rounded">
      <drop-down></drop-down>
      <div class="spacer"></div>
      <text-field></text-field>
      <md-button class="md-primary md-raised md-dense">搜索</md-button>
    </md-toolbar>
    <div class="md-layout md-gutter mt-3">
      <comment class="md-layout-item md-xlarge-size-50 md-large-size-100" v-for="(n, i) of 10" :key="i"></comment>
    </div>
  </page-container>
</template>
<script>
import DropDown from "@/components/DropDown";
import TextField from "@/components/TextField";
import Comment from "@/components/Comment";

export default {
  name: "Mission",
  components: {
    DropDown,
    TextField,
    Comment
  }
};
</script>
