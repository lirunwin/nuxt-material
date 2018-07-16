<template lang="html">
  <page-container>
    <page-title>企业信息</page-title>
    <div>
      <form class="post-form rounded md-elevation-1 md-layout md-gutter p-3 mx-0 bg-white">
        <div class="md-layout-item md-xlarge-size-33 md-large-size-50 pb-3 mb-3">
          <div class="md-subheading mb-1">企业名称：</div>
          <text-field placeholder="请输入" />
        </div>
        <div class="md-layout-item md-xlarge-size-33 md-large-size-50 pb-3 mb-3">
          <div class="md-subheading mb-1">公司性质：</div>
          <drop-down></drop-down>
        </div>
        <div class="md-layout-item md-xlarge-size-33 md-large-size-50 pb-3 mb-3">
          <div class="md-subheading mb-1">企业联系人姓名：</div>
          <text-field placeholder="请输入" />
        </div>
        <div class="md-layout-item md-xlarge-size-33 md-large-size-50 pb-3 mb-3">
          <div class="md-subheading mb-1">联系人电话：</div>
          <text-field placeholder="请输入" />
        </div>
        <div class="md-layout-item md-xlarge-size-33 md-large-size-50 pb-3 mb-3">
          <div class="md-subheading mb-1">办公电话：</div>
          <text-field placeholder="请输入" />
        </div>
        <div class="md-layout-item md-xlarge-size-33 md-large-size-50 pb-3 mb-3">
          <div class="md-subheading mb-1">Email：</div>
          <text-field placeholder="请输入" />
        </div>
        <div class="md-layout-item md-xlarge-size-33 md-large-size-50 pb-3 mb-3">
          <div class="md-subheading mb-1">企业所在地：</div>
          <div class="md-layout md-gutter mb-3">
            <div class="md-layout-item"><drop-down></drop-down></div>
            <div class="md-layout-item"><drop-down></drop-down></div>
            <div class="md-layout-item"><drop-down></drop-down></div>
          </div>
          <text-field placeholder="详细地址" />
        </div>
        <div class="md-layout-item md-xlarge-size-33 md-large-size-50 mb-3">
          <div class="md-subheading mb-1">营业执照：</div>
          <image-uploader class="mb-3"></image-uploader>
        </div>
        <div class="md-layout-item md-xlarge-size-33 md-large-size-50 pb-3 mb-3">
          <div class="md-subheading mb-1">公司简介：</div>
          <textarea class="textarea"></textarea>
        </div>
        <md-divider class="md-layout-item md-size-100"></md-divider>
        <div class="md-layout-item md-size-100 mt-3 text-center">
          <md-button class="md-dense md-plain md-raised" type="reset">重置</md-button>
          <md-button class="md-dense md-raised md-primary ml-3">提交</md-button>
        </div>
      </form>
    </div>
  </page-container>
</template>

<script>

import TextField from "@/components/TextField";
import DropDown from "@/components/DropDown";
import ImageUploader from "@/components/ImageUploader";
export default {
  name:'Company',
  components: {
    TextField,
    DropDown,
    ImageUploader
  }
}
</script>
