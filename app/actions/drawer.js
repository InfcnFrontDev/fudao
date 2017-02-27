import {OPEN_DRAWER, CLOSE_DRAWER, CHANGE_MATERIAL, CHANGE_PLATFORM} from "../actions/types";

export function openDrawer() {
	return {
		type: OPEN_DRAWER,
	};
}

export function closeDrawer() {
	return {
		type: CLOSE_DRAWER,
	};
}

export function changeMaterial() {
	return {
		type: CHANGE_MATERIAL,
	};
}

export function changePlatform() {
	return {
		type: CHANGE_PLATFORM,
	};
}
