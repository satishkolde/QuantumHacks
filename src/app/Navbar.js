import Link from "next/link";
import Image from 'next/image'

const Navbar = () => {
    return (
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Link href="/">
              <span className="text-white font-bold text-lg">Home</span>
            </Link>
            <Link href="/projects">
              <span className="text-white ml-4">Projects</span>
            </Link>
          </div>
  
          <div className="flex flex-row items-center">
            
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;