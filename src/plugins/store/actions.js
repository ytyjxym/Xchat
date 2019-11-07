export default {
    //登录
    LOGIN({
        commit,
        state
    }, payload) {
        let data = new URLSearchParams();
        data.append("username", payload.username);
        data.append("password", payload.password);
        return axios({
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "/api/login",
            data
        }).then(res => {
            window.localStorage.setItem('xChat__own', JSON.stringify(res.data))
            commit('LOGIN', res.data)
            return res.data;
        });
    },
    //注册
    REG({
        commit,
        state
    }, payload) {
        let data = new FormData();
        data.append("name", payload.name);
        data.append("username", payload.username);
        data.append("password", payload.password);
        data.append("icon", payload.file);
        // console.log(payload);

        return axios({
            method: "post",
            headers: {
                "Content-Type": "multipart/form-data; charset=utf-8"
            },
            url: "/api/reg",
            data
        }).then(res => {
            window.localStorage.setItem('xChat__own', JSON.stringify(res.data))
            commit('REG', res.data)
            return res.data;
            // res.data.err === 0 ?
            //     this.$router.push("/home") :
            //     (this.msg = res.data.msg);
        });
    },
    //设置用户信息
    RESET({
        commit,
        state
    }, payload) {
        let data = new FormData();
        data.append("newName", payload.name);
        data.append("oldPassword", payload.oldPassword);
        data.append("newPassword", payload.newPassword);
        data.append("icon", payload.file);
        // console.log(data);

        return axios({
            url: "/api/setUser",
            method: "post",
            data
        }).then(res => {
            window.localStorage.setItem('xChat__own', JSON.stringify(res.data))
            commit('RESET', res.data)
            return res.data

        });
    },
    //多人聊天更新消息
    MSGLIST_UPDATA({
        commit,
        state
    }, payload) {
        let data = payload;
        data.key = state.msgList.length + 1;
        let newMsgList = [...state.msgList]
        newMsgList.push(data);
        window.localStorage.setItem(
            "xchatMsgHistroy",
            JSON.stringify(newMsgList)
        );
        commit('MSGLIST_UPDATA', newMsgList)
    },
    //多人聊天历史记录
    MSGLIST_INIT({
        commit,
        state
    }) {
        let newMsgList = JSON.parse(window.localStorage.getItem("xchatMsgHistroy")) ?
            JSON.parse(window.localStorage.getItem("xchatMsgHistroy")) : [];
        commit('MSGLIST_UPDATA', newMsgList);
    },
    //点对点聊天更新消息
    P2P_MSG({ commit, state }, payload) {
        if (state.own.data._id === payload.from) {
            let data = payload;
            data.key = state.p2pMsgList.length + 1;
            data.id = payload.to;
            let newP2pMsgList = [...state.p2pMsgList]
            newP2pMsgList.push(data);
            // console.log(payload.to, newP2pMsgList, 'to');
            window.localStorage.setItem(
                payload.to,
                JSON.stringify(newP2pMsgList)
            );
            commit("P2P_MSG", newP2pMsgList)
        } else if (state.own.data._id === payload.to && payload.to !== payload.from) {
            let data = payload;
            data.key = state.p2pMsgList.length + 1;
            data.id = payload.from;
            let newP2pMsgList = [...state.p2pMsgList]
            newP2pMsgList.push(data);
            // console.log(payload.from, newP2pMsgList, 'from');

            window.localStorage.setItem(
                payload.from,
                JSON.stringify(newP2pMsgList)
            );
            commit("P2P_MSG", newP2pMsgList)
        }
    },
    //本地存储获取点对点聊天历史记录
    P2P_MSG_INIT({ commit, state }, payload) {
        console.log(payload, JSON.parse(window.localStorage.getItem(payload)));

        let newP2pMsgList = JSON.parse(window.localStorage.getItem(payload)) ?
            JSON.parse(window.localStorage.getItem(payload)) : [];
        commit('P2P_MSG', newP2pMsgList);
    }

}