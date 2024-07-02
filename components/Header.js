// Import Link from "next/link";
import Link from "next/link";
import Social from '../components/Socials';

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 lg:px-0 lg:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
            {/* Brand */}
            <Link  href={'/'}>
                <span className="text-3xl font-semibold">SUON</span>  <span className="text-3xl font-semibold text-accent">TY</span>
            </Link>
            {/* Brand */}
            <Social/>
         </div>
      </div>
    </header>
  );
};

export default Header;
