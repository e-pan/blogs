<template>
  <div>
    <div class="postion">
      数据来源：{{ source === 'local' ? 'SGS' : '标库网' }}
    </div>
    <div class="items">
      <div class="item" v-if="tmkooInfo.tmImg">
        <span class="label">商标图片名：</span>
        <img :src="tmkooInfo.tmImgUrl" />
      </div>
      <div class="item" v-if="tmkooInfo.regNo">
        <span class="label">注册号：</span
        ><span class="content" id="regNo">{{ tmkooInfo.regNo }}</span>
      </div>
      <div class="item" v-if="tmkooInfo.intCls">
        <span class="label">国际分类：</span
        ><span class="content">{{ tmkooInfo.intCls }}</span>
      </div>
      <div class="item" v-if="tmkooInfo.tmName">
        <span class="label">商标名：</span
        ><b class="content">{{ tmkooInfo.tmName }}</b>
      </div>
      <div class="item" v-if="tmkooInfo.appDate">
        <span class="label">申请日期：</span
        ><span class="content">{{ tmkooInfo.appDate }}</span>
      </div>
      <div class="item" v-if="tmkooInfo.applicantCn">
        <span class="label">申请人中文：</span
        ><b class="content">{{ tmkooInfo.applicantCn }}</b>
      </div>
      <div class="item" v-if="tmkooInfo.idCardNo">
        <span class="label">申请人身份证号：</span
        ><span class="content">{{ tmkooInfo.idCardNo }}</span>
      </div>
      <div class="item" v-if="tmkooInfo.addressCn">
        <span class="label">申请人地址中文：</span
        ><span class="content">{{ tmkooInfo.addressCn }}</span>
      </div>
      <div class="item" v-if="tmkooInfo.applicantOther1">
        <span class="label">共有申请人1：</span
        ><span class="content">{{ tmkooInfo.applicantOther1 }}</span>
      </div>
      <div class="item" v-if="tmkooInfo.applicantOther2">
        <span class="label">共有申请人2：</span
        ><span class="content">{{ tmkooInfo.applicantOther2 }}</span>
      </div>
      <div class="item" v-if="tmkooInfo.applicantEn">
        <span class="label">申请人英文：</span
        ><span class="content">{{ tmkooInfo.applicantEn }}</span>
      </div>
      <div class="item" v-if="tmkooInfo.addressEn">
        <span class="label">申请人地址英文：</span
        ><span class="content">{{ tmkooInfo.addressEn }}</span>
      </div>
      <div class="item" v-if="tmkooInfo.agent">
        <span class="label">代理公司：</span
        ><span class="content">{{ tmkooInfo.agent }}</span>
      </div>
      <div class="item" v-if="tmkooInfo.announcementIssue">
        <span class="label">初审公告期号：</span
        ><span class="content">{{ tmkooInfo.announcementIssue }}</span>
      </div>
      <div class="item" v-if="tmkooInfo.announcementDate">
        <span class="label">初审公告日期：</span
        ><span class="content">{{ tmkooInfo.announcementDate }}</span>
      </div>
      <div class="item" v-if="tmkooInfo.regIssue">
        <span class="label">注册公告期号：</span
        ><span class="content">{{ tmkooInfo.regIssue }}</span>
      </div>
      <div class="item" v-if="tmkooInfo.regDate">
        <span class="label">注册公告日期：</span
        ><span class="content">{{ tmkooInfo.regDate }}</span>
      </div>
      <div class="item" v-if="tmkooInfo.privateDate">
        <span class="label">专用权期限：</span
        ><b class="content">{{ tmkooInfo.privateDate }}</b>
      </div>
      <div class="item" v-if="tmkooInfo.category">
        <span class="label">商标类型：</span
        ><span class="content">{{ tmkooInfo.category }}</span>
      </div>
      <div class="item" v-if="tmkooInfo.hqzdrq">
        <span class="label">后期指定日期：</span
        ><span class="content">{{ tmkooInfo.hqzdrq }}</span>
      </div>
      <div class="item" v-if="tmkooInfo.gjzcrq">
        <span class="label">国际注册日期：</span
        ><span class="content">{{ tmkooInfo.gjzcrq }}</span>
      </div>
      <div class="item" v-if="tmkooInfo.yxqrq">
        <span class="label">优先权日期：</span
        ><span class="content">{{ tmkooInfo.yxqrq }}</span>
      </div>
      <div class="item" v-if="tmkooInfo.color">
        <span class="label">指定颜色：</span
        ><span class="content">{{ tmkooInfo.color }}</span>
      </div>
      <div class="item" v-if="tmkooInfo.goods && tmkooInfo.goods.length">
        <span class="label">使用商品：</span>
        <div class="content goods-items">
          <div
            class="good-item"
            v-for="(good, index) of tmkooInfo.goods"
            :key="index"
          >
            {{ good.goodsName }}({{ good.goodsCode }})
          </div>
        </div>
      </div>
      <div class="item" v-if="tmkooInfo.flow && tmkooInfo.flow.length">
        <span class="label">商标流程：</span>
        <div class="content goods-items">
          <b
            class="good-item"
            v-for="(flow, index) of tmkooInfo.flow"
            :key="index"
            >{{ flow.flowDate }} : {{ flow.flowName }}</b
          >
        </div>
      </div>
      <div class="item" v-if="tmkooInfo.legalStatus">
        <span class="label">法律状态：</span
        ><span class="content">{{
          tmkooInfo.legalStatus === "YZC"
            ? "已注册"
            : tmkooInfo.legalStatus === "YCS"
            ? "已初审"
            : "未续展"
        }}</span>
      </div>
      <div class="item" v-if="tmkooInfo.gonggaos && tmkooInfo.gonggaos.length">
        <span class="label">商标公告：</span>
        <div class="content goods-items">
          <p
            class="good-item"
            v-for="(item, index) of tmkooInfo.gonggaos"
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
import { axiosAjax } from "~/apis/tmkoo";
export default {
  async asyncData(context) {
    console.log(context.query);
    let tmkooInfo = await axiosAjax("/tmkoo/detail", { id: context.query.id });
    if (tmkooInfo.code == 200) {
      tmkooInfo = JSON.parse(tmkooInfo.data.json);
    }
    tmkooInfo.tmImgUrl = `http://tmpic.tmkoo.com/${tmkooInfo.tmImg}-m`;
    const source = context.query.source
    return { tmkooInfo, source };
  },
  data() {
    return {
      source: ''
    };
  },
  head() {
    return {
      title: "标库网",
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