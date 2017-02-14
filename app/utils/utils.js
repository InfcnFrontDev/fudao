import uuid from 'uuid'

export default {
	getAvatarUrl(ID) {
		return 'http://lorempixel.com/68/68/people/' + ID
	},
	uuid(){
		return uuid.v1()
	}
}