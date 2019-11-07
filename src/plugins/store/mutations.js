export default {
    LOGIN(state, payload) {
        state.own = payload
    },
    REG(state, payload) {
        state.own = payload
    },
    RESET(state, payload) {
        state.own = payload
    },
    USERENTERSHOW(state, payload) {
        state.view_userEnter = true;
        state.alertMsg = payload;
    },
    USERENTERHIDDEN(state) {
        state.view_userEnter = false;
    },
    TO_MULTI_CHAT(state) {
        state.multi = true;
    },
    TO_SINGLE_CHAT(state, payload) {
        state.multi = false;
        state.single = payload;
    },
    USERLIST_UPDATE(state, payload) {
        state.userList = payload;
    },
    MSGLIST_UPDATA(state, payload) {
        state.msgList = payload;
    },
    P2P_MSG(state, payload) {
        state.p2pMsgList = payload;
    }
}