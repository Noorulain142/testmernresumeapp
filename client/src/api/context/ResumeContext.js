import { createContext, useReducer } from "react";
import ResumeReducer from "../reducers/resumes";
// import AuthReducer from "../reducers/AuthReducer";
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("resume")),
  isFetching: false,
  error: false,
};
export const ResumeContext = createContext(INITIAL_STATE);
export const ResumeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ResumeReducer, INITIAL_STATE);
  return (
    <ResumeContext.Provider
      value={{
        resume: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};
