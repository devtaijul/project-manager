import logo from "../assets/lws-logo-en.svg";
import {
  CalendarIcon,
  HomeIcon,
  KanbanIcon,
  ListIcon,
  MessageIcon,
  SettingsIcon,
  UserIcon,
} from "../icons/Icons";

const links = [
  {
    id: 1,
    name: "Dashboard",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    name: "Projects",
    icon: <ListIcon />,
  },
  {
    id: 3,
    name: "Contact",
    icon: <UserIcon />,
  },
  {
    id: 4,
    name: "Kanban",
    icon: <KanbanIcon />,
  },
  {
    id: 5,
    name: "Calendar",
    icon: <CalendarIcon />,
  },
  {
    id: 6,
    name: "Messages",
    icon: <MessageIcon />,
  },
  {
    id: 7,
    name: "Settings",
    icon: <SettingsIcon />,
  },
];

const SideBar = () => {
  return (
    <aside className="hidden w-64 bg-gray-800 p-6 lg:block">
      <div className="mb-8 flex items-center">
        <div className="flex items-center justify-center rounded-full text-xl font-bold">
          <img src={logo} className="mx-auto h-10 text-center" />
        </div>
      </div>
      <button className="mb-8 w-full rounded-md bg-green-500 py-2 text-white">
        + New Project
      </button>
      <nav>
        <ul className="space-y-4">
          {links.map((link) => (
            <li key={link.id}>
              <a href="#" className="flex items-center">
                {link.icon}
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
