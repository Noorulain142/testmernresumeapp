const PortfolioReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_PORTFOLIO":
      return {
        portfolio: null,
        isFetching: false,
        error: false,
      };
    case "FETCH_PORTFOLIO":
      return {
        portfolio: action.payload,
        isFetching: false,
        error: false,
      };
    default:
      return state;
  }
};
export default PortfolioReducer;
