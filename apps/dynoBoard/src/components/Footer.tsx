import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full   bg-customBlue-800  lg:px-[80px] px-[34px] sm:px-[47px]   ">
      <div className="container  flex mx-auto   w-full  lg:flex-row flex-col  py-24 pb-10   md:items-start ">
        <div className="flex md:justify-between  flex-col md:flex-row lg:flex-col w-full  lg:w-72 lg:mx-0 items-center md:items-start">
          <Link href={""}>
            <Image
              src="/image/icons/sticky-logo1.png"
              width={110}
              height={60}
              alt="Picture of the author"
            />
          </Link>
          <div className=" lg:w-full sm:w-72 w-60 mt-5 md:mt-0">
            <p className="lg:mt-8 mt-0 text-customWhite-900 lg:text-lg sm:text-sm text-[8px] sm-mt-2">
              Sign up for releases & product updates...
            </p>
            <div className="relative ">
              <input
                type="text"
                placeholder="Enter email address "
                className="border-b-2 w-full  text-xs py-3 focus:outline-none  border-[#4D6873] bg-customBlue-800 lg:mt-5 mt-2 text-[#4D6873]"
              />
              <FaArrowRight className="absolute right-0 bottom-2 my-1 text-customWhite-900" />
            </div>
          </div>
        </div>
        <div className="flex  flex-wrap md:flex-nowrap text-center justify-between lg:ms-32 ms:0 w-full mt-8  lg:mt-0  md:text-left">
          <div className="w-full px-4 ">
            <h2 className="mb-3 lg:text-xl sm:text-lg text-lg font-medium text-customWhite-900 ">
              About
            </h2>
            <nav className="mb-10 list-none lg:text-lg   text-sm">
              <li className="mt-3">
                <Link
                  href={"#"}
                  className="text-customWhite-200 cursor-pointer  "
                >
                  Our Story
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  href={"/"}
                  className="text-customWhite-200 cursor-pointer "
                >
                  Treatments Safer
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  href={"#"}
                  className="text-customWhite-200 cursor-pointer  "
                >
                  Journal
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  href={"#"}
                  className="text-customWhite-200 cursor-pointer "
                >
                  Candles
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 ">
            <h2 className="mb-3 lg:text-xl sm:text-lg text-lg font-medium text-customWhite-900  ">
              Company
            </h2>

            <nav className="mb-10 list-none hidden md:block lg:text-lg   text-sm">
              <li className="mt-3">
                <Link
                  href={"#"}
                  className="text-customWhite-200 cursor-pointer "
                >
                  About
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  href={"#"}
                  className="text-customWhite-200 cursor-pointer "
                >
                  Contact
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  href={"#"}
                  className="text-customWhite-200 cursor-pointer "
                >
                  Products
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  href={"#"}
                  className="text-customWhite-200 cursor-pointer "
                >
                  Privacy
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 ">
            <h2 className="mb-3 lg:text-xl sm:text-lg text-lg font-medium text-customWhite-900  ">
              Help
            </h2>
            <nav className="mb-10 list-none  hidden md:block lg:text-lg  md:text-md text-sm">
              <li className="mt-3">
                <Link
                  href={"#"}
                  className="text-customWhite-200 cursor-pointer "
                >
                  FAQs
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  href={"#"}
                  className="text-customWhite-200 cursor-pointer "
                >
                  Terms of service
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  href={"#"}
                  className="text-customWhite-200 cursor-pointer "
                >
                  Cookies
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  href={"#"}
                  className="text-customWhite-200 cursor-pointer "
                >
                  Privacy
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 ">
            <h2 className="mb-3 lg:text-xl sm:text-lg text-lg font-medium text-customWhite-900  ">
              Social Media
            </h2>
            <nav className="mb-10 list-none  hidden md:block lg:text-lg   text-sm">
              <li className="mt-3">
                <Link
                  href={"#"}
                  className="text-customWhite-200 cursor-pointer "
                >
                  Facebook
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  href={"#"}
                  className="text-customWhite-200 cursor-pointer  "
                >
                  Instagram
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  href={"#"}
                  className="text-customWhite-200 cursor-pointer "
                >
                  LinkedIn
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="border-[#4D6873] border-t-2 py-5">
        <p className="text-sm text-customWhite-200 capitalize text-center">
          © 2024 united education. All right reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
