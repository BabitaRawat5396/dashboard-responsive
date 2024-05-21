export const dashboardItems = [
  { icon: "RxDashboard", text: "Dashboard", library: "rx" },
  { icon: "TbFolderUp", text: "Assets", library: "tb" },
  { icon: "HiOutlineAdjustments", text: "Analysis", library: "hi" },
  { icon: "RiCameraLensLine", text: "Jobs", library: "ri" },
  { icon: "HiOutlineDocumentReport", text: "Reports", library: "hi" },
  { icon: "BiTransferAlt", text: "Transfers", library: "bi" },
  { icon: "RiStackLine", text: "Projects", library: "ri" },
  { icon: "RiSettings4Line", text: "Settings", library: "ri" },
  { icon: "MdOutlineHeadsetMic", text: "Support", library: "md" },
  { icon: "BiMessageAltDetail", text: "Feedback", library: "bi" },
  { icon: "HiOutlineTicket", text: "Raise Tickets", library: "hi" },
];

export const loadIcon = (library, iconName) => {
  switch (library) {
    case 'rx':
      return require('react-icons/rx')[iconName];
    case 'tb':
      return require('react-icons/tb')[iconName];
    case 'hi':
      return require('react-icons/hi')[iconName];
    case 'ri':
      return require('react-icons/ri')[iconName];
    case 'bi':
      return require('react-icons/bi')[iconName];
    case 'md':
      return require('react-icons/md')[iconName];
    default:
      return null;
  }
};
