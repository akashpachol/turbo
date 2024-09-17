import Image from "next/image";
import Link from "next/link";
import {  FaArrowRight } from "react-icons/fa6";
import { Button } from '@repo/ui/button';
import { IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";
import {
  IoArrowBackOutline,
  IoArrowForward,
} from "react-icons/io5";


export default function Home() {
  const imageurls = {
    homepageSliderImage: "https://test.com",
  };
  return (
    <main className="min-h-screen ">
      {/* banner section*/}
     
      <section className="relative w-full md:h-[90vh] h-[70vh]">
        <div className="absolute inset-0 ">
          <Image
            src="/image/Rectangle5788.png"
            fill
          
            alt="Picture of the author"
            className=""
          />
        </div>
        <div className="relative flex h-full items-center justify-center  w-full ">
          <div className="flex items-center  w-full">
            <div className="lg:w-1/4 sm:w-1/6 w-1/12 text-customWhite-900   flex md:ps-20 ps-6">
              <IoArrowBackOutline className="lg:text-3xl text-2xl" />
            </div>

            <div className="text-center text-customWhite-900  flex-1  ">
              <div className="flex items-center justify-center ">
                <div className="md:w-10 w-16 md:border-t border-t-2 border-customWhite-900 "></div>

                <span className={`lg:text-[18px] md:text-[12px] text-[10px] text-customWhite-900 font-normal mx-3 leading-10  md:leading-[50px] `}>
                  WELCOME TO UNITED EDUCATION
                </span>

                <div className="md:w-10 w-16 md:border-t border-t-2 border-customWhite-900 "></div>
              </div>
              <h2 className="lg:text-[40px] md:text-[27px] text-[20px] font-bold md:leading-[40px]  lg:leading-[50px] ">
                World Class Training Solutions for Professionals in the Oil and
                Gas Industries
              </h2>

              <p className="lg:text-[18px] font-normal text-sm text-customWhite-800  md:leading-[50px] leading-10  ">
                Learn how you can grow your knowledge and advance your career.
              </p>
              <button
                type="button"
                className="mx-auto  bg-customRed-900 font-medium lg:text-lg md:text-base text-sm md:px-8 px-10 py-2 lg:px-6  lg:py-3 mt-3 mb-5 rounded-tr-lg rounded-b-lg"
              >
                Get Started
              </button>
            </div>

            <div className="lg:w-1/4 sm:w-1/6 w-1/12 text-customWhite-900   flex justify-end md:pe-20 pe-6">
              <IoArrowForward className="lg:text-3xl text-2xl" />
            </div>
          </div>
        </div>

        <div className="absolute md:w-4/5 sm:w-3/4 w-[70%]  md:top-[80vh]  top-[60vh]  left-1/2 transform -translate-x-1/2 ">
          <div className="grid md:grid-cols-3  rounded-xl grid-cols-1 shadow-md bg-customWhite-900  md:px-0 sm:px-20 px-5  md:py-5 py-0">
            <div className="md:flex block md:px-0  lg:py-5">
              <div className=" md:px-10 md:py-0 py-4 flex flex-col">
                <div className="relative w-6 h-6 md:w-8 md:h-8 items-center flex justify-center">
                  <Image
                    src="/image/icons/image65.png"
                    fill
                    unoptimized
                    alt="Picture of the author"
                    className="object-cover"
                  />
                </div>

                <h5 className="lg:text-[20px] md:text-[16px] text-[14px] lg:leading-[55px] md:leading-[45px] leading-[35px]  font-semibold  text-customBlue-900">
                  Quality Driven
                </h5>
                <p className=" lg:text-sm md:text-[9px] text-[12px] font-normal text-customBlue-600 lg:leading-6 md:leading-4">
                  We always deliver the best quality and performance for both
                  our products and services.
                </p>
              </div>
              <div className=" md:border-r-2 border-b-2 border-customWhite-300  mx-2 md:mx-0 my-0  md:my-10"></div>
            </div>

            <div className="md:flex block md:px-0  lg:py-5">
            <div className=" md:px-10 md:py-0 py-4 flex flex-col">
            <div className="relative w-6 h-6 md:w-8 md:h-8 items-center flex justify-center">
                  <Image
                    src="/image/icons/image66.png"
                    fill
                    alt="Picture of the author"
                    className="object-cover"
                  />
                </div>

                <h5 className="    lg:text-[20px] md:text-[16px] text-[12px] lg:leading-[55px] md:leading-[45px] leading-[35px]  font-semibold  text-customBlue-900">
                  Corporate Training
                </h5>
                <p className="lg:text-sm md:text-[9px] text-[12px] font-normal text-customBlue-600 lg:leading-6 leading-4">
                  We can tailor our courses to your needs and create unique
                  programmer that may include various workshops
                </p>
              </div>

              <div className=" md:border-r-2 border-b-2 border-customWhite-300  mx-2 md:mx-0 my-0  md:my-10"></div>
            </div>
            <div className="md:flex block md:px-0  lg:py-5">
            <div className=" md:px-10 md:py-0 py-4 flex flex-col">
            <div className="relative w-6 h-6 md:w-8 md:h-8 items-center flex justify-center">
                  <Image
                    src="/image/icons/image67.png"
                    fill
                    alt="Picture of the author"
                    className="object-cover"
                  />
                </div>

                <h5 className="    lg:text-[20px] md:text-[16px] text-[12px] lg:leading-[55px] md:leading-[45px] leading-[35px]  font-semibold  text-customBlue-900">
                  Global Sourcing
                </h5>
                <p className=" lg:text-sm md:text-[9px] text-[12px] font-normal text-customBlue-600 lg:leading-6 md:leading-4">
                Exploiting global efficiencies in the delivery of our products and services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* course */}
      <section className="lg:px-[80px] px-[34px] sm:px-[47px]  md:mt-56 mt-[420px]  mb-10">
        <div className="flex items-center">
        <div className="w-14 rounded-lg border-t-2 border-customRed-900"></div>


          <p className="lg:text-lg text-sm  text-customRed-900 ms-3">
            OUR COURSE
          </p>
        </div>

        <div className="flex items-end">
          <h2 className="lg:w-1/2 md:w-1/3 w-3/5 text-lg  lg:text-4xl lg:leading-[55px] md:text-2xl   font-semibold   text-customBlue-900 ">
            We Offer Bunce of Training & Coaching Program!
          </h2>
          <div className ="flex-1"></div>
          <button
            type="button"
            className="focus:outline-none  text-customWhite-900 bg-customRed-900 lg:block hidden   font-medium  text-sm px-5 py-3  rounded-tr-lg rounded-b-lg"
          >
           View all programs
          </button>
          <div className="text-customRed-900 lg:hidden block ">
            <span>
              <IoIosArrowForward className="text-xl" />
            </span>
          </div>
        </div>

        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-3  md:gap-3 mt-5">
          <div className="relative px-2 py-3  ms-[28px] bg-customWhite-900  rounded-lg border border-customWhite-300">
            <div className="absolute -left-[28px] top-10  py-6 px-4  border-0   bg-[url('/image/Polygon.png')] bg-cover bg-center">
              <div className="relative w-[20px] h-[20px]   ">
                <Image
                  src="/image/icons/Frame4.png"
                  fill
                  alt="Picture of the author"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="ml-5">
              <h2 className="text-[18px] font-semibold text-customBlue-900">
                CompEx Certification in Erbil, Iraq
              </h2>
              <p className="text-customBlue-600 text-sm  mt-1">
                United Education has an excellent training facility
                in Erbil (Kurdistan Region of Iraq) for professionals who would
                like to achieve.
              </p>
              <Link
                href="#"
                className="lg:text-customBlue-900 text-customRed-900 underline font-medium inline-flex items-center mt-3"
              >
                Learn More
                <FaArrowRight className="ml-3 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative px-2 py-3  ms-[28px] bg-customWhite-900  rounded-lg border border-customWhite-300">
            <div className="absolute -left-[28px] top-10  py-6 px-4  border-0   bg-[url('/image/Polygon.png')] bg-cover bg-center">
              <div className="relative w-[20px] h-[20px]   ">
                <Image
                  src="/image/icons/Frame.png"
                  fill
                  alt="Picture of the author"
                  className=""
                />
              </div>
            </div>

            <div className="ml-5">
            <h2 className="text-[18px] font-semibold text-customBlue-900">
            Lifting Operations Courses
              </h2>
              <p className="text-customBlue-600 text-sm  mt-1">
                These courses are suitable for anyone who is involved with
                lifting operations. The course will provide participants with
                the.
              </p>
              <Link
                href="#"
                className="lg:text-customBlue-900 text-customRed-900 underline font-medium inline-flex items-center mt-3"
              >
                Learn More
                <FaArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative px-2 py-3  ms-[28px] bg-customWhite-900  rounded-lg border border-customWhite-300">
            <div className="absolute -left-[28px] top-10  py-6 px-4  border-0   bg-[url('/image/Polygon.png')] bg-cover bg-center">
              <div className="relative w-[20px] h-[20px]   ">
                <Image
                  src="/image/icons/Frame5.png"
                  fill
                  alt="Picture of the author"
                  className=""
                />
              </div>
            </div>

            <div className="ml-5">
            <h2 className="text-[18px] font-semibold text-customBlue-900">
            Well Design and Engineering
              </h2>
              <p className="text-customBlue-600 text-sm  mt-1">
                Well Design and Engineering integrates all major well design
                technologies from pre-spud to TD. Participants are actively.
              </p>
              <Link
                href="#"
                className="lg:text-customBlue-900 text-customRed-900 underline font-medium inline-flex items-center mt-3"
              >
                Learn More
                <FaArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative px-2 py-3  ms-[28px] bg-customWhite-900  rounded-lg border border-customWhite-300">
            <div className="absolute -left-[28px] top-10  py-6 px-4  border-0   bg-[url('/image/Polygon.png')] bg-cover bg-center">
              <div className="relative w-[20px] h-[20px]   ">
                <Image
                  src="/image/icons/Frame 6.png"
                  fill
                  alt="Picture of the author"
                  className=""
                />
              </div>
            </div>

            <div className="ml-5">
            <h2 className="text-[18px] font-semibold text-customBlue-900">
            CompEx Certification in Erbil, Iraq
              </h2>
              <p className="text-customBlue-600 text-sm  mt-1">
                United Education has an excellent training facility
                in Erbil (Kurdistan Region of Iraq) for professionals who would
                like to achieve.
              </p>
              <Link
                href="#"
                className="lg:text-customBlue-900 text-customRed-900 underline font-medium inline-flex items-center mt-3"
              >
                Learn More
                <FaArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative px-2 py-3 ms-[28px] bg-customWhite-900  rounded-lg border border-customWhite-300">
            <div className="absolute -left-[28px] top-10  py-6 px-4  border-0   bg-[url('/image/Polygon.png')] bg-cover bg-center">
              <div className="relative w-[20px] h-[20px]   ">
                <Image
                  src="/image/icons/Frame7.png"
                  fill
                  alt="Picture of the author"
                  className=""
                />
              </div>
            </div>

            <div className="ml-5">
            <h2 className="text-[18px] font-semibold text-customBlue-900">
            Lifting Operations Courses
              </h2>
              <p className="text-customBlue-600 text-sm mt-1">
                These courses are suitable for anyone who is involved with
                lifting operations. The course will provide participants with
                the.
              </p>
              <Link
                href="#"
                className="lg:text-customBlue-900 text-customRed-900 underline font-medium inline-flex items-center mt-3"
              >
                Learn More
                <FaArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative px-2 py-3  ms-[28px] bg-customWhite-900  rounded-lg border border-customWhite-300">
            <div className="absolute -left-[28px] top-10  py-6 px-4  border-0   bg-[url('/image/Polygon.png')] bg-cover bg-center">
              <div className="relative w-[20px] h-[20px]   ">
                <Image
                  src="/image/icons/Frame8.png"
                  fill
                  alt="Picture of the author"
                  className=""
                />
              </div>
            </div>

            <div className="ml-5">
            <h2 className="text-[18px] font-semibold text-customBlue-900">
            Well Design and Engineering
              </h2>
              <p className="text-customBlue-600 text-sm mt-1">
                Well Design and Engineering integrates all major well design
                technologies from pre-spud to TD. Participants are actively.
              </p>
              <Link
                href="#"
                className="lg:text-customBlue-900 text-customRed-900 underline font-medium inline-flex items-center mt-3"
              >
                Learn More
                <FaArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* about */}
      <section className="flex flex-col-reverse  lg:flex-row lg:justify-center lg:px-[80px] px-[34px] sm:px-[47px]">
        <div className="grid grid-rows-2 grid-flow-col  gap-3 w-full lg:mt-0 mt-5 lg:w-2/4">
          <div className="  lg:col-span-1  col-span-3  md:order-1 order-2">
            <div className="relative  w-full lg:h-full h-48 ">
              <Image
                src="/image/Rectangle114.png"
                fill
              
                alt="Picture of the author"
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
          <div className="  lg:col-span-1  col-span-3  md:order-2 order-1">
            <div className="relative  w-full h-full ">
              <Image
                src="/image/Rectangle115.png"
                fill
            
                alt="Picture of the author"
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
          <div className="row-span-2 lg:col-span-1 md:col-span-2 col-span-3 md:order-3 order-3">
            <div className="relative  w-full h-full ">
              <Image
                src="/image/Rectangle116.png"
              fill
              
                alt="Picture of the author"
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-2/4 w-full lg:ms-10 ">
          <div className="flex items-center">

            <p className="lg:text-lg text-sm  text-customRed-900 mr-3">ABOUT US</p>
            <div className="w-14 border-t-2 border-customRed-900"></div>
          </div>

          <div className=" flex lg:block ">
          <h1 className=" text-lg lg:text-4xl   lg:leading-[55px] md:text-2xl font-semibold text-customBlue-900 ">
              Our Real Commitment Reaches Beyond Gas & Oil Company.
            </h1>
            <div className="text-customRed-900 lg:hidden   flex justify-end flex-1 ">
              <span>
                <IoIosArrowForward className="text-xl" />
                
              </span>
            </div>
          </div>

          <p className="text-base mt-4 font-medium text-customRed-900">
            UE is a private educational and training services provider,
            following huge educational and skill needs among our people that
            make it difficult for the country and nation to develop and cope
            with the rest of the world.
          </p>
          <p className="mt-2 text-base font-normal text-customBlue-600">
            UE is specialized in educational and training services, ranging from
            language education, business skills development, and special
            technical and vocational training services.
          </p>
          <button
            type="button"
            className="focus:outline-none text-customWhite-900 bg-customRed-900 lg:block hidden   font-medium  text-sm px-5 py-3 mt-5 rounded-tr-lg rounded-b-lg"
          >
            Learn More
          </button>
        </div>
      </section>



      {/* over all */}
      <section className="bg-[url('/image/Rectangle5795.png')] bg-cover items-center h-64 mt-10 grid grid-cols-2 md:grid-cols-4">
  <div className="text-center">
    <p className="lg:text-5xl md:text-3xl text-2xl text-customWhite-900 font-bold">650+</p>
    <p className="text-sm mt-4 bg-customWhite-700">Project Completed</p>
    <div className="w-full border-b-4 ms-10 mt-4 border-customBlue-300 md:hidden"></div>
  </div>
  <div className="text-center md:border-l-4 border-customBlue-300">
    <p className="lg:text-5xl md:text-3xl text-2xl text-customWhite-900 font-bold">200+</p>
    <p className="text-sm mt-4 bg-customWhite-700">Team Engineers</p>
    <div className="w-[90%] border-b-4 me-20 mt-4 border-customBlue-300 md:hidden"></div>
  </div>
  <div className="text-center md:border-l-4 border-customBlue-300">
    <p className="lg:text-5xl md:text-3xl text-2xl text-customWhite-900 font-bold">300+</p>
    <p className="text-sm mt-4 bg-customWhite-700">Clients Worldwide</p>
  </div>
  <div className="text-center md:border-l-4 border-customBlue-300">
    <p className="lg:text-5xl md:text-3xl text-2xl text-customWhite-900 font-bold">10+</p>
    <p className="text-sm mt-4 bg-customWhite-700">Years Of Experiences</p>
  </div>
</section>


      {/* our service */}
      <section className="lg:px-[80px] ps-[34px] sm:ps-[47px] mt-10">
        <div className="flex items-center">
      
          <div className="w-14 border-t-2 border-customRed-900"></div>

          <p className="lg:text-lg text-sm  text-customRed-900 ms-3">OUR SERVICES</p>
        </div>
        

<div className="flex items-end">

          <h2 className="lg:w-1/2 md:w-1/3 w-3/5 text-lg   lg:leading-[55px] md:text-2xl    lg:text-4xl mt-2  font-semibold text-customBlue-900">
          We Provide Best Services
          </h2>
          <div className="flex-1"></div>
          <button
            type="button"
            className="focus:outline-none  text-customWhite-900 bg-customRed-900 lg:block hidden   font-medium  text-sm px-5 py-3  rounded-tr-lg rounded-b-lg"
          >
           Learn More
          </button>
          <div className="text-customRed-900 lg:hidden block ">
            <span>
              <IoIosArrowForward className="text-xl" />
            </span>
          </div>
        </div>
        {/* <div className="grid grid-cols-3 my-10 gap-4 "> */}
        <div className="grid grid-cols-4 gap-5 ">
          <div className=" px-6 bg-customWhite-600  rounded-xl shadow my-5">
            <div className="w-10 h-10 bg-customBlue-900 items-center flex justify-center">
              <Image
                src="/image/icons/Frame.png"
                width={28}
                height={28}
                alt="Picture of the author"
                className=""
              />
            </div>

            <h5 className="mb-2 mt-6 lg:text-lg text-xs md:text-base  font-bold tracking-tight text-customBlue-900 ">
              Well Design Services
            </h5>

            <p className="mb-3 text-sm font-normal text-customBlue-600 leading-6">
              From applied literature to educational resources, we have a lot of
              textbooks to offer.
            </p>
            <Link
              href="#"
              className="inline-flex items-center underline  py-2 text-sm font-medium text-center mb-8 "
            >
              Read more
              <IoIosArrowRoundForward className="text-2xl ms-1" />
            </Link>
          </div>

          <div className=" px-6 bg-customWhite-600  rounded-xl shadow my-5">
            <div className="w-10 h-10 bg-customBlue-900 items-center flex justify-center">
              <Image
                src="/image/icons/Frame1.png"
                width={28}
                height={28}
                alt="Picture of the author"
                className=""
              />
            </div>

            <h5 className="mb-2 mt-6 lg:text-lg text-xs md:text-base  font-bold tracking-tight text-customBlue-900 ">
              Horizontal & Multilateral Technology
            </h5>

            <p className="mb-3 text-sm font-normal text-customBlue-600 leading-6">
              From applied literature to educational resources, we have a lot of
              textbooks to offer.
            </p>

            <Link
              href="#"
              className="inline-flex items-center underline  py-2 text-sm font-medium text-center mb-8 "
            >
              Read more
              <IoIosArrowRoundForward className="text-2xl ms-1" />
            </Link>
          </div>
          <div className=" px-6 bg-customWhite-600  rounded-xl shadow my-5">
            <div className="w-10 h-10 bg-customBlue-900 items-center flex justify-center">
              <Image
                src="/image/icons/Frame2.png"
                width={28}
                height={28}
                alt="Picture of the author"
                className=""
              />
            </div>

            <h5 className="mb-2 mt-6 lg:text-lg text-xs md:text-base  font-bold tracking-tight text-customBlue-900 ">
              Preparation of Well Programmes
            </h5>

            <p className="mb-3 text-sm font-normal text-customBlue-600 leading-6">
              From applied literature to educational resources, we have a lot of
              textbooks to offer.
            </p>

            <Link
              href="#"
              className="inline-flex items-center underline  py-2 text-sm font-medium text-center mb-8 "
            >
              Read more
              <IoIosArrowRoundForward className="text-2xl ms-1" />
            </Link>
          </div>
          <div className=" px-6 bg-customWhite-600  rounded-xl shadow my-5">
            <div className="w-10 h-10 bg-customBlue-900 items-center flex justify-center">
              <Image
                src="/image/icons/Frame3.png"
                width={28}
                height={28}
                alt="Picture of the author"
                className=""
              />
            </div>

            <h5 className="mb-2 mt-6 lg:text-lg text-xs md:text-base  font-bold tracking-tight text-customBlue-900 ">
              Data Mining
            </h5>

            <p className="mb-3 text-sm font-normal text-customBlue-600 leading-6">
              From applied literature to educational resources, we have a lot of
              textbooks to offer.
            </p>

            <Link
              href="#"
              className="inline-flex items-center underline  py-2 text-sm font-medium text-center mb-8 "
            >
              Read more
              <IoIosArrowRoundForward className="text-2xl ms-1" />
            </Link>
          </div>

        </div>
        <div className="">
          <div className="lg:w-48 md:w-32 w-16 border-t-2 border-customBlue-700 flex justify-center items-center text-[10px] leading-[8px] md:leading-[12px] md:text-[12px] mt-2.5 lg:text-[18px]  text-customRed-900"></div>

          <hr />
        </div>
      </section>
      {/* Our Mission & Vision */}
      <section className="bg-customBlue-700 gap-8 max-h-[835px] md:flex lg:px-[80px] px-[34px] sm:px-[47px] lg:py-[40px] py-[17px] sm:py-[24px] mt-10">
        <div className="md:w-1/2 w-full">
          <div className="flex items-center">
           
            <span className="text-sm text-customWhite-900 font-extralight me-3">
              OUR MISSION & VISION
            </span>
            <div className="w-16 border-t-2 text-customWhite-900"></div>
          </div>
          <div className="mt-5 text-customWhite-900">
            <h2 className="text-3xl">Our Vision </h2>
            <h3 className="text-xl font-semibold mt-8 hidden lg:block">
              UNITED EDUCATION
            </h3>
            <p className="font-extralight lg:text-lg md:text-sm text-[8px] lg:leading-7 leading-4 mt-2">
              Our vision is having a trained, knowledgeable and skillful future
              generation in our country who can guarantee a better life for
              themselves and the whole nation by been powerful producible human
              resources.
            </p>
            <h2 className="text-3xl mt-5">Our Mission</h2>
            <h3 className="text-xl font-semibold mt-8 hidden lg:block">
              UNITED EDUCATION
            </h3>

            <p className="font-extralight lg:text-lg md:text-sm text-[8px] lg:leading-7 mt-2">
              Our mission is to make professional, advanced education and
              training available for most governmental institutions, schools,
              universities, businesses and individuals throughout the country
              and equip them with tools to shape their future and reach their
              goals in the community and workplace.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 w-full items-end flex justify-end ">
          <div className="relative lg:w-[530px] lg:h-[550px] md:w-[315px] md:h-[389px] w-full h-[200px] md:mt-0 mt-5">
            <Image
              src="/image/Rectangle72.png"
              fill
              alt="Picture of the author"
              className=""
            />
          </div>
        </div>
      </section>

{/* LATEST NEWS */}
      <section className="lg:px-[80px] px-[34px] sm:px-[47px] my-10 ">
        <div className="flex lg:flex-col flex-row justify-between items-center" >
        <div className="text-center">
          <div className="flex justify-center items-center">
            <div className="lg:w-10 border-t-2 border-customRed-900 w-16 "></div>

            <span className="text-lg text-customRed-900 mx-3">LATEST NEWS</span>
            <div className="w-10 border-t-2 border-customRed-900 lg:block hidden "></div>
          </div>

          <h2 className="flex-1 lg:text-4xl mt-2 text-xl font-semibold text-customBlue-900">
            Our Latest Blogs
          </h2>
        </div>
        <div className="text-customRed-900 lg:hidden block ">
            <span>
              <IoIosArrowForward className="text-xl" />
            </span>
          </div>
        </div>
       

        <div className="grid grid-cols-3 my-10 gap-4 ">
          <div className="">
            <div className="relative h-[145px] md:h-[211px] lg:h-[336px] rounded-xl">
              <Image src={"/Rectangle129.png"} alt="Rectangle129" fill />
            </div>
            <div className="discripton1">
              <h1 className="my-2.5 text-[10px] font-medium md:text-[16px]  lg:text-[22px] md:font-normal ">
                Drilling and well control simulator.
              </h1>
              <p className="text-customBlue-900 font-normal text-[10px] md:text-[12px] lg:text-[16px]">
                With a team of skilled therapists, we can accommodate requests
                at short notice and maintain.
              </p>
              <div className="flex justify-start gap-3 text-customRed-900 mt-1">
              <Link
                  className="underline  text-[10px] md:text-[12px] lg:text-[16px]"
                  href="/"
                >
                  ReadMore
                </Link>
                <span className="font-normal text-[13px] md:text-[20px] lg:text-[25px]">
                  <IoIosArrowRoundForward />
                </span>
              </div>
            </div>
          </div>
          <div className="card2">
            <div className="relative  h-[145px] md:h-[211px] lg:h-[336px] rounded-xl">
              <Image src={"/Rectangle130.png"} alt="Rectangle130" fill />
            </div>
            <div className="discripton2">
              <h1 className="my-2.5 text-[10px] font-medium md:text-[16px]  lg:text-[22px] md:font-normal ">
                Gaming technology inspires.
              </h1>
              <p className="text-customBlue-900 font-normal text-[10px] md:text-[12px] lg:text-[16px]">
                With a team of skilled therapists, we can accommodate requests
                at short notice and maintain.
              </p>
              <div className="mt-1 flex justify-start gap-3 text-customRed-900">
              <Link
                  className="underline  text-[10px] md:text-[12px] lg:text-[16px]"
                  href="/"
                >
                  ReadMore
                </Link>
                <span className="font-normal text-[13px] md:text-[20px] lg:text-[25px]">
                  <IoIosArrowRoundForward />
                </span>
              </div>
            </div>
          </div>
          <div className="card3">
            <div className="relative h-[145px] md:h-[211px] lg:h-[336px] rounded-xl">
              <Image src={"/Rectangle131.png"} alt="Rectangle131" fill />
            </div>
            <div className="discripton3">
              <h1 className="my-2.5 text-[10px] font-medium md:text-[16px]  lg:text-[22px] md:font-normal ">
                DrillSIM:20 simulator now available.
              </h1>
              <p className="text-customBlue-900 font-normal text-[10px] md:text-[12px] lg:text-[16px]">
                With a team of skilled therapists, we can accommodate requests
                at short notice and maintain.
              </p>
              <div className="mt-1 flex justify-start gap-3 text-customRed-900">
              <Link
                  className="underline  text-[10px] md:text-[12px] lg:text-[16px]"
                  href="/"
                >
                  ReadMore
                </Link>
                <span className=" text-[13px] md:text-[20px] lg:text-[25px]">
                  <IoIosArrowRoundForward />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <button
            type="button"
            className="focus:outline-none lg:block text-customWhite-900 bg-customRed-900  hidden   font-medium  text-sm px-5 py-2.5  rounded-tr-lg rounded-b-lg"
          >
            View All Blogs
          </button>
        </div>
        <div className="md:hidden">
          <div className="sm:w-32 w-16 border-t-2 border-customBlue-700 flex justify-center items-center text-[10px] leading-[8px] md:leading-[12px] md:text-[12px] mt-2.5 lg:text-[18px]  text-customRed-900"></div>

          <hr />
        </div>
      </section>

{/* form */}
      <section className="lg:px-[80px] px-[34px] sm:px-[47px] mt-10 bg-customWhite-500 pt-10">
        <div className="max-w-2xl mx-auto  p-8 bg-customWhite-500 rounded-md form-container">
          <div className="text-center ">
          <h2 className="flex-1 lg:text-4xl mt-2 text-xl font-semibold text-customBlue-900">
              Get Free Consultation
            </h2>
            <p className="text-base text-customBlue-600  mx-6 mt-2">
           
              We provide best health care for your family. We are giving the
              best treatment services.
            </p>
          </div>
          <form action="" className="mt-5 font-extralight">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 text-xs font-light">
              <div className="">
                <label
                  htmlFor="name"
                  className="block text-customBlue-900 text-sm  mb-2 "
                >
                  First Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full px-3  border rounded-md bg-customRed-800 p-4 focus:outline-none"
                />
              </div>
              <div className="">
                <label
                  htmlFor="name"
                  className="block text-customBlue-900 text-sm  mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full px-3  border rounded-md bg-customRed-800 p-4 focus:outline-none"
                />
              </div>
              <div className="">
                <label
                  htmlFor="name"
                  className="block text-customBlue-900 text-sm  mb-2"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Phone Number"
                  required
                  className="w-full px-3  border rounded-md bg-customRed-800 p-4 focus:outline-none"
                />
              </div>
              <div className="">
                <label
                  htmlFor="name"
                  className="block text-customBlue-900text-sm  mb-2"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your Email"
                  required
                  className="w-full px-3  border rounded-md bg-customRed-800 p-4 focus:outline-none"
                />
              </div>
            </div>

            <div className= "my-4">
              <label
                htmlFor="message"
                className="block text-customBlue-900 text-sm font-light mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Type somthing?"
                required
                className="w-full px-3 text-sm border rounded-md bg-customRed-800 p-4 focus:outline-none"
              ></textarea>
            </div>
            <div className=" grid grid-cols-2 md:hidden ">
              <button
                type="button"
                className="text-gray-900 bg-customWhite-900 border border-customWhite-300   rounded-lg px-5 py-2.5 me-2 mb-2 text-[8px] font-light"
              >
                Enquire about staff outsourcing!
              </button>
              <button
                type="button"
                className="text-gray-900 bg-customWhite-900 border border-customWhite-300   rounded-lg px-5 py-2.5 me-2 mb-2 text-[8px] font-light"
              >
                Enquire about staff outsourcing!
              </button>
              <button
                type="button"
                className="text-gray-900 bg-customWhite-900 border border-customWhite-300   rounded-lg px-5 py-2.5 me-2 mb-2 text-[8px] font-light"
              >
                Enquire about staff outsourcing!
              </button>
              <button
                type="button"
                className="text-gray-900 bg-customWhite-900 border border-customWhite-300   rounded-lg px-5 py-2.5 me-2 mb-2 text-[8px] font-light"
              >
                {" "}
                Enquire about staff outsourcing!
              </button>
            </div>
            <button
              type="submit"
              className="bg-customBlue-900 text-customWhite-900 px-4 text-sm font-extralight py-2 rounded-md  w-full"
            >
              SEND YOUR MESSAGE
            </button>
          </form>
        </div>
      </section>
     
      <section className="lg:px-[80px]   px-[34px] sm:px-[47px] flex flex-wrap gap-3 justify-evenly items-center py-10">
        <div className="relative   items-center lg:w-[160px] lg:h-[48px] w-[105px]  md:h-[38px]  h-[30px] mx-auto">
          <Image
            src="/image/Page-1.png"
            fill
            alt="Picture of the author"
            className=""
          />
        </div>
        <div className="relative lg:w-[160px] lg:h-[48px] w-[105px] md:h-[38px]  h-[30px] mx-auto">
          <Image
            src="/image/Logo5.png"
            fill
            alt="Picture of the author"
            className=""
          />
        </div>
        <div className="relative lg:w-[160px] lg:h-[48px] w-[105px] md:h-[38px]  h-[30px] mx-auto">
          <Image
            src="/image/6.png"
            fill
            alt="Picture of the author"
            className=""
          />
        </div>
        <div className="relative lg:w-[160px] lg:h-[48px] w-[105px] md:h-[38px]  h-[30px] mx-auto">
          <Image
            src="/image/9.png"
            fill
            alt="Picture of the author"
            className=""
          />
        </div>
        <div className="md:col-span-1 col-span-2  flex justify-center ">
        <div className="relative lg:w-[160px] lg:h-[48px] w-[105px] md:h-[38px]  h-[30px] ">
          <Image
            src="/image/10.png"
            fill
            alt="Picture of the author"
            className=""
          />
        </div>
        </div>
      
      </section>
    </main>
  );
}
