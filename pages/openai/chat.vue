<template>
  <section id="openai-chat">
    <Nav></Nav>
    <div class="openai-chat wrap">
      <div class="message-list">
        <ul v-if="messageList.length">
          <li v-for="(msg, index) of messageList" :key="index" :class="{ isRobot: msg.type === 2 }">
            <span>{{ msg.type === 2 ? "Robot" : "你" }}</span>
            <p v-html="msg.msg"></p>
          </li>
        </ul>
        <div class="message-list-empty" v-else>成本有限，请文明使用。</div>
      </div>
      <div class="message-send">
        <textarea v-model="content" placeholder="请输入您的问题..."></textarea>
        <button @click="handleSubmit" :disabled="disabled || !content" :class="{ disabled: disabled || !content }">
          提交
        </button>
      </div>
    </div>
    <Footer></Footer>
  </section>
</template>
  
<script>
import Nav from "~/components/Nav";
import Footer from "~/components/Footer";
import { axiosAjax } from "~/apis";

export default {
  data() {
    return {
      content: "",
      messageList: [],
      disabled: false,
    };
  },
  head() {
    return {
      title: "付仲阔博客 | Chat GPT",
      meta: [
        {
          description: 'OpenAI, GPT-3, GPT-4, 人工智能, 人工智能聊天机器人, 人工智能聊天, 人工智能聊天室, 人工智能聊天软件, 人工智能聊天网站, 人工智能聊天机器人软件, 人工智能聊天机器人网站, 人工智能聊天机器人软件下载, 人工智能聊天机器人软件免费下载, 人工智能聊天机器人软件下载免费, 人工智能聊天机器人软件下载安装, 人工智能聊天机器人软件下载安装免费, 人工智能聊天机器人软件下载安装免费版, 人工智能聊天机器人软件下载安装免费版官网, 人工智能聊天机器人软件下载安装免费版官网下载, 人工智能聊天机器人软件下载安装免费版官网下载安装, 人工智能聊天机器人软件下载安装免费版官网下载安装免费, 人工智能聊天机器人软件下载安装免费版官网下载安装免费版, 人工智能聊天机器人软件下载安装免费版官网下载安装免费版官网, 人工智能聊天机器人软件下载安装免费版官网下载安装免费版官网下载, 人工智能聊天机器人软件下载安装免费版官网下载安装免费版官网下载安装, 人工智能聊天机器人软件下载安装免费版官网下载安',
        },
        {
          keywords: 'OpenAI, GPT-3, GPT-4, 人工智能, 人工智能聊天机器人, 人工智能聊天, 人工智能聊天室',
        },
      ],
    };
  },
  components: {
    Nav,
    Footer,
  },
  methods: {
    handleSubmit() {
      this.messageList.push({
        type: 1,
        msg: this.content,
      });
      this.disabled = true;
      axiosAjax("/openai/chat", { content: this.content }).then((res) => {
        if (res.code === 200) {
          this.messageList.push({
            type: 2,
            msg: res.data
          });
          this.saveCatch(this.messageList)
          this.clearCatch()
        } else {
          this.clearCatch()
        }
      });
    },
    clearCatch() {
      this.disabled = false;
      this.content = "";
    },
    saveCatch(msg) {
      window.sessionStorage.setItem("chatHistory", JSON.stringify(msg))
    }
  },
  created: function () { },
  mounted: function () {
    this.messageList = window.sessionStorage.getItem('chatHistory') ? JSON.parse(window.sessionStorage.getItem('chatHistory')) : []
  },
  filter: function () { },
};
</script>

<style lang="less" scoped>
@import url("./../../assets/less/mixin.less");

.message-list {
  margin: 20px;
  background: #f5f5f5;
  padding: 20px;
  border-radius: 5px;

  li {
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    background: #fff;
    padding: 20px;
    border: 5px;

    span {
      background: @main-color;
      color: #fff;
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border-radius: 50%;
    }

    p {
      margin: 0 10px;
      flex: 1;
    }

    &.isRobot {
      flex-direction: row-reverse;
    }
  }
}

.message-list-empty {
  font-size: 30px;
  font-weight: bold;
  color: @main-color;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 100px 0;
}

.message-send {
  margin: 20px;
  background: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  textarea {
    height: 100px;
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  button {
    background: @main-color;
    color: #fff;
    border: 0;
    height: 100px;
    line-height: 100px;
    width: 100px;
    text-align: center;
    border-radius: 5px;
    margin-left: 20px;
    cursor: pointer;

    &.disabled {
      cursor: not-allowed;
    }
  }
}
</style>