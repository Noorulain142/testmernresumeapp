
export const CreatePortfolio = (portfolio) => ({
  type: "CREATE_PORTFOLIO",
  payload: portfolio,
});
export const FetchPortfolio = (userCredentials) => ({
  type: "FETCH_PORTFOLIO",
});
