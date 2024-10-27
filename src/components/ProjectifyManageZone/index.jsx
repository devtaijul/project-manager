import { useContext } from "react";
import { ProjectContext, SearchContext } from "../../context";

import CategoryCard from "./CategoryCard";

const ProjectManageZone = () => {
  const { search } = useContext(SearchContext);
  const { state } = useContext(ProjectContext);

  // Filter projects by title search value from the search input
  const filteredProjectsBySearch = state.projects.filter((project) =>
    project.taskName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="-mx-2 mb-6 flex flex-wrap">
      {/* Todo */}
      <CategoryCard
        className="bg-indigo-600"
        category="todo"
        projects={filteredProjectsBySearch}
        title="To Do"
      />
      {/* On Progress */}
      <CategoryCard
        className="bg-yellow-500"
        category="inprogress"
        projects={filteredProjectsBySearch}
        title="On Progress"
      />

      {/* Done */}
      <CategoryCard
        className="bg-teal-500"
        category="done"
        projects={filteredProjectsBySearch}
        title="Done"
      />

      {/* Revised */}
      <CategoryCard
        className="bg-rose-500"
        category="revised"
        projects={filteredProjectsBySearch}
        title="Revised"
      />
    </div>
  );
};

export default ProjectManageZone;
