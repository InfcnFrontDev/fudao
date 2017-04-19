import {observable, runInAction, computed, action, reaction} from "mobx";

class ArticleColumnStore {
	@observable articleColumnList = []
	@observable errorMsg = ''
	@observable isRefreshing = false

	@action
	fetchArticleColumnList = async() => {
		try {
			if (this.isRefreshing) this.page = 1

			const result = await this._fetchArticleColumnList()
			runInAction(() => {
				this.isRefreshing = false
				this.errorMsg = ''
				this.articleColumnList.replace(result)
			})
		} catch (error) {
			this.errorMsg = error
		}
	}

	@computed
	get isFetching() {
		return this.articleColumnList.length == 0 && this.errorMsg == ''
	}

	_fetchArticleColumnList() {
		return new Promise((resolve, reject) => {
			request.getJson(urls.apis.ARTICLE_GETARTICLECOLUMNLIST)
				.then(((result) => {
					console.log(result)
					if (result.ok) {
						resolve(result.obj)
					} else {
						reject('请求出错！')
					}
				}), (error) => {
					console.log(`Fetch evaluating list error: ${error}`)
					reject('网络出错！')
				});
		})
	}
}
const articleColumnStore = new ArticleColumnStore()
export default articleColumnStore