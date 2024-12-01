'use client';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';

import SidebarMenu from '@/components/SidebarMenu';
import { LogoIcon } from '@/icons/ApproachIcons/LogoIcon';
import { AnimatePresence } from 'framer-motion';

interface Props {}

const Index: FC<Props> = () => {
  const [isActive, setIsActive] = useState(false);
  const closeSidebar = () => setIsActive(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsActive(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);
  return (
    <div >
      <div className="fixed right-0 z-[4001] p-[2vw] pt-[4vw] md:p-[4vw] md:pt-[6vw]">
        <button
          type="button"
          onClick={() => setIsActive(!isActive)}
          className="flex h-[45px] w-[45px] md:h-[8vw] md:w-[8vw] cursor-pointer items-center justify-center rounded-full bg-stone-400">
          <div className={`burger ${isActive && 'burgerActive'}`}></div>
        </button>
      </div>
      <button title="Digitalize Plus" className="p-[2vw] md:p-[4vw] fixed z-[100] top-0 left-0 group">
        <Image 
          src="/images/logo-dp.png" 
          alt="Digitalize Plus Logo"
          width={80}
          height={50}
          className="w-[40px] md:w-[8vw] h-auto group-hover:opacity-80 transition duration-300"
        />
      </button>
      <AnimatePresence mode="wait">{isActive && (
        <SidebarMenu close={closeSidebar} />
      )}
      </AnimatePresence>
    </div>
  );
};
export default Index;
