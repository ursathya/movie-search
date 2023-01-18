const intialState= {
    data:[],
    error:'',
    profile:{},
    message:'',
    about :{}
}

export default function(state =intialState,action) {

    console.log(state.data,'reducer state');
    console.log(action,'reducer action');

    switch(action.type) {
        case 'SEARCHED_MOVIE':
            let ar=[...state.data,...action.movieList];
            return {
                    ...state,
                    data:ar
                };
            
        case 'USER_LOGIN':
            return(
                {
                    ...state,
                    ...action

                }
            )
        case 'NO_Result':
            return({
            ...state,
            ...action
        })

        case 'EMPTY_SEARCH' :
            return(
                {
                    ...state,
                    data:action.movieList
                }
            )
        case 'GET_SYNOPSES':
                return({
                    ...state,
                    ...action
                }
                )
            default :
                return state
    }
}