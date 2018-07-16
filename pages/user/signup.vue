<template>
  <div class="signup">
    <div class="container">
      <div class="md-layout md-alignment-center">
        <div class="md-layout-item md-size-60">
          <div class="step pb-3">
            <ul>
              <li :class="{active: step === 1}">
                <span>1</span>
                <div>手机验证</div>
              </li>
              <li :class="{active: step === 2}">
                <span>2</span>
                <div>企业基本信息</div>
              </li>
              <li :class="{active: step === 3}">
                <span>3</span>
                <div>后台验证</div>
              </li>
            </ul>
          </div>
          <div class="md-elevation-1 rounded bg-white p-3 mt-3 signup-step-item">
            <div class="md-layout md-alignment-center" v-if="step === 1">
              <div class="md-layout-item md-size-60 text-center">
                <div class="md-title py-3 mb-3">账号注册</div>
                <form class="size-2">
                  <div class="md-layout md-alignment-center mb-3">
                    <span class="md-layout-item text-right pr-3">手机号码：</span>
                    <text-field class="md-layout-item"></text-field>
                  </div>
                  <div class="md-layout md-alignment-center mb-3">
                    <span class="md-layout-item text-right pr-3">手机验证码：</span>
                    <text-field class="md-layout-item" sms type="number"></text-field>
                  </div>
                  <div class="md-layout md-alignment-center mb-3">
                    <span class="md-layout-item text-right pr-3">登录密码：</span>
                    <text-field class="md-layout-item"></text-field>
                  </div>
                  <div class="md-layout md-alignment-center mb-3">
                    <span class="md-layout-item text-right pr-3">确认密码：</span>
                    <text-field class="md-layout-item"></text-field>
                  </div>
                  <div class="md-layout md-alignment-center mb-3">
                    <span class="md-layout-item text-right pr-3"></span>
                    <div class="md-layout-item md-layout md-alignment-center">
                      <md-checkbox class="md-primary mr-0" true-value="true" false-value="false" v-model="agreement">
                        阅读并同意,
                      </md-checkbox>
                      <div class="md-layout-item text-left text-accent pointer" @click="showDialog = !showDialog">《用户注册协议》</div>
                    </div>
                  </div>
                  <div class="md-layout md-alignment-center mb-3">
                    <span class="md-layout-item text-right pr-3"></span>
                    <div class="md-layout-item md-layout md-alignment-center">
                      <md-button class="md-raised md-primary md-layout-item ml-0">立即注册</md-button>
                      <nuxt-link to="/" class="text-accent">已有账号？立即登录</nuxt-link>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div class="md-layout md-alignment-center" v-if="step === 2">
              <div class="md-layout-item md-size-60 text-center">
                <div class="md-title py-3 mb-3">账号注册 - 企业基本信息</div>
                <form class="size-2">
                  <div class="md-layout md-alignment-center mb-3">
                    <span class="md-layout-item text-right pr-3">企业名称：</span>
                    <text-field class="md-layout-item"></text-field>
                  </div>
                  <div class="md-layout md-alignment-center mb-3">
                    <span class="md-layout-item text-right pr-3">公司性质：</span>
                    <text-field class="md-layout-item" sms type="number"></text-field>
                  </div>
                  <div class="md-layout md-alignment-center mb-3">
                    <span class="md-layout-item text-right pr-3">联系人姓名：</span>
                    <text-field class="md-layout-item"></text-field>
                  </div>
                  <div class="md-layout md-alignment-center mb-3">
                    <span class="md-layout-item text-right pr-3">企业所在地：</span>
                    <div class="md-layout-item md-layout">
                      <drop-down class="md-layout-item"></drop-down>
                      <drop-down class="md-layout-item"></drop-down>
                      <drop-down class="md-layout-item"></drop-down>
                    </div>
                  </div>
                  <div class="md-layout md-alignment-center mb-3">
                    <span class="md-layout-item text-right pr-3"></span>
                    <text-field class="md-layout-item"></text-field>
                  </div>
                  <div class="md-layout md-alignment-center mb-3">
                    <span class="md-layout-item text-right pr-3">办公电话：</span>
                    <text-field class="md-layout-item"></text-field>
                  </div>
                  <div class="md-layout md-alignment-center mb-3">
                    <span class="md-layout-item text-right pr-3">Email：</span>
                    <text-field class="md-layout-item"></text-field>
                  </div>
                  <div class="md-layout mb-3">
                    <span class="md-layout-item text-right pr-3">营业执照：</span>
                    <div class="md-layout-item">
                      <image-uploader class="text-left"></image-uploader>
                    </div>
                  </div>
                  <div class="md-layout mb-3">
                    <span class="md-layout-item text-right pr-3">公司简介：</span>
                    <div class="md-layout-item">
                      <textarea class="textarea"></textarea>
                    </div>
                  </div>
                  <div class="md-layout md-alignment-center pt-3 mb-3">
                    <span class="md-layout-item text-right pr-3"></span>
                    <div class="md-layout-item md-layout">
                      <md-button class="md-raised md-primary md-layout-item md-size-60 ml-0">立即注册</md-button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="md-layout md-alignment-center" v-if="step === 3">
               <div class="md-layout-item md-size-50 text-center signup-step-success md-layout md-alignment-center-space-between">
                 <div class="md-layout-item md-size-100 md-layout">
                    <div class="md-layout-item flex-0">
                      <md-icon class="iconfont icon-check md-size-3x text-success"></md-icon>
                  </div>
                  <div class="md-layout-item text-left pl-3">
                    <div class="md-title">恭喜你，提交成功</div>
                    <div class="md-caption">等待管理员审核中，审核时间1个工作日，如有疑问请联系客服 028-99212347​​​​​。</div>
                  </div>
                 </div>
                 <div class="md-layout-item md-size-100 md-layout md-alignment-center">
                  <md-button class="md-primary md-raised">返回首页</md-button>
                  <nuxt-link to="/company" class="text-accent">修改信息</nuxt-link>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <md-dialog :md-active.sync="showDialog" class="signup-agreement-dialog md-scrollbar">
      <i class="iconfont icon-x" @click="showDialog = !showDialog"></i>
      <md-dialog-title class="border-bottom py-3">用户注册协议</md-dialog-title>
      <div class="md-scrollbar p-3 mb-3">
            新华社北京4月24日电　中共中央政治局4月23日下午就《共产党宣言》及其时代意义举行第五次集体学习。中共中央总书记习近平在主持学习时强调，学习马克思主义基本理论是共产党人的必修课。我们重温《共产党宣言》，就是要深刻感悟和把握马克思主义真理力量，坚定马克思主义信仰，追溯马克思主义政党保持先进性和纯洁性的理论源头，提高全党运用马克思主义基本原理解决当代中国实际问题的能力和水平，把《共产党宣言》蕴含的科学原理和科学精神运用到统揽伟大斗争、 伟大工程、伟大事业、伟大梦想的实践中去，不断谱写新时代坚持和发展中国特色社会主义新篇章。
　习近平指出，《共产党宣言》一经问世，就在实践上推动了世界社会主义发展，深刻改变了人类历史进程。我们党开辟的新民主主义革命道路、社会主义革命道路、社会主义建设道路、中国特色社会主义道路，都是把马克思主义基本原理同中国具体实际相结合的伟大创造。中国共产党是《共产党宣言》精神的忠实传人。
　习近平强调，《共产党宣言》揭示的人类社会最终走向共产主义的必然趋势，奠定了共产党人坚定理想信念、坚守精神家园的理论基础。我们要把共产主义远大理想同中国特色社会主义共同理想统一起来    新华社北京4月24日电　中共中央政治局4月23日下午就《共产党宣言》及其时代意义举行第五次集体学习。中共中央总书记习近平在主持学习时强调，学习马克思主义基本理论是共产党人的必修课。我们重温《共产党宣言》，就是要深刻感悟和把握马克思主义真理力量，坚定马克思主义信仰，追溯马克思主义政党保持先进性和纯洁性的理论源头，提高全党运用马克思主义基本原理解决当代中国实际问题的能力和水平，把《共产党宣言》蕴含的科学原理和科学精神运用到统揽伟大斗争、 伟大工程、伟大事业、伟大梦想的实践中去，不断谱写新时代坚持和发展中国特色社会主义新篇章。
　习近平指出，《共产党宣言》一经问世，就在实践上推动了世界社会主义发展，深刻改变了人类历史进程。我们党开辟的新民主主义革命道路、社会主义革命道路、社会主义建设道路、中国特色社会主义道路，都是把马克思主义基本原理同中国具体实际相结合的伟大创造。中国共产党是《共产党宣言》精神的忠实传人。
　习近平强调，《共产党宣言》揭示的人类社会最终走向共产主义的必然趋势，奠定了共产党人坚定理想信念、坚守精神家园的理论基础。我们要把共产主义远大理想同中国特色社会主义共同理想统一起来    新华社北京4月24日电　中共中央政治局4月23日下午就《共产党宣言》及其时代意义举行第五次集体学习。中共中央总书记习近平在主持学习时强调，学习马克思主义基本理论是共产党人的必修课。我们重温《共产党宣言》，就是要深刻感悟和把握马克思主义真理力量，坚定马克思主义信仰，追溯马克思主义政党保持先进性和纯洁性的理论源头，提高全党运用马克思主义基本原理解决当代中国实际问题的能力和水平，把《共产党宣言》蕴含的科学原理和科学精神运用到统揽伟大斗争、 伟大工程、伟大事业、伟大梦想的实践中去，不断谱写新时代坚持和发展中国特色社会主义新篇章。
　习近平指出，《共产党宣言》一经问世，就在实践上推动了世界社会主义发展，深刻改变了人类历史进程。我们党开辟的新民主主义革命道路、社会主义革命道路、社会主义建设道路、中国特色社会主义道路，都是把马克思主义基本原理同中国具体实际相结合的伟大创造。中国共产党是《共产党宣言》精神的忠实传人。
　习近平强调，《共产党宣言》揭示的人类社会最终走向共产主义的必然趋势，奠定了共产党人坚定理想信念、坚守精神家园的理论基础。我们要把共产主义远大理想同中国特色社会主义共同理想统一起来    新华社北京4月24日电　中共中央政治局4月23日下午就《共产党宣言》及其时代意义举行第五次集体学习。中共中央总书记习近平在主持学习时强调，学习马克思主义基本理论是共产党人的必修课。我们重温《共产党宣言》，就是要深刻感悟和把握马克思主义真理力量，坚定马克思主义信仰，追溯马克思主义政党保持先进性和纯洁性的理论源头，提高全党运用马克思主义基本原理解决当代中国实际问题的能力和水平，把《共产党宣言》蕴含的科学原理和科学精神运用到统揽伟大斗争、 伟大工程、伟大事业、伟大梦想的实践中去，不断谱写新时代坚持和发展中国特色社会主义新篇章。
　习近平指出，《共产党宣言》一经问世，就在实践上推动了世界社会主义发展，深刻改变了人类历史进程。我们党开辟的新民主主义革命道路、社会主义革命道路、社会主义建设道路、中国特色社会主义道路，都是把马克思主义基本原理同中国具体实际相结合的伟大创造。中国共产党是《共产党宣言》精神的忠实传人。
　习近平强调，《共产党宣言》揭示的人类社会最终走向共产主义的必然趋势，奠定了共产党人坚定理想信念、坚守精神家园的理论基础。我们要把共产主义远大理想同中国特色社会主义共同理想统一起来
      </div>
    </md-dialog>
  </div>
</template>
<script>
import TextField from "@/components/TextField";
import DropDown from "@/components/DropDown";
import ImageUploader from "@/components/ImageUploader";

export default {
  name: "Signup",
  components: {
    TextField,
    DropDown,
    ImageUploader
  },
  data: () => ({
    step: 1,
    agreement: false,
    showDialog: false
  }),
  methods: {
  }
};
</script>
<style lang="scss">
.signup {
  background: url("~@/static/img/signup_bg.jpg") left center no-repeat;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  position: relative;
  z-index: 0;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($primary-color-light, 0.86);
    z-index: 0;
  }
  form span.md-layout-item {
    flex: 0 0 7rem;
  }
  .signup-step-success {
    height: calc(100vh-20rem);
    max-height: 520px;
  }

}
.signup-agreement-dialog {
  max-width: 40%;
  width: 520px;
  max-height: 60vh;
  overflow: auto;
}
.step {
  padding-top: 3rem;
  font-size: $size2;
  color: $white;

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
    li {
      text-align: center;
      font-size: 1rem;
      position: relative;
      z-index: 1;
      flex: 1;
      color: $white;
      padding: 1rem;
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: block;
        border-top: 2px $white solid;
        z-index: -1;
        transform: translateY(50%);
        margin-top: -1px;
      }
      &:first-of-type {
        flex: 0 0 3rem;
        &::before {
          transform: translateY(50%) scaleX(0.5);
          transform-origin: right;
        }
      }
      &:last-of-type {
        flex: 0 0 3rem;
        &::before {
          transform: translateY(50%) scaleX(0.5);
          transform-origin: left;
        }
      }

      div {
        padding-top: 0.5rem;
        font-size: $size1;
        position: absolute;
        text-align: center;
        display: block;
        width: 100%;
        left: 0;
        bottom: auto;
      }

      span {
        display: inline-block;
        width: 3rem;
        height: 3rem;
        line-height: 3rem;
        text-align: center;
        border-radius: 50%;
        background-color: $primary-color-light;
        border: $white 1px solid;
        color: $white;
      }

      &.active span {
        background-color: $white;
        color: $primary-color;
      }
    }
  }
}
</style>
