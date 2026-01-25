import navItems from '@/data/navItems';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-darkGreen text-white py-16">
      <div className="flex flex-col md:flex-row flex-wrap justify-between gap-y-10 px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Navigation */}
        <nav className="font-bold text-2xl">
          <ul className="flex flex-col gap-y-4">
            {navItems.map((item) => (
              <li key={item.title}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className="flex flex-col gap-y-4">
          <a href="mailto:contact@aisafety.asia" className="text-xl font-bold">
            contact@aisafety.asia
          </a>
          <a
            className="inline-flex items-center justify-center w-fit h-fit p-0 m-0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our LinkedIn"
            href="https://www.linkedin.com/company/ai-safety-asia/"
          >
            <FaLinkedin size={40} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
