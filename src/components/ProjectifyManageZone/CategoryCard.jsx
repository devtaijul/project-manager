/* eslint-disable react/prop-types */

import { SortIcon } from "../../icons/Icons";
import { cn, formatDate } from "../../utils/common";
import DeleteProject from "./DeleteProject";
import EditProject from "./EditProject";

const CategoryCard = ({
  className = "",
  category = "todo",
  projects = [],
  title = "",
}) => {
  const filteredProjects = projects.filter(
    (project) => project.category === category
  );

  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className={cn("rounded-lg bg-indigo-600 p-4", className)}>
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            {title} ({filteredProjects.length})
          </h3>
          <SortIcon />
        </div>
        <div>
          {filteredProjects.length ? (
            filteredProjects.map((project) => (
              <div className="mb-4 rounded-lg bg-gray-800 p-4" key={project.id}>
                <div className="flex justify-between">
                  <h4 className="mb-2 flex-1 font-semibold text-indigo-500">
                    {project.taskName}
                  </h4>
                  <div className="flex gap-2 items-start">
                    <DeleteProject project_id={project.id} />
                    <EditProject project={project} />
                  </div>
                </div>
                <p className="mb-2 text-sm text-zinc-200">
                  {project.description}
                </p>
                <p className="mt-6 text-xs text-zinc-400">
                  {formatDate(project.date)}
                </p>
              </div>
            ))
          ) : (
            <p className="text-white text-center">No task available</p>
          )}
        </div>
        {/* Add more task cards here */}
      </div>
    </div>
  );
};

export default CategoryCard;
