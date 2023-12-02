import Link from "next/link";

const Nav = () => {
  return (
    <nav className="bg-gray-800 w-full p-4 flex justify-between items-center">
      <div className="text-white text-lg font-bold">
        <Link href="/" passHref title="">
        Youtube Thumbnail Downloader 
        </Link >

      </div>
      <ul className="flex space-x-5">
        <li>
          <Link href="/" passHref title="Home">
            <div className="text-white hover:text-gray-400">Home</div>
          </Link>
        </li>
        <li>
          <Link href="/About" passHref title="About thambnails downloader">
            <div className="text-white hover:text-gray-400">About</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
