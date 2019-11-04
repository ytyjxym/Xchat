<template>
  <div class="regist">
    <form class="form-signin regist__form">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">注册</h1>
      </div>
      <div class="regist__div--userPhoto text-center">
        <label for="regist__div--userPhoto--file">
          <img :src="userPhoto" width="60" height="60" v-show="userPhoto" style="border-radius:50%" />
          <span v-show="!userPhoto" style="cursor:pointer">点击上传头像</span>
        </label>
        <input
          type="file"
          id="regist__div--userPhoto--file"
          style="display:none"
          @input="choseUserPhoto"
        />
      </div>
      <div class="form-label-group">
        <label for="inputEmail">昵称</label>
        <input
          v-model="name"
          type="name"
          id="inputName"
          class="form-control"
          placeholder="请输入昵称"
          required
          autofocus
        />
      </div>
      <div class="form-label-group">
        <label for="inputEmail">用户名</label>
        <input
          v-model="username"
          type="username"
          id="inputUsername"
          class="form-control"
          placeholder="请输入用户名"
          required
          autofocus
        />
      </div>

      <div class="form-label-group">
        <label for="inputPassword">密码</label>
        <input
          v-model="password"
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="请输入密码"
          required
        />
      </div>

      <div class="form-label-group">
        <label for="inputCheckPassword">请再输入一次密码</label>
        <input
          v-model="checkPassword"
          type="password"
          id="inputCheckPassword"
          class="form-control"
          placeholder="请再输入一次密码"
          required
        />
      </div>
      <div class="checkbox mb-3">
        <label>{{msg}}</label>
      </div>

      <div class="checkbox mb-3">
        <label>
          <router-link to="/login" style="color:rgb(13, 165, 13)">登录</router-link>
        </label>
      </div>
      <button class="btn btn-lg btn-success btn-block" type="button" @click="reg">注册</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import fs from "fs";
export default {
  name: "regist",
  data() {
    return {
      name: "",
      username: "",
      password: "",
      checkPassword: "",
      msg: "",
      userPhoto: "",
      file: ""
    };
  },
  components: {},
  methods: {
    choseUserPhoto(e) {
      this.userPhoto = window.URL.createObjectURL(e.target.files[0]);
      this.file = e.target.files[0];
    },
    reg() {
      if (this.name.trim() === "") {
        this.msg = "请输入昵称";
        return;
      }
      if (this.username.trim() === "") {
        this.msg = "请输入用户名";
        return;
      }
      if (this.password.trim() === "") {
        this.msg = "请输入密码";
        return;
      }
      if (this.password !== this.checkPassword) {
        this.msg = "两次密码不一致";
        return;
      }
      this.$store.dispatch("REG", {
          name: this.name,
          username: this.username,
          password: this.password,
          file: this.file
        })
        .then(res => {
          res.err === 0 ? this.$router.push("/home") : (this.msg = res.msg);
        });
      // let data = new FormData();
      // data.append("name", this.name);
      // data.append("username", this.username);
      // data.append("password", this.password);
      // data.append("icon", this.file);
      // axios({
      //   method: "post",
      //   headers: {
      //     "Content-Type": "multipart/form-data; charset=utf-8"
      //   },
      //   url: "/api/reg",
      //   data
      // }).then(res => {
      //   res.data.err === 0
      //     ? this.$router.push("/home")
      //     : (this.msg = res.data.msg);
      // });
    }
  }
};
</script>
<style lang="scss">
.regist .regist__form {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 450px;
  height: 650px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 30px 25px 0 25px;
  box-sizing: border-box;
  box-shadow: 1px 1px 20px;
}
</style>