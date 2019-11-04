export default {
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
    REG({
        commit,
        state
    }, payload) {
        let data = new FormData();
        data.append("name", payload.name);
        data.append("username", payload.username);
        data.append("password", payload.password);
        data.append("icon", payload.file);
        console.log(payload);

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
    RESET({ commit, state }, payload) {
        let data = new FormData();
        data.append("newName", payload.name);
        data.append("oldPassword", payload.oldPassword);
        data.append("newPassword", payload.newPassword);
        data.append("icon", payload.file);
        console.log(data);

        return axios({
            url: "/api/setUser",
            method: "post",
            data
        }).then(res => {
            window.localStorage.setItem('xChat__own', JSON.stringify(res.data))
            commit('RESET', res.data)
            return res.data

        });
    }
}