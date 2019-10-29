<template>
  <div class="regist">
    <form class="form-signin">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">注册</h1>
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
          type="checkPassword"
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
          <router-link to="/login">登录</router-link>
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="button" @click="reg">注册</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "regist",
  data() {
    return {
      username: "",
      password: "",
      checkPassword: "",
      msg: ""
    };
  },
  components: {},
  methods: {
    reg() {
      let data = new URLSearchParams();
      data.append("username", this.username);
      data.append("password", this.password);
      axios({
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/api/reg",
        data
      }).then(res => {
        res.data.err === 0 ? this.$router.push('/home') : (this.msg = res.data.msg);
      });
    }
  }
};
</script>
<style lang="scss">
.regist form {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 380px;
  height: 540px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 50px 25px 0 25px;
  box-sizing: border-box;
}
</style>