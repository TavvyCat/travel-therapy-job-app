export const SET_JOBS = "SET_JOBS";

export const setJobs = () => {
  return async (dispatch) => {
    dispatch({ type: SET_JOBS });
  };
};
