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
    }
}