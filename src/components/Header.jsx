import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="mx-w-[1240px] flex py-[15px] justify-between items-center mx-10">
        <div className="text-3xl font-bold">WsCube Tech</div>

        {!toggle ? (
          <AiOutlineMenu
            onClick={() => settoggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineClose
            onClick={() => settoggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        )}

        <ul className="hidden md:flex gap-10 text-white">
          <li>Home</li>
          <li>Company</li>
          <li>About</li>
          <li>Resources</li>
          <li>Contact</li>
        </ul>

        {/* responsive menu */}
        <ul className={`duration-[400ms] md:hidden w-full h-screen text-white fixed bg-black top-[98px]
            ${toggle ? `left-[0]` : `left-[-100%]`}`}>
          <li className="p-5">Home</li>
          <li className="p-5">Company</li>
          <li className="p-5">About</li>
          <li className="p-5">Resources</li>
          <li className="p-5">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
