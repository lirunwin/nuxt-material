<template>
  <label class="text-feild" :class="{captcha: captcha !== null}">
    <input :placeholder="placeholder" :type="type" :class="{preicon}" :maxlength="maxlength">
    <div class="captcha" v-if="captcha !== null">
      <img src="@/static/img/captcha.jpg" alt="">
    </div>
    <span class="sms" v-if="sms !== null">获取验证码</span>
    <i class="iconfont" :class="preicon" v-if="preicon"></i>
  </label>
</template>

<script>
export default {
  name: "TextField",
  props: {
    placeholder: {
      type: String,
      default: '请输入'
    },
    maxlength: {
      type: String,
      default: '255'
    },
    type: {
      type: String,
      default: 'text'
    },
    sms: {
      type: [String, Boolean],
      default: null
    },
    preicon: String,
    captcha:  {
      type: [String, Boolean],
      default: null
    }
  }
};
</script>

<style lang="scss">
.text-feild {
  background: $input-bg-color;
  border: 1px $input-border-color solid;
  height: 32px;
  border-radius: $input-border-radius;
  display: block;
  position: relative;
  padding-left: 4px;
  padding-right: 4px;
  margin-right: $size1;
  &.captcha {
    width: calc(100% - 4.5rem);
  }
  &.md-layout {
    display: flex;
  }
  input {
    background: transparent;
    border: none;
    height: 100%;
    width: 100%;
    outline: none;
    &.preicon {
      padding-left: 1.5rem;
    }
    &:focus ~ i.iconfont {
      color: $primary-color;
    }
    &.md-layout-item {
      width: auto;
    }
  }
  .sms {
    position: absolute;
    right: .5rem;
    font-size: $size1;
    display: inline-block;
    height: 32px;
    line-height: 32px;
    color:$accent-color;
    cursor: pointer;
    user-select: none;
    z-index: 2;
  }
  i.iconfont {
    position: absolute;
    left: 0.5rem;
    font-size: $size1;
    display: inline-block;
    height: 32px;
    line-height: 32px;
    user-select: none;
    z-index: 2;
    color: darken($grey-color, 20%);
  }
  div.captcha {
    position: absolute;
    left: 100%;
    top: -1px;
    width: 4rem;
    margin-left: .5rem;
    border:1px $white solid;
    cursor: pointer;
    img {
      width: 100%;
      height: 32px;
    }
  }
}
</style>
