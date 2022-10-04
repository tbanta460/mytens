export const setSearchValue = (formType, formValue) => {
	return {
		type: "SET_FORM_SEARCH", formType, formValue
	}
}
export const setDataSearch = (formType, formValue) => {
	return {
		type: "SET_DATA_SEARCH", formType, formValue
	}
}
export const setDataDetailsMovie = (formType, formValue) => {
	return {
		type: "SET_DATA_DETAILS_MOVIE", formType, formValue
	}
}
export const setMainData = (formType, formValue) => {
	return {
		type: "SET_DATA", formType, formValue
	}
}
export const setLoadingData = (formType, formValue) => {
	return {
		type: "SET_LOADING", formType, formValue
	}
}