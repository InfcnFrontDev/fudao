import * as types from "../actions/types";

const initialState = {
    chatLog: {},
};
export default function (state = initialState, {type, source}) {
    let chatLog = state.chatLog;
    switch (type) {
        case types.MESSAGE_CHAT_LOG:
            if (chatLog[source.chatUser]) {
                chatLog[source.chatUser] = source.messages.concat(chatLog[source.chatUser]);
            } else {
                chatLog[source.chatUser] = [];
                chatLog[source.chatUser][0] = source.messages[0];
            }
            return Object.assign({}, state, {
                chatLog
            });
        // case types.MESSAGE_CHAT_LOG_DELETE:
        //     for(let i=0;i<chatLog[source.chatUser].length;i++){
        //         if(chatLog[source.chatUser][i].id==source.id){
        //             chatLog[source.chatUser].splice(i,1);
        //             break;
        //         }
        //     }
        //     return Object.assign({}, state, {
        //         chatLog
        //     });
        default:
            return state;
    }
}
