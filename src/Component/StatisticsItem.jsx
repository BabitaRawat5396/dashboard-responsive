import * as FaIcons from "react-icons/fa";

const StatisticsItem = ({ item }) => {
  const IconComponent = FaIcons[item.icon];

  return (
    <li className=" flex flex-col gap-1 laptop:text-xs desktop:text-sm">
      <div className="bg-cyan-100 rounded-full p-2 w-fit">
        <IconComponent style={{ fontSize: "1.2rem" }} />
      </div>
      <p className=" whitespace-nowrap">{item.text}</p>
      <p className="font-bold">{item.value}</p>
    </li>
  );
};

export default StatisticsItem;
