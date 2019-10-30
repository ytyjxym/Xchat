<template>
  <div class="msg .container">
        <div class="col-3 msg__div--man">
          
        </div>
        <div class="col-9 msg__div--talk">
          
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
      showUserInf: false
    };
  },
  components: {},
  methods: {

  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
  .msg{
    position:absolute;
    left:70px;
    top:0;
    bottom:0;
    right:0;
    border-radius:0 4px 4px 0;
    background:#eee;
    display:flex;
  }
  .msg .msg__div--man{
    background:#ccc;
  }
</style>