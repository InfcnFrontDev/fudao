import * as types from "../actions/types";
const initialState = {
	isLoading: false,
	symptomProblem: {
		list: []
	},
	information: {
		list: []
	},
	dailyLife: {
		list: []
	},
	friendsCircle: {
		list: []
	},
	healthCare: {
		list: []
	},
	offlineService: {
		list: []
	}
};
export default function (state = initialState, {type, payload}) {
	switch (type) {
		case types.SEARCH_ALL_FETCH_LIST:
			return Object.assign({}, state, {
				isLoading: true
			});
		case types.SEARCH_ALL_RECEIVE_LIST:
			return Object.assign({}, state, {
				isLoading: false,
				...payload
			});
		case types.SEARCH_ALL_CLEAR_LIST:
			return Object.assign({}, state, {
				symptomProblem: {
					list: []
				},
				information: {
					list: []
				},
				dailyLife: {
					list: []
				},
				friendsCircle: {
					list: []
				},
				healthCare: {
					list: []
				},
				offlineService: {
					list: []
				}
			});
		case types.SEARCH_SYMPTOM_PROBLEM_FETCH_LIST:
			return Object.assign({}, state, {
				isLoading: true
			});
		case types.SEARCH_SYMPTOM_PROBLEM_RECEIVE_LIST:
			return Object.assign({}, state, {
				isLoading: false,
				symptomProblem: {
					...payload
				}
			});
		case types.SEARCH_SYMPTOM_PROBLEM_CLEAR_LIST:
			return Object.assign({}, state, {
				symptomProblem: {
					list: []
				}
			});
		case types.SEARCH_INFORMATION_FETCH_LIST:
			return Object.assign({}, state, {
				isLoading: true
			});
		case types.SEARCH_INFORMATION_RECEIVE_LIST:
			return Object.assign({}, state, {
				isLoading: false,
				information: {
					...payload
				}
			});
		case types.SEARCH_INFORMATION_CLEAR_LIST:
			return Object.assign({}, state, {
				information: {
					list: []
				}
			});
		default:
			return state;

	}
}
