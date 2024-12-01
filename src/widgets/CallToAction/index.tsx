import { useRouter } from 'next/navigation';
import { FC } from 'react';

import Button from '@/components/ui/Button';
import SectionOpacity from '@/components/ui/SectionOpacity';

interface Props {}

const Index: FC<Props> = () => {
  const router = useRouter();

  const handleFormToggle = () => {
    router.push('/book');
  };

  return (
    <section id="contact">
      <SectionOpacity classes="flex flex-col justify-center h-screen">

        <div className="mx-auto flex w-full max-w-[60vw] md:max-w-[90%] flex-1 flex-col items-center justify-center text-center">
          <h3 className="text-[4vw] md:text-[8vw] font-medium">CONTACT US</h3>
          <p className="mt-[2vw] md:mt-[3vw] mb-[2vw] md:mb-[3vw] text-[1.7vw] md:text-[3.2vw] font-normal text-gray-300 md:leading-[1.3]">
            We are here to assist you with any questions or inquiries. Feel free to reach out, and we&apos;ll be happy to help with your project needs.
          </p>
          <Button
            onClick={handleFormToggle}
            title="SUBMIT A REQUEST"
            classes="px-[1.8vw] py-[vw] w-[35vw] md:w-[60vw] min-h-[6vw] md:min-h-[10vw] text-[1.25vw] md:text-[2.25vw] bg-bg-1 hover:bg-bg-1/80"
            btnClasses="mt-[2.4vw] md:mt-[3vw]"
          />
        </div>

        <footer className="flex justify-between border-t border-t-gray-800 px-[5vw] py-[1.8vw] text-[1.6vw] md:text-[2vw] md:py-[2.4vw] md:px-[2vw] ">
          <div>© 2024. All rights reserved.</div>
          <ul className="flex space-x-[3vw] ">
            <li>Digitalize Plus</li>
          </ul>
        </footer>
      </SectionOpacity>
    </section>
  );
};
export default Index;
