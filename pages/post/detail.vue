<template>
  <page-container class="inprogress-detail">
    <page-title>查看详情</page-title>
    <div class="bg-white rounded md-elevation-1 inprogress-detail-basic">
      <div class="md-layout border-bottom md-title text-bold py-3">
        <div class="md-layout-item">互联网软件>>java工程师</div>
        <div class="md-layout-item text-right text-primary">招聘中...</div>
      </div>
      <div class="md-layout py-3">
        <div class="md-layout-item md-size-70 md-small-size-100 md-layout size-2 md-body-1 inprogress-detail-items">
          <div class="md-layout-item md-size-50 md-small-size-100">工资结算：月结</div>
          <div class="md-layout-item md-size-50 md-small-size-100">最低学历：大专及以上</div>
          <div class="md-layout-item md-size-50 md-small-size-100">工资发放：企业代发</div>
          <div class="md-layout-item md-size-50 md-small-size-100">最少申报任务天数：5天</div>
          <div class="md-layout-item md-size-50 md-small-size-100">工资模式：底薪加提成</div>
          <div class="md-layout-item md-size-50 md-small-size-100">每天最少工作时长：3小时</div>
          <div class="md-layout-item md-size-50 md-small-size-100">基本工资：80元/天</div>
          <div class="md-layout-item md-size-50 md-small-size-100">报名模式：个人报名，战队报名</div>
          <div class="md-layout-item md-size-50 md-small-size-100">工资提成：10元/单</div>
          <div class="md-layout-item md-size-50 md-small-size-100">战队最少报名报名人数：5人</div>
          <div class="md-layout-item md-size-50 md-small-size-100">工资范围：6000-8000元/月 </div>
          <div class="md-layout-item md-size-50 md-small-size-100">战队最多报名人数：20人</div>
          <div class="md-layout-item md-size-50 md-small-size-100">任职周期：2018.08.09-2018.09.08</div>
          <div class="md-layout-item md-size-50 md-small-size-100">招聘时间：2018.08.06-2018.12.01</div>
          <div class="md-layout-item md-size-100">工作地址：四川省成都市温江区骑士大道266号</div>
        </div>
        <div class="md-layout-item md-size-30 md-small-size-100 md-layout md-alignment-center-space-around">
          <InProgressStatus class="md-layout-item md-size-100 mt-3"></InProgressStatus>
          <div class="md-layout-item md-size-100 text-right mt-3">
            <md-button class="md-primary md-raised ml-0">结束招聘</md-button>
            <md-button class="md-primary md-raised">任务设置</md-button>
          </div>
        </div>
      </div>
    </div>
    <md-tabs md-alignment="fixed" class="bg-white inprogress-detail-tabs rounded md-elevation-1 mt-3 md-body-1 line-height-2">
      <template slot="md-tab" slot-scope="{ tab }">
        <md-menu md-size="auto" md-align-trigger v-if="tab.data.isDorpDown">
          <div md-menu-trigger class="py-3">{{ tab.label }}</div>
          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>
        <div v-else>{{ tab.label }}</div>
      </template>
      <md-tab id="tab-0" md-label="任务详情" md-dynamic-height>
        <p>
          工作描述：<br> 1、金融IT系统研发工作；
          <br> 2、进行系统的需求分析、架构设计以及产品规划相关工作；
          <br> 3、参与核心模块编写，问题分析等工作；
          <br> 4、协助主管进行团队管理、能力建设相关工作；
          <br> 5、良好的文档编写能力；协调沟通能力；项目管理能力。
          <br>
        </p>
        <p>
          任职要求：<br> 1、具有计算机科学或相关学科本科及以上学历；
          <br> 2、3年以上JAVA开发经验，具有互联网金融行业开发经验者优先考虑；
          <br> 3、精通使用redis，消息队列，分布式锁；
          <br> 4、能根据业务实现分布式事务解决方案
          <br> 5、熟练使用duboo，springCloud微服务架构下进行功能开发和组件使用。
          <br> 6、有一定的系统分析和设计能力，技术钻研能力强；
          <br> 7、具有大数据架构和开发经验者优先
          <br>
        </p>
      </md-tab>

      <md-tab id="tab-1" md-label="申请审批" :md-template-data="{isDorpDown: true}">
        <form class="md-layout md-alignment-center">
          <md-checkbox v-model="selectAll" class="md-primary selectAll">全选</md-checkbox>
          <YesOrNo></YesOrNo>
          <div class="spacer"></div>
          <DropDown></DropDown>
          <TextField class="mr-0"></TextField>
          <md-button class="md-primary md-raised md-dense">搜索</md-button>
        </form>
        <div class="inprogress-detail-review-item">
          asdsadas
        </div>
      </md-tab>

      <md-tab id="tab-2" md-label="已招募人员">
        <form class="md-layout md-alignment-center">
          <div class="spacer"></div>
          <DropDown></DropDown>
          <TextField class="mr-0"></TextField>
          <md-button class="md-primary md-raised md-dense">搜索</md-button>
        </form>
        <div class="md-layout md-gutter p-3 mx-0 inprogress-invite size-2">
          <div class="md-layout-item md-xlarge-size-50 md-large-size-100 mb-3">
            <div class="border rounded p-3 md-layout">
              <div class="resume-img"><img src="@/static/img/resume.jpg"></div>
              <div class="md-layout-item px-3">
                <div class="line-height-1">姓名：爱神的箭 <tag class="mb-0 ml-3">实名认证</tag> <tag class="mb-0">学生认证</tag> </div>
                <div>出生年月：2018-12-12</div>
                <div>申请每天工作时段：13:00 - 19:00</div>
                <div>申请任务周期：2018-12-12 - 2018-12-12</div>
                <div class="caption">申请时间：2018-12-12 12:44</div>
              </div>
              <div class="flex-0 md-layout md-alignment-bottom-space-between flex-column">
                <div class="md-title text-primary">任务进行中</div>
                <div class="md-layout flex-0">
                  <div class="text-center">
                    <div class="md-title">9.6</div>
                    个人荣誉
                  </div>
                  <div class="text-center pl-3">
                    <div class="md-title">88</div>
                    用户等级
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </md-tab>

      <md-tab id="tab-3" md-label="邀请加入">
        <form class="md-layout md-alignment-center">
          <div class="spacer"></div>
          <DropDown></DropDown>
          <TextField class="mr-0"></TextField>
          <md-button class="md-primary md-raised md-dense">搜索</md-button>
        </form>
        <div class="md-layout md-gutter p-3 mx-0 inprogress-invite size-2">
          <div class="md-layout-item md-xlarge-size-50 md-large-size-100 mb-3">
            <div class="border rounded p-3 md-layout">
              <div class="resume-img"><img src="@/static/img/resume.jpg"></div>
              <div class="md-layout-item px-3">
                <div class="line-height-1">姓名：爱神的箭 <tag class="mb-0 ml-3">实名认证</tag> <tag class="mb-0">学生认证</tag> </div>
                <div>性别：女</div>
                <div>名族：汉</div>
                <div>出生年月：2018-12-12</div>
                <div class="caption">申请时间：2018-12-12 12:44</div>
              </div>
              <div class="flex-0 md-layout md-alignment-bottom-space-between flex-column">
                <div class="md-layout flex-0">
                  <div class="text-center">
                    <div class="md-title">9.6</div>
                    个人荣誉
                  </div>
                  <div class="text-center pl-3">
                    <div class="md-title">88</div>
                    用户等级
                  </div>
                </div>
                <md-button class="md-primary md-raised">邀请加入</md-button>
              </div>
            </div>
          </div>
          <div class="md-layout-item md-xlarge-size-50 md-large-size-100 mb-3">
            <div class="border rounded p-3 md-layout">
              <div class="resume-img"><img src="@/static/img/resume.jpg"></div>
              <div class="md-layout-item px-3">
                <div class="line-height-1">姓名：爱神的箭 <tag class="mb-0 ml-3">实名认证</tag> <tag class="mb-0">学生认证</tag> </div>
                <div>性别：女</div>
                <div>名族：汉</div>
                <div>出生年月：2018-12-12</div>
                <div class="caption">申请时间：2018-12-12 12:44</div>
              </div>
              <div class="flex-0 md-layout md-alignment-bottom-space-between flex-column">
                <div class="md-layout flex-0">
                  <div class="text-center">
                    <div class="md-title">9.6</div>
                    个人荣誉
                  </div>
                  <div class="text-center pl-3">
                    <div class="md-title">88</div>
                    用户等级
                  </div>
                </div>

                <md-button class="md-primary md-raised">邀请加入</md-button>
              </div>
            </div>
          </div>
          <div class="md-layout-item md-xlarge-size-50 md-large-size-100 mb-3">
            <div class="border rounded p-3 md-layout">
              <div class="resume-img"><img src="@/static/img/resume.jpg"></div>
              <div class="md-layout-item px-3">
                <div class="line-height-1">姓名：爱神的箭 <tag class="mb-0 ml-3">实名认证</tag> <tag class="mb-0">学生认证</tag> </div>
                <div>性别：女</div>
                <div>名族：汉</div>
                <div>出生年月：2018-12-12</div>
                <div class="caption">申请时间：2018-12-12 12:44</div>
              </div>
              <div class="flex-0 md-layout md-alignment-bottom-space-between flex-column">
                <div class="md-layout flex-0">
                  <div class="text-center">
                    <div class="md-title">9.6</div>
                    个人荣誉
                  </div>
                  <div class="text-center pl-3">
                    <div class="md-title">88</div>
                    用户等级
                  </div>
                </div>

                <md-button class="md-primary md-raised">邀请加入</md-button>
              </div>
            </div>
          </div>
        </div>
      </md-tab>
    </md-tabs>
  </page-container>
</template>
<script>
import Tag from "@/components/Tag";
import InProgressStatus from "@/components/InProgressStatus";
import YesOrNo from "@/components/YesOrNo";
import DropDown from "@/components/DropDown";
import TextField from "@/components/TextField";
export default {
  name: "Detial",
  components: {
    Tag,
    InProgressStatus,
    YesOrNo,
    DropDown,
    TextField
  },
  data: () => ({
    selectAll: true
  })
};
</script>
<style lang="scss">
.inprogress-detail {
  .inprogress-detail-basic {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .inprogress-detail-items {
    line-height: 2;
  }
  .inprogress-detail-tabs {
    width: 100%;
  }
  .selectAll {
    vertical-align: top;
  }
  .inprogress-detail-search > div {
    display: flex;
    align-items: center;
    &:last-child {
      justify-content: flex-end;
    }
  }
  .inprogress-detail-review-item {
    border: 1px $border-color solid;
    border-radius: $border-radius;
    padding: 1rem;
    margin-top: 1rem;
  }
}
</style>
