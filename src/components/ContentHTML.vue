<template>
  <div class="content .container">
    <div class="col-3 content__div--left">
      <div class="content__div--left--top">
        <Search></Search>
      </div>
      <div class="content__div--left--bottom">
        <Friend></Friend>
      </div>
    </div>
    <div class="col-9 content__div--right">
      <component :is="name" ></component>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Friend from './Friend';
import Search from './childComponents/Search';
import Msg from './Msg';
export default {
  name: "contentHTML",
  props: ["name"],
  data() {
    return {
      showUserInf: false
    };
  },
  components: {
    Search,Msg,Friend
  },
  methods: {},
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
.content .content__div--left {
  background: #ccc;
  padding:0;
}
.content .content__div--right {
  padding:0;
}
.content__div--left--top{
  background:#ddd
}
</style>