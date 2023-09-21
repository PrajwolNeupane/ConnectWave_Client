import SearchIcon from "@/assets/icons/SearchIcons";
import Image from "next/image";
import ColoredFullLogo from "../../assets/logos/connect_wave_colored_full_logo.svg";
import ActiveHome from "../../assets/icons/home_active.svg";
import InActiveMessage from "../../assets/icons/message_inactive.svg";
import InActiveNotification from "../../assets/icons/notification_inactive.svg";
import InActiveExplore from "../../assets/icons/explor_inactive.svg";

export default function Navbar() {
  return (
    <div className="bg-white w-full px-[5%] py-1 flex items-center justify-between sticky top-0 shadow z-[5]">
      <div className="flex items-center gap-5">
        <Image
          src={ColoredFullLogo}
          width={50}
          height={50}
          alt="colored full logo"
          className="w-[90px]"
        />
        <div className="bg-gray-100 py-2 px-3 rounded-md flex gap-3 items-center max-rg:hidden">
          <SearchIcon
            height="18"
            width="18"
            color="gray"
            className="mb-[1px]"
          />
          <input
            placeholder="Search Something"
            className="bg-transparent max-xl:w-[300px] w-[400px] focus:outline-none font-semibold text-xxs text-gray-500 placeholder:font-semibold placeholder:text-xxs placeholder:text-gray-500"
          />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-[40px]">
          <Image
            src={ActiveHome}
            width={20}
            height={20}
            alt="active home icon"
          />
          <Image
            src={InActiveExplore}
            width={20}
            height={20}
            alt="inactive explor icon"
          />
          <Image
            src={InActiveMessage}
            width={20}
            height={20}
            alt="inactive message icon"
          />
          <Image
            src={InActiveNotification}
            width={20}
            height={20}
            alt="inactive notification icon"
          />
        </div>
        <hr className="w-[1px] h-[40px] bg-gray-400" />
        <div className="flex items-center gap-2">
          <div className="w-[40px] h-[40px] rounded-full bg-gray-700"></div>
          <h3 className="font-bold text-xxs text-gray-700 max-md:hidden">
            Prajwol Neupane
          </h3>
        </div>
      </div>
    </div>
  );
}
