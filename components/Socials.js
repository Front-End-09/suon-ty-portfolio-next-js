//Link
import Link from "next/link";
//Icons
import { RiYoutubeLine, RiFacebookLine, RiGithubLine } from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
        <Link href={''} className="hover:text-accent  transition-all duration-300">
        <RiYoutubeLine/>
        </Link>
            <Link href={''} className="hover:text-accent  transition-all duration-300">
            <RiFacebookLine/>
        </Link>
            <Link href={''} className="hover:text-accent  transition-all duration-300">
            <RiGithubLine/>
        </Link>
    </div>

  );
};

export default Socials;
