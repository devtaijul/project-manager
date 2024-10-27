import { useReducer, useState } from "react";
import LandingPage from "./components/LandingPage";
import { ToastContainer } from "react-toastify";
import { ProjectContext, SearchContext } from "./context";
import { initialState, projectReducer } from "./reducers/ProjectReducer";

function App() {
  const [state, dispatch] = useReducer(projectReducer, initialState);
  const [search, setSearch] = useState("");
  return (
    <>
      <ProjectContext.Provider value={{ state, dispatch }}>
        <SearchContext.Provider value={{ search, setSearch }}>
          <LandingPage />
          <ToastContainer position="bottom-right" />
        </SearchContext.Provider>
      </ProjectContext.Provider>
    </>
  );
}

export default App;
