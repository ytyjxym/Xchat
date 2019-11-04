<template>
  <div class="opt">
    <div class="opt__div--userInf" v-if="showUserInf"></div>
    <div class="opt__div--user" @click="showUser">
      <img :src="baseUrl + own.data.icon" style="border-radius:50%;" />
    </div>
    <div class="opt__div--msg text-center" @click="choseMsg">
      <router-link
        title="信息"
        :active-class="select==='Msg' ?'opt__div--msg__a--active':''"
        :to="{path:'/home/contentHTML/Msg',parmas:{name:own.data.name,icon:own.data.icon,id:own.data._id}}"
        class="iconfont icon-icon_replieslist"
        ref="default"
      ></router-link>
    </div>
    <div class="opt__div--friend text-center" @click="choseSetting">
      <router-link
        title="设置"
        :active-class="select==='Setting' ?'opt__div--friend__a--active':''"
        :to="{path:'/home/contentHTML/Setting'}"
        class="iconfont icon-icon_setting_fill"
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
import {mapState} from 'vuex'

export default {
  name: "opt",
  // props: ["icon", "name", "id"],
  data() {
    return {
      showUserInf: false,
      select: ""
    };
  },
  
  components: {},
  computed:mapState(['own']),
  methods: {
    showUser() {
      this.showUserInf = !this.showUserInf;
    },
    choseMsg() {
      this.select = "Msg";
    },
    choseSetting() {
      this.select = "Setting";
    },
    logout() {
      axios({
        url: "api/logout"
      }).then(res => {       
        window.localStorage.removeItem('xChat__own')
        this.$router.push("/login");
      });
    }
  },
  mounted() {
    this.$refs.default.$el.click();
  }
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
// .opt .opt__div--msg .opt__div--msg__a--notactive {
//   font-size: 30px;
//   color: #aaa;
// }
.opt .opt__div--friend .opt__div--friend__a--active {
  font-size: 30px;
  color: rgb(13, 165, 13);
}
</style>