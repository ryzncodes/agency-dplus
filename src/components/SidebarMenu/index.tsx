import { motion } from 'framer-motion';
import { FC, useState } from 'react';

import CustomLink from './Link';

import { NAV_ITEMS } from '@/data';

import { menuSlide } from '@/shared/utils/animations';

interface Props {
  close: () => void;
}


const Index: FC<Props> = ({ close }) => {
  const [selectedIndicator, setSelectedIndicator] = useState(null);

  const smoothScroll = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
    close();
  };
  return (
    <>
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="fixed right-0 top-0 z-[4000] h-screen w-[32vw] md:w-[70vw] bg-gray-1 pb-[8vw] pl-[8vw] pr-[6vw] pt-[10vw] md:pt-[15vw] text-text-1"
      >
        <div className='w-full border-b border-white/20 uppercase text-white/60 pb-[0.4vw] mb-[2.2vw] md:mb-[6vw] '>
          <h3 className='text-[0.9vw] md:text-[5vw] md:pb-[3vw] leading-[1.1]'>Navigation</h3>
        </div>
        <div className='flex flex-col h-full justify-between'>

          <div className="flex flex-col justify-end space-y-[0.1vw] md:space-y-[3vw]" onMouseLeave={() => setSelectedIndicator(null)}>
            {NAV_ITEMS.map((item, index) => (
              <CustomLink
                handleClick={() => smoothScroll(item.href)}
                key={item.title}
                data={{ ...item, index }}
                isActive={selectedIndicator === item.href}
                setSelectedIndicator={setSelectedIndicator}
              />
            ))}
          </div>
        </div>


      </motion.div>
      <div
        aria-label="button"
        onClick={close}
        className="fixed bottom-0 left-0 right-0 top-0 z-[750] bg-bg-1/60 transition"
      ></div>
    </>
  );
};
export default Index;
