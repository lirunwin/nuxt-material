<template>
  <div class="about bg-white">
    <img src="@/static/img/about_top.jpg" alt="关于我们" class="w-100">
    <div class="py-3 border-bottom">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item">关于我们</div>
          <div>ABOUT US</div>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <div class="md-layout about-item">
        <div class="md-layout-item">
          <img src="@/static/img/about0.jpg">
        </div>
        <div class="md-layout-item">
          <div class="md-layout md-alignment-center-space-around flex-column h-100 about-item-content pt-3">
            <div class="w-75 text-center pt-3">
              <div class="md-headline">公司宗旨</div>
              <div class="mt-3 md-subheading">our purpose</div>
            </div>
            <p class="w-75 text-muted pb-3">
              懒虫动动平台构建面向大学生的招聘服务大数据平台，以兼职为入口，记录学生兼职行为数据，以职业测试记录为载体，获得学生职业性格数据，通过数据分析，描绘用户的职业画像，从而寻找能够将个人价值最大化的实习或工作与之匹配。
            </p>
          </div>
        </div>
      </div>
      <div class="md-layout about-item">
          <div class="md-layout-item">
            <img src="@/static/img/about1.jpg">
          </div>
          <div class="md-layout-item">
        <div class="md-layout md-alignment-center-space-around flex-column h-100 about-item-content pt-3">
            <div class="w-75 text-center pt-3">
              <div class="md-headline">公司文化</div>
              <div class="mt-3 md-subheading">our corporate culture</div>
            </div>
            <p class="w-75 text-muted pb-3">
              尊重个人，信任团队，匠心运营，对自己的东西高标准严要求，敬畏每一个为它付出努力的员工；尊重理想，更尊重选择，希望每个使用我们平台的用户都能获得自己想要的。
            </p>
          </div>
        </div>
      </div>
      <div class="md-layout about-item">
          <div class="md-layout-item">
            <img src="@/static/img/about2.jpg">
          </div>
          <div class="md-layout-item">
        <div class="md-layout md-alignment-center-space-around flex-column h-100 about-item-content pt-3">
            <div class="w-75 text-center pt-3">
              <div class="md-headline">公司追求</div>
              <div class="mt-3 md-subheading">our goal</div>
            </div>
            <p class="w-75 text-muted pb-3">
              本质上，我们希望构建面向大学生的招聘服务大数据平台，用大数据解决学校和企业之间的信息不对称问题，用兼职形式解决学校培养和企业所需的能力不对称问题；以兼职为入口，职业测试记录为载体，获得数据，描绘用户的职业画像，仍而寻找能够将个人价值最大化的工作与之匹配。
            </p>
          </div>
        </div>
      </div>
      <div class="md-layout about-item">
          <div class="md-layout-item">
            <img src="@/static/img/about3.jpg">
          </div>
          <div class="md-layout-item">
        <div class="md-layout md-alignment-center-space-around flex-column h-100 about-item-content pt-3">
            <div class="w-75 text-center pt-3">
              <div class="md-headline">公司精神</div>
              <div class="mt-3 md-subheading">our spirit</div>
            </div>
            <p class="w-75 text-muted pb-3">
              通过网站来为在校大学生提供兼职实习、培训讲座、活动交友、创业学习等方面的服务。学习中体验工作，在体验工作中学习，努力打造大学生心目中“诚信、实力、品牌、爱心”共存的第二大学， 通过网站提升企业知名度和品牌形象，不受时间、地域限制，快速锁定目标个VS的风格人才，成功雇佣
            </p>
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
.about {
  p {
    text-indent: 2em;
    line-height: 25px;
  }
  .md-subheading {
    color: $grey-color-dark;
    text-transform: uppercase;
  }
  .about-item {
    overflow: hidden;
    &:nth-child(even) {
      .md-layout-item:last-child {
        order: -1;
      }
    }
    &:first-child .about-item-content {
      position: relative;
      &::before {
        content: '';
        display: block;
        width: 100%;
        border-top: 1px $border-color solid;
        position: absolute;
        top: 0;
        left: 3rem;
      }
    }
    &:last-child .about-item-content {
      position: relative;
      &::before {
        content: '';
        display: block;
        width: 100%;
        border-bottom: 1px $border-color solid;
        position: absolute;
        bottom: 0;
        right: 3rem;
      }
    }
  }
}
</style>
