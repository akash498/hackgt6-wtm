export const updateProfile = (profile) => {
    return (dispatch, getState) => {
        dispatch({type: 'UPDATE_PROFILE', profile: profile})
    }
}