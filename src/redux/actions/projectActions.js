import * as actionTypes from '../constants/projectConstants';
import {db} from '../data/db.js';

export const getProjects = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PROJECTS_REQUEST });

    const  data  = db;

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
    const data = db.find(item => item._id === id);
    dispatch({
      type: actionTypes.GET_PROJECT_DETAILS_SUCCESS,
      payload: data,
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
