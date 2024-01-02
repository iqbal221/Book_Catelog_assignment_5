import SidebarFilter from './SidebarFilter';
import SidebarSearch from './SidebarSearch';

const Sidebar = ({ setQuery }: any) => {
  return (
    <div className="bg-stone-300 w-full md:h-full h-[360px] md:pb-14 md:pt-0 ">
      <SidebarSearch setQuery={setQuery}></SidebarSearch>
      <SidebarFilter></SidebarFilter>
    </div>
  );
};

export default Sidebar;
