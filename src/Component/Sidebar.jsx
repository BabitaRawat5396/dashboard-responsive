import { useState } from "react";
import { dashboardItems, loadIcon } from "../Data/dashboardItems";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const [id, setId] = useState(0);

  return (
    <ul className="bg-[#011627] text-[#FCFDFD] rounded-tr-2xl rounded-br-2xl h-full pt-20 px-4 pb-6 fixed top-0 left-0 tablet:w-[22%] laptop:w-[20%] w-64">
      {dashboardItems.map((item, index) => {
        const IconComponent = loadIcon(item.library, item.icon);
        return (
          <SidebarItem
            key={index}
            icon={<IconComponent />}
            text={item.text}
            id={id}
            setId={setId}
            index={index}
          />
        );
      })}
    </ul>
  );
};

export default Sidebar;
