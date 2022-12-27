import * as api from "../index";
export const getResume = () => async (dispatch) => {
  try {
    const { data } = await api.fetchResume();
    dispatch({ type: "FETCH_ALL", payload:data });
  } catch (error) {
    
    console.log(error.message)
  }
};

export const addResume = (resume) => async (dispatch) => {
  try {
    const { data } = await api.addResume(resume);
    dispatch({ type: "ADD", payload:data });
  } catch (error) {
    console.log(error.message)
  }
}

