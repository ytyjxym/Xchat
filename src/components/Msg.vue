<template>
  <div class="msg .container">
    <!-- <transition> -->
    <!-- <div class="home__div--userEnter" v-show="userEnterMsg">{{userEnterMsg}}</div> -->
    <!-- </transition> -->
    <div class="col-3 content__div--left">
      <div class="content__div--left--top">
        <Search @SearchInf="getSearchInf"></Search>
      </div>
      <div class="content__div--left--bottom">
        <Friend :name="own.data.name" :userList="userList" :search="search"></Friend>
      </div>
    </div>
    <div class="col-9 content__div--right">
      <div class="msg__div--head">
        <h3 v-if="multi">在线人数（{{userList.length}}人）</h3>
        <h3 v-else>{{userList.find(user => user.id === single).name}}</h3>
      </div>
      <div class="msg__div--talk" style="overflow:auto" ref="setScroll">
        <ul v-if="multi">
        <!-- <ul> -->
          <li class="clearfix" v-for="item of msgList" :key="item.key">
            <div
              :class="item.id === own.data._id ? 'msg__div--talk__ul__li__div--photo-right' :'msg__div--talk__ul__li__div--photo'"
            >
              <img :src="baseUrl + item.icon" width="40" height="40" />
            </div>
            <div
              :class="item.id === own.data._id ? 'msg__div--talk__ul__li__div--content-right' :'msg__div--talk__ul__li__div--content'"
            >
              <div
                :class="item.id === own.data._id ? 'msg__div--talk__ul__li__div--content__div--name-right' :'msg__div--talk__ul__li__div--content__div--name'"
              >{{item.name}}</div>
              <div
                :class="item.id === own.data._id ? 'msg__div--talk__ul__li__div--content__div--msg-right' :'msg__div--talk__ul__li__div--content__div--msg'"
              >{{item.msg}}</div>
            </div>
          </li>
        </ul>
        <ul v-else>
          <li class="clearfix" v-for="item of p2pMsgList" :key="item.key">
            <div
              :class="item.id === own.data._id ? 'msg__div--talk__ul__li__div--photo-right' :'msg__div--talk__ul__li__div--photo'"
            >
              <img :src="baseUrl + item.icon" width="40" height="40" />
            </div>
            <div
              :class="item.id === own.data._id ? 'msg__div--talk__ul__li__div--content-right' :'msg__div--talk__ul__li__div--content'"
            >
              <div
                :class="item.id === own.data._id ? 'msg__div--talk__ul__li__div--content__div--name-right' :'msg__div--talk__ul__li__div--content__div--name'"
              >{{item.name}}</div>
              <div
                :class="item.id === own.data._id ? 'msg__div--talk__ul__li__div--content__div--msg-right' :'msg__div--talk__ul__li__div--content__div--msg'"
              >{{item.msg}}</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="msg__div--send">
        <textarea
          class="msg__div--send__textarea"
          v-model="sendMsg"
          @keydown.ctrl.enter.exact="sendToFriend"
        ></textarea>
        <div class="msg__div--send--sendBtn" @click="sendToFriend">发送</div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import { mapState } from "vuex";
import store from "../plugins/store";
import Friend from "./Friend";
import Search from "./childComponents/Search";
export default {
  name: "msg",
  // props: ["friendId", "name", "icon", "id"],
  data() {
    return {
      sendMsg: "",
      search: ""
      // msgList: [],
      // userList: []
    };
  },
  components: {
    Search,
    Friend
  },
  // computed: mapState(["own",'msgList','userList']),
  computed: mapState([
    "own",
    "multi",
    "selectFriend",
    "userEnterMsg",
    "userList",
    "single",
    "msgList",
    "p2pMsgList"
  ]),

  sockets: {
    connect: function(data) {
      console.log("已连接聊天室");
    },
    msg(data) {
      this.$store.dispatch("MSGLIST_UPDATA", data);
      // data.key = this.msgList.length + 1;
      // this.msgList.push(data);
      // window.localStorage.setItem(
      //   "xchatMsgHistroy",
      //   JSON.stringify(this.msgList)
      // );
      setTimeout(() => {
        this.$refs.setScroll.scrollTop =
          this.$refs.setScroll.scrollHeight - this.$refs.setScroll.clientHeight;
      }, 0);
    },
    user(userList) {
      this.$store.commit("USERLIST_UPDATE", userList);
      // this.userList = userList;
    },
    disconnect() {
      this.$socket.emit("delUser", this.own.data._id);
    },
    userLogout(data) {
      this.$store.commit("USERENTERSHOW", data);
      setTimeout(() => {
        this.$store.commit("USERENTERHIDDEN");
      }, 1000);
    },
    userEnter(data) {
      this.$store.commit("USERENTERSHOW", data);
      setTimeout(() => {
        this.$store.commit("USERENTERHIDDEN");
      }, 1000);
    },
    p2pMsg(data){    
      this.$store.dispatch('P2P_MSG',data);
    }
  },
  methods: {
    getSearchInf(data) {
      this.search = data;
    },
    sendToFriend(e) {
      // this.$socket.on("news", data => {
      //   console.log(data);
      // });
      // console.log(e.target.parentNode.parentNode.children[1].scrollTop);
      // console.log(e.target.parentNode.parentNode.children[1].scrollHeight);
      // console.log(e.target.parentNode.parentNode.children[1].clientHeight);
      // console.log(e.target.parentNode.parentNode.children[1].children[0].clientHeight);

      if (this.sendMsg) {
        if (this.multi) {
          this.$socket.emit("msg", {
            msg: this.sendMsg.trim(),
            name: this.own.data.name,
            icon: this.own.data.icon,
            id: this.own.data._id
          });
        }else{
          this.$socket.emit("p2pMsg", {
            msg: this.sendMsg.trim(),
            name: this.own.data.name,
            icon: this.own.data.icon,
            from: this.own.data._id,
            to:this.single
          });
        }
      } else {
        return false;
      }
      this.sendMsg = "";
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
  activated() {
    this.$store.dispatch("MSGLIST_INIT");

    this.$socket.emit("userLogin", {
      name: this.own.data.name,
      icon: this.own.data.icon,
      id: this.own.data._id
    });
  },
  created() {
    this.$store.dispatch("MSGLIST_INIT");
    // this.msgList = JSON.parse(window.localStorage.getItem("xchatMsgHistroy"))
    //   ? JSON.parse(window.localStorage.getItem("xchatMsgHistroy"))
    //   : [];
    this.$socket.emit("userLogin", {
      name: this.own.data.name,
      icon: this.own.data.icon,
      id: this.own.data._id
    });
  }
};
</script>
<style lang="scss" scoped>
.home__div--userEnter {
  width: 200px;
  height: 25px;
  line-height: 25px;
  font-size: 16px;
  border: 1px solid #eee;
  box-shadow: 0 0 5px;
  border-radius: 5px;
  background: #fff;
  position: fixed;
  left: 10%;
  top: 5%;
}
.content__div--left {
  background: #ccc;
  padding: 0;
}
.content__div--right {
  padding: 0;
}
.content__div--left--top {
  background: #ddd;
}
.msg {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  border-radius: 0 4px 4px 0;
  background: #eee;
  display: flex;
}
.msg .msg__div--head {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 66px;
  border-bottom: 1px solid #cfcfcf;
  box-sizing: content-box;
  // background: #ccc;
}
.msg .msg__div--head h3 {
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
  font-size: 22px;
}
.msg .msg__div--talk {
  position: absolute;
  top: 66px;
  left: 0;
  right: 0;
  height: 494px;
  // background: #ccc;
}
.msg .msg__div--talk ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.msg .msg__div--talk ul li {
  display: block;
  padding: 15px;
}
.msg .msg__div--talk ul li .msg__div--talk__ul__li__div--photo {
  float: left;
}
.msg .msg__div--talk ul li .msg__div--talk__ul__li__div--content {
  float: left;
  margin-left: 10px;
}
.msg
  .msg__div--talk
  ul
  li
  .msg__div--talk__ul__li__div--content
  .msg__div--talk__ul__li__div--content__div--name {
  font-size: 16px;
  color: #999;
  line-height: 16px;
}
.msg
  .msg__div--talk
  ul
  li
  .msg__div--talk__ul__li__div--content
  .msg__div--talk__ul__li__div--content__div--msg {
  background: #fff;
  // width: 200px;
  border-radius: 5px;
  min-height: 25px;
  padding: 10px;
  margin-top: 10px;
  box-sizing: content-box;
}

//自己消息Style
.msg .msg__div--talk ul li .msg__div--talk__ul__li__div--photo-right {
  float: right;
  margin-left: 10px;
}
.msg .msg__div--talk ul li .msg__div--talk__ul__li__div--content-right {
  float: right;
  margin-left: 10px;
}
.msg
  .msg__div--talk
  ul
  li
  .msg__div--talk__ul__li__div--content-right
  .msg__div--talk__ul__li__div--content__div--name-right {
  font-size: 16px;
  color: #999;
  line-height: 16px;
  text-align: right;
}
.msg
  .msg__div--talk
  ul
  li
  .msg__div--talk__ul__li__div--content-right
  .msg__div--talk__ul__li__div--content__div--msg-right {
  background: #0ed30e;
  // width: 200px;
  border-radius: 5px;
  min-height: 25px;
  padding: 10px;
  margin-top: 10px;
  box-sizing: content-box;
}

//
.msg .msg__div--send {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30%;
  // background: #ccc;
}
.msg .msg__div--send .msg__div--send__textarea {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  background: #eee;
  border-top: 1px solid #cfcfcf;
  resize: none;
}
.msg .msg__div--send .msg__div--send__textarea:focus {
  background: #fff;
}
.msg .msg__div--send .msg__div--send--sendBtn {
  position: absolute;
  right: 5%;
  bottom: 10%;
  z-index: 100;
  color: #000;
  cursor: pointer;
  padding: 5px 15px;
  line-height: 22px;
  font-size: 18px;
  background: #cfcfcf;
}
.msg .msg__div--send .msg__div--send--sendBtn:hover {
  background: rgb(13, 165, 13);
  color: #fff;
}
</style>
