export const updateProfile = (profile) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore()

        firestore.collection('profiles').doc(profile.uid).update({
            
        })


        dispatch({type: 'UPDATE_PROFILE', profile})
    }
}