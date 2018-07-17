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
            帮助中心 HELP
          </div>
          <div class="py-3 help-items">
            <div class="border rounded md-elevation-1 help-item mb-3">
              <div class="md-title">在懒虫动动上发布兼职招募信息是否收费？</div>
              <div class="md-caption pt-3">懒虫动动发信息是完全免费的，不收取任何费用。企业招聘需先完善真实有效的企业资料(企业认证)才能发布信息。</div>
            </div>
            <div class="border rounded md-elevation-1 help-item mb-3">
              <div class="md-title">个人用户如何发布兼职信息？</div>
              <div class="md-caption pt-3">目前懒虫动动并不支持个人用户直接发布兼职信息，您可以重新注册企业账户进行认证后发布。</div>
            </div>
            <div class="border rounded md-elevation-1 help-item mb-3">
              <div class="md-title">懒虫动动有什么特色功能？</div>
              <div class="md-caption pt-3">懒虫动动兼职板块特色功能包括：组队投递，战队投递，一键邀请兼职，兼职排行榜推荐等；实习板块特色功能包括：通过实习技能测试、完成技能任务、了解实习工作等功能为报名实习岗位增添门槛，有效筛选人才。</div>
            </div>
            <div class="border rounded md-elevation-1 help-item mb-3">
              <div class="md-title">技能标签是怎样获得的？</div>
              <div class="md-caption pt-3">技能标签需要多次完成带有对应标签的兼职任务，并获得企业用户对兼职技能的认可后才可获得。</div>
            </div>
            <div class="border rounded md-elevation-1 help-item mb-3">
              <div class="md-title">平台积分有什么用？怎么获取积分？</div>
              <div class="md-caption pt-3">平台内设有积分商城板块，可以用积分兑换相应礼品。<br>
                获取积分方式有很多，包括报名兼职任务、完成兼职任务、加入战队、接受战队任务、战队奖励、分享、签到等都可以获得积分，具体攻略详见小程序端的积分说明。</div>
            </div>
            <div class="border rounded md-elevation-1 help-item mb-3">
              <div class="md-title">怎样才能成为我们的校园合伙人？</div>
              <div class="md-caption pt-3">如果有想要成为我们校园合伙人的小伙伴，可以添加客服微信，并备注校园合伙人，我们会尽快与您联系。<br>
                微信客服可直接搜索微信号：tx-130313</div>
            </div>
            <div class="border rounded md-elevation-1 help-item mb-3">
              <div class="md-title">怎样联系我们？</div>
              <div class="md-caption pt-3">可拨打热线：028-82674077<br>
                地址：四川省成都市青羊区光华东二路98号<br>
                也可加入我们懒虫动动交流QQ群：778528178<br></div>
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
