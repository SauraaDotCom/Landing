"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

import menu from "@/assets/icons/menu.png";
import sauraa from "@/assets/logos/sauraa.png";

import mercury from "@/assets/logos/mercury.png";
import venus from "@/assets/logos/venus.png";
import mars from "@/assets/logos/mars.png";
import jupiter from "@/assets/logos/jupiter.png";
import neptune from "@/assets/logos/neptune.png";
import pluto from "@/assets/logos/pluto.png";

import AppNavigationModal from "@/components/modals/apps/AppNavigationModal";

export default function Landing({ params }) {
  const notify = () => toast("Feature Not Yet Released");

  const [appNavigationModal, setAppNavigationModal] = useState(false);

  return (
    <main className="flex flex-col items-center relative">
      {appNavigationModal ? (
        <AppNavigationModal setAppNavigationModal={setAppNavigationModal} />
      ) : (
        <></>
      )}

      <header className="fixed top-0 z-10 flex flex-row items-center border-b-[1px] border-solid border-[#27272a] text-[12px] w-full dark:bg-black bg-white">
        <Link
          href="/"
          className="md:w-[240px] md:min-w-[240px] min-w-[64px] w-[64px] py-4 border-r-[1px] border-solid border-[#27272a] flex flex-row items-center md:justify-start justify-center"
        >
          <Image
            alt="mars-logo"
            className="h-5 w-5 md:ml-6 hover:animate-pulse"
            src={sauraa}
          />
          <span className="hidden md:block ml-2">Sauraa</span>
        </Link>
        <div className="w-full p-4 flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            <span>{params.user}</span>
          </div>

          <Image
            onClick={() => {
              setAppNavigationModal(true);
            }}
            alt="menu-icon"
            className="h-5 w-5 cursor-pointer dark:invert-0 invert hover:opacity-60"
            src={menu}
          />
        </div>
      </header>

      <div className="relative md:p-16 p-6 md:pt-24 w-full h-screen flex flex-row items-center">
        <div>
          <p className="md:text-3xl text-xl">The Last System You</p>
          <p className="md:text-3xl text-xl">Need To Settle To..</p>
        </div>
      </div>
    </main>
  );
}
