<template>
  <div class="opt">
    <div class="opt__div--userInf" v-if="showUserInf"></div>
    <div class="opt__div--user" @click="showUser">
      <img :src="baseUrl + icon" />
    </div>
    <div class="opt__div--msg" @click="showMsg">
      <router-link to="/home/msg" active-class="opt__div--msg__a--active">信息</router-link>
    </div>
    <div class="opt__div--friend">
      <router-link to="/home/friend" active-class="opt__div--friend__a--active">朋友</router-link>
    </div>
    <div class="opt__div--setting">
      <router-link to="/home/setting" active-class="opt__div--setting__a--active">设置</router-link>
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
      showUserInf: false
    };
  },
  components: {},
  methods: {
    showUser() {},
    showMsg() {}
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
}
.opt .opt__div--user {
  margin: 10px 0 0 10px;
  cursor: pointer;
}
.opt .opt__div--user img {
  width: 50px;
  height: 50px;
}
.opt .opt__div--msg {
}
.opt .opt__div--msg .opt__div--msg__a--active {
  font-size: 18px;
  color: #fff;
}
.opt .opt__div--friend .opt__div--friend__a--active {
  font-size: 18px;
  color: #fff;
}
.opt .opt__div--setting .opt__div--setting__a--active {
  font-size: 18px;
  color: #fff;
}
</style>