<template>
  <div class="msg .container">
    <div class="msg__div--head">
      <h3>123</h3>
    </div>
    <div class="msg__div--talk">
      <ul>
        <li class='clearfix'>
          <div class="msg__div--talk__ul__li__div--photo">
            <img src="/imgs/logo.png" width='40' height='40'>
          </div>
          <div class="msg__div--talk__ul__li__div--content">
            <div class="msg__div--talk__ul__li__div--content__div--name">
              Vue
            </div>
            <div class="msg__div--talk__ul__li__div--content__div--msg">
              你麻痹
            </div>
          </div>
        </li>
                <li class='clearfix'>
          <div class="msg__div--talk__ul__li__div--photo">
            <img src="/imgs/logo.png" width='40' height='40'>
          </div>
          <div class="msg__div--talk__ul__li__div--content">
            <div class="msg__div--talk__ul__li__div--content__div--name">
              Vue
            </div>
            <div class="msg__div--talk__ul__li__div--content__div--msg">
              你麻痹
            </div>
          </div>
        </li>
                <li class='clearfix'>
          <div class="msg__div--talk__ul__li__div--photo">
            <img src="/imgs/logo.png" width='40' height='40'>
          </div>
          <div class="msg__div--talk__ul__li__div--content">
            <div class="msg__div--talk__ul__li__div--content__div--name">
              Vue
            </div>
            <div class="msg__div--talk__ul__li__div--content__div--msg">
              你麻痹
            </div>
          </div>
        </li>
                <li class='clearfix'>
          <div class="msg__div--talk__ul__li__div--photo">
            <img src="/imgs/logo.png" width='40' height='40'>
          </div>
          <div class="msg__div--talk__ul__li__div--content">
            <div class="msg__div--talk__ul__li__div--content__div--name">
              Vue
            </div>
            <div class="msg__div--talk__ul__li__div--content__div--msg">
              <p>你麻痹asdasdasdasdasdasdasdsad</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="msg__div--send">
      <textarea class="msg__div--send__textarea" v-model="sendMsg"></textarea>
      <div class="msg__div--send--sendBtn" @click='sendToFriend'>发送(S)</div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "msg",
  // props: ["icon", "name"],
  data() {
    return {
      showUserInf: false,
      sendMsg: "",
      list:[]
    };
  },
  components: {},
  methods: {
    sendToFriend(){
      axios({
        url:'api/send',
        params:{
          friendName:'',
          content:this.sendMsg
        }
      })
      .then(res=>{
        console.log(res);
        
      })
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
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
  // background: #ccc;
}
.msg .msg__div--talk ul {
  list-style: none;
  margin:0;
  padding:0;
}
.msg .msg__div--talk ul li {
  display:block;
  padding:15px
}
.msg .msg__div--talk ul li .msg__div--talk__ul__li__div--photo{
  float:left;
}
.msg .msg__div--talk ul li .msg__div--talk__ul__li__div--content{
  float:left;
  margin-left:10px;
}
.msg .msg__div--talk ul li .msg__div--talk__ul__li__div--content .msg__div--talk__ul__li__div--content__div--name{
 font-size:16px;
 color:#999;
 line-height: 16px;
}
.msg .msg__div--talk ul li .msg__div--talk__ul__li__div--content .msg__div--talk__ul__li__div--content__div--msg{
  background:#fff;
  width:200px;
  border-radius: 5px;
  min-height: 25px;
  padding:10px;
  margin-top:10px;
  box-sizing: content-box;
}

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
  padding: 3px 8px;
  line-height: 20px;
  font-size: 16px;
  background: #cfcfcf;
}
.msg .msg__div--send .msg__div--send--sendBtn:hover {
  background: rgb(13, 165, 13);
  color: #fff;
}
</style>
