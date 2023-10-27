import Link from "next/link";
import React from "react";

const MainHeaderItem = ({ imgSrc, city, productCountString }: Props) => {
  return (
    <div className="relative h-80">
      <img src={imgSrc} alt="서울" className=" rounded-lg h-full" />
      <div className="bg-blend-overlay absolute inset-0 flex flex-col justify-between text-white bg-gradient-to-b from-gray-600 bg-opacity-50 pl-4 pt-10 rounded-lg h-full">
        <div className="flex-col flex">
          <span className="text-3xl font-extrabold mb-4">{city}</span>
          <span className="">{productCountString}</span>
        </div>
        <Link
          className="mb-6 py-2 px-2 rounded-md border bg-white text-black w-1/3 text-center text-sm"
          href="/cities?key_name=Seoul"
        >
          둘러보기
        </Link>
      </div>
    </div>
  );
};

export default MainHeaderItem;

type Props = {
  imgSrc: string;
  city: string;
  productCountString: string;
};
