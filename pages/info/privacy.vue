<template>
  <div class="infos">
    <div class="container">
      <div class="md-layout mt-3">
        <div class="infos-sidebar pr-3">
          <div class="md-layout flex-column bg-white p-3 infos-sidebar-links">
            <nuxt-link to="/info/terms" class="infos-sidebar-item">用户协议</nuxt-link>
            <nuxt-link to="/info/privacy" class="infos-sidebar-item">隐私政策</nuxt-link>
            <nuxt-link to="/info/help" class="infos-sidebar-item">帮助中心</nuxt-link>
          </div>
        </div>
        <div class="md-layout-item bg-white px-3">
          <div class="text-muted py-3 border-bottom md-title">
            隐私政策 PRIVACY
          </div>
          <div class="py-3 help-items">
            <img src="@/static/img/privacy.jpg" alt="privacy" class="rounded w-100">
            <div class="border rounded md-elevation-1 my-3">
              <div class="help-item">
                <div class="md-title"></div>
                <p>“懒虫动动”将在“懒虫动动”公布并不时修订隐私权政策，隐私权政策构成本协议的有效组成部分。</p>
              </div>
              <div class="help-item">
                <div class="md-title"></div>
                <p>你知悉并认可：“懒虫动动”可能会与第三方合作向用户提供相关的网络服务，在此情况下，如该第三方同意承担与本网站同等的保护用户隐私的责任，则“懒虫动动”有权将用户的注册资料等提供给该第三方。另外，在不透露单个用户隐私资料的前提下，“懒虫动动”有权对整个用户数据库进行分析并对用户数据库进行商业上的利用。</p>
              </div>
              <div class="help-item">
                <div class="md-title"></div>
                <p>为保护您的个人信息的安全。我们使用各种安全技术和程序来保护您的个人信息不被未经授权的访问、使用或泄漏。对此您表示理解和认同。</p></div>
              <div class="help-item">
                <div class="md-title"></div>
                <p>“懒虫动动”可能调用您设备的特定信息，这样可以简化记录您的个人信息，当您下次使用“懒虫动动”服务时，系统会自动调出您以前发布或浏览的信息，使您的使用变得更加便捷和高效。</p>
              </div>
              <div class="help-item">
                <div class="md-title"></div>
                <p>“懒虫动动”可能使用您在“懒虫动动”网站浏览的行为，根据您的兴趣喜好，有可能展现您的兴趣相关的其他网站提供的推广内容。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "info"
};
</script>
<style lang="scss">
.infos {
  .infos-sidebar {
    flex: 0 0 12rem;
    width: 12rem;
    position: relative;
    .infos-sidebar-links {
      position: fixed;
      width: 11rem;
      min-height: 50vh;
      a {
        color: $text-color;
        padding: 0 1rem;
        margin: .5rem 0;
        position: relative;
        &.active {
          color: $primary-color;
          &::before {
            content: "";
            position: absolute;
            border-left: 2px $primary-color solid;
            height: 100%;
            top: 0;
            left: 0;
          }
        }
        &:hover {
          color: $primary-color;
          text-decoration: none;
        }
      }
    }
  }
}
.help-items {
  .help-item {
    counter-increment: counter 1;
    padding: 1rem 1rem 1rem 3rem;
    position: relative;
    .md-title:before {
      content:'0'counter(counter);
      position: absolute;
      left: 1rem;
      color: $primary-color;
    }
    p {
      font-size: $size1;
      color: $grey-color-dark;
    }
  }
}
</style>
