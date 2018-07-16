<template>
  <page-container class="company">
    <page-title>账户安全</page-title>
    <md-tabs class="rounded md-elevation-1 ">
      <md-tab id="tab-1" md-label="修改密码">
        <form class="bg-white md-layout md-alignment-center flex-column company-form">
          <div class="md-layout-item md-size-40 company-input md-layout md-alignment-center mb-3">
            <span>旧密码：</span>
            <text-field class="md-layout-item"></text-field>
          </div>
          <div class="md-layout-item md-size-40 company-input md-layout md-alignment-center mb-3">
            <span>新密码：</span>
            <text-field class="md-layout-item" type="password"></text-field>
          </div>
          <div class="md-layout-item md-size-40 company-input md-layout md-alignment-center mb-3">
            <span>确认密码：</span>
            <text-field class="md-layout-item" type="password"></text-field>
          </div>
          <div class="md-layout-item md-size-40 company-input md-layout md-alignment-center mb-3">
            <span></span>
            <div class="md-layout-item">
              <md-button class="md-dense md-plain md-raised ml-0" type="reset">重置</md-button>
              <md-button class="md-dense md-raised md-primary ml-3">提交</md-button>
            </div>
          </div>
        </form>
      </md-tab>
      <md-tab id="tab-2" md-label="修改手机">
        <form class="bg-white md-layout md-alignment-center flex-column company-form">
          <div class="md-layout-item md-size-40 company-input md-layout md-alignment-center mb-3">
            <span>原手机号：</span>
            <div class="md-layout-item">18987218921</div>
          </div>
          <div class="md-layout-item md-size-40 company-input md-layout md-alignment-center mb-3">
            <span>验证码：</span>
            <text-field class="md-layout-item" sms></text-field>
          </div>
          <div class="md-layout-item md-size-40 company-input md-layout md-alignment-center mb-3">
            <span>新手机号：</span>
            <text-field class="md-layout-item"></text-field>
          </div>
          <div class="md-layout-item md-size-40 company-input md-layout md-alignment-center mb-3">
            <span>验证码：</span>
            <text-field class="md-layout-item" sms></text-field>
          </div>
          <div class="md-layout-item md-size-40 company-input md-layout md-alignment-center mb-3">
            <span></span>
            <div class="md-layout-item">
              <md-button class="md-dense md-plain md-raised ml-0" type="reset">重置</md-button>
              <md-button class="md-dense md-raised md-primary ml-3">提交</md-button>
            </div>
          </div>
        </form>
      </md-tab>
    </md-tabs>

  </page-container>
</template>
<script>
import TextField from "@/components/TextField";

export default {
  name: "Mission",
  components: {
    TextField
  }
};
</script>
<style lang="scss">
.company {
  .company-form {
    min-height: calc(100vh - 20rem);
  }
  .company-input {
    span {
      flex: 0 0 6em;
      text-align: right;
    }
  }
}
</style>

