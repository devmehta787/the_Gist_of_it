import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";

function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
        <a href="/">
          <h1 className="font-serif text-4xl flex-1 text-center">
            The{" "}
            <span className="underline decoration-6 decoration-orange-400">
              Gist
            </span>{" "}
            of It
          </h1>
        </a>
        <div className="flex items-center justify-end space-x-2">
          <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">
            Subscribe Now
          </button>
        </div>
      </div>
      <NavLinks />
    </header>
  );
}

export default Header;
