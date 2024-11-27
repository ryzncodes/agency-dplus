import { FC } from 'react';

import HoverCards from '@/components/ui/HoverCards';
import SectionOpacity from '@/components/ui/SectionOpacity';
import SectionTitle from '@/components/ui/SectionTitle';

import { APPROACH_CARDS } from '@/data';

interface Props {}

const Index: FC<Props> = () => {
  return (
    <section id="approach" className="border-t border-gray-1 bg-bg-1 py-[6vw]  pb-[12vw]">
      <SectionOpacity>
        <SectionTitle title="APPROACH." classes="px-[6vw] md:px-[3vw] pt-[2.5vw] top-0 z-20" />
        <div className="px-[6vw] md:px-[3vw] pt-[2.5vw]">
          <HoverCards cards={APPROACH_CARDS} />
        </div>
      </SectionOpacity>
    </section>
  );
};
export default Index;
