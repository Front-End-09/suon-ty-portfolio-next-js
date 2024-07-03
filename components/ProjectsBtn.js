// Next image
import Image from "next/image";
import profilePic from '../public/rounded-text.png';
// Next link
import Link from 'next/link';
// Icons
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link href='/work' className="relative w-[185px] flex justify-center items-center bg-cover bg-no-repeat group">
          <Image
            src={profilePic}
            width={141}
            height={148}
            alt=""
            className='animate-spin-slow w-full h-full max-w-[100px] max-h-[100px]'
          />
          <HiArrowRight className="absolute z-30 text-4xl group-hover:translate-x-2 transition-all duration-300"/>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
