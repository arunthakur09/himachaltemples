import Link from 'next/link';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Himachal Pradesh</h2>
          <p className="text-gray-300">Discover the beauty of Himachal Pradesh</p>
        </div>
        <div className="flex space-x-6">
          <div>
            <h3 className="font-semibold">Explore</h3>
            <ul className="space-y-1">
              <li className="hover:underline"><Link href="/">Home</Link></li>
              <li className="hover:underline"><Link href="/districts">Districts</Link></li>
              <li className="hover:underline"><Link href="/articles">Articles</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">About</h3>
            <ul className="space-y-1">
              <li className="hover:underline"><Link href="/about">About Us</Link></li>
              <li className="hover:underline"><Link href="/contact">Contact Us</Link></li>
              <li className="hover:underline"><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Follow Us</h3>
            <ul className="space-y-1 text-gray-300">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; {year} Himachal Pradesh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
