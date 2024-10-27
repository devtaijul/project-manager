/* eslint-disable react/prop-types */
import { useState } from "react";
import { EditIcon } from "../../icons/Icons";
import ProjectModal from "../Form/ProjectModal";

const EditProject = ({ project }) => {
  const [show, setShow] = useState(false);
  const handleHide = () => setShow(false);

  return (
    <>
      {show && (
        <ProjectModal onHide={handleHide} mode="update" project={project} />
      )}
      <button onClick={() => setShow(true)}>
        <EditIcon />
      </button>
    </>
  );
};

export default EditProject;
