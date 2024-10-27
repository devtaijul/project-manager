import { projects } from "../../utils/data";
import CategoryCard from "./CategoryCard";

const ProjectManageZone = () => {
  return (
    <div className="-mx-2 mb-6 flex flex-wrap">
      {/* Todo */}
      <CategoryCard
        className="bg-indigo-600"
        category="todo"
        projects={projects}
      />
      {/* On Progress */}
      <CategoryCard
        className="bg-yellow-500"
        category="on-progress"
        projects={projects}
      />

      {/* Done */}
      <CategoryCard
        className="bg-teal-500"
        category="done"
        projects={projects}
      />

      {/* Revised */}
      <CategoryCard
        className="bg-rose-500"
        category="revised"
        projects={projects}
      />
    </div>
  );
};

export default ProjectManageZone;
