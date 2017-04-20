import {observable, runInAction, computed, action, reaction} from "mobx";

class FriendStore {
    @observable MyFriendList = []


    @action
    fetchMyFriendList () {
        request.getJson(urls.apis.FRIEND_GETMYFRIENDLIST)
        .then((result) => {
            if (result.ok) {
                this.MyFriendList = result.obj
            } else {
                tools.showToast('请求出错！')
            }
        });
    }

    @computed
    get isFetching() {
        return this.MyFriendList.length == 0
    }
}

const friendStore = new FriendStore()
export default friendStore