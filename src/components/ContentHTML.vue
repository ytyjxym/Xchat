<template>
  <div class="content .container">
<keep-alive>
    <!-- <component :is="name"></component> -->
    <router-view></router-view>
</keep-alive>
  </div>
</template>
<script>
// @ is an alias to /src
import store from "../plugins/store";
import Setting from "./Setting";
import Msg from "./Msg";
export default {
  name: "contentHTML",
  props: {
    name:{
      type:String,
    }
  },
  data() {
    return {
      friendId: ""
    };
  },
  components: {
    Msg,
    Setting
  },
  methods: {
    // getFriendId(data) {
    //   this.friendId = data;
    // }
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
.content {
  position: absolute;
  left: 70px;
  top: 0;
  bottom: 0;
  right: 0;
  border-radius: 0 4px 4px 0;
  background: #eee;
  display: flex;
}

</style>