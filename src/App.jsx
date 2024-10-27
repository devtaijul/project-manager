import { useReducer } from "react";
import LandingPage from "./components/LandingPage";
import { ToastContainer } from "react-toastify";
import { ProjectContext } from "./context";
import { initialState, projectReducer } from "./reducers/ProjectReducer";

function App() {
  const [state, dispatch] = useReducer(projectReducer, initialState);
  return (
    <>
      <ProjectContext.Provider value={{ state, dispatch }}>
        <LandingPage />
        <ToastContainer position="bottom-right" />
      </ProjectContext.Provider>
    </>
  );
}

export default App;
