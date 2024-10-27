const initialState = {
  projects: [
    {
      id: "1",
      taskName: "Projectify",
      description: "A project management tool",
      category: "todo",
      dueDate: "2021-09-01",
    },
    {
      id: "2",
      taskName: "Projectify",
      description: "A project management tool",
      category: "inprogress",
      dueDate: "2021-09-01",
    },
    {
      id: "3",
      taskName: "Projectify",
      description: "A project management tool",
      category: "done",
      dueDate: "2021-09-01",
    },
    {
      id: "4",
      taskName: "Projectify",
      description: "A project management tool",
      category: "revised",
      dueDate: "2021-09-01",
    },
  ],
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return {
        ...state,
        projects: [
          ...state.projects,
          {
            id: crypto.randomUUID(),
            ...action.payload,
          },
        ],
      };

    case "UPDATE_PROJECT":
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === action.payload.id ? action.payload : project
        ),
      };

    case "DELETE_PROJECT":
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export { initialState, projectReducer };
