<template>
  <div class="home">
    <Opt v-if="icon" :icon="icon" :name="name"></Opt>
    <!-- <router-view></router-view> -->
    <keep-alive>
     <router-view></router-view>   
    </keep-alive>
  </div>
</template>

<script>
// @ is an alias to /src
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
  width: 1200px;
  height: 800px;
  background: #fff;
  // border: 1px solid #eee;
  border-radius: 4px;
}
</style>