import Image from "next/image";
import { IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";

export default function Home() {
  return (
    <main>
      {/* banner img */}
      <div className="flex flex-col items-center justify-between w-100 static">
        <div>
          <Image
            src={"/Rectangle 2.png"}
            alt="BannerImg"
            height={500}
            width={2560}
          />
        </div>{" "}
        <h1 className="absolute font-bold  lg:top-[200px] top-[90px] lg:text-4xl text-xl md:top-[160px]   text-white">
          About Us
        </h1>
      </div>

      {/* company_overview */}
      <div className="company_overview  px-10 mt-5 md:my-12 flex flex-col md:flex-row">
        <div className="overview1 w-full md:flex-col flex-row">
          <div className="flex  md:flex-row-reverse items-center md:justify-end gap-4">
            <div className="w-10 border-t-2 border-[#DC272F] flex justify-center text-[10px] leading-[8px] md:leading-[12px] md:text-[12px] lg:leading-[28.8px] lg:text-[18px] mt-2 text-[#DC272F]"></div>
            <div>
              <p className="font-normal text-[10px] leading-[8px] md:leading-[12px] md:text-[12px] lg:leading-[28.8px] lg:text-[18px] mt-2 text-[#DC272F]">
                COMPANY OVERVIEW
              </p>
            </div>
          </div>

          <div className="flex md:flex-col flex-row justify-between">
            <h1 className="text-[#04374B] mt-3 font-bold md:font-semibold  leading-[16.8px] text-[14px] md:leading-[16.8px] md:text-[14px] lg:leading-[52px] lg:text-[36px] ">
              Our Real Commitment Reaches Beyond Gas & Oil Company.
            </h1>
            <button
              type="button"
              className="text-white bg-[#14516A] hover:bg-[#14516A] w-48 mt-7 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hidden md:block"
            >
              View Our Courses
            </button>
            <div>
              {" "}
              <IoIosArrowForward className="text-red-600 nd:w-10 md:hidden" />
            </div>
          </div>
        </div>

        <div className="overview2 w-full ">
          <p className="font-normal text-[10px] leading-[12.8px] md:leading-[22.4px] md:text-[14px] lg:leading-[28.8px] lg:text-[17px] text-[#DC272F] mt-2 text-left">
            UE is a private educational and training services provider,
            following huge educational and skill needs among our people that
            make it difficult for the country and nation to develop and cope
            with the rest of the world.
          </p>

          <p className="font-normal text-[10px] leading-[12.8px] md:leading-[22.4px] md:text-[14px] lg:leading-[28.8px] lg:text-[17px] mt-2 lg:mt-4 text-left">
            UE is specialized in educational and training services, ranging from
            language education, business skills development, and special
            technical and vocational training services.
            <span className="hidden md:inline">
              We have a blend of products and services for all public, private,
              non-governmental, educational and individual customers who are
              looking for excellent educational solutions.
            </span>
          </p>

          <p className="font-normal text-[10px] leading-[12.8px] md:leading-[22.4px] md:text-[14px] lg:leading-[28.8px] lg:text-[17px] mt-2 lg:mt-4 hidden md:block">
            United Education has partnership with the world’s best educational
            services providers, accreditation and certification bodies and
            provide the best of services to our customers throughout Iraq and
            Kurdistan Region, combining world’s most advanced learning material
            with up to date technologies and excellent services and support to
            every customer.
          </p>
        </div>
      </div>

      {/* box */}
      <div className="box_parent grid lg:grid-cols-3 grid-cols-1  lg:gap-0.5  gap-[10px] mt-5 lg:my-10 px-10">
        {/* box1 */}
        <div className="box1 font-medium text-white  h-[90px] md:h-[163px] lg:h-[300px] rounded-lg rounded-s-lg  lg:rounded-none lg:rounded-s-lg bg-[#14516A]">
          <div className="md:ms-5 md:mt-10">
            <div className="flex lg:flex-col flex-row  item-center lg:w-72  ms-5 mt-[10px]">
              <div className="icon1 relative w-[20px]  h-[20px] md:w-[40px] md:h-[40px] lg: lg:w-[56px] lg:h-[56px]">
                <Image src={"/icon1.png"} alt="icon1" fill />
              </div>
              <div className="sub_heading1">
                <span className="font-medium text-[12px] md:text-[22px] lg:text-[28px] ms-3 lg:ms-0">
                  Quality Driven
                </span>
              </div>
            </div>
            <div>
              <p className="font-normal text-[10px] md:text-[16px] mx-5 mt-1 lg:w-[269px]">
                We always deliver the best quality and performance for both our
                products and services.
              </p>
            </div>
          </div>
        </div>
        {/* box2 */}
        <div className="box2  font-medium text-white  h-[90px] md:h-[163px] lg:h-[300px] rounded-lg lg:rounded-none bg-[#14516A]">
          <div className="md:ms-5 md:mt-10">
            <div className="flex lg:flex-col flex-row  item-center lg:w-72  ms-5 mt-[10px]">
              <div className="icon2 relative w-[20px]  h-[20px] md:w-[40px] md:h-[40px] lg: lg:w-[56px] lg:h-[56px]">
                <Image src={"/icon2.png"} alt="icon2" fill />
              </div>
              <div className="sub_heading1">
                <span className="font-medium text-[12px] md:text-[22px] lg:text-[28px] ms-3 lg:ms-0">
                  Corporate Training
                </span>
              </div>
            </div>
            <div>
              <p className="font-normal text-[10px] md:text-[16px] mx-5 mt-1 lg:w-[335px]">
                We can tailor our courses to your needs and create unique
                programmes that may include various workshops and simulations.
              </p>
            </div>
          </div>
        </div>

        {/* box3 */}
        <div className="box3  font-medium text-white  h-[90px] md:h-[163px] lg:h-[300px] rounded-e-lg rounded-lg  lg:rounded-none  lg:rounded-e-lg bg-[#14516A]">
          <div className="md:ms-5 md:mt-10">
            <div className="flex lg:flex-col flex-row  item-center lg:w-72  ms-5 mt-[10px]">
              <div className="icon3 relative w-[20px]  h-[20px] md:w-[40px] md:h-[40px] lg: lg:w-[56px] lg:h-[56px]">
                <Image src={"/Icon 3.png"} alt="icon3" fill />
              </div>
              <div className="sub_heading1">
                <span className="font-medium text-[12px] md:text-[22px] lg:text-[28px] ms-3 lg:ms-0">
                  Global Sourcing
                </span>
              </div>
            </div>
            <div>
              <p className="font-normal text-[10px] md:text-[16px] mt-1  mx-5 lg:w-[269px]">
                Exploiting global efficiencies in the delivery of our products
                and services.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* about us */}
      <div className="aboutus px-10 mt-5 md:my-10">
        <div className="aboutus_parent flex-col-reverse flex md:flex-row ">
          <div className="aboutus_child1 md:w-1/2 w-full grid grid-rows-2 grid-flow-col gap-3 my-5">
            <div className="relative h-[92px] md:h-full  rounded-xl">
              <Image src={"/Rectangle14.png"} alt="Rectangle14" fill />
            </div>
            <div className="relative  h-[92px] md:h-full md: rounded-xl">
              <Image src={"/Rectangle15.png"} alt="Rectangle15" fill />
            </div>
            <div className="relative h-full row-span-2 rounded-xl">
              <Image src={"/Rectangle16.png"} alt="Rectangle16" fill />
            </div>
          </div>

          <div className="aboutus_child2 md:w-1/2">
            <div className="about_overview  sm:p-[.25rem] md:p-10">
              <div className="overview1 w-full md:flex-col flex-row">
                <div className="flex  md:flex-row-reverse items-center md:justify-end gap-4">
                  <div className="w-10 border-t-2 border-[#DC272F] flex justify-center text-[10px] leading-[8px] md:leading-[12px] md:text-[12px] lg:leading-[28.8px] lg:text-[18px] mt-2 text-[#DC272F]"></div>
                  <div>
                    <p className="font-normal text-[10px] leading-[8px] md:leading-[12px] md:text-[12px] lg:leading-[28.8px] lg:text-[18px] mt-2 text-[#DC272F]">
                      ABOUT US
                    </p>
                  </div>
                </div>

                <div className="flex md:flex-col flex-row justify-between">
                  <h1 className="text-[#04374B] mt-3 font-bold md:font-semibold  leading-[16.8px] text-[14px] md:leading-[16.8px] md:text-[14px] lg:leading-[52px] lg:text-[36px] ">
                    Our Real Commitment Reaches Beyond Gas & Oil Company.
                  </h1>
                  <div>
                    {" "}
                    <IoIosArrowForward className="text-red-600 nd:w-10 md:hidden" />
                  </div>
                </div>
              </div>

              <div className="overview2 w-full ">
                <p className="font-normal text-[10px] leading-[12.8px] md:leading-[22.4px] md:text-[14px] lg:leading-[28.8px] lg:text-[17px] text-[#DC272F] mt-2 text-left">
                  UE is a private educational and training services provider,
                  following huge educational and skill needs among our people
                  that make it difficult for the country and nation to develop
                  and cope with the rest of the world.
                </p>

                <p className="font-normal text-[10px] leading-[12.8px] md:leading-[22.4px] md:text-[14px] lg:leading-[28.8px] lg:text-[17px] mt-2 text-left">
                  UE is specialized in educational and training services,
                  ranging from language education, business skills development,
                  and special technical and vocational training services.
                  <span className="lg:hidden hidden md:inline">
                    We have a blend of products and services for all public,
                    private, non-governmental, educational and individual
                    customers who are looking for excellent educational
                    solutions.
                  </span>
                </p>

                <button
                  type="button"
                  className="text-white bg-[#14516A] hover:bg-[#14516A] w-48 mt-7 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hidden md:block"
                >
                  View Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mission and vision */}
      <div className="mission_vison h-[430px] bg-[#14516A] md:h-[500px] lg:h-[800px] lg:bg-[#F8F8F8]">
        <div className=" md:flex-row flex-col-reverse flex lg:flex-row px-10 md:pt-10">
          <div className="mission_visonchild1 w-full md:w-1/2">
            <div className="sm:p-[.25rem] md:p-[1.5rem]">
              <div className="w-full md:flex-col flex-row">
                <div className="flex  md:flex-row-reverse items-center md:justify-end gap-4">
                  <div className="w-10 border-t-2 border-white lg:border-[#DC272F] flex justify-center text-[10px] leading-[8px] md:leading-[12px] md:text-[12px] lg:leading-[28.8px] lg:text-[18px] mt-2 text-[#DC272F]"></div>
                  <div>
                    <p className="font-normal text-[10px] leading-[8px] md:leading-[12px] md:text-[12px] lg:leading-[28.8px] lg:text-[18px] mt-2 text-white lg:text-[#DC272F]">
                      Our Mission & Vision
                    </p>
                  </div>
                </div>

                <div className="vision_sub lg:mt-14">
                  <h1 className="text-white lg:text-[#04374B] mt-3 font-bold md:font-semibold  leading-[16.8px] text-[14px] md:leading-[16.8px] md:text-[14px] lg:leading-[52px] lg:text-[36px] ">
                    Our Vision
                  </h1>
                </div>

                <div className=" w-full ">
                  <p className="hidden lg:block font-semibold text-[10px] leading-[12.8px] md:leading-[22.4px] md:text-[14px] lg:leading-[28.8px] lg:text-[17px] text-white lg:text-[#DC272F] mt-2 text-left">
                    UNITED EDUCATION
                  </p>

                  <p className="font-normal text-[10px] leading-[12.8px] md:leading-[22.4px] md:text-[14px] lg:leading-[28.8px] lg:text-[17px] text-white lg:text-[#04374B] mt-2 text-left">
                    Our vision is having a trained, knowledgeable and skillful
                    future generation in our country who can guarantee a better
                    life for themselves and the whole nation by been powerful
                    producible human resources.
                  </p>
                </div>

                <div className="mission_sub lg:mt-14">
                  <h1 className="text-white lg:text-[#04374B] mt-3 font-bold md:font-semibold  leading-[16.8px] text-[14px] md:leading-[16.8px] md:text-[14px] lg:leading-[52px] lg:text-[36px] ">
                    Our Mission
                  </h1>
                </div>

                <div className="overview2 w-full ">
                  <p className="hidden lg:block font-semibold text-[10px] leading-[12.8px] md:leading-[22.4px] md:text-[14px] lg:leading-[28.8px] lg:text-[17px] text-white lg:text-[#DC272F] mt-2 text-left">
                    UNITED EDUCATION
                  </p>

                  <p className="font-normal text-[10px] leading-[12.8px] md:leading-[22.4px] md:text-[14px] lg:leading-[28.8px] lg:text-[17px] text-white lg:text-[#04374B] mt-2 text-left">
                    Our mission is to make professional, advanced education and
                    training available for most governmental institutions,
                    schools, universities, businesses and individuals throughout
                    the country and equip them with tools to shape their future
                    and reach their goals in the community and workplace.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mission_visonchild2 w-full md:w-1/2 ">
            <div className="aboutus_child1  w-full grid lg:grid-rows-4 grid-flow-col gap-3 my-5">
              <div className="relative lg:row-span-3 lg:col-span-6 h-[137px] md:h-[389px] lg:h-[510px]  rounded-xl">
                <Image
                  src={"/Rectangle72.png"}
                  alt="Rectangle14"
                  fill
                  className="object-fit "
                />
              </div>
              <div className="relative lg:col-span-4  h-[150px] hidden lg:inline rounded-xl">
                <Image src={"/Rectangle73.png"} alt="Rectangle15" fill />
              </div>
              <div className="relative lg:col-span-2  h-[150px] hidden lg:inline rounded-xl">
                <Image src={"/Rectangle74.png"} alt="Rectangle16" fill />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* our latest blog */}
      <div className="my-10 mx-10">
        <div className="flex items-center justify-between lg:justify-center">
          <div>
            <div className="flex gap-2 lg:justify-center">
              <div className="w-10 border-t-2 border-[#DC272F] flex justify-center items-center text-[10px] leading-[8px] md:leading-[12px] md:text-[12px] mt-2.5 lg:text-[18px]  text-[#DC272F]"></div>
              <p>LATEST NEWS</p>
              <div className="w-10 border-t-2   border-[#DC272F] lg:flex hidden justify-center items-center text-[10px] leading-[8px] md:leading-[12px] md:text-[12px] mt-2.5 lg:text-[18px]  text-[#DC272F]"></div>
            </div>
            <h1 className="text-[#04374B] text-start lg:text-center mt-3 font-bold md:font-semibold  leading-[16.8px] text-[14px] md:leading-[16.8px] md:text-[22px] lg:leading-[52px] lg:text-[36px] ">
              Our Latest blog
            </h1>
          </div>
          <div className="icon_arow text-red-600 lg:hidden">
            <IoIosArrowForward />
          </div>
        </div>
        {/* blog cards */}
        <div className="grid grid-cols-3 my-10 gap-4 ">
          <div className="card1">
            <div className="relative h-[145px] md:h-[211px] lg:h-[336px] rounded-xl">
              <Image src={"/Rectangle129.png"} alt="Rectangle129" fill />
            </div>
            <div className="discripton1">
              <h1 className="my-2.5 text-[10px] font-medium md:text-[16px]  lg:text-[22px] md:font-normal ">
                Drilling and well control simulator.
              </h1>
              <p className="text-[#04374B] font-normal text-[10px] md:text-[12px] lg:text-[16px]">
                With a team of skilled therapists, we can accommodate requests
                at short notice and maintain.
              </p>
              <div className="flex justify-start gap-3 text-[#DC272F] mt-1">
                <a
                  className="font-normal text-[10px] md:text-[12px] lg:text-[16px]"
                  href="/"
                >
                  <u>ReadMore</u>
                </a>
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
              <p className="text-[#04374B] font-normal text-[10px] md:text-[12px] lg:text-[16px]">
                With a team of skilled therapists, we can accommodate requests
                at short notice and maintain.
              </p>
              <div className="mt-1 flex justify-start gap-3 text-[#DC272F]">
                <a
                  className="font-normal text-[10px] md:text-[12px] lg:text-[16px]"
                  href="/"
                >
                  <u>ReadMore</u>
                </a>
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
              <p className="text-[#04374B] font-normal text-[10px] md:text-[12px] lg:text-[16px]">
                With a team of skilled therapists, we can accommodate requests
                at short notice and maintain.
              </p>
              <div className="mt-1 flex justify-start gap-3 text-[#DC272F]">
                <a
                  className="font-normal text-[10px] md:text-[12px] lg:text-[16px]"
                  href="/"
                >
                  <u>ReadMore</u>
                </a>
                <span className="font-normal text-[13px] md:text-[20px] lg:text-[25px]">
                  <IoIosArrowRoundForward />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:block hidden lg:text-center">
          <button
            type="button"
            className=" py-2.5 px-5 me-2 mb-2 text-sm font-medium text-[#14516A] focus:outline-none bg-white rounded-lg border border-[#14516A] hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100"
          >
            Alternative
          </button>
        </div>

        <div className="md:hidden">
          <div className="w-10 border-t-2 border-[#14516A] flex justify-center items-center text-[10px] leading-[8px] md:leading-[12px] md:text-[12px] mt-2.5 lg:text-[18px]  text-[#DC272F]"></div>

          <hr />
        </div>
      </div>

      {/*our statistics  */}
      <div className="relative h-[222px] md:h-[432px] lg:h-[700px] ">
        <div className="inset-0 w-full absolute ">
          <Image src={"/Rectangle132.png"} alt="Rectangle132.png " fill />
        </div>

        {/* statistic content */}
        <div className="statistics relative top-[10px] md:top-[30px] lg:top-[40px] ">
          <div className="parent text-[#FFFFFF] flex items-baseline md:items-center justify-between md:mx-10 mx-5">
            <div className="child1 w-[40%]">
              <div className="flex  md:flex-row-reverse items-center md:justify-end gap-[10px]">
                <div className="w-6 border-t-2 border-[#ffffff] flex justify-center text-[10px] leading-[8px] md:leading-[12px] md:text-[12px] lg:leading-[28.8px] lg:text-[18px] mt-2 text-[#DC272F]"></div>
                <div>
                  <p className="font-normal text-[10px] leading-[8px] md:leading-[12px]  lg:leading-[28.8px] lg:text-[18px] mt-2 text-[#ffffff]">
                    STATISTICS
                  </p>
                </div>
              </div>
              <h1 className="font-semibold md:font-semibold  leading-[16.8px] text-[12px] md:leading-[16.8px] md:text-[14px] lg:leading-[52px] lg:text-[36px]">
                Our Main Statistics
              </h1>
            </div>

            <div className="child2 w-[60%]">
              <p className="font-normal text-right text-[6px] md:text-[12px] lg:text-[18px]">
                UE is specialized in educational and training services, ranging
                from language education, business skills development, and
                special technical and vocational training services.
              </p>
            </div>
          </div>
        </div>

        {/* counts */}

        <div className="counts text-[#ffffff] relative top-[30px] md:top-[80px] lg:top-[110px] grid grid-cols-4 mx-2 md:mx-10">
          <div className="text-center ">
            <p className=" font-semibold md:font-semibold  leading-[16.8px] text-[12px] md:leading-[16.8px] md:text-[20px] lg:leading-[52px] lg:text-[36px]">
              650+
            </p>
            <h1 className="font-normal text-[7px] md:text-[10px] lg:text-[18px]">
              Project Completed
            </h1>
          </div>
          <div className="text-center border-l border-l-[#049CB3]">
            <p className=" font-semibold md:font-semibold  leading-[16.8px] text-[12px] md:leading-[16.8px] md:text-[20px] lg:leading-[52px] lg:text-[36px]">
              200+
            </p>
            <h1 className="font-normal text-[7px] md:text-[12px] lg:text-[18px]">
              Team Engineers
            </h1>
          </div>
          <div className="text-center  border-l border-l-[#049CB3]">
            <p className="font-semibold md:font-semibold  leading-[16.8px] text-[12px] md:leading-[16.8px] md:text-[20px] lg:leading-[52px] lg:text-[36px]">
              300+
            </p>
            <h1 className="font-normal text-[7px] md:text-[12px] lg:text-[18px]">
              Clients Worldwide
            </h1>
          </div>
          <div className="text-center  border-l border-l-[#049CB3]">
            <p className="font-semibold md:font-semibold  leading-[16.8px] text-[12px] md:leading-[16.8px] md:text-[20px] lg:leading-[52px] lg:text-[36px]">
              10+
            </p>
            <h1 className="font-normal text-[7px] md:text-[12px] lg:text-[18px]">
              Years of Experiences
            </h1>
          </div>
        </div>

        {/* contact us */}
        <div className="relative top-[16px] md:top-[100px] lg:top-[150px]  card flex-col md:flex-row flex m-10 md:px-20 ">
          {/* img div */}
          <div className="relative md:w-1/3 h-[123px] md:h-[305px] lg:h-[450px] md:hidden block">
            <Image src={"/Rectangle135.png"} alt="Rectangle132" fill />
          </div>
          <div className="relative md:w-1/3 h-[123px] md:h-[305px] lg:h-[450px] md:block hidden">
            <Image src={"/Rectangle135(1).png"} alt="Rectangle132" fill />
          </div>

          {/* form div */}
          <div className="z-50 md:w-2/3 bg-[#022837] h-[360px] md:h-[305px] lg:h-[450px] md:rounded-r-[20px] md:rounded-bl-none rounded-b-[20px] lg:p-10">
            <div className="mt-5 md:ms-10 flex flex-col justify-center items-center md:justify-center md:items-start">
              <div className="flex gap-2 items-center">
                <div className="w-10 border-t-2 border-[#FAFAFA] flex md:hidden justify-center items-center text-[2px] leading-[8px] md:leading-[12px] md:text-[12px] mt-2.5 lg:text-[18px]"></div>
                <p className="text-[#FAFAFA] leading-[2px] text-[10px] md:leading-[12px] md:text-[12px] mt-2.5 lg:text-[18px] ">
                  CONTACT US
                </p>
                <div className="w-10 border-t-2   border-[#FAFAFA] lg:flex  justify-center items-center  text-[5px] leading-[8px] md:leading-[12px] md:text-[12px] mt-2.5 lg:text-[18px]"></div>
              </div>
              <h1 className="text-[#FAFAFA]  mt-3 font-normal md:font-semibold   text-[14px] md:leading-[16.8px] md:text-[20px] lg:leading-[52px] lg:text-[36px] ">
                Keep in Touch
              </h1>
            </div>

            <div className="forms  md:mt-[10px]">
              <form className="px-10">
                <div className="npem4 md:flex  justify-between gap-4">
                  {/* name and phone */}
                  <div className="name_phone grow ">
                    {/* NAME */}
                    <div className="relative z-0 w-full mb-5 group mt-1">
                      <input
                        type="text"
                        name="floating_name"
                        id="floating_name"
                        className="block py-2.5 px-0 w-full text-[10px] md:text-[10px] lg:text-[14px]   text-[#FAFAFA] bg-transparent border-0 border-b-2  appearance-none  focus:outline-none focus:ring-0 border-[#677E87] focus:border-[#FAFAFA] peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="floating_name"
                        className="peer-focus:font-medium absolute text-[10px] md:text-[10px] lg:text-[14px] text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#FAFAFA] poi peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Name*
                      </label>
                    </div>
                    {/* PHONE */}
                    <div className="relative z-0 w-full mb-5 group mt-1">
                      <input
                        type="text"
                        name="floating_phone"
                        id="floating_phone"
                        className="block py-2.5 px-0 w-full text-[10px] md:text-[10px] lg:text-[14px] text-[#FAFAFA] bg-transparent border-0 border-b-2  appearance-none  focus:outline-none focus:ring-0 border-[#677E87] focus:border-[#FAFAFA] peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="floating_phone"
                        className="peer-focus:font-medium absolute text-[10px] md:text-[10px] lg:text-[14px] text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#FAFAFA] poi peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Phone*
                      </label>
                    </div>
                  </div>

                  {/* email and subject */}
                  <div className="email_subject grow ">
                    {/* EMAIL */}
                    <div className="relative z-0 w-full mb-5 group mt-1">
                      <input
                        type="email"
                        name="floating_email"
                        id="floating_email"
                        className="block py-2.5 px-0 w-full text-[10px] md:text-[10px] lg:text-[14px] text-[#FAFAFA] bg-transparent border-0 border-b-2  appearance-none  focus:outline-none focus:ring-0 border-[#677E87] focus:border-[#FAFAFA] peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="floating_email"
                        className="peer-focus:font-medium absolute text-[10px] md:text-[10px] lg:text-[14px] text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#FAFAFA] poi peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Email*
                      </label>
                    </div>

                    {/* SUBJECT */}
                    <div className="relative z-0 w-full mb-5 group mt-1 hidden md:block">
                      <input
                        type="email"
                        name="floating_subject"
                        id="floating_subject"
                        className="block py-2.5 px-0 w-full text-[10px] md:text-[10px] lg:text-[14px] text-[#FAFAFA] bg-transparent border-0 border-b-2  appearance-none  focus:outline-none focus:ring-0 border-[#677E87] focus:border-[#FAFAFA] peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="floating_subject"
                        className="peer-focus:font-medium absolute text-[10px] md:text-[10px] lg:text-[14px] text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#FAFAFA] poi peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Subject*
                      </label>
                    </div>
                  </div>
                </div>
                {/* MESSAGE */}
                <div className="relative z-0 w-full mb-5 group mt-1">
                  <input
                    type="email"
                    name="floating_message"
                    id="floating_message"
                    className="block py-2.5 px-0 w-full text-[10px] md:text-[10px] lg:text-[14px] text-[#FAFAFA] bg-transparent border-0 border-b-2  appearance-none  focus:outline-none focus:ring-0 border-[#677E87] focus:border-[#FAFAFA] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_message"
                    className="peer-focus:font-medium absolute text-[10px] md:text-[10px] lg:text-[14px] text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#FAFAFA] poi peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Message*
                  </label>
                </div>
                <div className="text-center md:text-left">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-[#DC272F] hover:bg-red-800 font-medium rounded-md text-[10px] md:text-[10px] lg:text-[14px]   me-2 mb-2 w-[89px]  h-[22px] md:w-[93px]  md:h-[29px] lg:w-[138px]  lg:h-[56px] lg:text-[16px] lg:font-medium"
                  >
                    Submit Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* logo */}
      <div className="mt-[378px] md:mt-[100px] lg:mt-[110px] py-10 md:px-1 md:mx-10">
        <div className="adds flex flex-wrap gap-3 justify-evenly items-center">
          {/* logo 1*/}
          <div className="h-[30px] w-[125px] md:h-[37px] md:w-[125px] lg:h-[48px] lg:w-[160px] relative">
            <Image src={"/logo1.png"} alt="logo1.png " fill />
          </div>
          {/* logo 2*/}
          <div className="h-[30px] w-[125px] md:h-[37px] md:w-[125px] lg:h-[48px] lg:w-[160px] relative">
            <Image src={"/logo2.png"} alt="logo2.png " fill />
          </div>
          {/* logo 3*/}
          <div className="h-[30px] w-[125px] md:h-[37px] md:w-[125px] lg:h-[48px] lg:w-[160px] relative">
            <Image src={"/logo3.png"} alt="logo3.png " fill />
          </div>
          {/* logo 4*/}
          <div className="h-[30px] w-[125px] md:h-[37px] md:w-[125px] lg:h-[48px] lg:w-[160px] relative">
            <Image src={"/logo4.png"} alt="logo4.png " fill />
          </div>
          {/* logo 5*/}
          <div className="h-[30px] w-[125px] md:h-[37px] md:w-[125px] lg:h-[48px] lg:w-[160px] relative">
            <Image src={"/logo5.png"} alt="logo5.png " fill />
          </div>
        </div>
      </div>
    </main>
  );
}
