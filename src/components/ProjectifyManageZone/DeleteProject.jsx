import { useContext } from "react";
import { DeleteIcon } from "../../icons/Icons";
import { ProjectContext } from "../../context";
import { toast } from "react-toastify";

const DeleteProject = ({ project_id }) => {
  const { dispatch } = useContext(ProjectContext);

  const handleDelete = () => {
    // confirm popup to delete the project
    const confirmDelete = window.confirm("Are you sure you want to delete?");

    if (confirmDelete) {
      dispatch({
        type: "DELETE_PROJECT",
        payload: project_id,
      });

      // toasting the success message
      toast.success("Task Deleted Successfully");
    } else {
      return;
    }
  };

  return (
    <>
      <button onClick={handleDelete}>
        <DeleteIcon />
      </button>
    </>
  );
};

export default DeleteProject;
