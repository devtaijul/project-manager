import { useState } from "react";
import { AddIcon } from "../icons/Icons";
import ProjectModal from "./Form/ProjectModal";

const CreateProject = () => {
  const [show, setShow] = useState(false);
  const handleHide = () => {
    setShow(false);
  };
  return (
    <>
      {show && <ProjectModal onHide={handleHide} />}
      <button
        className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
        onClick={() => {
          setShow(true);
        }}
      >
        <AddIcon />
        Add
      </button>
    </>
  );
};

export default CreateProject;
