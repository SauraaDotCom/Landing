"use client";

import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";

import hello from "@/assets/icons/hello.png";
import close from "@/assets/icons/close.png";
import love from "@/assets/icons/love.png";

import mercury from "@/assets/logos/mercury.png";
import venus from "@/assets/logos/venus.png";
import mars from "@/assets/logos/mars.png";
import jupiter from "@/assets/logos/jupiter.png";
import neptune from "@/assets/logos/neptune.png";
import pluto from "@/assets/logos/pluto.png";

export default function UserControlModal({ setAppNavigationModal }) {
  const notify = () =>
    toast(
      <div className="flex flex-row items-center p-2">
        <Image
          alt="love-icon"
          className="h-4 w-4 mr-4 dark:invert-0 invert"
          src={love}
        />
        <span>Work In Progress</span>
        <Image
          alt="love-icon"
          className="h-4 w-4 ml-4 dark:invert-0 invert"
          src={love}
        />
      </div>
    );

  return (
    <main className="flex h-screen w-screen fixed backdrop-blur-[1px] z-50 flex-col items-center justify-center">
      <div className="sm:w-[320px] w-11/12 dark:bg-black bg-white border-[1px] border-solid border-[#27272a] flex flex-col items-center justify-between">
        <div className="w-full flex flex-row items-center justify-between p-4 border-b-[1px] border-solid border-[#27272a]">
          <div className="flex flex-row items-center p-2">
            <Image
              alt="hello-icon"
              className="h-4 w-4 mr-4 dark:invert-0 invert"
              src={hello}
            />
            <span>hi, astronomer!</span>
          </div>
          <Image
            alt="close-icon"
            onClick={() => setAppNavigationModal(false)}
            className="h-8 w-8 p-2 cursor-pointer dark:invert-0 invert"
            src={close}
          />
        </div>

        <div className="flex-col items-center justify-between w-full dark:bg-black bg-white">
          <div
            onClick={notify}
            className="flex flex-row items-center justify-between px-6 py-4 w-full cursor-pointer dark:hover:bg-[#27272a] hover:bg-gray-200 border-b-[1px] border-solid border-[#27272a]"
          >
            <div className="flex flex-col">
              <span className="outline-none">Mercury</span>
              <span className="text-[10px] text-gray-400">Comming Soon</span>
            </div>
            <Image alt="mercury-logo" className="h-4 w-4" src={mercury} />
          </div>
          <div
            onClick={notify}
            className="flex flex-row items-center justify-between px-6 py-4 w-full cursor-pointer dark:hover:bg-[#27272a] hover:bg-gray-200  border-b-[1px] border-solid border-[#27272a]"
          >
            <div className="flex flex-col">
              <span className="outline-none">Venus</span>
              <span className="text-[10px] text-gray-400">Comming Soon</span>
            </div>
            <Image alt="venus-logo" className="h-4 w-4" src={venus} />
          </div>
          <div
            onClick={notify}
            className="flex flex-row items-center justify-between px-6 py-4 w-full cursor-pointer dark:hover:bg-[#27272a] hover:bg-gray-200  border-b-[1px] border-solid border-[#27272a]"
          >
            <div className="flex flex-col">
              <span className="outline-none">Mars</span>
              <span className="text-[10px] text-gray-400">Comming Soon</span>
            </div>
            <Image alt="mars-logo" className="h-4 w-4" src={mars} />
          </div>
          <div
            onClick={notify}
            className="flex flex-row items-center justify-between px-6 py-4 w-full cursor-pointer dark:hover:bg-[#27272a] hover:bg-gray-200 border-b-[1px] border-solid border-[#27272a]"
          >
            <div className="flex flex-col">
              <span className="outline-none">Jupiter</span>
              <span className="text-[10px] text-gray-400">Comming Soon</span>
            </div>
            <Image alt="jupiter-logo" className="h-4 w-4" src={jupiter} />
          </div>
          <div
            onClick={notify}
            className="flex flex-row items-center justify-between px-6 py-4 w-full cursor-pointer dark:hover:bg-[#27272a] hover:bg-gray-200  border-b-[1px] border-solid border-[#27272a]"
          >
            <div className="flex flex-col">
              <span className="outline-none">Nuptune</span>
              <span className="text-[10px] text-gray-400">Comming Soon</span>
            </div>
            <Image alt="neptune-logo" className="h-4 w-4" src={neptune} />
          </div>
          <div
            onClick={notify}
            className="flex flex-row items-center justify-between px-6 py-4 w-full cursor-pointer dark:hover:bg-[#27272a] hover:bg-gray-200"
          >
            <div className="flex flex-col">
              <span className="outline-none">Pluto</span>
              <span className="text-[10px] text-gray-400">Comming Soon</span>
            </div>
            <Image alt="pluto-logo" className="h-4 w-4" src={pluto} />
          </div>
        </div>
      </div>
    </main>
  );
}
