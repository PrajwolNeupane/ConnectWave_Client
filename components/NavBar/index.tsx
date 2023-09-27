"use client";
import SearchIcon from "@/assets/icons/SearchIcons";
import Image from "next/image";
import ColoredFullLogo from "../../assets/logos/connect_wave_colored_full_logo.svg";
import ActiveHome from "../../assets/icons/home_active.svg";
import InActiveHome from "../../assets/icons/home_inactive.svg";
import InActiveMessage from "../../assets/icons/message_inactive.svg";
import InActiveNotification from "../../assets/icons/notification_inactive.svg";
import InActiveExplore from "../../assets/icons/explor_inactive.svg";
import { useQuery } from "react-query";
import { useAuth } from "@/features/services/auth";
import { useEffect } from "react";
import { useAppDispatch } from "@/features/hooks";
import { setAuth } from "@/features/slices/auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import ProfileIcon from "../../assets/icons/Profile.svg";
import LogoutIcon from "../../assets/icons/Logout.svg";
import EditIcon from "../../assets/icons/Edit_Dark_Outline.svg";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  const { data, isLoading } = useQuery({
    queryFn: useAuth,
    refetchOnWindowFocus: true,
  });

  useEffect(() => {
    if (!isLoading) {
      if (data?.success) {
        dispatch(setAuth(data?.user));
        console.log(pathname);
      } else {
        dispatch(setAuth(undefined));
      }
    }
  }, [isLoading]);

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
          <Link href={"/"}>
            {pathname == "/" ? (
              <Image
                src={ActiveHome}
                width={20}
                height={20}
                alt="active home icon"
              />
            ) : (
              <Image
                src={InActiveHome}
                width={20}
                height={20}
                alt="inactive home icon"
              />
            )}
          </Link>
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
        {data?.user != undefined ? (
          <>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <div className="flex items-center gap-2 cursor-pointer">
                  <Image
                    src={data?.user?.photourl!}
                    alt={`Profile Photo of ${data?.user?.username}`}
                    width={60}
                    height={60}
                    className="w-[40px] h-[40px] rounded-full bg-gray-700"
                  />
                  <h3 className="font-bold text-xxs text-gray-700 max-md:hidden">
                    {data?.user?.firstname + " " + data?.user?.lastname}
                  </h3>
                </div>
              </DropdownMenu.Trigger>{" "}
              <DropdownMenu.Portal>
                <DropdownMenu.Content className="rounded-md mt-3 shadow bg-white flex flex-col py-3 px-5 gap-5 z-[999] w-[200px]">
                  <DropdownMenu.Item>
                    <Link
                      href={`/profile/${data?.user?.username}`}
                      className="flex gap-3"
                    >
                      <Image
                        src={ProfileIcon}
                        alt="Profile Icon"
                        width={20}
                        height={20}
                        className="w-[20px]"
                      />
                      <h3 className="text-xxs font-semibold text-gray-800">
                        Profile
                      </h3>
                    </Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item>
                    <Link href={`/profile/edit`} className="flex gap-3">
                      <Image
                        src={EditIcon}
                        alt="Edit Icon"
                        width={20}
                        height={20}
                        className="w-[23px]"
                      />
                      <h3 className="text-xxs font-semibold text-gray-800">
                        Edit Profile
                      </h3>
                    </Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item>
                    <hr className="w-full h-[1px] absolute bg-gray-500 right-0" />
                    <Link
                      href={`/profile/${data?.user?.username}`}
                      className="flex gap-3 mt-3"
                    >
                      <Image
                        src={LogoutIcon}
                        alt="Logout Icon"
                        width={20}
                        height={20}
                        className="w-[23px]"
                      />
                      <h3 className="text-xxs font-semibold text-gray-800">
                        Logout
                      </h3>
                    </Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </>
        ) : (
          <div className="flex items-center gap-2">
            <div className="w-[40px] h-[40px] rounded-full bg-gray-400"></div>
            <h3 className="font-bold text-xxs max-md:hidden bg-gray-400 h-[30px] w-[140px] rounded-md"></h3>
          </div>
        )}
      </div>
    </div>
  );
}
