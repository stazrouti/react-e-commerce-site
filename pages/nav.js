import Link from "next/link";

const Nav = () => {
  return (
    <nav className="bg-gray-800 w-full p-4 flex justify-between items-center">
      <div className="text-white text-lg font-bold">
        <Link href="/" passHref>
        Youtube Thumbnail Downloader {/* Add your site name/logo here */}
        </Link >

      </div>
      <ul className="flex space-x-5">
        <li>
          <Link href="/" passHref>
            <div className="text-white hover:text-gray-400">Home</div>
          </Link>
        </li>
        <li>
          <Link href="/About" passHref>
            <div className="text-white hover:text-gray-400">About</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
