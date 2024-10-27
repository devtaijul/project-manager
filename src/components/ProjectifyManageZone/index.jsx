import { useContext } from "react";
import { ProjectContext } from "../../context";

import CategoryCard from "./CategoryCard";

const ProjectManageZone = () => {
  const { state } = useContext(ProjectContext);

  return (
    <div className="-mx-2 mb-6 flex flex-wrap">
      {/* Todo */}
      <CategoryCard
        className="bg-indigo-600"
        category="todo"
        projects={state.projects}
        title="To Do"
      />
      {/* On Progress */}
      <CategoryCard
        className="bg-yellow-500"
        category="on-progress"
        projects={state.projects}
        title="On Progress"
      />

      {/* Done */}
      <CategoryCard
        className="bg-teal-500"
        category="done"
        projects={state.projects}
        title="Done"
      />

      {/* Revised */}
      <CategoryCard
        className="bg-rose-500"
        category="revised"
        projects={state.projects}
        title="Revised"
      />
    </div>
  );
};

export default ProjectManageZone;
