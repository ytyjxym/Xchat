<template>
  <div>
    <transition
    enter-active-class='animated bounceIn'
    leave-active-class='animated bounceOut'
    mode="out-in"
    >
      <!-- <div class="home__div--userEnter" v-show="userEnterMsg">{{userEnterMsg}}</div> -->
      <div class="alert alert-light home__div--userEnter" role="alert" v-show="view_userEnter">
        {{alertMsg}}
      </div>
    </transition>
    <div class="home">
      <keep-alive>
        <!-- <Opt v-if="icon" :icon="icon" :name="name" :id="id"></Opt> -->
        <Opt></Opt>
      </keep-alive>

      <!-- <router-view></router-view> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Opt from "../components/Option";
import store from "../plugins/store";
import { mapState } from "vuex";
export default {
  name: "home",
  data() {
    return {

    };
  },
  components: {
    Opt
  },
  computed: mapState(["view_userEnter",'alertMsg']),
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
  box-shadow: 1px 1px 20px;
}
.home__div--userEnter {
  width: 300px;
  // height: 40px;
  // line-height: 40px;
  // padding:0;
  // font-size: 20px;
  // border: 1px solid #eee;
  box-shadow: 0 0 15px #333;
  // border-radius: 5px;
  // background: #fff;
  position: fixed;
  left: 10px;
  top: 10px;
  z-index: 1000;
}
</style>