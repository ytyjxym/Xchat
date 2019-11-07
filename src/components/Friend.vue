<template>
  <div>
    <!-- v-if="name==='FriendInf'" -->
    <!-- <div class="newFriend">
      <div class="newFriend__div--top">新的朋友</div>
      <div class="newFriend__div--talk__ul__li__div--photo">
        <img src="/imgs/logo.png" width="40" height="40" />
      </div>
      <div class="newFriend__div">
        <div class="newFriend__div--content">你麻痹</div>
      </div>
    </div>-->
    <div class="friend">
      <div class="friend__div--talk">
        <ul>
          <li
            class="clearfix"
            @click="toMultiChat()"
            :key="'multiChat'"
            style="border-bottom:1px solid #bbb"
          >
            <div class="friend__div--talk__ul__li__div--photo">
              <!-- <img :src="baseUrl + item.icon" width="40" height="40" /> -->
              <span
                class="iconfont icon-cooperate"
                style="font-size:30px;color:rgb(250, 173, 20);padding-left:6px;"
              ></span>
            </div>
            <div class="friend__div--talk__ul__li__div--content">
              <div
                class="friend__div--talk__ul__li__div--content__div--name"
                style="line-height:30px;"
              >多人聊天</div>
            </div>
          </li>
          <li class="friend__div--talk__ul__li--normal">
            <span>在线用户</span>
          </li>
          <li
            class="clearfix"
            @click="toSingleChat(item.id)"
            v-for="item of userList"
            v-show='search ? item.name.includes(search) : true'
            :key="item.id"
          >
            <div class="friend__div--talk__ul__li__div--photo">
              <img :src="baseUrl + item.icon" width="40" height="40" />
            </div>
            <div class="friend__div--talk__ul__li__div--content">
              <div class="friend__div--talk__ul__li__div--content__div--name">{{item.name}}</div>
              <div class="friend__div--talk__ul__li__div--content__div--msg"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import { mapState } from 'vuex'
export default {
  name: "friend",
  props: ["name",'search'],
  data() {
    return {};
  },
  components: {},
  computed:mapState(['userList']),
  methods: {
    toMultiChat() {
      this.$store.commit('TO_MULTI_CHAT');
    },
    toSingleChat(id) {   
       
      this.$store.commit('TO_SINGLE_CHAT',id);
      this.$store.dispatch("P2P_MSG_INIT",id);
      // this.$emit("getFriend", Math.random());
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.friend {
  position: relative;
}
.friend .friend__div--talk {
  position: absolute;
  height: 734px;
  overflow: auto;
  top: 0;
  left: 0;
  right: 0;
  // background: #ccc;
}
.friend .friend__div--talk ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.friend .friend__div--talk ul li {
  display: block;
  padding: 15px;
  cursor: pointer;
}
.friend .friend__div--talk ul li:hover {
  background: #aaa;
}
.friend .friend__div--talk ul li .friend__div--talk__ul__li__div--photo {
  float: left;
}
.friend .friend__div--talk ul li .friend__div--talk__ul__li__div--content {
  float: left;
  margin-left: 10px;
}
.friend .friend__div--talk ul li.friend__div--talk__ul__li--normal {
  cursor:auto;
  border-bottom:1px solid #bbb;
  font-size:14px;
  color:#666;
  padding-left:18px;
}
.friend .friend__div--talk ul li.friend__div--talk__ul__li--normal:hover {
  background: #ccc;
}
.friend
  .friend__div--talk
  ul
  li
  .friend__div--talk__ul__li__div--content
  .friend__div--talk__ul__li__div--content__div--name {
  width: 150px;
  font-size: 20px;
  // color: #999;
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.friend
  .friend__div--talk
  ul
  li
  .friend__div--talk__ul__li__div--content
  .friend__div--talk__ul__li__div--content__div--msg {
  width: 150px;
  margin-top: 5px;
  box-sizing: content-box;
  font-size: 14px;
  color: #666;
  line-height: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>