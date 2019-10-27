const initState = {
    profile: {
        q_table_e: [],
        q_table_r: [],
        last_s: '',
        last_e: '',
        last_r: '',
        episode: 0,
        auth: {}
    }
}

const profileReducer = (state = initState, action) => {
    switch(action.type) {
        case 'UPDATE_PROFILE':
            return Object.assign({}, state, {
                profile: action.profile
            })
    }
    return state
}

export default profileReducer