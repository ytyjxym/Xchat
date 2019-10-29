<template>
  <div class="home">
    <Opt v-if="icon" :icon="icon" :name="name"></Opt>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import Msg from "../components/Msg";
import Friend from "../components/Friend";
import Setting from "../components/Setting";
import Opt from "../components/Option";
export default {
  name: "home",
  data() {
    return {
      name: "",
      icon: ""
    };
  },
  components: {
    Opt,
    Msg,
    Friend,
    Setting
  },
  beforeRouteEnter(to, from, next) {
    axios({
      url: "/api/loginTest"
    }).then(res => {
      if (res.data.err === 0) {
        next(_this => {
          _this.name = res.data.data.name;
          _this.icon = res.data.data.icon;
        });
      } else {
        next("/login");
      }
    });
  }
};
</script>
<style lang="scss" scoped>
.home {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 60%;
  height: 80%;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
}
</style>