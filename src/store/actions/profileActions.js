export const updateProfile = (profile) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        dispatch({type: 'UPDATE_PROFILE', profile})
    }
}