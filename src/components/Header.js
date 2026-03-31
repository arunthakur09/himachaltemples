import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="text-2xl font-bold">
          <Link href="/">Himachal Pradesh</Link>
        </div>
        <nav aria-label="Primary" className="flex flex-wrap gap-2">
          <Link href="/" className="hover:bg-blue-800 px-3 py-2 rounded-md">
            Home
          </Link>
          <Link href="/about" className="hover:bg-blue-800 px-3 py-2 rounded-md">
            About Us
          </Link>
          <Link href="/contact" className="hover:bg-blue-800 px-3 py-2 rounded-md">
            Contact Us
          </Link>
          <Link href="/districts" className="hover:bg-blue-800 px-3 py-2 rounded-md">
            Districts
          </Link>
          <Link href="/articles" className="hover:bg-blue-800 px-3 py-2 rounded-md">
            Articles
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
