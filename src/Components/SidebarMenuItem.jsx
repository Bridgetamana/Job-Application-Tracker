import {
  MdOutlineHome,
  MdManageHistory,
  MdWorkHistory,
  MdOutlinePersonOutline,
} from "react-icons/md";

export const SidebarMenuItem = () => [
  {
    id: 0,
    label: "Dashboard",
    icon: <MdOutlineHome />,
    path: "dashboard",
  },
  {
    id: 1,
    label: "Applications",
    icon: <MdManageHistory />,
    path: "applications",
  },
  {
    id: 2,
    label: "Job search",
    icon: <MdWorkHistory />,
    path: "job",
  },
  {
    id: 3,
    label: "Profile",
    icon: <MdOutlinePersonOutline />,
    path: "profile",
  },
];
