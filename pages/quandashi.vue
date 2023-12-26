<template>
  <div>
     <div class="postion">
      数据来源：权大师
    </div>
    <div class="items">
      <!-- <h1>基础信息</h1> -->
      <div class="item">
        <span class="label">商标图片名：</span>
        <img :src="dataInfo.imageInfo.original_logo" />
      </div>
      <div class="item">
        <span class="label">注册号：</span
        ><span class="content" id="dataId">{{ dataInfo.baseInfo.dataId }}</span>
      </div>
      <div class="item">
        <span class="label">商标类别：</span
        ><span class="content">{{ dataInfo.baseInfo.typeCode }}</span>
      </div>
      <div class="item">
        <span class="label">商标名：</span
        ><b class="content">{{ dataInfo.baseInfo.name }}</b>
      </div>
      <div class="item">
        <span class="label">商标申请日期：</span
        ><span class="content">{{ dataInfo.baseInfo.appDate }}</span>
      </div>
      <div class="item">
        <span class="label">申请人中文：</span
        ><b class="content">{{ dataInfo.baseInfo.applicant }}</b>
      </div>
      <div class="item">
        <span class="label">申请人地址中文：</span
        ><span class="content">{{ dataInfo.baseInfo.address }}</span>
      </div>
      <div class="item">
        <span class="label">共有申请人1：</span
        ><span class="content">{{ dataInfo.baseInfo.applicantShare_1 }}</span>
      </div>
      <div class="item">
        <span class="label">共有申请人2：</span
        ><span class="content">{{ dataInfo.baseInfo.applicantShare_2 }}</span>
      </div>
      <div class="item">
        <span class="label">申请人英文：</span
        ><span class="content">{{ dataInfo.baseInfo.enApplicant }}</span>
      </div>
      <div class="item">
        <span class="label">申请人地址英文：</span
        ><span class="content">{{ dataInfo.baseInfo.enAddress }}</span>
      </div>
      <div class="item">
        <span class="label">初审公告期号：</span
        ><span class="content">{{ dataInfo.baseInfo.noticeIssue }}</span>
      </div>
      <div class="item">
        <span class="label">注册公告期号：</span
        ><span class="content">{{ dataInfo.baseInfo.registerIssue }}</span>
      </div>
      <div class="item">
        <span class="label">专用权期限开始日期：</span
        ><span class="content">{{ dataInfo.baseInfo.privateStartDate }}</span>
      </div>
      <div class="item">
        <span class="label">专用权期限结束日期：</span
        ><span class="content">{{ dataInfo.baseInfo.PrivateEndDate }}</span>
      </div>
      <div class="item">
        <span class="label">代理机构：</span
        ><span class="content">{{ dataInfo.baseInfo.agency }}</span>
      </div>
      <div class="item">
        <span class="label">法律状态：</span
        ><span class="content">{{ dataInfo.baseInfo.processName }}</span>
      </div>
      <div class="item">
        <span class="label">法律状态编号：</span
        ><span class="content">{{ dataInfo.baseInfo.processCode3 }}</span>
      </div>
      <div class="item">
        <span class="label">创建日期：</span
        ><span class="content">{{ dataInfo.baseInfo.createDate }}</span>
      </div>
      <div class="item">
        <span class="label">商标价格：</span
        ><span class="content">{{ dataInfo.baseInfo.brandPrice }}</span>
      </div>
      <div class="item">
        <span class="label">商标类型：</span
        ><span class="content">{{ dataInfo.baseInfo.tmType }}</span>
      </div>
      <div class="item">
        <span class="label">商标形式：</span
        ><span class="content">{{ dataInfo.baseInfo.tmNameForm }}</span>
      </div>
      <!-- <h1>商标公告</h1> -->
      <div class="item" v-if="dataInfo.noticeInfo && dataInfo.noticeInfo.length">
        <span class="label">商标公告：</span>
        <div class="content goods-items">
          <p
            class="good-item"
            v-for="(item, index) of dataInfo.noticeInfo"
            :key="index"
          >
            {{ item.noticeDate }} 第{{ item.issue }}期《{{ item.noticeName }}》 第{{
              item.page
            }}页
            <a target="_blank" :href="item.imgUrl"
              >查看</a
            >
          </p>
        </div>
      </div>
      <!-- <h1>使用商品</h1> -->
      <div class="item" v-if="dataInfo.goodsInfo && dataInfo.goodsInfo.length">
        <span class="label">使用商品：</span>
        <div class="content goods-items">
          <div
            class="good-item"
            v-for="(good, index) of dataInfo.goodsInfo"
            :key="index"
          >
            {{ good.name }}({{ good.code }} {{ good.status == '0' ? '正常' : good.status == 1 ? '预删除' : '已删除'}})
          </div>
        </div>
      </div>
      <!-- <h1>商标流程</h1> -->
      <div class="item" v-if="dataInfo.lastFlow">
        <span class="label">商标流程：</span>
        <div class="content goods-items">
          <!-- <b
            class="good-item"
            v-for="(flow, index) of dataInfo.lastFlow"
            :key="index"
            >{{ flow.lastTime }} : {{ flow.name }}</b
          > -->
          <b class="good-item">{{ dataInfo.lastFlow.lastTime }} : {{ dataInfo.lastFlow.name }}</b>
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
    return { dataInfo };
  },
  data() {
    return {
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
h1 {
  font-size: 18px;
  padding: 15px 0;
}
img {
  width: 100px;
}
</style>