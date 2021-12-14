import { ReactChild } from "react";
import { IconType } from "react-icons";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";

type Props = {
  label: string;
  icon: ReactChild;
};

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-32 flex flex-col bg-gray-800">
      <div className="flex flex-col justify-center items-center mt-32">
        <Buttons
          label={"PLAYLIST"}
          icon={<AiOutlineUnorderedList className="ml-4" />}
        />
        <Buttons label={"PROFILE"} icon={<FaUserCircle className="ml-4" />} />
        <div className="bg-gray-700 w-full h-px mt-4"></div>
        <Buttons label={"SIGN OUT"} icon={<GoSignOut className="ml-4" />} />
      </div>
    </div>
  );
};

const Buttons = ({ label, icon }: Props) => (
  <div className="w-full h-10 flex items-center text-center text-white hover:bg-gray-600">
    {icon}
    <button className="ml-2">{label}</button>
  </div>
);

export default SideBar;
