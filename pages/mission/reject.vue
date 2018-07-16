<template>
  <page-container class="mission-detail">
    <page-title>查看详情</page-title>
    <md-toolbar md-elevation="1" class="rounded md-body-1 mission-detial-serarch">
      <drop-down></drop-down>
      <drop-down></drop-down>
      <TextField></TextField>
      <md-button class="md-primary md-raised md-dense">搜索</md-button>
    </md-toolbar>   
    <div class="md-layout md-gutter mt-3">
      <mission-reject-item class="md-layout-item md-xlarge-size-50 md-large-size-100" v-for="(n, i) of 10" :key="i"></mission-reject-item>
    </div>
  </page-container>
</template>
<script>
import DropDown from "@/components/DropDown";
import TextField from "@/components/TextField";
import MissionRejectItem from "@/components/MissionRejectItem";

export default {
  name: "MissionReject",
  components: {
    DropDown,
    TextField,
    MissionRejectItem
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

