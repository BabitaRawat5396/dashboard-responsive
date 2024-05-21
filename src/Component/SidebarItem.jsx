const SidebarItem = ({ icon, text, id, setId, index }) => {
  return (
    <li
      className={`flex items-center gap-2 ${
        index === id ? "bg-[#0171FE]" : ""
      } p-2 px-6 rounded-xl text-sm border-[#FCFDFD] ${
        text === "Projects" ? "mt-14 b-2" : ""
      }`}
      onClick={() => {
        setId(index);
      }}
    >
      {icon}
      <span>{text}</span>
    </li>
  );
};

export default SidebarItem;
