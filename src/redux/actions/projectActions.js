import * as actionTypes from '../constants/projectConstants';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../config';

export const getProjects = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PROJECTS_REQUEST });

    const q = query(collection(db, 'projects'));

    const querySnapshot = await getDocs(q);
    const docs = querySnapshot.docs;
    const data = docs.map(item => item.data());

    dispatch({
      type: actionTypes.GET_PROJECTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PROJECTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProjectDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PROJECT_DETAILS_REQUEST });

    const q = query(collection(db, 'projects'));

    const querySnapshot = await getDocs(q);
    const docs = querySnapshot.docs;
    const data = docs.map(item => item.data());
    const doc = data.find(item => item._id === id);


    // start
    // const docRef = doc(db, 'projects', id);
    // getDoc(docRef).then(docSnap => {
    //   if (docSnap.exists()) {
    //     console.log('Document data:', docSnap.data());
    //   } else {
    //     console.log('No such document!');
    //   }
    // });
    // end
    dispatch({
      type: actionTypes.GET_PROJECT_DETAILS_SUCCESS,
      payload: doc,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PROJECT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
