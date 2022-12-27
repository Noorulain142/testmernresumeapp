import { createContext, useReducer } from "react";
import { useEffect } from "react";
import axios from "axios";
import PortfolioReducer from "../reducers/PortfolioReducer";
const INITIAL_STATE = {
  portfolio: [],
  isFetching: null,
  error: false,
};
export const PortfolioContext = createContext(INITIAL_STATE);
export const PortfolioContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PortfolioReducer, INITIAL_STATE);
  useEffect(() => {
    const changestate = async () => {
      try {
        const portfolio = await axios.get(
          "http://localhost:3000/api/portfolio"
        );
        dispatch({ type: "CREATE_PORTFOLIO", payload: portfolio });
      } catch (error) {
        console.log(error);
      }
    };
    changestate();
  }, []);
  return (
    <PortfolioContext.Provider
      value={{
        portfolio: state.portfolio,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
