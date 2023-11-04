import Link from "next/link";
import React from "react";
import { BsCartCheckFill } from "react-icons/bs";
import { ImHome } from "react-icons/im";
import { PiUsersFourFill } from "react-icons/pi";
import { GoSkipFill } from "react-icons/go";

function Footer() {
  return (
    <div className=" self-end p-2 footer bg-yellow-400 rounded-t-3xl">
      <div className="text-black flex justify-around">
        <div className="text-4xl">
          <Link href="/">
            <ImHome />
          </Link>
        </div>

        <div className="text-4xl">
          <Link href="/multas">
            <GoSkipFill />
          </Link>
        </div>

        <div className="text-4xl">
          <Link href="/mes">
            <PiUsersFourFill />
          </Link>
        </div>

        <div className="text-4xl">
          <Link href="/compras">
            <BsCartCheckFill />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
