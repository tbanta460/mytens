const initState = {
    valueType:"",
    setData:{
        setDataRepos:[],
        setDetailUser:[],
    }
}

export const SetForm = (state = initState, action) => {
	switch(action.type){
        
		case "SET_VALUE_INPUT":
            return{
                ...state,
                [action.formType]: action.formValue
            }
        case "SET_DATA_REPOS":       
            return{
                ...state,
                setData:{
                    ...state.setData,
                    [action.formType]: action.formValue
                }
            }
        case "SET_DATA_USER":       
            return{
                ...state,
                setData:{
                    ...state.setData,
                    [action.formType]: action.formValue
                }
            }
		default:
		return state
	}
}