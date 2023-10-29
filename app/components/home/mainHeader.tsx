import React from "react";
import MainHeaderItem from "./mainHeaderItem";

const MainHeader = () => {
  return (
    <section>
      <h2 className="text-4xl mb-8">여행이 돌아왔어요!</h2>
      <div className="flex justify-between space-x-4 h-full">
        <MainHeaderItem
          imgSrc={
            "https://d2ur7st6jjikze.cloudfront.net/landscapes/4744_large_square_1535960572.jpg?1535960572"
          }
          city="서울"
          productCountString="620여 개의 여행 상품"
        />

        <MainHeaderItem
          imgSrc={
            "https://d2ur7st6jjikze.cloudfront.net/landscapes/4720_large_square_1535703132.jpg?1535703132"
          }
          city="오사카"
          productCountString="4404 개의 여행 상품"
        />
        <MainHeaderItem
          imgSrc={
            "https://d2ur7st6jjikze.cloudfront.net/landscapes/4737_large_square_1535949304.jpg?1535949304"
          }
          city="제주도"
          productCountString="620여 개의 여행 상품"
        />
        <MainHeaderItem
          imgSrc={
            "https://d2ur7st6jjikze.cloudfront.net/landscapes/4751_large_square_1536050273.jpg?1536050273"
          }
          city="로마"
          productCountString="370여 개의 여행 상품"
        />
      </div>
    </section>
  );
};

export default MainHeader;
