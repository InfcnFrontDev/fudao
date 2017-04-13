import * as types from "../actions/types";
import {request, urls} from "../utils/";

//添加聊天记录
export function changeChatLog(messages, chatUser) {
    return (dispatch) => {
        dispatch({
            type: types.MESSAGE_CHAT_LOG,
            source: {
                messages,
                chatUser,
            }
        })
    }
}

//删除聊天记录
export function delChatLog(id, chatUser) {
    return (dispatch) => {
        dispatch({
            type: types.MESSAGE_CHAT_LOG_DELETE,
            source: {
                id,
                chatUser,
            }
        })
    }
}
