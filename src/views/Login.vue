<template>
  <div class="login">
    <form class="form-signin login__form">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">登录</h1>
      </div>

      <div class="form-label-group">
        <label for="inputUsername">用户名</label>
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
      <div class="checkbox mb-3">
        <label>{{msg}}</label>
      </div>

      <div class="checkbox mb-3">
        <label>
          <router-link to="/regist" style="color:rgb(13, 165, 13)">注册</router-link>
        </label>
      </div>
      <button class="btn btn-outline-success btn-block" type="button" @click="login">登录</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapMutations, mapGetters, mapState } from "vuex";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      msg: ""
    };
  },
  components: {},
  methods: {
    login() {
      this.$store
        .dispatch("LOGIN", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          res.err === 0 ? this.$router.push("/home") : (this.msg = res.msg);
        });
    }
  },
  beforeRouteEnter(to, from, next) {
    axios({
      url: "/api/loginTest"
    }).then(res => {
      if (res.data.err === 0) {
        next("/home");
      } else {
        next();
      }
    });
  }
};
</script>
<style lang="scss">
.login .login__form {
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