import Image from "next/image"
import Link from "next/link"
import { FiPhone } from "react-icons/fi"
import { IoLocationOutline, IoReorderThree } from "react-icons/io5"
import { MdMailOutline } from "react-icons/md"


const Navbar = () => {
  return (
    <nav className="bg-customWhite-900 flex justify-center   lg:h-[60px] md:h-[54px]  h-[50px] md:py-2 py-1   lg:px-[80px]  md:px-[42px] px-[34px]">
    <div className="container  flex flex-nowrap justify-between items-center">
      <div className=" w-[50px] h-[30px] relative ">
        <Image
          src="/image/icons/logo1.png"
           fill
          className="object cover"
          alt="Picture of the author"
        />
      </div>

      <div className="flex  items-center">
        <button
          id="menu-toggle"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-black rounded-lg    lg:hidden"
        >
          <IoReorderThree className="text-[45px]" />
        </button>
      </div>

      <div
        className="flex-1 lg:block md:w-auto hidden "
   
      >
        <ul className="flex flex-col  lg:flex-row lg:justify-end   md:text-sm  ">
          
            <Link
              href="/contact"
              className="flex  mx-2 xl:mx-6 "
            >
              <MdMailOutline className="w-5 h-5 text-customRed-900" />
              <div className="ms-4 ">
                <h6 className="text-customRed-900 lg:text-sm  font-medium">Email</h6>
                <p className={` text-customBlue-800 lg:text-xs font-normal`}>
                  info@united-education.com
                </p>
              </div>
            </Link>
            <Link
              href="/contact"
              className="flex     mx-2  xl:mx-6 "
            >
              <FiPhone className="w-5 h-5 text-customRed-900" />
              <div className="ms-4">
                <h6 className="text-customRed-900 lg:text-sm font-medium">Call Us</h6>
                <p className={` text-customBlue-800 lg:text-xs font-normal`}>
                  +964 751 762 7727</p>
              </div>
            </Link>
            <Link
              href="/contact"
              className="flex      mx-2  xl:mx-6 "
            >
              <IoLocationOutline className="w-5 h-5 text-customRed-900" />
              <div className="ms-4">
                <h6 className="text-customRed-900 lg:text-sm font-medium">Location</h6>
                <p className={` text-customBlue-800 lg:text-xs font-normal`}>
                  Erbil, Empire Business Tower, Tower 4, Floor 15, Office
                  NO 1
                </p>
              </div>
            </Link>
          </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
