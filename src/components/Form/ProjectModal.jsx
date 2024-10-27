import { useContext, useState } from "react";
import { cn } from "../../utils/common";
import { ProjectContext } from "../../context";
import { toast } from "react-toastify";

/* eslint-disable react/prop-types */
const ProjectModal = ({ onHide = () => {}, mode = "create", project }) => {
  const { dispatch } = useContext(ProjectContext);

  const [formState, setFormState] = useState(
    project || {
      taskName: "",
      description: "",
      dueDate: "",
      category: "todo",
    }
  );

  const [errorState, setErrorState] = useState({
    taskName: false,
    description: false,
    dueDate: false,
    category: false,
  });

  const handleHide = (e) => {
    e.preventDefault();
    onHide();
  };

  const onChange = (e) => {
    // update the form state
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });

    // remove the error message when the user starts typing
    setErrorState({
      ...errorState,
      [e.target.name]: e.target.value.trim() === "" ? true : false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { taskName, description, dueDate, category } = formState;

    for (const key in formState) {
      if (formState[key].trim() === "") {
        setErrorState((prev) => {
          return {
            ...prev,
            [key]: true,
          };
        });
      }
    }

    // check if any field is empty
    if (
      !taskName.trim() ||
      !description.trim() ||
      !dueDate.trim() ||
      !category.trim()
    ) {
      return;
    }

    // make project mockup data to be sent to the server
    const project = {
      taskName,
      description,
      dueDate,
      category,
    };

    // dispatch the project to the server
    if (mode === "create") {
      // create a new project
      dispatch({ type: "ADD_PROJECT", payload: project });
      // toasting the success message

      toast.success("Task Created Successfully");
    } else {
      // adding project id to the project
      project.id = formState.id;
      // update the project
      dispatch({ type: "UPDATE_PROJECT", payload: project });
      // toasting the success message

      toast.success("Task Updated Successfully");
    }

    // reset the form state
    setFormState({
      taskName: "",
      description: "",
      dueDate: "",
      category: "todo",
    });

    // hide the modal
    onHide();
  };

  return (
    <div
      className={cn(
        "flex min-h-screen absolute w-full top-0 left-0 items-center justify-center bg-gray-900 p-4 text-white "
      )}
    >
      <div className="w-full h-full absolute" onClick={handleHide}></div>
      <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl z-10">
        <div className="p-6">
          <h2 className="mb-6 text-2xl font-bold text-green-400">
            Create Task
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="taskName"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Task Name
              </label>
              <input
                type="text"
                id="taskName"
                name="taskName"
                required=""
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                onChange={onChange}
                value={formState.taskName}
              />
              {errorState.taskName && (
                <p className="text-red-500 text-xs mt-1">
                  Task Name is required
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                onChange={onChange}
                value={formState.description}
              />
              {errorState.description && (
                <p className="text-red-500 text-xs mt-1">
                  Description is required
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="dueDate"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Due Date
              </label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                onChange={onChange}
                value={formState.dueDate}
              />
              {errorState.dueDate && (
                <p className="text-red-500 text-xs mt-1">
                  Due Date is required
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="category"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                onChange={onChange}
                value={formState.category}
              >
                <option value="todo">To-Do</option>
                <option value="inprogress">On Progress</option>
                <option value="done">Done</option>
                <option value="revised">Revised</option>
              </select>
              {errorState.category && (
                <p className="text-red-500 text-xs mt-1">
                  Category is required
                </p>
              )}
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={onHide}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                {mode === "create" ? "Create Task" : "Update Task"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
