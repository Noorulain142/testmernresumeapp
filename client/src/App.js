import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AddResume from "./components/Resume/Add";
import ShowResume from "./components/Resume/Show";
// import UpdateResume from "./components/Resume/Update";
import Portfolio from "./components/Portfolio/Portfolio";
import ShowPortfolio from "./components/Portfolio/Show";

function App() {
  const user = localStorage.getItem("user");

  return (
    <Routes>
      <Route path="/" exact element={<Login />} />
      {/* {user && <Route path="/" exact element={<Main />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" exact element={<Navigate replace to="/login" />} />
      <Route path="/add" exact element={<AddResume />} />
      <Route path="/:resumeId/show" exact element={<ShowResume />} /> */}

      {/* <Route path="/:resumeId/update" exact element={<UpdateResume />} /> */}
      {/* <Route path="/portfolio" exact element={<Portfolio />} /> */}
      {/* <Route path="/create" exact element={<CreatePortfolio />} /> */}
      {/* <Route
        path="/:portfolioId/portfolioShow"
        exact
        element={<ShowPortfolio />}
      /> */}
    </Routes>
  );
}

export default App;
