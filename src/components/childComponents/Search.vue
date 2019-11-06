<template>
  <div class="search .container">
    <div class="search__div--keywords">
      <input type="text" name="keywordInp" v-model="keywords" placeholder="搜索" @input="search" />
      <a href="javascript:;"></a>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "search",
  // props: ["icon", "name"],
  data() {
    return {
      keywords: ""
    };
  },
  // sockets: {
  //   connect: function() {
  //     console.log("socket connected");
  //   },
  //   customEmit: function(data) {
  //     console.log(
  //       'this method was fired by the socket server. eg: io.emit("customEmit", data)'
  //     );
  //   }
  // },
  components: {},
  methods: {
    search() {
      this.$emit("SearchInf", this.keywords);
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.search {
  padding: 20px 15px;
}
.search .search__div--keywords {
  display: flex;
  justify-content: space-between;
}
.search .search__div--keywords a {
  font-size: 20px;
  width: 26px;
  height: 26px;
  color: #000;
  text-decoration: none;
  background: #ccc;
  padding: 0 10px;
  border-radius: 5px;
  position: relative;
}
.search .search__div--keywords a:after {
  content: "";
  position: absolute;
  height: 60%;
  width: 1px;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  background: #222;
}
.search .search__div--keywords a:before {
  content: "";
  position: absolute;
  height: 1px;
  width: 60%;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  background: #222;
}
.search .search__div--keywords input {
  border: 0;
  border-radius: 4px;
  flex: 0.9;
  padding-left: 15px;
  background-color: #ccc;
}
.search .search__div--keywords input:focus {
  border: 1x solid #eee;
  border-radius: 4px;
  background-color: #fff;
}
</style>