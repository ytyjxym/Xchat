<template>
  <div class="opt">
    <div class="opt__div--userInf" v-if="showUserInf"></div>
    <div class="opt__div--user" @click="showUser">
      <img :src="baseUrl + icon" />
    </div>
    <div class="opt__div--msg text-center" @click="choseMsg">
      <router-link
        title="信息"
        :to="{path:'/home/contentHTML',query:{name:'Msg'}}"
        :active-class="select==='Msg' ?'opt__div--msg__a--active':''"
        class="iconfont icon-icon_replieslist"
      ></router-link>
    </div>
    <div class="opt__div--friend text-center" @click="choseFriend">
      <router-link
        title="朋友"
        :to="{path:'/home/contentHTML',query:{name:'Friend'}}"
        :active-class="select==='Friend' ?'opt__div--friend__a--active':''"
        class="iconfont icon-icon_meeting_fill"
      ></router-link>
    </div>
    <div class="opt__div--logout text-center">
      <a
        title="退出登录"
        active-class="opt__div--logout__a--active"
        class="iconfont icon-icon_roundclose_fill"
        @click="logout"
      ></a>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "opt",
  props: ["icon", "name"],
  data() {
    return {
      showUserInf: false,
      select: "Msg"
    };
  },
  components: {},
  methods: {
    showUser() {},
    choseMsg() {
      this.select = "Msg";
    },
    choseFriend() {
      this.select = "Friend";
    },
    logout() {
      axios({
        url: "api/logout"
      }).then(res => {
        this.router.go("/home");
      });
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.opt {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 70px;
  background: #333;
  border-radius: 4px 0 0 4px;
}
.opt .opt__div--user {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
}
.opt .opt__div--msg {
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
}
.opt .opt__div--friend {
  position: absolute;
  top: 130px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
}
.opt .opt__div--user img {
  width: 50px;
  height: 50px;
}
.opt .opt__div--logout {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
.opt .opt__div--msg a {
  font-size: 30px;
  color: #aaa;
  text-decoration: none;
}
.opt .opt__div--friend a {
  font-size: 30px;
  color: #aaa;
  text-decoration: none;
}
.opt .opt__div--logout a {
  font-size: 30px;
  color: rgb(209, 46, 46);
  text-decoration: none;
  cursor: pointer;
}
.opt .opt__div--msg .opt__div--msg__a--active {
  font-size: 30px;
  color: rgb(13, 165, 13);
}
.opt .opt__div--friend .opt__div--friend__a--active {
  font-size: 30px;
  color: rgb(13, 165, 13);
}
</style>