import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <div>
      <div>
        <Link href="/experiences" className="flex items-center">
          <img
            src="https://d2ur7st6jjikze.cloudfront.net/cms_icons/89_original_1657589745.png?1657589745"
            alt="투어·티켓"
            className="w-6 mr-2"
          />
          <span>투어·티켓</span>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
