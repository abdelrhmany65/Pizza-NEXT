import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {

  let user = false;

  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:p-20 xl:px-40">
      
      {/* leftpage  */}
      <div className="hidden md:flex gap-4 flex-1 md:text-center">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* leftpage  */}

      {/* logo  */}
      <div className="text-xl md:font-bold flex-1">
        <Link href="/">
          Massimo
        </Link>
      </div>

      {/* logo  */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* /logo  */}

      {/* rightpages  */}
      <div className="hidden md:flex gap-4 items-center flex-1 justify-end">
        <div className="flex items-center top-3 r-2 lg:static gap-2 cursor-pointer bg-orange-300 px-1 rounded-md"> 
          <Image src="/phone.png" alt="" width={20} height={20}/>
          <span>123 456 951</span>
        </div>
        { ! user ? (<Link href="/login">login</Link>) :
        (<Link href="/orders">orders</Link>)}

        <CartIcon />
      </div>
      {/* rightpages  */}
    </div>
  );
};

export default Navbar;
