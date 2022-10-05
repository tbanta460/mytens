export const setDataUser = (formType, formValue) => {
	return {
		type: "SET_DATA_USER", formType, formValue
	}
}
export const setDataRepos = (formType, formValue) => {
	return {
		type: "SET_DATA_REPOS", formType, formValue
	}
}
export const setValueInput = (formType, formValue) => {
	return {
		type: "SET_VALUE_INPUT", formType, formValue
	}
}