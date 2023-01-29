import React from "react";
import {
  HomeIcon,
  ChevronDownIcon,
  BannerIcon,
  SearchIcon,
  GlobeIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import {
  BellIcon,
  ChatIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
  const { data: session } = useSession();
  return (
    <div className="flex bg-white px-4 py-2 shadow-sm sticky top-0 zx-50">
      <div className="cursor-pointer relative h-10 w-20 flex-shrink-0">
        <Image
          src="/images/header-image.png"
          objectFit="contain"
          alt=""
          layout="fill"
        />
      </div>
      <div className="cursor-pointer relative h-10 w-20 flex-shrink-0 hidden lg:inline">
        <Image
          src="/images/logo.jpeg"
          objectFit="contain"
          alt=""
          layout="fill"
        />
      </div>

      <div className="mx-7 flex items-center xl:min-w-[300px]">
        <HomeIcon className="w-5 h-5" />
        <p className="ml-2 flex-1 hidden lg:inline">Home</p>
        <ChevronDownIcon className="w-5 h-5" />
      </div>
      {/*Search Bar */}
      <form className="flex flex-1 items-center space-x-2 rounded-full border-gray-200 bg-gray-100 px-3 py-3">
        <SearchIcon className="h-6 w-6 text-gray-400" />
        <input
          input="text"
          placeholder="Search"
          className="outline-none flex-1 bg-transparent"
        />
        <button type="submit" hidden />
      </form>
      <div className="flex hidden mx-5 hidden items-center space-x-2 text-gray-700 lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <MenuIcon className="icon" />
      </div>
      {/* Sign in and Sign Out button*/}
      {session ? (
        <div
          onClick={() => signOut()}
          className="hidden cursor-pointer lg:flex items-center space-x-2 border-gray-100 p-2"
        >
          <div className="cursor-pointer relative flex-shrink-0 h-5 w-5">
            <img
              src="https://links.papareact.com/23l"
              objectFit="contain"
              alt=""
              layout="fill"
            />
          </div>
          <div className="flex-1 text-xs">
            <p className="truncate">{session?.user?.name}</p>
            <p className="text-gray-400 ">1 Karma</p>
          </div>
          <ChevronDownIcon className="flex-shrink-0 h-5 text-slate-400" />
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="hidden lg:flex items-center cursor-pointer space-x-2 border-gray-100 p-2"
        >
          <div className="cursor-pointer relative flex-shrink-0 h-5 w-5">
            <img
              src="https://links.papareact.com/23l"
              objectFit="contain"
              alt=""
              layout="fill"
            />
          </div>
          <p className="text-gray-400 duration-75 ease-in-out hover:text-slate-700">
            {" "}
            Sign In
          </p>
        </div>
      )}
    </div>
  );
}

export default Header;
