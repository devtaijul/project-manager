import Header from "./Header";
import SideBar from "./SideBar";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <SideBar />
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
        {children}
      </main>
    </div>
  );
}
