const initState = {
    profile: {
        q_table_e: [],
        q_table_r: [],
        last_s: '',
        last_e: '',
        last_r: '',
        episode: 0
    }
}

const profileReducer = (state = initState, action) => {
    switch(action.type) {
        case 'UPDATE_PROFILE':
            console.log('updated profile!')            
    }
    return state
}

export default profileReducer