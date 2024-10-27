import { useReducer } from "react";
import LandingPage from "./components/LandingPage";
import { ProjectContext } from "./context";
import { initialState, projectReducer } from "./reducers/ProjectReducer";

function App() {
  const [state, dispatch] = useReducer(projectReducer, initialState);
  return (
    <>
      <ProjectContext.Provider value={{ state, dispatch }}>
        <LandingPage />
      </ProjectContext.Provider>
    </>
  );
}

export default App;
