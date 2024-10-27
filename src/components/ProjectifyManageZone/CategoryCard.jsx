/* eslint-disable react/prop-types */

import { useState } from "react";
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
  const [sort, setSort] = useState("asc");

  const filteredProjects = projects
    .filter((project) => project.category === category)
    .sort((a, b) => {
      if (sort === "asc") {
        return new Date(a.dueDate) - new Date(b.dueDate);
      }
      return new Date(b.dueDate) - new Date(a.dueDate);
    });

  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className={cn("rounded-lg bg-indigo-600 p-4", className)}>
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            {title} ({filteredProjects.length})
          </h3>
          <button
            onClick={() =>
              setSort((prev) => {
                if (prev === "asc") return "desc";
                return "asc";
              })
            }
          >
            <SortIcon />
          </button>
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
                  {formatDate(project.dueDate)}
                </p>
              </div>
            ))
          ) : (
            <p className="text-white text-center">Task List is empty!</p>
          )}
        </div>
        {/* Add more task cards here */}
      </div>
    </div>
  );
};

export default CategoryCard;
