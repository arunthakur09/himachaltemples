import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">Himachal Pradesh</Link>
        </div>
        <nav className="flex space-x-4">
          <Link href="/" className="hover:bg-blue-700 px-3 py-2 rounded-md">
            Home
          </Link>
          <Link href="/about" className="hover:bg-blue-700 px-3 py-2 rounded-md">
            About Us
          </Link>
          <Link href="/contact" className="hover:bg-blue-700 px-3 py-2 rounded-md">
            Contact Us
          </Link>
          <Link href="/districts" className="hover:bg-blue-700 px-3 py-2 rounded-md">
            Districts
          </Link>
          <Link href="/articles" className="hover:bg-blue-700 px-3 py-2 rounded-md">
            Articles
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
