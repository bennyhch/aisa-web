import navItems from "@/data/navItems";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-oceanGreen text-white">
      <div className="flex justify-between items-center py-4 px-12 flex-wrap gap-y-10">
        <nav className="flex ">
          <ul>
            {navItems.map((item) => (
              <li key={item.title}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-y-4">
          <a href="mailto:contact@aisafety.asia">contact@aisafety.asia</a>
          <FaLinkedin size={40} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
