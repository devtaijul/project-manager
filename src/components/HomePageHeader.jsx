import CreateProject from "./CreateProject";
import ProjectModal from "./Form/ProjectModal";

const HomePageHeader = () => {
  return (
    <div className="mb-6 flex items-center justify-between">
      <ProjectModal />
      <h2 className="text-2xl font-bold">Projectify</h2>
      <div className="flex space-x-2">
        <CreateProject />
      </div>
    </div>
  );
};

export default HomePageHeader;
