import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState} from "react";

function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="padding-x py-8 absolute w-full z-30">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => {
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="hamburger icon"
            width={25}
            height={25}
            onClick={() => setOpenMenu(!openMenu)}
            className="cursor-pointer"
          />
        </div>
      </nav>
      {openMenu && (
        <div
          className="flex justify-center items-start w-full h-screen z-30 relative bg-white py-10 border-b-2 border-b-coral-red"
        >
          <ul className="flex-1 flex justify-center items-center gap-10  flex-col">
            {navLinks.map((item) => {
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Nav;
