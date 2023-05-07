import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="item mt-[10pc] h-1/2 w-[90%] container mx-auto flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5 ">
          <ul>
            <p className="text-gray-800 font-bold text-3xl pb-6">
              Stream<span className="text-blue-600">line</span>
            </p>
            <div className=" gap-6 pb-5">
              Go digital with us <br /> 50 Raya Building <br /> Call us:
              123-456-678
            </div>
          </ul>
        </div>

        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
            <Link
              href={"/"}
              className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer"
            >
              About
            </Link>{" "}
            <br />
            <Link
              href={"/"}
              className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer"
            >
              Products
            </Link>
            <br />
            <Link
              href={"/"}
              className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer"
            >
              Pricing
            </Link>
            <br />
            <Link
              href={"/"}
              className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer"
            >
              Careers
            </Link>
            <br />
            <Link
              href={"/"}
              className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer"
            >
              Press & Media
            </Link>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">
              Social Meadia
            </p>
            <Link
              href={"/"}
              className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer"
            >
              Contact
            </Link>
            <br />
            <Link
              href={"/"}
              className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer"
            >
              Support Portals
            </Link>
            <br />
            <Link
              href={"/"}
              className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer"
            >
              Linkst Of Charges
            </Link>
            <br />

            <Link
              href={"/"}
              className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer"
            >
              Downloads & Resources
            </Link>
            <br />

            <Link
              href={"/"}
              className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer"
            >
              Videos
            </Link>
            <br />
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5">
        <h1 className=" text-gray-800 font-semibold">
          © 2021-2022 All rights reserved | Build with ❤ by{" "}
          <span className="hover:text-blue-600 font-semibold cursor-pointer">
            streamline{" "}
          </span>
        </h1>
      </div>
    </>
  );
}

export default Footer;
