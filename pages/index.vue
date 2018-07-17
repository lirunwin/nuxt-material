<template>
<div class="index">
  <div class="index-top">
    <div class="container h-100">
      <div class="md-layout index-top-bar md-alignment-center">
        <div class="md-layout-item flex-0">
          <!-- <i class="iconfont icon-scout logo caption"></i> -->
          <nuxt-link to="/"><img src="@/static/img/logo.png" alt="logo"></nuxt-link>
        </div>
        <div class="spacer"></div>
        <div class="md-layout-item flex-0 md-layout md-alignment-center">
          <md-icon class="iconfont icon-tel md-layout-item flex-0"></md-icon>
          <div class="md-layout-item flex-0 size-1">
            <div class="caption">服务电话</div>
            <div class="index-tel">028-99212347</div>
          </div>
        </div>
      </div>
      <div class="md-layout md-alignment-center-right signin">
        <div class="md-layout-item md-size-30 md-elevation-1 rounded bg-white">
          <md-tabs md-alignment="fixed">
            <md-tab id="tab-account" md-label="账号登录">
              <form>
                <text-field preicon="icon-user" class="my-3" placeholder="请输入账号" maxlength="11"></text-field>
                <text-field preicon="icon-lock-solid" class="mb-3" placeholder="请输入密码" type="password"></text-field>
                <text-field preicon="icon-safe-solid" class="mb-3" placeholder="请输入验证码" captcha maxlength="6"></text-field>
                <md-button class="md-primary md-dense md-raised w-100 mx-0 mt-3">登录</md-button>
                <div class="mt-3 text-center size-1">
                  <nuxt-link to="/user/signup" class="text-accent">没有账号？立即注册</nuxt-link>
                </div>
              </form>
            </md-tab>
            <md-tab id="tab-mobile" md-label="手机登录">
              <form>
                <text-field preicon="icon-user" class="my-3" placeholder="请输入账号" maxlength="11"></text-field>
                <text-field preicon="icon-lock-solid" class="mb-3" sms placeholder="请输入短信验证码" type="number" maxlength="6"></text-field>
                <text-field preicon="icon-safe-solid" class="mb-3" placeholder="请输入验证码" captcha maxlength="6"></text-field>
                <md-button class="md-primary md-dense md-raised w-100 mx-0 mt-3">登录</md-button>
                <div class="mt-3 text-center size-1">
                  <nuxt-link to="/user/signup" class="text-accent">没有账号？立即注册</nuxt-link>
                </div>
              </form>
            </md-tab>
          </md-tabs>
        </div>
      </div>
    </div>
  </div>
  <div class="index-advantage bg-white">
    <div class="container">
      <div class="text-center">
        <span class="md-headline text-primary">产品优势</span><br><small class="md-subheading">our advantages</small>
      </div>
      <div class="md-layout md-gutter mx-0 index-advantage-items text-center">
        <div class="md-layout-item md-size-25 index-advantage-item">
          <div class="hexagon">
            <svg viewBox="0 0 1024 1024" id="trusteeship">
              <path class="st1" d="M902.2,141H122.5c-31.9,0-57.8,25.9-57.8,57.8v505.4c0,31.9,25.9,57.8,57.8,57.8h779.8
                c31.9,0,57.8-25.9,57.8-57.8V198.8C960,166.9,934.1,141,902.2,141z M709,397.5c-6.7,26-11.2,62.3-41.6,63.5
                c-39.6-27.3-136.6,7.9-181.6,15.3c-21.2,3.5-41-16-52.5-24.1c-23.9-16.7-50.9-30.3-74.4-45.9c-10.8-7.2-27.9-11.2-32.8-24.1
                c1.8-2.6,1.7-3.7,2.2-8.8c4.5-2.8,5-4.5,10.9-6.6c11.4-6.9,35.6,2.3,45.9,6.6c47.3,19.3,78.4,49.7,142.2,24.1
                c14.3-5.7,27.1-5.8,32.8-19.7c3.3-3.6,3.4-4.4,4.4-10.9h-2.2v-2.2c-33.2,6.6-75,7.7-105,0c-5.6-9.2-10.3-13.3-10.9-28.4
                c1.8-2.2,0.8-0.6,2.2-4.4c22.8,0.1,112.2-17.4,124.7-26.3c38.3-0.7,65.2,25.2,94.1,37.2c12.3,5.1,35.7,4,41.6,15.3
                C714.2,365.8,711,389.6,709,397.5z"/>
              <path class="st2" d="M64.7,617.5v86.6c0,31.9,25.9,57.8,57.8,57.8H453l-53,63.3c-2.2,2.6-3.3,5.7-3.3,8.9h-57.6
                c-8,0-14.4,6.5-14.4,14.4s6.5,14.4,14.4,14.4h346.6c8,0,14.4-6.5,14.4-14.4s-6.5-14.4-14.4-14.4h-49.6c-0.2-3-1.3-5.9-3.3-8.4
                l-53.6-63.8h323.1c31.9,0,57.8-25.9,57.8-57.8v-86.6H64.7z M469,675.3h86.6c8,0,14.4,6.5,14.4,14.4c0,8-6.5,14.4-14.4,14.4H469
                c-8,0-14.4-6.5-14.4-14.4C454.6,681.7,461.1,675.3,469,675.3z M602.1,834.1H429.6l60.5-72.2h51.4L602.1,834.1z"/>
            </svg>
          </div>
          <div class="md-title py-3 pt-3">项目托管</div>
          <div class="md-caption">企业可将项目托管至平台，由平台进行标准化管理，主要包括任务的发布、执行等工作，企业可自由配置托管内容，并可实时监控项目动态。</div>
        </div>
        <div class="md-layout-item md-size-25 index-advantage-item">
          <div class="hexagon">
            <svg viewBox="0 0 1024 1024" id="match">
              <path class="st1" d="M868.8,264.3c-58.9-9.7-114.5,30.2-124.2,89.1c-2.6,15.5-1.7,30.8,2.1,45.1l-121.5,53.6
                c-16.9-28-45.5-48.8-80.3-54.5c-26.4-4.3-52.1,0.6-73.9,12.4l-70.8-98.7c19.3-15.1,33.2-37.2,37.5-63.2
                c9.1-55.1-28.2-107.2-83.4-116.3c-55.1-9.1-107.2,28.2-116.3,83.4c-9.1,55.1,28.2,107.2,83.4,116.3c18.7,3.1,37.1,0.8,53.6-5.7
                l72.5,101.1c-18.2,16.8-31.1,39.6-35.5,66c-3,17.9-1.6,35.6,3.3,51.9l-110.8,48.9c-19.1-30.9-50.9-53.7-89.6-60.1
                C144,521.9,77.1,569.9,65.4,640.7c-11.7,70.9,36.3,137.8,107.2,149.5c70.9,11.7,137.8-36.3,149.5-107.2c3.6-22,1.5-43.6-5.2-63.3
                l110.2-48.6c16.9,28,45.5,48.8,80.3,54.5c26.4,4.3,52.1-0.6,73.9-12.4L658.4,721c-15.2,14.6-26,34.1-29.7,56.5
                c-9.1,55.1,28.2,107.2,83.4,116.3c55.1,9.1,107.2-28.2,116.3-83.4c9.1-55.1-28.2-107.2-83.4-116.3c-22.4-3.7-44.3,0.3-63,10
                l-77.3-107.8c18.2-16.8,31.1-39.6,35.5-66c3-17.9,1.6-35.6-3.3-51.9l120.9-53.4c15.7,26.9,42.8,46.9,75.9,52.4
                c58.9,9.7,114.5-30.2,124.2-89.1C967.6,329.6,927.7,274,868.8,264.3z"/>
            </svg>
          </div>
          <div class="md-title py-3 pt-3">精准匹配</div>
          <div class="md-caption">平台拥有将企业发布的招募需求和学生兼职进行匹配的完善数据模型，可以做到供给和需求的精准匹配，对匹配到的兼职还可进行一键邀请。</div>
        </div>
        <div class="md-layout-item md-size-25 index-advantage-item">
          <div class="hexagon">
            <svg viewBox="0 0 1024 1024" id="creditcard">
              <path class="st1" d="M65.7,436.5v380.6c0,36.6,29.6,66.2,66.2,66.2h761.3c36.6,0,66.2-29.6,66.2-66.2V436.5H65.7z M826.9,767.5
                  H595.2l33.1-132.4H860L826.9,767.5z"/>
              <path class="st2" d="M131.9,138.6h761.3c36.6,0,66.2,29.6,66.2,66.2v132.4H65.7V204.8C65.7,168.3,95.3,138.6,131.9,138.6z"/>
            </svg>
          </div>
          <div class="md-title py-3 pt-3">信用保障</div>
          <div class="md-caption">平台会综合测试和工作反馈等进行评分评级，工作完成质量、效率等均是考虑的因素；如信用缺失，平台将采用信用预警标签或采取封号等措施。</div>
        </div>
        <div class="md-layout-item md-size-25 index-advantage-item">
          <div class="hexagon">
            <svg viewBox="0 0 1024 1024" id="management">
              <path class="st2" d="M756.6,85l193.6,193.1c13.4,13.3,13.4,34.9,0,48.3L756.6,519.5c-13.4,13.3-35,13.3-48.4,0L514.6,326.4
                c-13.4-13.3-13.4-35,0-48.3L708.2,85C721.5,71.7,743.2,71.7,756.6,85z"/>
              <path class="st1" d="M599.5,609.5h273.8c18.9,0,34.2,15.3,34.2,34.1v273.1c0,18.9-15.3,34.1-34.2,34.1H599.5
                c-18.9,0-34.2-15.3-34.2-34.1V643.7C565.2,624.8,580.6,609.5,599.5,609.5z"/>
              <path class="st2" d="M99.2,609.5H373c18.9,0,34.2,15.3,34.2,34.1v273.1c0,18.9-15.3,34.1-34.2,34.1H99.2
                C80.3,951,65,935.7,65,916.8V643.7C65,624.8,80.3,609.5,99.2,609.5z"/>
              <path class="st1" d="M99.2,131.6H373c18.9,0,34.2,15.3,34.2,34.1v273.1c0,18.9-15.3,34.1-34.2,34.1H99.2
                C80.3,473,65,457.7,65,438.8V165.7C65,146.9,80.3,131.6,99.2,131.6z"/>
            </svg>
          </div>
          <div class="md-title py-3 pt-3">便捷管理</div>
          <div class="md-caption">企业可使用平台中独立的项目管理系统执行项目。企业可自行配置所需功能，各项标准，也可灵活进行角色分配，管理便捷、灵活，易操作</div>
        </div>
      </div>
    </div>
  </div>
  <div class="index-customers bg-grey">
    <div class="container">
      <div class="text-center">
        <span class="md-headline text-primary">合作企业</span><br><small class="md-subheading">our customers</small>
      </div>
      <div class="md-layout md-gutter mx-0 index-customer text-center">
        <div class="md-layout-item md-size-20 mb-3">
          <img src="@/static/img/corp1.jpg">
        </div>
        <div class="md-layout-item md-size-20 mb-3">
          <img src="@/static/img/corp2.jpg">
        </div>
        <div class="md-layout-item md-size-20 mb-3">
          <img src="@/static/img/corp3.jpg">
        </div>
        <div class="md-layout-item md-size-20 mb-3">
          <img src="@/static/img/corp4.jpg">
        </div>
        <div class="md-layout-item md-size-20 mb-3">
          <img src="@/static/img/corp5.jpg">
        </div>
        <div class="md-layout-item md-size-20 mb-3">
          <img src="@/static/img/corp6.jpg">
        </div>
        <div class="md-layout-item md-size-20 mb-3">
          <img src="@/static/img/corp7.jpg">
        </div>
        <div class="md-layout-item md-size-20 mb-3">
          <img src="@/static/img/corp8.jpg">
        </div>
        <div class="md-layout-item md-size-20 mb-3">
          <img src="@/static/img/corp9.jpg">
        </div>
        <div class="md-layout-item md-size-20 mb-3">
          <img src="@/static/img/corp10.jpg">
        </div>
      </div>
    </div>
  </div>
  <div class="index-address bg-white">
    <div class="container">
      <div class="text-center">
        <span class="md-headline text-primary">我们在这里等待你的到来</span><br><small class="md-subheading">荣梨信息咨询有限公司</small>
      </div>
    </div>
    <div class="md-layout md-gutter mx-0 index-map text-center mt-3">
      <img src="@/static/img/map.jpg" class="w-100">
    </div>
    <div class="container index-address-bottom">
      <div class="md-layout">
        <div class="md-layout-item md-size-60 md-layout size-2 md-alignment-center-space-between">
          <div class="md-layout-item md-size-100"><i class="iconfont icon-location"></i> 公司地址：四川省成都市青羊区光华东二路</div>
          <div class="md-layout-item md-size-100"><i class="iconfont icon-tel"></i> 联系电话：028-82674077</div>
          <div class="md-layout-item md-size-100"><i class="iconfont icon-mail"></i> 电子邮箱：admin@ronglee.net</div>
        </div>
        <div class="md-layout-item md-size-40 md-layout text-center">
          <div class="md-layout-item">
            <img src="@/static/img/gzh.jpg">
            <div class="md-body-2 mt-3">关注懒虫动动客服</div>
          </div>
          <div class="md-layout-item">
            <img src="@/static/img/minip.jpg">
            <div class="md-body-2 mt-3">关注懒虫动动小程序</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="footer">
    <div class="container">
      <nuxt-link to="/info/about" class="text-white">关于我们</nuxt-link>
      <nuxt-link to="/info/about" class="text-white">联系我们</nuxt-link>
      <nuxt-link to="/info/about" class="text-white">用户协议</nuxt-link>
      <nuxt-link to="/info/about" class="text-white">隐私政策</nuxt-link>
      <nuxt-link to="/info/about" class="text-white">帮助中心</nuxt-link>
      <div class="pt-3">版权信息 成都荣梨信息咨询有限公司</div>
    </div>
  </footer>
</div>
</template>

<script>
import TextField from "@/components/TextField";
export default {
  name: "index",
  components: {
    TextField
  }
};
</script>

<style lang="scss">
.index {
  .index-top {
    background-image: url("~@/static/img/index_bg_top.jpg");
    background-size: cover;
    background-position: center;
    height: calc(100vw * 0.423);
    background-repeat: no-repeat;
    .index-top-bar {
      height: 4.5rem;
    }
    .iconfont.icon-tel {
      background-color: $white;
      border-radius: 50%;
      width: 35px;
      height: 35px;
      border: 2px $primary-color solid;
      color: $primary-color;
      margin-right: 0.625rem;
    }
    .index-tel {
      font-style: italic;
      font-weight: bold;
    }
    .signin {
      height: calc(100% - 4.5rem);
    }
    form {
      width: 75%;
      margin: 0 auto;
      .text-feild {
        margin-right: 0;
      }
    }
  }
  .md-subheading {
    text-transform: uppercase;
    color: darken($grey-color, 40%);
    letter-spacing: 0.1em;
  }
  .index-advantage,
  .index-customers {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  .index-advantage {
    .index-advantage-items {
      margin-top: 5rem;
      .md-caption {
        line-height: 22px;
      }
      .hexagon {
        width: 114px;
        height: 66px;
        background: $grey-color;
        position: relative;
        margin: 33px auto;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          width: 4rem;
          &#trusteeship,
          &#match,
          &#creditcard,
          &#management
           {
            .st1 {
              fill: #c6c6c6;
            }
            .st2 {
              fill: #b1b1b1;
            }
          }
        }
      }
      .hexagon:before {
        content: "";
        position: absolute;
        top: -33px;
        left: 0;
        width: 0;
        height: 0;
        border-left: 57px solid transparent;
        border-right: 57px solid transparent;
        border-bottom: 33px solid $grey-color;
      }
      .hexagon:after {
        content: "";
        position: absolute;
        bottom: -33px;
        left: 0;
        width: 0;
        height: 0;
        border-left: 57px solid transparent;
        border-right: 57px solid transparent;
        border-top: 33px solid $grey-color;
      }
      .index-advantage-item {
        &:hover .hexagon {
          background: $primary-color;
          &::before {
            border-bottom-color: $primary-color;
          }
          &::after {
            border-top-color: $primary-color;
          }
          svg {
            width: 4rem;
            &#trusteeship,
            &#match,
            &#creditcard,
            &#management {
              .st1 {
                fill: $white;
              }
              .st2 {
                fill: #e2e2e2;
              }
            }
          }
        }
      }
    }
  }
  .index-customers {
    .index-customer {
      margin-top: 3.5rem;
      img {
        width: 100%;
      }
    }
  }
  .index-address {
    padding-top: 4rem;
    .index-address-bottom {
      padding-top: 3rem;
      padding-bottom: 3rem;
    }
    .iconfont {
      vertical-align: middle;
      color: darken($grey-color, 40%);
      margin-right: 0.5rem;
    }
  }
}
</style>

