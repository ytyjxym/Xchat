<template>
  <div class="setting">
    <form class="form-signin">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">修改资料</h1>
      </div>
      <div class="regist__div--userPhoto text-center">
        <label for="regist__div--userPhoto--file">
          <img
            :src="userPhoto ? userPhoto : (baseUrl + own.data.icon)"
            width="60"
            height="60"
            style="border-radius:50%;cursor:pointer"
          />
        </label>
        <input
          type="file"
          id="regist__div--userPhoto--file"
          style="display:none"
          @input="choseUserPhoto"
        />
      </div>
      <div class="form-label-group">
        <label for="inputEmail">昵称修改</label>
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
        <label for="inputOldPassword">旧密码</label>
        <input
          v-model="oldPassword"
          type="password"
          id="inputOldPassword"
          class="form-control"
          placeholder="请输入旧密码"
          required
        />
      </div>
      <div class="form-label-group">
        <label for="inputNewPassword">请输入新密码</label>
        <input
          v-model="newPassword"
          type="password"
          id="inputNewPassword"
          class="form-control"
          placeholder="请再输入一次密码"
          required
        />
      </div>
      <div class="form-label-group">
        <label for="inputCheckNewPassword">请再输入一次新密码</label>
        <input
          v-model="checkNewPassword"
          type="password"
          id="inputCheckNewPassword"
          class="form-control"
          placeholder="请再输入一次密码"
          required
        />
      </div>
      <div class="checkbox mb-3">
        <label>{{msg}}</label>
      </div>
      <button class="btn btn-lg btn-success btn-block" type="button" @click="reset">提交</button>
    </form>
  </div>
</template>
<script>
// @ is an alias to /src
import { mapState } from "vuex";
import store from "../plugins/store";
export default {
  name: "Setting",
  // props: ["friendId", "name", "list"],
  // props: ["oldIcon"],
  data() {
    return {
      name: "",
      username: "",
      oldPassword: "",
      newPassword: "",
      checkNewPassword: "",
      msg: "",
      userPhoto: "",
      file: ""
    };
  },
  components: {},
  computed: mapState(["own"]),
  methods: {
    reset() {
      if (this.newPassword !== this.checkNewPassword) {
        this.msg = "两次密码不一致";
        return;
      }
      this.$store
        .dispatch("RESET", {
          name: this.name,
          oldPassword: this.oldPassword,
          newPassword: this.newPassword,
          file: this.file
        })
        .then(res => {
          this.msg = res.msg;
          if (res.err === 0) {
            this.name = "";
            this.username = "";
            this.oldPassword = "";
            this.newPassword = "";
            this.checkNewPassword = "";
          }
        });

      // let data = new FormData();
      // data.append("newName", this.name);
      // data.append("oldPassword", this.oldPassword);
      // data.append("newPassword", this.newPassword);
      // data.append("icon", this.file);
      // axios({
      //   url: "/api/setUser",
      //   method: "post",
      //   data
      // }).then(res => {
      //   this.msg = res.data.msg;
      //   if (res.data.err === 0) {
      //     setTimeout(() => {
      //       this.$router.go("/home");
      //     }, 500);
      //   }
      // });
    },

    choseUserPhoto(e) {
      this.userPhoto = window.URL.createObjectURL(e.target.files[0]);
      this.file = e.target.files[0];
    }
  },
  beforeRouteEnter(to, from, next) {
    if (store.state.own.err === 0) {
      next();
    } else {
      next("/login");
    }
    // axios({
    //   url: "/api/loginTest"
    // }).then(res => {
    //   // if (res.data.err === 0) {
    //   if (store.state.own.err === 0) {
    //     next();
    //     // next(_this => {
    //     //   _this.name = res.data.data.name;
    //     //   _this.icon = res.data.data.icon;
    //     //   _this.id = res.data.data._id;
    //     // });
    //   } else {
    //     next("/login");
    //   }
    // });
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.setting form {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 450px;
  height: 650px;
  border-radius: 5px;
  padding: 30px 25px 0 25px;
  box-sizing: border-box;
}
</style>