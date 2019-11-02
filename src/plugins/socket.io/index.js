import VueSocketIO from 'vue-socket.io';
import Vue from 'vue';
import SocketIO from 'socket.io-client';

// Vue.use(vueSocket, socketio('xxx:80'));        //xxx填后台给的socket地址，端口号根据实际后台端口写
Vue.use(new VueSocketIO({
    debug: true,
    connection: SocketIO('http://localhost:3000'), //options object is Optional
}));