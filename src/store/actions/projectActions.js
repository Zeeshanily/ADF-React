export const createProject = (project) => {
    return (dispatch, getState, {getFirestore}) => {
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      firestore.collection('projects').add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
      });
    }
};
  
export const updateProject = (project) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    const title = project.title;
    //const cityRef = firestore.collection('projects').where('title', '=', 'new bind') ;

    // Set the 'capital' field of the city
   // const res = await cityRef.update({capital: true});
    // console.log("**********************");
    // console.log(cityRef)
    // console.log("**********************");
    firestore.collection('projects').where('title', '=', 'new bind').update({
      title: project.title,
      content: project.content,
      // authorFirstName: profile.firstName,
      // authorLastName: profile.lastName,
      // authorId: authorId,
      // createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'UPDATE_PROJECT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'UPDATE_PROJECT_ERROR' }, err);
    });
  }
};