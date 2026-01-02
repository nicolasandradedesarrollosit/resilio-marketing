import Image from 'next/image';

import FirstComponent from './_components/FirstComponent';
import SecondComponent from './_components/SecondComponent';

import GoBack from '@/common/GoBack';

export default function Contact() {
  return (
    <>
      <section className="flex flex-col min-h-screen w-full bg-dull-lavender-50">
        <GoBack url="/" />
        <div className="flex h-16 md:h-20 lg:h-24 justify-center items-center bg-dull-lavender-500 w-full py-18">
          <Image
            alt=""
            className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"
            height={56}
            src="/logo-icon.png"
            width={56}
          />
        </div>

        <div className="flex flex-col lg:flex-row w-full flex-1 bg-dull-lavender-50 py-12">
          <FirstComponent />
          <SecondComponent />
        </div>
      </section>
    </>
  );
}
