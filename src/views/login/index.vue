<template>
  <div class="login-container">
    <el-form
      :model="loginForm"
      :rules="loginRules"
      ref="ruleForm"
      class="demo-ruleForm"
    >
      <div class="login-title">登录系统</div>
      <el-form-item prop="username">
        <i class="el-icon-user-solid icon"></i>
        <el-input
          type="text"
          v-model="loginForm.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <i class="el-icon-lock icon"></i>
        <el-input
          type="password"
          v-model="loginForm.password"
          autocomplete="off"
        ></el-input>
        <i
          style="
            position: absolute;
            right: 16px;
            top: 50%;
            transform: translateY(-50%);
            color: rgba(0, 0, 0, 0.7);
          "
          class="el-icon-view"
        ></i>
      </el-form-item>

      <el-button
        style="width: 100%; margin-bottom: 22px"
        :loading="loading"
        type="primary"
        @click="handleLogin"
        >登 录</el-button
      >

      <div class="login-tip">
        <div class="tip-text">
          <div class="tip">
            <span>用户名:admin</span>
            <span>密码:any</span>
          </div>
          <div class="tip">
            <span>用户名:editor</span>
            <span>密码:any</span>
          </div>
        </div>
        <el-button style="height: 40px" type="primary">第三方登录</el-button>
      </div>
    </el-form>
  </div>
</template>
<script>
import { validUsername } from "@/utils/validata.js";
// import axios from "axios";
// import Vue from "vue";
// Vue.prototype.$axios = axios;
// axios.defaults.baseURL = "http://127.0.0.1:3000"; //配置接口地址
// axios.defaults.timeout = 5000;
import { login, getInfo } from "@/api/user.js";
export default {
  data() {
    var validateUsername = (rule, value, callback) => {
      if (validUsername(value)) {
        callback();
      } else {
        callback(new Error("请输入正确的用户名!"));
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("密码长度不正确!"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "admin",
        password: "111111",
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername },
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword },
        ],
      },
      loading: false, //登录
      passwordType: "password",
    };
  },
  methods: {
    handleLogin() {
      //点击登录
      // login(this.loginForm).then((res) => {
      //   console.log(res);
      // });
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$store.dispatch("user/login", this.loginForm).then((res) => {
            console.log("请求成功");
            getInfo("admin-token").then((res) => {
              console.log(res);
            });
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style scoped lang='less'>
.login-container {
  width: 100%;
  height: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
  color: #fff;
}
.el-form {
  position: relative;
  width: 520px;
  max-width: 100%;
  padding: 160px 35px 0;
  margin: 0 auto;
  overflow: hidden;
}

.login-tip {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  align-items: center;
}
.tip {
  margin-top: 10px;
}
.tip span:first-child {
  margin-right: 16px;
}
.login-title {
  margin-bottom: 40px;
  font-size: 20px;
}
.el-form-item {
  background: #fff;
  border-radius: 4px;
}
.el-form-item .el-input {
  width: 85%;
}
.el-form-item .el-input /deep/ input {
  border: none;
  outline: none;
}
.icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(0, 0, 0, 0.7);
  font-size: 14px;
}
</style>