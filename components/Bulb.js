import Image from "next/image";
import bulb from '../public/bulb.png';
const Bulb = () => {
  return(
    <div className="absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] lg:w-[260px]">
        <Image
            src={bulb}
            width={260}
            height={200}
            className="w-full h-full"
            alt=""
        />
    </div>
  )
};

export default Bulb;
