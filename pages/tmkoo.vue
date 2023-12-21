<template>
  <div>
    <div class="postion">
      数据来源：{{ source === 'local' ? 'SGS' : '标库网' }}
    </div>
    <div class="items">
      <div class="item" v-if="dataInfo.tmLogoUrl">
        <span class="label">商标图片名：</span>
        <img :src="dataInfo.tmLogoUrl" />
      </div>
      <div class="item" v-if="dataInfo.regNo">
        <span class="label">注册号：</span
        ><span class="content" id="regNo">{{ dataInfo.regNo }}</span>
      </div>
      <div class="item" v-if="dataInfo.intCls">
        <span class="label">国际分类：</span
        ><span class="content">{{ dataInfo.intCls }}</span>
      </div>
      <div class="item" v-if="dataInfo.tmName">
        <span class="label">商标名：</span
        ><b class="content">{{ dataInfo.tmName }}</b>
      </div>
      <div class="item" v-if="dataInfo.appDate">
        <span class="label">申请日期：</span
        ><span class="content">{{ dataInfo.appDate }}</span>
      </div>
      <div class="item" v-if="dataInfo.applicantCn">
        <span class="label">申请人中文：</span
        ><b class="content">{{ dataInfo.applicantCn }}</b>
      </div>
      <div class="item" v-if="dataInfo.idCardNo">
        <span class="label">申请人身份证号：</span
        ><span class="content">{{ dataInfo.idCardNo }}</span>
      </div>
      <div class="item" v-if="dataInfo.address">
        <span class="label">申请人地址中文：</span
        ><span class="content">{{ dataInfo.address }}</span>
      </div>
      <div class="item" v-if="dataInfo.applicantOther1">
        <span class="label">共有申请人1：</span
        ><span class="content">{{ dataInfo.applicantOther1 }}</span>
      </div>
      <div class="item" v-if="dataInfo.applicantOther2">
        <span class="label">共有申请人2：</span
        ><span class="content">{{ dataInfo.applicantOther2 }}</span>
      </div>
      <div class="item" v-if="dataInfo.enApplicant">
        <span class="label">申请人英文：</span
        ><span class="content">{{ dataInfo.enApplicant }}</span>
      </div>
      <div class="item" v-if="dataInfo.addressEn">
        <span class="label">申请人地址英文：</span
        ><span class="content">{{ dataInfo.addressEn }}</span>
      </div>
      <div class="item" v-if="dataInfo.agency">
        <span class="label">代理公司：</span
        ><span class="content">{{ dataInfo.agency }}</span>
      </div>
      <div class="item" v-if="dataInfo.announcementIssue">
        <span class="label">初审公告期号：</span
        ><span class="content">{{ dataInfo.announcementIssue }}</span>
      </div>
      <div class="item" v-if="dataInfo.announcementDate">
        <span class="label">初审公告日期：</span
        ><span class="content">{{ dataInfo.announcementDate }}</span>
      </div>
      <div class="item" v-if="dataInfo.regIssue">
        <span class="label">注册公告期号：</span
        ><span class="content">{{ dataInfo.regIssue }}</span>
      </div>
      <div class="item" v-if="dataInfo.regDate">
        <span class="label">注册公告日期：</span
        ><span class="content">{{ dataInfo.regDate }}</span>
      </div>
      <div class="item" v-if="dataInfo.privateDate">
        <span class="label">专用权期限：</span
        ><b class="content">{{ dataInfo.privateDate }}</b>
      </div>
      <div class="item" v-if="dataInfo.category">
        <span class="label">商标类型：</span
        ><span class="content">{{ dataInfo.category }}</span>
      </div>
      <div class="item" v-if="dataInfo.hqzdrq">
        <span class="label">后期指定日期：</span
        ><span class="content">{{ dataInfo.hqzdrq }}</span>
      </div>
      <div class="item" v-if="dataInfo.gjzcrq">
        <span class="label">国际注册日期：</span
        ><span class="content">{{ dataInfo.gjzcrq }}</span>
      </div>
      <div class="item" v-if="dataInfo.yxqrq">
        <span class="label">优先权日期：</span
        ><span class="content">{{ dataInfo.yxqrq }}</span>
      </div>
      <div class="item" v-if="dataInfo.color">
        <span class="label">指定颜色：</span
        ><span class="content">{{ dataInfo.color }}</span>
      </div>
      <div class="item" v-if="dataInfo.year">
        <span class="label">申请年份：</span
        ><span class="content">{{ dataInfo.year }}</span>
      </div>
      <div class="item" v-if="dataInfo.regIssue">
        <span class="label">注册公告期号：</span
        ><span class="content">{{ dataInfo.regIssue }}</span>
      </div>
      <div class="item" v-if="dataInfo.announcementDate">
        <span class="label">初审公告日期：</span
        ><span class="content">{{ dataInfo.announcementDate }}</span>
      </div>
      <div class="item" v-if="dataInfo.announcementIssue">
        <span class="label">初审公告期号：</span
        ><span class="content">{{ dataInfo.announcementIssue }}</span>
      </div>
      <div class="item" v-if="dataInfo.applicantShare">
        <span class="label">共享申请人：</span
        ><span class="content">{{ dataInfo.applicantShare }}</span>
      </div>
      <div class="item" v-if="dataInfo.privateEndDate">
        <span class="label">商标专用权日期开始：</span
        ><span class="content">{{ dataInfo.privateEndDate }}</span>
      </div>
      <div class="item" v-if="dataInfo.priorityDate">
        <span class="label">优先权日期，国际注册相关：</span
        ><span class="content">{{ dataInfo.priorityDate }}</span>
      </div>
      

      
      <div class="item" v-if="dataInfo.goods && dataInfo.goods.length">
        <span class="label">使用商品：</span>
        <div class="content goods-items">
          <div
            class="good-item"
            v-for="(good, index) of dataInfo.goods"
            :key="index"
          >
            {{ good.goodsName }}({{ good.goodsCode }})
          </div>
        </div>
      </div>
      <div class="item" v-if="dataInfo.flow && dataInfo.flow.length">
        <span class="label">商标流程：</span>
        <div class="content goods-items">
          <b
            class="good-item"
            v-for="(flow, index) of dataInfo.flow"
            :key="index"
            >{{ flow.flowDate }} : {{ flow.flowName }}</b
          >
        </div>
      </div>
      <div class="item" v-if="dataInfo.legalStatus">
        <span class="label">法律状态：</span
        ><span class="content">{{
          dataInfo.legalStatus === "YZC"
            ? "已注册"
            : dataInfo.legalStatus === "YCS"
            ? "已初审"
            : "未续展"
        }}</span>
      </div>
      <div class="item" v-if="dataInfo.gonggaos && dataInfo.gonggaos.length">
        <span class="label">商标公告：</span>
        <div class="content goods-items">
          <p
            class="good-item"
            v-for="(item, index) of dataInfo.gonggaos"
            :key="index"
          >
            {{ item.ggDate }} 第{{ item.ggQihao }}期《{{ item.ggName }}》 第{{
              item.ggPage
            }}页
            <a target="_blank" :href="item.url + '' + '&vcode=' + item.vcode"
              >查看</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { axiosAjax } from "~/apis/quandashi";
export default {
  async asyncData(context) {
    console.log(context.query);
    let dataInfo = await axiosAjax("/trademark/quandashi/query", { id: context.query.id });
    console.log(dataInfo, '-------')
    debugger
    if (dataInfo.code == 200) {
      dataInfo = dataInfo.data
    }
    dataInfo.tmImgUrl = `http://tmpic.tmkoo.com/${dataInfo.tmImg}-m`;
    const source = context.query.source
    return { dataInfo, source };
  },
  data() {
    return {
      source: ''
    };
  },
  head() {
    return {
      title: "权大师",
    };
  },
  methods: {},
  created: function () {},
  mounted: function () {},
  filter: function () {},
};
</script>

<style lang="less" scoped>
.postion {
  top: 10px;
  right: 10px;
  position: fixed;
}
.items {
  padding: 20px;
  font-size: 14px;
}
.item {
  padding-top: 20px;
}
.label {
  color: #666;
}
b.content {
  color: #ca4300;
}
.content {
  color: #000;
}
.good-item {
  padding-left: 20px;
  padding-top: 10px;
}
.hidden {
  display: none;
}
.tmbookSaveButton {
  position: fixed;
  right: 20px;
  top: 20px;
}
.goods-items {
  b {
    color: #ca4300;
    display: block;
  }
  a {
    color: #ca4300;
  }
}
</style>