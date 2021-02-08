import Link from "next/link"
import { useRef } from "react";
import FacebookIco from "../icons/FacebookIco";
import LinkedInIco from "../icons/LinkedInIco";
import MenuIco from "../icons/MenuIco";
import MenuXIco from "../icons/MenuXIco";
import TwitterIco from "../icons/TwitterIco";

const TopNav = () => {
  const sideMenuRef = useRef(null)
  const overlayRef = useRef(null)

  function openMenu() {
    sideMenuRef.current.classList.remove("translate-x-full")
    overlayRef.current.classList.remove("hidden")
  }
  function closeMenu() {
    sideMenuRef.current.classList.add("translate-x-full")
    overlayRef.current.classList.add("hidden")
  }
  return (
    <div className="fixed z-40 inset-x-0 top-0 h-16 font-bot  flex items-center justify-between bg-primary">
      <Link href="/"><a className="block ml-4"><p className="text-xl text-white"><span className="font-bold ">Ben</span><span className="ml-1">Addison</span></p></a></Link>
      <div className="flex">
        <Link href="/contact">
          <a className="capitalize h-8 flex items-center px-1.5 bg-red-500 font-medium text-primary tracking-wider text-sm">contact</a>
        </Link>
        <button onClick={openMenu} className="ml-4 text-white mr-4">
          <span className="sr-only">Menu</span>
          <MenuIco icoClasses="w-8 h-8" />
        </button>
      </div>
      <div ref={overlayRef} onClick={closeMenu} className="hidden fixed z-40 inset-0 w-full h-full" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      </div>
      <div ref={sideMenuRef} className="fixed z-50 inset-y-0 right-0 w-64 bg-primary flex flex-col items-center transform duration-150 translate-x-full">
        <button onClick={closeMenu} className="text-white absolute top-4 right-4 w-8 h-8">
          <span className="sr-only">close menu</span>
          <MenuXIco icoClasses="w-8 h-8" />
        </button>
        <div className="mt-24 flex flex-col space-y-6 items-center">
          <Link href="/"><a onClick={closeMenu} className=" text-white text-xl block p-1 border-b border-primary hover:border-white focus:border-white">Home</a></Link>
          <Link href="/work"><a onClick={closeMenu} className=" text-white text-xl block p-1 border-b border-primary hover:border-white focus:border-white">Work With Me</a></Link>
          <Link href="/contact"><a onClick={closeMenu} className="text-white text-xl block p-1 border-b border-primary hover:border-white focus:border-white">Contact</a></Link>
        </div>
        <div className="flex justify-center space-x-4 text-white mt-24">
          <a onClick={closeMenu} href="twitter.com/ljc_dev" className="">
            <span className="sr-only">twitter</span>
            <TwitterIco icoClasses="h-6 w-6" />
          </a>
          <a onClick={closeMenu} href="facebook.github.io" className="">
            <span className="sr-only">facebook</span>
            <FacebookIco icoClasses="h-6 w-6" />
          </a>
          <a onClick={closeMenu} href="https://www.linkedin.com/in/jc-lee-a939831b5" className="">
            <span className="sr-only">linkedIn</span>
            <LinkedInIco icoClasses="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopNav